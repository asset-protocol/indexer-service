// SPDX-License-Identifier: Apache-2.0

// Auto-generated

import assert from "assert";
import { fetchMetadata } from "./asset_metadata";
import { DataHandlerContext, Log } from "@subsquid/evm-processor";
import { Store } from "@subsquid/typeorm-store";
import * as assethub from '../abi/IAssetHubEvents'
import { Asset, AssetHub, AssetMetadataHistory, Collector } from "../model";
import { ZeroAddress, getAddress } from "ethers";
import { Logger } from "@subsquid/logger";

export const INGORED_ADDRESSES = "0x0000000000000000000000000000000000000001";

export async function handleAssetCreatedAssetHubLog(ctx: DataHandlerContext<Store>, log: Log) {
  ctx.log.info("Handling AssetCreated");
  const logData = assethub.events.AssetCreated.decode(log)

  const id = getAddress(getAddress(log.address)) + "-" + logData.assetId.toString();
  const asset = new Asset({
    id: id,
    hub: getAddress(log.address),
    assetId: logData.assetId,
    publisher: logData.publisher,
    collectNft: logData.collectNFT,
    collectCount: BigInt(0),
    timestamp: BigInt(log.block.timestamp),
    lastUpdatedAt: BigInt(log.block.timestamp),
    hash: log.getTransaction().hash,
  });
  await ctx.store.save(asset)
}

// export async function handleCollectNFTDeployedAssetHubLog(log: CollectNFTDeployedLog): Promise<void> {
//   logger.info("Handling CollectNFTDeployed");
//   assert(logData, "No log args");

//   const id = getAddress(log.address) + "-" + logData.assetId.toBigInt().toString();
//   const asset = await Asset.get(id);
//   if (!asset) {
//     logger.error("Asset not found");
//     return;
//   }
//   asset.collectNftId = logData.collectNFT;
//   await asset.save()
// }

export async function handleCollectedAssetHubLog(ctx: DataHandlerContext<Store>, log: Log): Promise<void> {
  ctx.log.info("Handling Collected");
  const logData = assethub.events.Collected.decode(log)
  assert(logData, "No log args");

  const id = getAddress(log.address) + "-" + logData.assetId.toString();
  const asset = await getAsset(ctx, id);
  if (!asset) {
    return;
  }
  const collector = new Collector({
    id: log.getTransaction().hash,
    asset: asset,
    collector: logData.collector,
    tokenId: logData.collectNFTTokenId,
    collectModule: logData.collectModule,
    collectModuleData: logData.collectModuleData,
    timestamp: logData.timestamp,
  });
  await ctx.store.save(collector);

  if (!asset.collectCount) {
    asset.collectCount = BigInt(1);
  } else {
    asset.collectCount = asset.collectCount + BigInt(1);
  }
  await ctx.store.save(asset);
}

export async function handleTransferAssetHubLog(ctx: DataHandlerContext<Store>, log: Log) {
  ctx.log.info("Handling TransferAsset");
  const logData = assethub.events.Transfer.decode(log)
  if (logData.from === ZeroAddress) {
    ctx.log.warn("First create asset before transfer, skipping...")
    return;
  }
  const id = getAddress(log.address) + "-" + logData.tokenId.toString();
  const asset = await getAsset(ctx, id)
  if (!asset) {
    return;
  }
  asset.publisher = logData.to;
  await ctx.store.save(asset);
}

export async function handleAssetUpdatedLog(ctx: DataHandlerContext<Store>, log: Log) {
  ctx.log.info("Handling AssetMetadataUpdate");
  const logData = assethub.events.AssetUpdated.decode(log)
  const id = getAddress(log.address) + "-" + logData.assetId.toString();
  const asset = await getAsset(ctx, id)
  if (!asset) {
    ctx.log.error("asset not found: " + id)
    return;
  }
  if (asset.contentUri !== logData.data.contentURI) {
    asset.contentUri = logData.data.contentURI;
    await parseMetadata(ctx, asset, log.block.timestamp.toString());
    await saveAssetMetadataHistroy(ctx, id, asset, asset.timestamp);
    asset.lastUpdatedAt = BigInt(log.block.timestamp);
  }
  if (logData.data.collectModule !== INGORED_ADDRESSES) {
    asset.collectModule = logData.data.collectModule;
    asset.collectModuleInitData = logData.data.collectModuleInitData;
  }
  if (logData.data.gatedModule !== INGORED_ADDRESSES) {
    asset.gatedModule = logData.data.gatedModule;
    asset.gatedModuleInitData = logData.data.gatedModuleInitData;
  }
  await ctx.store.save(asset)
}

export async function handleAssetHubUpgradedLog(ctx: DataHandlerContext<Store>, log: Log): Promise<void> {
  ctx.log.info("Handling AssetHubUpgraded");
  const logData = assethub.events.Upgraded.decode(log)
  const hub = await ctx.store.get(AssetHub, getAddress(log.address));
  if (!hub) {
    ctx.log.error("AssetHub not found: " + getAddress(log.address));
    return;
  }
  hub.implementation = logData.implementation;
  await ctx.store.save(hub);
}


export async function parseMetadata(ctx: { log: Logger }, asset: Asset, timestamp?: string) {
  if (!asset.contentUri) {
    return
  }
  const metadata = await fetchMetadata(ctx, asset.contentUri);
  if (metadata) {
    metadata.timestamp = timestamp
    asset.name = metadata.name;
    asset.type = metadata.type;
    asset.image = metadata.image;
    asset.description = metadata.description;
    asset.content = metadata.content;
    asset.extra = metadata.extra ? JSON.stringify(metadata.extra) : undefined;
    asset.tags = metadata.tags ? JSON.stringify(metadata.tags) : undefined;
    asset.metadata = JSON.stringify(metadata);
    asset.query1 = metadata.query1;
    asset.query2 = metadata.query2;
  }
}

function saveAssetMetadataHistroy(ctx: DataHandlerContext<Store>, id: string, asset: Asset, timestamp?: bigint | null) {
  const item = new AssetMetadataHistory({
    id: id,
    asset: asset,
    metadata: asset.metadata,
    timestamp: timestamp,
  })
  return ctx.store.save(item)
}

async function getAsset(ctx: DataHandlerContext<Store>, id: string) {
  const asset = await ctx.store.get(Asset, id);
  if (!asset) {
    ctx.log.error("Asset not found: " + id);
    return;
  }
  return asset;
}

