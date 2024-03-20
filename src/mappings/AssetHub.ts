// SPDX-License-Identifier: Apache-2.0

// Auto-generated

import assert from "assert";
import { fetchMetadata } from "./asset_metadata";
import { DataHandlerContext, Log } from "@subsquid/evm-processor";
import { Store } from "@subsquid/typeorm-store";
import * as assethub from '../abi/IAssetHubEvents'
import * as assethubContract from '../abi/AssetHub'
import { Asset, AssetHub, AssetMetadataHistory, Collector } from "../model";
import { ZeroAddress, getAddress } from "ethers";
import { Logger } from "@subsquid/logger";

export async function handleAssetCreatedAssetHubLog(ctx: DataHandlerContext<Store>, log: Log) {
  ctx.log.info("Handling AssetCreated");
  const logData = assethub.events.AssetCreated.decode(log)

  const id = getAddress(getAddress(log.address)) + "-" + logData.assetId.toString();
  const asset = new Asset({
    id: id,
    hub: getAddress(log.address),
    assetId: logData.assetId,
    contentUri: logData.data.contentURI,
    publisher: logData.publisher,
    collectModule: logData.data.collectModule,
    collectModuleInitData: logData.data.collectModuleInitData,
    gatedModule: logData.data.gatedModule,
    gatedModuleInitData: logData.data.gatedModuleInitData,
    collectNft: logData.data.collectNFT,
    timestamp: BigInt(log.block.timestamp),
    hash: log.getTransaction().hash,
  });

  await parseMetadata(ctx, asset, asset.timestamp?.toString())
  await ctx.store.save(asset)
  await saveAssetMetadataHistroy(ctx, log.getTransaction().hash, asset, asset.timestamp)
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
  if (logData.data.contentURI != "") {
    asset.contentUri = logData.data.contentURI;
    await parseMetadata(ctx, asset, log.block.timestamp.toString())
    await saveAssetMetadataHistroy(ctx, id, asset, asset.timestamp)
  }
  if (logData.data.collectModule != ZeroAddress) {
    asset.collectModule = logData.data.collectModule;
    asset.collectModuleInitData = logData.data.collectModuleInitData;
  }
  if (logData.data.gatedModule !== ZeroAddress) {
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
  const contract = new assethubContract.Contract({ _chain: ctx._chain, block: log.block }, getAddress(log.address));
  hub.version = await contract.version();
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
    asset.tags = metadata.tags ? JSON.stringify(metadata.tags) : undefined;
    asset.metadata = JSON.stringify(metadata);
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

