import { Arg, Query, Resolver, registerEnumType } from 'type-graphql';
import { In, Like, type EntityManager } from 'typeorm';
import { CurationAsset, CurationTag } from '../../model';
import { TagName } from './asset-resolver';
import { getAssetBizId } from '../../mappings/AssetHub';
import { AssetApproveStatus } from '../../mappings/curation';

registerEnumType(AssetApproveStatus, {
  name: 'AssetApproveStatus',
  description: 'The approve status of the asset',
  valuesConfig: {},
});

@Resolver()
export class CustomCurationResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  @Query(() => [TagName])
  async curationTagNames(
    @Arg('keyword', { nullable: true }) keyword: string,
    @Arg('limit', { nullable: true }) limit: number
  ): Promise<TagName[]> {
    const manager = await this.tx();
    const qb = manager
      .createQueryBuilder(CurationTag, 'tag')
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

  @Query(() => [Number])
  async curationAssetStatus(
    @Arg('curationId', { nullable: false }) curationId: string,
    @Arg('hubs', () => [String], { nullable: false }) hubs: string[],
    @Arg('assets', () => [String], { nullable: false }) assets: string[]
  ) {
    if (hubs.length === 0 || assets.length === 0) {
      return [];
    }
    if (hubs.length != assets.length) {
      throw new Error('hubs and assets must have the same length');
    }
    const assetIds = hubs.map((h, i) => getAssetBizId(h, BigInt(assets[i])));
    const manager = await this.tx();
    const curationAssets = await manager.find(CurationAsset, {
      where: {
        curation: { id: curationId },
        asset: { bizId: In(assetIds) },
      },
      relations: {
        asset: true,
      },
    });
    console.log('curationAssets', curationAssets);
    const res = ([] as number[]).fill(
      AssetApproveStatus.Approving,
      0,
      assets.length
    );
    const dict = curationAssets.reduce(
      (dict, ca) => dict.set(ca.asset!.bizId, ca),
      new Map<string, CurationAsset>()
    );
    const now = new Date().getTime() / 1000;
    assetIds.forEach((assetId, i) => {
      if (dict.has(assetId)) {
        const ca = dict.get(assetId)!;
        if (
          ca.status === AssetApproveStatus.Approved &&
          ca.expiry &&
          ca.expiry !== 0n &&
          ca.expiry < now
        ) {
          res[i] = Number(AssetApproveStatus.Expired);
        } else {
          res[i] = ca.status!;
        }
      }
    });
    return res;
  }
}
