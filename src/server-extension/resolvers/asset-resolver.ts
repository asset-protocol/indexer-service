import { getAddress } from 'ethers'
import { Arg, Query, Resolver } from 'type-graphql'
import { Like, type EntityManager, type FindManyOptions } from 'typeorm'
import { Asset, AssetTag } from '../../model'
import { parseMetadata } from '../../mappings/AssetHub'
import { createLogger } from '@subsquid/logger'

@Resolver()
export class CustomAssetResolver {
  constructor(private tx: () => Promise<EntityManager>) { }

  @Query(() => Boolean)
  async refreshMetatData(
    @Arg('assetId', { nullable: false }) assetId: string,
    @Arg('hub', { nullable: false }) hub: string,
  ): Promise<Boolean> {
    const manager = await this.tx();
    const LOG = createLogger('sqd:graphql-server:custom-asset-resolver');
    const id = getAddress(hub.toLowerCase()) + "-" + assetId;
    const asset = await manager.findOne(Asset, { where: { id: id } });
    if (!asset) {
      return false;
    }
    try {
      await parseMetadata({ log: LOG }, asset, new Date().getTime().toString());
      await manager.save(asset);
      await manager.save(asset.tags);
      return true;
    } catch (e: any) {
      LOG.error(`Error parsing metadata for asset ${id}: ${e.message}`)
      return false;
    }
  }

  @Query(() => Array<String>)
  async assetTagNames(@Arg("keyword", { nullable: true }) keyword: string): Promise<string[]> {
    const manager = await this.tx();
    const qb = manager
      .createQueryBuilder(AssetTag, "tag")
      .where(keyword ? { normalizedName: Like(`%${keyword.toLowerCase()}%`) } : {})
      .select(["tag.name"])
      .distinct(true);
    const tags = await qb.getMany();
    return tags.map(t => t.name!);
  }
}