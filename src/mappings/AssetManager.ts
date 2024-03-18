
import assert from "assert";
import { DataHandlerContext, Log } from "@subsquid/evm-processor";
import { Store } from "@subsquid/typeorm-store";
import * as assethubManager from '../abi/AssetHubManager';
import { AssetHub } from "../model";

export async function handleAssetHubDeployedLog(ctx: DataHandlerContext<Store>, log: Log) {
  if (log.topics[0] !== assethubManager.events.AssetHubDeployed.topic) return

  ctx.log.info("Handling AssetHubDeployed");
  const logData = assethubManager.events.AssetHubDeployed.decode(log)
  assert(logData, "No log args");

  let assetHub = new AssetHub({
    id: logData.assetHub,
    admin: logData.admin,
    name: logData.name,
    feeCollectModule: logData.feeCollectModule,
    nftGatedModule: logData.nftGatedModule,
    createAssetModule: logData.assetCreateModule,
    timestamp: BigInt(log.block.timestamp),
    hash: log.getTransaction().hash
  })
  await ctx.store.insert(assetHub);
}