import { Contract, getAddress } from 'ethers';
import { Arg, Field, ObjectType, Query, Resolver } from 'type-graphql';
import { Like, type EntityManager, type FindManyOptions } from 'typeorm';
import { Asset, AssetTag, Curation } from '../../model';
import { parseMetadata } from '../../mappings/AssetHub';
import { createLogger } from '@subsquid/logger';
import {
  getCurationBizId,
  parseCurationMetadata,
} from '../../mappings/curation';

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
    @Arg('tokenId', { nullable: false }) tokenId: string,
    @Arg('contract', { nullable: false }) contract: string,
    @Arg('type', { nullable: false,description:"type: asset | curation" }) type: string
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
        await parseCurationMetadata({ log: LOG }, curation);
        await manager.save(curation);
        await manager.save(curation.tags);
        return true;
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
