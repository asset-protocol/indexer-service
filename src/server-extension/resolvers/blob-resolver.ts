import { Arg, Query, Resolver } from "type-graphql";
import { EntityManager } from "typeorm";
import { createLogger } from '@subsquid/logger'
import { fetch } from '../../common/fetch';

@Resolver()
export class BlobResolver {
  constructor(private tx: () => Promise<EntityManager>) { }

  @Query(() => String, { description: "fetch url blob" })
  fetchBlob(
    @Arg('url', { nullable: false, description: "original url" }) url: string,
  ): Promise<string> {
    const logger = createLogger('sqd:graphql-server:blob-resolver');
    return new Promise((resolve, reject) => {
      fetch(url).then((res) => {
        if (res.ok) {
          logger.info("fetched blob size: " + res.size)
          if (res.size > 200 * 1024 * 1024) {
            throw new Error("body is limmited to 200mb")
          }
          return res.arrayBuffer();
        } else {
          throw new Error(res.statusText);
        }
      }).then((blob) => {
        const bb = Buffer.from(blob).toString("binary");
        resolve(bb);
      }).catch((e: any) => {
        logger.error(`fetch ${url} blob failed: ${e.message}`);
        resolve("");
      });
    });
  }
}