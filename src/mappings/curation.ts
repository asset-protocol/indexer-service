import { DataHandlerContext, Log } from '@subsquid/evm-processor';
import { Store } from '@subsquid/typeorm-store';
import { events } from '../abi/Curation';
import { Asset, Curation, CurationAsset, CurationTag } from '../model';
import { fetchMetadata } from './asset_metadata';
import { getAssetBizId } from './AssetHub';
import { In } from 'typeorm';
import { handlers } from '.';

export enum AssetApproveStatus {
  Approving = 0,
  Approved = 1,
  Rejected = 2,
  Expired = 3,
}

export function setCurationHanders(curation: string) {
  handlers.set(
    curation,
    new Map([
      [events.CurationUpdated.topic, [handleCurationUpdatedLog]],
      [events.CurationCreated.topic, [handleCurationCreatedLog]],
      [events.AssetsAdded.topic, [handleCurationAssetAddedLog]],
      [events.AssetsRemoved.topic, [handleCurationAssetRemovedLog]],
      [events.AssetApproved.topic, [handleCurationAssetApprovedLog]],
      [events.Transfer.topic, [HandleCurationTransferredLog]],
    ])
  );
}

export async function handleCurationUpdatedLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling CurationUpdated');
  const logData = events.CurationUpdated.decode(log);
  const curationModel = await getOrCreateCuration(
    ctx.store,
    logData.curationId
  );
  if (logData.curationURI && curationModel.tokenURI !== logData.curationURI) {
    curationModel.tokenURI = logData.curationURI;
    await parseCurationMetadata(ctx, curationModel);
    await saveCurationTags(ctx, curationModel.id, curationModel.tags);
  }
  curationModel.lastUpdatedAt = BigInt(log.block.timestamp);
  curationModel.expiry = logData.expiry;
  await ctx.store.save(curationModel);
}

export async function handleCurationCreatedLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling CurationCreated');
  const logData = events.CurationCreated.decode(log);
  const curationModel = await getOrCreateCuration(
    ctx.store,
    logData.curationId
  );
  curationModel.tokenURI = logData.curationURI;
  curationModel.publisher = logData.publisher;
  curationModel.timestamp = BigInt(log.block.timestamp);
  curationModel.lastUpdatedAt = BigInt(log.block.timestamp);
  curationModel.status = logData.status;
  curationModel.expiry = logData.expiry;
  curationModel.hash = log.transaction?.hash;
  await parseCurationMetadata(ctx, curationModel);
  await saveCurationTags(ctx, curationModel.id, curationModel.tags);
  const assetIds = logData.assets.map((a) => getAssetBizId(a.hub, a.assetId));
  const assets = await ctx.store.find(Asset, {
    where: { bizId: In(assetIds) },
  });
  const assetMap = new Map(assets.map((a) => [a.bizId, a]));
  curationModel.assets = logData.assets.map((a) => ({
    id: getCurationAssetId(logData.curationId, a.hub, a.assetId),
    asset: assetMap.get(getAssetBizId(a.hub, a.assetId)),
    timestamp: BigInt(log.block.timestamp),
    approveAt: BigInt(0),
    expiry: null,
    hash: null,
    curation: curationModel,
    status: AssetApproveStatus.Approving,
  }));
  await ctx.store.save(curationModel);
  await ctx.store.save(curationModel.assets);
}

export async function handleCurationAssetAddedLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling CurationAssetAdded');
  const logData = events.AssetsAdded.decode(log);
  const curationAssets: CurationAsset[] = [];
  const curationModel = await getOrCreateCuration(
    ctx.store,
    logData.curationId
  );
  if (!curationModel) {
    ctx.log.warn('Curation not found for CurationAssetAdded log');
    return;
  }
  const assetIds = logData.assets.map((a) => getAssetBizId(a.hub, a.assetId));
  const assets = await ctx.store.find(Asset, {
    where: { bizId: In(assetIds) },
  });
  const assetMap = new Map(assets.map((a) => [a.bizId, a]));
  for (const a of logData.assets) {
    const curationAsset = new CurationAsset({
      id: getCurationAssetId(logData.curationId, a.hub, a.assetId),
      asset: assetMap.get(getAssetBizId(a.hub, a.assetId)),
      timestamp: BigInt(log.block.timestamp),
      curation: curationModel,
      status: AssetApproveStatus.Approving,
      hash: log.transaction?.hash,
    });
    curationAssets.push(curationAsset);
  }
  await ctx.store.save(curationAssets);
}

export async function handleCurationAssetRemovedLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling CurationAssetRemoved');
  const logData = events.AssetsRemoved.decode(log);
  const assetIds = logData.assetIds.map((a, i) =>
    getCurationAssetId(logData.curationId, logData.hubs[i], a)
  );
  await ctx.store.remove(CurationAsset, assetIds);
}

export async function handleCurationAssetApprovedLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling CurationAssetApproved');
  const logData = events.AssetApproved.decode(log);
  const curationAsset = await ctx.store.get(
    CurationAsset,
    getCurationAssetId(logData.curationId, logData.hub, logData.assetId)
  );
  if (curationAsset) {
    curationAsset.status = logData.status;
    curationAsset.approveAt = BigInt(log.block.timestamp);
    curationAsset.expiry = logData.expiry;
    await ctx.store.save(curationAsset);
  }
}

export async function HandleCurationTransferredLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling CurationTransferred');
  const logData = events.Transfer.decode(log);
  const curationModel = await getOrCreateCuration(ctx.store, logData.tokenId);
  curationModel.publisher = logData.to;
  await ctx.store.save(curationModel);
}

function getCurationId(tokenId: bigint) {
  return tokenId.toString();
}

function getCurationAssetId(curationId: bigint, hub: string, assetId: bigint) {
  return getAssetBizId(hub, assetId) + getCurationId(curationId);
}

async function getOrCreateCuration(store: Store, id: bigint) {
  const curationId = getCurationId(id);
  let curation = await store.get(Curation, curationId);
  if (!curation) {
    curation = new Curation();
    curation.id = curationId;
  }
  return curation;
}

async function saveCurationTags(
  ctx: DataHandlerContext<Store>,
  curationId: string,
  tags: CurationTag[]
) {
  if (!tags || tags.length === 0) {
    return;
  }
  const tagIds = tags.map((t) => t.normalizedName + curationId);
  await ctx.store.remove(CurationTag, tagIds);
  await ctx.store.save(tags);
}

type CurationMetadata = Omit<Curation, 'id' | 'assets' | 'tags'> & {
  tags?: string[];
};

async function parseCurationMetadata(
  ctx: DataHandlerContext<Store>,
  curationModel: Curation
) {
  if (!curationModel.tokenURI) return;
  const metadata = await fetchMetadata<CurationMetadata>(
    ctx,
    curationModel.tokenURI
  );
  if (metadata) {
    curationModel.name = metadata.name;
    curationModel.description = metadata.description;
    curationModel.image = metadata.image;
    curationModel.bannerImage = metadata.bannerImage;
    curationModel.tags =
      metadata.tags?.map((t) => ({
        id: t.toLowerCase() + curationModel.id,
        name: t,
        normalizedName: t.toLowerCase(),
        curation: curationModel,
      })) ?? [];
    curationModel.metadata = JSON.stringify(metadata);
  }
}
