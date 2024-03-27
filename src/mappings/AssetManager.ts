
import assert from "assert";
import { DataHandlerContext, Log } from "@subsquid/evm-processor";
import { Store } from "@subsquid/typeorm-store";
import * as assethubManager from '../abi/AssetHubManager';
import { AssetHub } from "../model";
import { decodeBytes32String } from "ethers";

let _assethubs: Set<string> | undefined;

export async function handleAssetHubDeployedLog(ctx: DataHandlerContext<Store>, log: Log) {
  ctx.log.info("Handling AssetHubDeployed");
  const logData = assethubManager.events.AssetHubDeployed.decode(log)

  let assetHub = new AssetHub({
    id: logData.assetHub,
    admin: logData.admin,
    name: decodeBytes32String(logData.name),
    feeCollectModule: logData.data.feeCollectModule,
    tokenCollectModule: logData.data.tokenCollectModule,
    nftGatedModule: logData.data.nftGatedModule,
    createAssetModule: logData.data.assetCreateModule,
    timestamp: BigInt(log.block.timestamp),
    hash: log.transaction?.hash
  })

  const hubSet = await getAssetHubSet(ctx);
  hubSet.add(logData.assetHub.toLowerCase());

  await ctx.store.save(assetHub);
}

export const getAssetHubSet = async (ctx: DataHandlerContext<Store>) => {
  if (!_assethubs) {
    const data = await ctx.store.find(AssetHub, {})
    _assethubs = new Set(data.map((d) => d.id.toLowerCase()))
  }
  return _assethubs;
}