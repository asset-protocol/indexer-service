import { DataHandlerContext, Log } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'
import { handleAssetCreatedAssetHubLog, handleAssetHubUpgradedLog, handleAssetUpdatedLog, handleCollectedAssetHubLog, handleTransferAssetHubLog } from './AssetHub';
import * as assethub from '../abi/IAssetHubEvents'
import * as assethubManager from '../abi/AssetHubManager';
import { getAssetHubSet, handleAssetHubDeployedLog } from './AssetManager';
import { ASSETHUB_MANAGER } from '../config';
import { getAddress } from 'ethers';

export type HandleLogFunc = (ctx: DataHandlerContext<Store>, log: Log) => Promise<void>;

const handlers = new Map<string, Map<string, HandleLogFunc[]>>([
  [ASSETHUB_MANAGER!, new Map([
    [assethubManager.events.AssetHubDeployed.topic, [handleAssetHubDeployedLog]]
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
  const hd = handlers.get(getAddress(log.address))
  if (hd) {
    return hd.get(log.topics[0])
  }
  const hubSet = await getAssetHubSet(ctx);
  if (hubSet.has(getAddress(log.address).toLowerCase())) {
    return (handlers.get("_AssetHub")?.get(log.topics[0])) ?? [];
  }
}