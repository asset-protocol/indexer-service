import { DataHandlerContext, Log } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'
import { handleAssetCreatedAssetHubLog, handleAssetHubUpgradedLog, handleAssetUpdatedLog, handleCollectedAssetHubLog, handleTransferAssetHubLog } from './AssetHub';
import * as assethub from '../abi/IAssetHubEvents'
import * as assethubManager from '../abi/LiteAssetHubManager';
import { getAssetHubSet, getManager, handleAssetHubDeployedLog, handleManagerCurationUpdatedLog, handleManagerGlobalModuleChangedLog, handleManagerHubCreatorNFTChangedLog } from './AssetManager';
import { ASSETHUB_MANAGER } from '../config';
import { setCurationHanders } from './curation';

export type HandleLogFunc = (ctx: DataHandlerContext<Store>, log: Log) => Promise<void>;

export const handlers = new Map<string, Map<string, HandleLogFunc[]>>([
  [ASSETHUB_MANAGER!.toLowerCase(), new Map([
    [assethubManager.events.AssetHubDeployed.topic, [handleAssetHubDeployedLog]],
    [assethubManager.events.GlobalModuleChanged.topic, [handleManagerGlobalModuleChangedLog]],
    [assethubManager.events.HubCreatorNFTChanged.topic, [handleManagerHubCreatorNFTChangedLog]],
    [assethubManager.events.CurationUpdated.topic, [handleManagerCurationUpdatedLog]]
  ])],
  ["_AssetHub", new Map([
    [assethub.events.AssetCreated.topic, [handleAssetCreatedAssetHubLog]],
    [assethub.events.Transfer.topic, [handleTransferAssetHubLog]],
    [assethub.events.Upgraded.topic, [handleAssetHubUpgradedLog]],
    [assethub.events.AssetUpdated.topic, [handleAssetUpdatedLog]],
    [assethub.events.Collected.topic, [handleCollectedAssetHubLog]]
  ])]
]);

export const getLogHandler = async (ctx: DataHandlerContext<Store>, log: Log) => {
  const hd = handlers.get(log.address.toLowerCase())
  if (hd) {
    return hd.get(log.topics[0])
  }
  const hubSet = await getAssetHubSet(ctx);
  if (hubSet.has(log.address.toLowerCase())) {
    return (handlers.get("_AssetHub")?.get(log.topics[0])) ?? [];
  }
  const manager = await getManager(ctx);
  if (manager?.curation && !handlers.has(manager.curation.toLowerCase()) && manager.curation.toLowerCase() === log.address.toLowerCase()) {
    setCurationHanders(manager.curation.toLowerCase())
    ctx.log.info("add curation handlers: " + manager.curation.toLowerCase())
    const hd = handlers.get(log.address.toLowerCase())
    if (hd) {
      return hd.get(log.topics[0])
    }
  }
}