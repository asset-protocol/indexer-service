import fetch from "node-fetch";
import { Arg, Query, Resolver } from "type-graphql";
import { EntityManager } from "typeorm";
import { createLogger } from '@subsquid/logger'
import '../common/fetch';

const _importDynamic = new Function('modulePath', 'return import(modulePath)')
@Resolver()
export class BlobResolver {
  constructor(private tx: () => Promise<EntityManager>) { }

  @Query(() => Boolean, { description: "fetch url blob" })
  fetchBlob(
    @Arg('url', { nullable: false, description: "original url" }) url: string,
  ): Promise<string> {
    const logger = createLogger('sqd:graphql-server:blob-resolver');
    return new Promise((resolve, reject) => {
      fetch(url).then(res => {
        if (res.ok) {
          if (res.size > 200 * 1024 * 1024) {
            throw new Error("body is limmited to 200mb")
          }
          return res.blob();
        } else {
          throw new Error(res.statusText);
        }
      }).then(blob => {
        const fr = new FileReader();
        fr.readAsBinaryString(blob);
        fr.onloadend = text => {
          if (fr.result) {
            resolve(fr.result as string);
          } else {
            resolve("");
          }
        }
      }).catch(e => {
        logger.error(`fetch ${url} blob failed: ${e.message}`);
        resolve("");
      });
    });
  }
}