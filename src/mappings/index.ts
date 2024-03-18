import { DataHandlerContext, Log } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'
import { handleAssetCreatedAssetHubLog, handleAssetHubUpgradedLog, handleAssetMetadataUpdateHubLog, handleAssetUpdateHubLog, handleCollectedAssetHubLog, handleTransferAssetHubLog } from './AssetHub';
import * as assethubEvents from '../abi/Events'
import * as assethub from '../abi/AssetHub'
import * as assethubManager from '../abi/AssetHubManager';
import { getAssetHubSet, handleAssetHubDeployedLog } from './AssetManager';
import { ASSETHUB_MANAGER } from '../config';

export type HandleLogFunc = (ctx: DataHandlerContext<Store>, log: Log) => Promise<void>;

const handlers = new Map<string, Map<string, HandleLogFunc[]>>([
  [ASSETHUB_MANAGER, new Map([
    [assethubManager.events.AssetHubDeployed.topic, [handleAssetHubDeployedLog]]
  ])],
  ["_AssetHub", new Map([
    [assethubEvents.events.AssetCreated.topic, [handleAssetCreatedAssetHubLog]],
    [assethub.events.Transfer.topic, [handleTransferAssetHubLog]],
    [assethub.events.Upgraded.topic, [handleAssetHubUpgradedLog]],
    [assethub.events.AssetUpdated.topic, [handleAssetUpdateHubLog]],
    [assethub.events.AssetMetadataUpdate.topic, [handleAssetMetadataUpdateHubLog]],
    [assethubEvents.events.Collected.topic, [handleCollectedAssetHubLog]]
  ])]
]);

export const getLogHandler = async (ctx: DataHandlerContext<Store>, log: Log) => {
  const hd = handlers.get(log.address)
  if (hd) {
    return hd.get(log.topics[0])
  }
  const hubSet = await getAssetHubSet(ctx);
  if (hubSet.has(log.address.toLowerCase())) {
    return (handlers.get("_AssetHub")?.get(log.topics[0])) ?? [];
  }
}