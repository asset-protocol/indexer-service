import { DataHandlerContext } from "@subsquid/evm-processor";
import { Store } from "@subsquid/typeorm-store";
import fetch from "node-fetch"

export type AssetMetaData = {
  type?: string;
  name?: string;
  description?: string;
  image?: string;
  content?: string;
  tags?: string[];
  extra?: any;
  timestamp?: string;
}

const ipfsEndpoint = process.env.IPFS_GATEWAY + "/";

export async function fetchMetadata(ctx: DataHandlerContext<Store>, uri: string): Promise<AssetMetaData | undefined> {
  if (!uri) {
    return;
  }
  if (uri.trimStart().startsWith("{")) { //JSON
    try {
      const obj = JSON.parse(uri)
      if (obj.name !== undefined) {
        return obj
      }
    } catch { }
  }
  try {
    uri = parseUri(uri);
    ctx.log.info("fetching metadata: " + uri)
    const data = await fetch(uri).then(r => r.json());
    return data as AssetMetaData;
  } catch (e: any) {
    ctx.log.warn("fetch metadata error: " + e?.message);
  }
}

function parseUri(uri: string): string {
  if (uri.startsWith("http://") || uri.startsWith("https://")) {
    return uri;
  }
  if (uri.startsWith("ipfs://")) {
    return ipfsEndpoint + uri.slice(7);
  }
  if (uri.startsWith("ar://")) {
    return `${process.env.ARWAVE_GATEWAY}/${uri.slice(5)}`;
  }
  return ""
}