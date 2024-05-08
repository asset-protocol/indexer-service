import { Arg, Query, Resolver } from 'type-graphql'
import { Like, type EntityManager } from 'typeorm'
import { CurationTag } from '../../model'

@Resolver()
export class CustomCurationResolver {
  constructor(private tx: () => Promise<EntityManager>) { }

  @Query(() => Array<String>)
  async curationTagNames(@Arg("keyword", { nullable: true }) keyword: string): Promise<string[]> {
    const manager = await this.tx();
    const qb = manager
      .createQueryBuilder(CurationTag, "tag")
      .where(keyword ? { normalizedName: Like(`%${keyword.toLowerCase()}%`) } : {})
      .select(["tag.name"])
      .distinct(true);
    const tags = await qb.getMany();
    return tags.map(t => t.name!);
  }
}