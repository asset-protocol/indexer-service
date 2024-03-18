import { DataHandlerContext, Log } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'
import { handleAssetCreatedAssetHubLog, handleAssetHubUpgradedLog, handleAssetMetadataUpdateHubLog, handleAssetUpdateHubLog, handleCollectedAssetHubLog, handleTransferAssetHubLog } from './AssetHubHandlers';
import * as assethub from '../abi/IAssetHubEvents'
import * as assethubManager from '../abi/AssetHubManager';
import { handleAssetHubDeployedLog } from './AssetManager';

export type HandleLogFunc = (ctx: DataHandlerContext<Store>, log: Log) => Promise<void>;

const handlers = new Map<string, HandleLogFunc[]>([
  [assethubManager.events.AssetHubDeployed.topic, [handleAssetHubDeployedLog]],

  [assethub.events.AssetCreated.topic, [handleAssetCreatedAssetHubLog]],
  [assethub.events.Transfer.topic, [handleTransferAssetHubLog]],
  [assethub.events.Upgraded.topic, [handleAssetHubUpgradedLog]],
  [assethub.events.MetadataUpdate.topic, [handleAssetMetadataUpdateHubLog]],
  [assethub.events.AssetUpdated.topic, [handleAssetUpdateHubLog]],
  [assethub.events.Collected.topic, [handleCollectedAssetHubLog]],
  
]);

export default handlers;