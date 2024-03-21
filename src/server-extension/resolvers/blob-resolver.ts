import fetch from "node-fetch";
import { Arg, Query, Resolver } from "type-graphql";
import { EntityManager } from "typeorm";
import { createLogger } from '@subsquid/logger'

@Resolver()
export class BlobResolver {
  constructor(private tx: () => Promise<EntityManager>) { }

  @Query(() => Boolean, { description: "fetch url blob" })
  async fetchBlob(
    @Arg('url', { nullable: false, description: "original url" }) url: string,
  ): Promise<Blob | undefined> {
    const logger = createLogger('sqd:graphql-server:blob-resolver');
    try {
      return await fetch(url).then(res => {
        if (res.ok) {
          if (res.size > 200 * 1024 * 1024) {
            throw new Error("body is limmited to 200mb")
          }
          return res.blob();
        } else {
          throw new Error(res.statusText);
        }
      });
    }
    catch (e: any) {
      logger.error(`fetch ${url} blob failed: ${e.message}`)
    }
  }
} 