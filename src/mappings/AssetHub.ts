// SPDX-License-Identifier: Apache-2.0

// Auto-generated

import assert from "assert";
import { fetchMetadata } from "./asset_metadata";
import { DataHandlerContext, Log } from "@subsquid/evm-processor";
import { Store } from "@subsquid/typeorm-store";
import * as assethubEvents from '../abi/Events'
import * as assethub from '../abi/AssetHub'
import * as assethubContract from '../abi/AssetHub'
import { Asset, AssetHub, AssetMetadataHistory, Collector } from "../model";

export const ZeroAddress = "0x0000000000000000000000000000000000000000"

export async function handleAssetCreatedAssetHubLog(ctx: DataHandlerContext<Store>, log: Log) {
  ctx.log.info("Handling AssetCreated");
  const logData = assethubEvents.events.AssetCreated.decode(log)

  const id = log.address + "-" + logData.assetId.toString();
  const asset = new Asset({
    id: id,
    hub: log.address,
    assetId: logData.assetId,
    contentUri: logData.contentURI,
    publisher: logData.publisher,
    collectModule: logData.collectModule,
    collectNft: logData.collectNFT,
    timestamp: logData.timestamp,
    hash: log.getTransaction().hash,
  });

  await parseMetadata(ctx, asset, logData.timestamp.toString())
  await ctx.store.save(asset)
  await saveAssetMetadataHistroy(ctx, log.getTransaction().hash, asset, logData.timestamp)
}

export async function handleAssetUpdateHubLog(ctx: DataHandlerContext<Store>, log: Log) {
  ctx.log.info("Handling AssetUpdated");
  const logData = assethub.events.AssetUpdated.decode(log)
  const id = log.address + "-" + logData.assetId.toString();
  const asset = await getAsset(ctx, id);
  if (!asset) {
    return;
  }
  if (asset.collectModule != logData.data.collectModule) {
    asset.collectModule = logData.data.collectModule;
  }
  if (asset.collectNft != logData.data.gatedModule) {
    asset.collectNft = logData.data.gatedModule;
  }
  await ctx.store.save(asset)
}

// export async function handleCollectNFTDeployedAssetHubLog(log: CollectNFTDeployedLog): Promise<void> {
//   logger.info("Handling CollectNFTDeployed");
//   assert(logData, "No log args");

//   const id = log.address + "-" + logData.assetId.toBigInt().toString();
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
  const logData = assethubEvents.events.Collected.decode(log)
  assert(logData, "No log args");

  const id = log.address + "-" + logData.assetId.toString();
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
  if (logData.from == ZeroAddress) {
    ctx.log.warn("First create asset before transfer, skipping...")
    return;
  }
  const id = log.address + "-" + logData.tokenId.toString();
  const asset = await getAsset(ctx, id)
  if (!asset) {
    return;
  }
  asset.publisher = logData.to;
  await ctx.store.save(asset);
}

export async function handleAssetMetadataUpdateHubLog(ctx: DataHandlerContext<Store>, log: Log) {
  ctx.log.info("Handling AssetMetadataUpdate");
  const logData = assethub.events.AssetMetadataUpdate.decode(log)
  const id = log.address + "-" + logData.assetId.toString();
  const asset = await getAsset(ctx, id)
  if (!asset) {
    return;
  }
  asset.contentUri = logData.contentURI;
  await parseMetadata(ctx, asset, logData.timestamp.toString())
  await ctx.store.save(asset)
  await saveAssetMetadataHistroy(ctx, id, asset, asset.timestamp)
}

export async function handleAssetHubUpgradedLog(ctx: DataHandlerContext<Store>, log: Log): Promise<void> {
  ctx.log.info("Handling AssetHubUpgraded");
  const logData = assethub.events.AssetUpdated.decode(log)
  const hub = await ctx.store.get(AssetHub, log.address);
  if (!hub) {
    ctx.log.error("AssetHub not found: " + log.address);
    return;
  }
  const contract = new assethubContract.Contract({ _chain: ctx._chain, block: log.block }, log.address)
  hub.version = await contract.version();
  await ctx.store.save(hub);
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


async function parseMetadata(ctx: DataHandlerContext<Store>, asset: Asset, timestamp?: string) {
  if (!asset.contentUri) {
    return
  }
  const metadata = await fetchMetadata(ctx, asset.contentUri);
  if (metadata) {
    metadata.timestamp = timestamp
    asset.name = metadata.name;
    asset.type = metadata.type;
    asset.metadata = JSON.stringify(metadata);
    asset.tags = metadata.tags ? JSON.stringify(metadata.tags) : undefined;
  }
  asset.metadata = JSON.stringify(metadata);
}