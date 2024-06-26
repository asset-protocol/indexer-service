import { assertNotNull } from '@subsquid/util-internal';
import { lookupArchive } from '@subsquid/archive-registry';
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from '@subsquid/evm-processor';
import { ASSETHUB_MANAGER } from './config';
import * as assethubManager from './abi/AssetHubManager';
import * as assethub from './abi/IAssetHubEvents';
import * as curation from './abi/Curation';

const assetHubDeployedStartBlock = Number.parseInt(
  process.env.ASSETHUB_DEPLOYED_START_BLOCK ?? '0'
);

if (!ASSETHUB_MANAGER) {
  throw new Error('ASSETHUB_MANAGER is not set');
}

export const processor = new EvmBatchProcessor()
  // Lookup archive by the network name in Subsquid registry
  // See https://docs.subsquid.io/evm-indexing/supported-networks/
  .setGateway(lookupArchive('base-sepolia'))
  // Chain RPC endpoint is required for
  //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
  //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
  .setRpcEndpoint({
    // Set the URL via .env for local runs or via secrets when deploying to Subsquid Cloud
    // https://docs.subsquid.io/deploy-squid/env-variables/
    url: assertNotNull(process.env.RPC_ENDPOINT),
    // More RPC connection options at https://docs.subsquid.io/evm-indexing/configuration/initialization/#set-data-source
    // rateLimit: 10,
  })
  .setFinalityConfirmation(75)
  .setFields({
    log: {
      topics: true,
      data: true,
    },
  })
  .setBlockRange({
    from: assetHubDeployedStartBlock,
  })
  .addLog({
    address: [ASSETHUB_MANAGER],
    topic0: [
      assethubManager.events.AssetHubDeployed.topic,
      assethubManager.events.CurationUpdated.topic,
      assethubManager.events.GlobalModuleChanged.topic,
      assethubManager.events.HubCreatorNFTChanged.topic,
    ],
    range: { from: assetHubDeployedStartBlock },
    transaction: true,
  })
  .addLog({
    topic0: [
      assethub.events.AssetCreated.topic,
      assethub.events.Collected.topic,
      assethub.events.Transfer.topic,
      assethub.events.AssetUpdated.topic,
      assethub.events.Upgraded.topic,
      assethub.events.InfoURIChanged.topic,
      assethub.events.IsOpenChanged.topic,
    ],
    range: { from: assetHubDeployedStartBlock },
    transaction: true,
  })
  .addLog({
    topic0: [
      curation.events.Transfer.topic,
      curation.events.AssetsAdded.topic,
      curation.events.AssetsRemoved.topic,
      curation.events.AssetApproved.topic,
      curation.events.CurationCreated.topic,
      curation.events.CurationUpdated.topic,
    ],
    range: { from: assetHubDeployedStartBlock },
    transaction: true,
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
