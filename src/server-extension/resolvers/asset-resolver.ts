import { getAddress } from 'ethers';
import * as assethubAbi from '../../abi/AssetHub';
import * as cruationAbi from '../../abi/Curation';
import { Arg, Field, ObjectType, Query, Resolver } from 'type-graphql';
import { Like, type EntityManager, type FindManyOptions } from 'typeorm';
import { Asset, AssetHub, AssetTag, Curation } from '../../model';
import { parseMetadata } from '../../mappings/AssetHub';
import { createLogger } from '@subsquid/logger';
import {
  getCurationBizId,
  parseCurationMetadata,
} from '../../mappings/curation';
import { fetchMetadata } from '../../mappings/asset_metadata';
import { blockContext } from '../../common/context';

@ObjectType()
export class TagName {
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => Number, { nullable: false })
  count!: number;

  constructor(props: Partial<TagName>) {
    Object.assign(this, props);
  }
}

@Resolver()
export class CustomAssetResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  @Query(() => Boolean)
  async refreshMetatData(
    @Arg('type', {
      nullable: false,
      description: 'type: asset | curation | assethub',
    })
    type: string,
    @Arg('contract', { nullable: false }) contract: string,
    @Arg('tokenId', { nullable: true }) tokenId: string
  ): Promise<Boolean> {
    const manager = await this.tx();
    const LOG = createLogger('sqd:graphql-server:custom-asset-resolver');
    try {
      if (type === 'asset') {
        const id = getAddress(contract.toLowerCase()) + '-' + tokenId;
        const asset = await manager.findOne(Asset, { where: { bizId: id } });
        if (!asset) {
          return false;
        }
        const ac = new assethubAbi.Contract(blockContext, contract);
        const tokenURI = await ac.tokenURI(BigInt(tokenId));
        asset.contentUri = tokenURI;
        LOG.info(`Refreshing metadata for asset ${id}: ${tokenURI}`);
        await parseMetadata(
          { log: LOG },
          asset,
          new Date().getTime().toString()
        );
        await manager.save(asset);
        await manager.save(asset.tags);
        return true;
      } else if (type === 'curation') {
        const curationBizId = getCurationBizId(contract, BigInt(tokenId));
        const curation = await manager.findOne(Curation, {
          where: { bizId: curationBizId },
        });
        if (!curation) {
          return false;
        }
        const ac = new cruationAbi.Contract(blockContext, contract);
        const URI = await ac.tokenURI(BigInt(tokenId));
        curation.tokenURI = URI;
        await parseCurationMetadata({ log: LOG }, curation);
        await manager.save(curation);
        await manager.save(curation.tags);
        return true;
      } else if (type === 'assethub') {
        const hub = await manager.findOne(AssetHub, {
          where: { id: contract },
        });
        if (!hub) {
          return false;
        }
        const ac = new assethubAbi.Contract(blockContext, contract);
        const contractURI = await ac.contractURI();
        hub.contractUri = contractURI;
        if (contractURI) {
          const metadata = await fetchMetadata({ log: LOG }, hub.contractUri);
          hub.metadata = metadata;
        }
        await manager.save(hub);
      }
      return false;
    } catch (e: any) {
      LOG.error(`Error parsing metadata for asset ${tokenId}: ${e.message}`);
      return false;
    }
  }

  @Query(() => [TagName])
  async assetTagNames(
    @Arg('keyword', { nullable: true }) keyword: string,
    @Arg('limit', { nullable: true, defaultValue: 10 }) limit: number
  ): Promise<TagName[]> {
    const manager = await this.tx();
    const qb = manager
      .createQueryBuilder(AssetTag, 'tag')
      .where(
        keyword ? { normalizedName: Like(`%${keyword.toLowerCase()}%`) } : {}
      )
      .groupBy('tag.name')
      .select('tag.name', 'name')
      .addSelect('COUNT(tag.name)', 'count')
      .orderBy('count', 'DESC')
      .limit(limit !== undefined ? limit : 10);
    return await qb.execute();
  }
}
