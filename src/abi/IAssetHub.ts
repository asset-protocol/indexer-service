import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './IAssetHub.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    assetPublisher: new Func<[assetId: bigint], {assetId: bigint}, string>(
        abi, '0xa36cb050'
    ),
    collect: new Func<[assetId: bigint, data: string], {assetId: bigint, data: string}, bigint>(
        abi, '0x89439b1c'
    ),
    create: new Func<[data: ([publisher: string, contentURI: string, assetCreateModuleData: string, collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string] & {publisher: string, contentURI: string, assetCreateModuleData: string, collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string})], {data: ([publisher: string, contentURI: string, assetCreateModuleData: string, collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string] & {publisher: string, contentURI: string, assetCreateModuleData: string, collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string})}, bigint>(
        abi, '0x2e4c36a6'
    ),
    emitCollectNFTTransferEvent: new Func<[publiser: string, assetId: bigint, tokenId: bigint, from: string, to: string], {publiser: string, assetId: bigint, tokenId: bigint, from: string, to: string}, []>(
        abi, '0x431f174d'
    ),
    hubOwner: new Func<[], {}, string>(
        abi, '0x9c7eb413'
    ),
    initialize: new Func<[name: string, symbol: string, admin: string, collectNFT: string, createAssetModule: string], {name: string, symbol: string, admin: string, collectNFT: string, createAssetModule: string}, []>(
        abi, '0xdb0ed6a0'
    ),
}

export class Contract extends ContractBase {

    assetPublisher(assetId: bigint): Promise<string> {
        return this.eth_call(functions.assetPublisher, [assetId])
    }

    hubOwner(): Promise<string> {
        return this.eth_call(functions.hubOwner, [])
    }
}
