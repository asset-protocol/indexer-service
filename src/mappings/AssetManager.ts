import { DataHandlerContext, Log } from '@subsquid/evm-processor';
import { Store } from '@subsquid/typeorm-store';
import * as assethubManager from '../abi/AssetHubManager';
import { AssetHub, HubManager, ModulesInfo } from '../model';
import { setCurationHanders } from './curation';
import { ZeroAddress, getAddress } from 'ethers';
import { ASSETHUB_MANAGER } from '../config';
import { fetchMetadata } from './asset_metadata';

let _assethubs: Set<string> | undefined;

export async function handleManagerModulesInitializedLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling ManagerInitedLog');
  const logData = assethubManager.events.ModulesInitialized.decode(log);
  let manager = new HubManager({
    id: getAddress(log.address),
    moudles: new ModulesInfo({
      assetHubImpl: logData.modules.assetHubImpl,
      tokenCreateModule: logData.modules.tokenCreateModule,
      collectNFT: logData.modules.collectNFT,
      feeCollectModule: logData.modules.feeCollectModule,
      tokenCollectModule: logData.modules.tokenCollectModule,
      nftGatedModule: logData.modules.nftGatedModule,
    }),
  });
  await ctx.store.save(manager);
}

export async function handleAssetHubDeployedLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling AssetHubDeployed');
  const logData = assethubManager.events.AssetHubDeployed.decode(log);

  let assetHub = new AssetHub({
    id: logData.assetHub,
    management: getAddress(log.address),
    admin: logData.admin,
    name: logData.name,
    feeCollectModule: logData.data.feeCollectModule,
    tokenCollectModule: logData.data.tokenCollectModule,
    nftGatedModule: logData.data.nftGatedModule,
    createAssetModule: logData.data.createModule,
    timestamp: BigInt(log.block.timestamp),
    hash: log.transaction?.hash,
  });

  const hubSet = await getAssetHubSet(ctx);
  hubSet.add(logData.assetHub.toLowerCase());

  const metadata = await fetchMetadata(ctx, logData.data.contractURI);
  assetHub.metadata = metadata;
  await ctx.store.save(assetHub);
}

export async function handleManagerCurationUpdatedLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling ManagerCurationUpdated');
  const logData = assethubManager.events.CurationUpdated.decode(log);
  let manager = new HubManager({
    id: getAddress(log.address),
    curation: logData.curation,
    timestamp: BigInt(log.block.timestamp),
  });
  await ctx.store.save(manager);
  if (manager.curation && manager.curation !== ZeroAddress) {
    setCurationHanders(manager.curation.toLowerCase());
  }
}

export async function handleManagerHubCreatorNFTChangedLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling ManagerHubCreatorNFTChanged');
  const logData = assethubManager.events.HubCreatorNFTChanged.decode(log);
  let manager = new HubManager({
    id: getAddress(log.address),
    timestamp: BigInt(log.block.timestamp),
    hubCreatorNft: logData.creatorNFT,
  });
  await ctx.store.save(manager);
}

export async function handleManagerGlobalModuleChangedLog(
  ctx: DataHandlerContext<Store>,
  log: Log
) {
  ctx.log.info('Handling ManagerGlobalModuleChanged');
  const logData = assethubManager.events.GlobalModuleChanged.decode(log);
  let manager = new HubManager({
    id: getAddress(log.address),
    timestamp: BigInt(log.block.timestamp),
    globalModule: logData.globalModule,
  });
  await ctx.store.save(manager);
}

export const getAssetHubSet = async (ctx: DataHandlerContext<Store>) => {
  if (!_assethubs) {
    const data = await ctx.store.find(AssetHub, {});
    _assethubs = new Set(data.map((d) => d.id.toLowerCase()));
  }
  return _assethubs;
};

let manager: HubManager | undefined = undefined;

export const getManager = async (ctx: DataHandlerContext<Store>) => {
  if (!manager) {
    const managers = await ctx.store.find(HubManager, {
      where: { id: ASSETHUB_MANAGER! },
    });
    manager = managers[0];
  }
  return manager;
};
