// SPDX-License-Identifier: Apache-2.0

// Auto-generated

import assert from 'assert';
import { AssetMetaData, fetchMetadata } from './asset_metadata';
import { DataHandlerContext, Log } from '@subsquid/evm-processor';
import { Store } from '@subsquid/typeorm-store';
import * as assethub from '../abi/IAssetHubEvents';
import {
  Asset,
  AssetHub,
  AssetMetadataHistory,
  Collector,
  AssetTag,
} from '../model';
import { ZeroAddress, getAddress } from 'ethers';
import { Logger } from '@subsquid/logger';
import { generateId } from '../common/id';

export const INGORED_ADDRESSES = '0x0000000000000000000000000000000000000001';

export function getAssetBizId(hub: string, assetId: bigint) {
  return getAddress(hub) + '-' + assetId.toString();
}

export async function handleAssetHubInfoURIChanged(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling AssetHubInfoURIChanged');
  const logData = assethub.events.InfoURIChanged.decode(log);
  let data = new AssetHub({
    id: getAddress(log.address),
  });
  const metadata = await fetchMetadata(ctx, logData.uri);
  data.metadata = metadata;
  await ctx.store.save(data);
}

export async function handleAssetHubIsOpenChangeLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling AssetHubIsOpenChange');
  const logData = assethub.events.IsOpenChanged.decode(log);
  let data = new AssetHub({
    id: getAddress(log.address),
  });
  data.isOpen = logData.isOpen;
  await ctx.store.save(data);
}

export async function handleAssetCreatedAssetHubLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling AssetCreated');
  const logData = assethub.events.AssetCreated.decode(log);

  const hub = await ctx.store.get(AssetHub, getAddress(log.address));
  if (!hub) {
    ctx.log.error('AssetHub not found: ' + getAddress(log.address));
    return;
  }
  const asset = await getOrCreaeAsset(
    ctx,
    getAddress(log.address),
    logData.assetId
  );
  asset.hub = hub;
  asset.assetId = logData.assetId;
  asset.publisher = logData.publisher;
  asset.collectNft = logData.collectNFT;
  asset.collectCount = BigInt(0);
  asset.timestamp = BigInt(log.block.timestamp);
  asset.lastUpdatedAt = BigInt(log.block.timestamp);
  asset.hash = log.getTransaction().hash;
  await ctx.store.save(asset);
}

export async function handleCollectedAssetHubLog(
  ctx: DataHandlerContext<Store>,
  log: Log
): Promise<void> {
  ctx.log.info('Handling Collected');
  const logData = assethub.events.Collected.decode(log);
  assert(logData, 'No log args');

  const asset = await getAsset(ctx, getAddress(log.address), logData.assetId);
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

export async function handleTransferAssetHubLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling TransferAsset');
  const logData = assethub.events.Transfer.decode(log);
  if (logData.from === ZeroAddress) {
    ctx.log.warn('First create asset before transfer, skipping...');
    return;
  }
  const asset = await getAsset(ctx, getAddress(log.address), logData.tokenId);
  if (!asset) {
    return;
  }
  asset.publisher = logData.to;
  await ctx.store.save(asset);
}

export async function handleAssetUpdatedLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling AssetMetadataUpdate');
  const logData = assethub.events.AssetUpdated.decode(log);
  const asset = await getAsset(ctx, getAddress(log.address), logData.assetId);
  if (!asset) {
    return;
  }
  if (asset.contentUri !== logData.data.contentURI) {
    asset.contentUri = logData.data.contentURI;
    await parseMetadata(ctx, asset, log.block.timestamp.toString());
    const tags = (asset.metadata as AssetMetaData)?.tags;
    if (tags) {
      const tagModels: AssetTag[] = [];
      new Map(tags.map((t) => [t.toLowerCase(), t])).forEach((t) => {
        tagModels.push(
          new AssetTag({
            id: t.toLowerCase() + asset.id,
            name: t,
            normalizedName: t.toLowerCase(),
            asset: asset,
          })
        );
      });
      if (tagModels.length > 0) {
        ctx.log.info('Saving tags: ' + tagModels.map((t) => t.name).join(', '));
        await ctx.store.save(tagModels);
      }
    }
    await saveAssetMetadataHistroy(
      ctx,
      log.transaction?.hash ?? log.block.hash,
      asset,
      BigInt(log.block.timestamp)
    );
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
  await ctx.store.save(asset);
}

export async function handleAssetHubUpgradedLog(
  ctx: DataHandlerContext<Store>,
  log: Log
): Promise<void> {
  ctx.log.info('Handling AssetHubUpgraded');
  const logData = assethub.events.Upgraded.decode(log);
  const hub = await ctx.store.get(AssetHub, getAddress(log.address));
  if (!hub) {
    ctx.log.error('AssetHub not found: ' + getAddress(log.address));
    return;
  }
  hub.implementation = logData.implementation;
  await ctx.store.save(hub);
}

export async function parseMetadata(
  ctx: { log: Logger },
  asset: Asset,
  timestamp?: string
) {
  if (!asset.contentUri) {
    return;
  }
  const metadata = await fetchMetadata<AssetMetaData>(ctx, asset.contentUri);
  if (metadata) {
    metadata.timestamp = timestamp;
    asset.name = metadata.name;
    asset.type = metadata.type;
    asset.image = metadata.image;
    asset.description = metadata.description;
    asset.content = metadata.content;
    asset.attributes = metadata.attributes as any;
    asset.metadata = metadata;
    asset.query1 = metadata.query1;
    asset.query2 = metadata.query2;
  }
}

function saveAssetMetadataHistroy(
  ctx: DataHandlerContext<Store>,
  id: string,
  asset: Asset,
  timestamp?: bigint | null
) {
  const item = new AssetMetadataHistory({
    id: id,
    asset: asset,
    metadata: asset.metadata,
    contentUri: asset.contentUri,
    timestamp: timestamp,
  });
  return ctx.store.save(item);
}

async function getAsset(
  ctx: DataHandlerContext<Store>,
  hub: string,
  assetId: bigint
) {
  let asset = await ctx.store.get(Asset, {
    where: {
      hub: { id: hub },
      assetId: assetId,
    },
  });
  if (!asset) {
    ctx.log.error(`Asset not found: ${hub}, ${assetId.toString()}`);
    return;
  }
  return asset;
}

export async function getOrCreaeAsset(
  ctx: DataHandlerContext<Store>,
  hub: string,
  assetId: bigint
) {
  let asset = await ctx.store.get(Asset, {
    where: {
      hub: { id: hub },
      assetId: assetId,
    },
  });
  if (!asset) {
    asset = new Asset({
      id: generateId(),
      assetId: assetId,
      bizId: getAssetBizId(hub, assetId),
    });
    await ctx.store.save(asset);
  }
  return asset;
}
