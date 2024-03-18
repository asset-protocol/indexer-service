import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './Events.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AssetCreated: new LogEvent<([publisher: string, assetId: bigint, contentURI: string, collectNFT: string, collectModule: string, gatedModule: string, timestamp: bigint] & {publisher: string, assetId: bigint, contentURI: string, collectNFT: string, collectModule: string, gatedModule: string, timestamp: bigint})>(
        abi, '0xdf057044abeb7c56e7927e1ed8c6ed4a5242bbf960f82f74e05ba886975b41ad'
    ),
    AssetMetadataUpdate: new LogEvent<([assetId: bigint, contentURI: string, timestamp: bigint] & {assetId: bigint, contentURI: string, timestamp: bigint})>(
        abi, '0x11ab6dd3fcd9fa27d6494e9dbe102367b34d49443db985e1d525cfed66f3935d'
    ),
    AssetUpdated: new LogEvent<([assetId: bigint, data: ([collectModule: string, gatedModule: string] & {collectModule: string, gatedModule: string}), timestamp: bigint] & {assetId: bigint, data: ([collectModule: string, gatedModule: string] & {collectModule: string, gatedModule: string}), timestamp: bigint})>(
        abi, '0xd5e3b2dd66cda5d7895c235e983834b22e13a4e6ed49c2cffdd261fdf9ac02c0'
    ),
    CollectModuleWhitelisted: new LogEvent<([collectModule: string, whitelisted: boolean, timestamp: bigint] & {collectModule: string, whitelisted: boolean, timestamp: bigint})>(
        abi, '0x6cc19a794d6a439023150cd58748eed4353190c0bb060d2e6250e2df4a68b673'
    ),
    CollectNFTTransfered: new LogEvent<([publiser: string, assetId: bigint, collectNFTTokenId: bigint, from: string, to: string, timestamp: bigint] & {publiser: string, assetId: bigint, collectNFTTokenId: bigint, from: string, to: string, timestamp: bigint})>(
        abi, '0xdf5dd6ccf51c23566bff8768aa77c7600aeee6a155c1547a6dae8b444cbbfe41'
    ),
    Collected: new LogEvent<([assetId: bigint, collector: string, publisher: string, collectNFT: string, collectNFTTokenId: bigint, collectModule: string, collectModuleData: string, timestamp: bigint] & {assetId: bigint, collector: string, publisher: string, collectNFT: string, collectNFTTokenId: bigint, collectModule: string, collectModuleData: string, timestamp: bigint})>(
        abi, '0x91ae5801229a238c4043a863d39f603be3b5040ca1e81bfe0859ba810a570010'
    ),
}

export class Contract extends ContractBase {
}
