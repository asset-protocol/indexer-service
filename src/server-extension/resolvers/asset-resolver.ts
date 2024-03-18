import { getAddress } from 'ethers'
import { Arg, Mutation, Resolver } from 'type-graphql'
import type { EntityManager } from 'typeorm'
import { Asset } from '../../model'
import { parseMetadata } from '../../mappings/AssetHub'
import { createLogger } from '@subsquid/logger'

@Resolver()
export class CustomAssetResolver {
  constructor(private tx: () => Promise<EntityManager>) { }

  @Mutation(() => Boolean)
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
      return true;
    } catch (e: any) {
      LOG.error(`Error parsing metadata for asset ${id}: ${e.message}`)
      return false;
    }
  }
}