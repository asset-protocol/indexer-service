import { Arg, Query, Resolver } from 'type-graphql'
import { Like, type EntityManager } from 'typeorm'
import { CurationTag } from '../../model'
import { TagName } from './asset-resolver';

@Resolver()
export class CustomCurationResolver {
  constructor(private tx: () => Promise<EntityManager>) { }

  @Query(() => [TagName])
  async curationTagNames(
    @Arg("keyword", { nullable: true }) keyword: string,
    @Arg("limit", { nullable: true }) limit: number,
  ): Promise<TagName[]> {
    const manager = await this.tx();
    const qb = manager
      .createQueryBuilder(CurationTag, "tag")
      .where(keyword ? { normalizedName: Like(`%${keyword.toLowerCase()}%`) } : {})
      .groupBy("tag.name")
      .select("tag.name")
      .addSelect("COUNT(tag.name)", "count")
      .orderBy("count", "DESC")
      .limit(limit !== undefined ? limit : 10);
    return await qb.execute();
  }
}