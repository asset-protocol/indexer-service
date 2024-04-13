import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './AssetHubManager.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AssetHubDeployed: new LogEvent<([admin: string, name: string, assetHub: string, data: ([collectNFT: string, nftGatedModule: string, assetCreateModule: string, tokenCollectModule: string, feeCollectModule: string] & {collectNFT: string, nftGatedModule: string, assetCreateModule: string, tokenCollectModule: string, feeCollectModule: string})] & {admin: string, name: string, assetHub: string, data: ([collectNFT: string, nftGatedModule: string, assetCreateModule: string, tokenCollectModule: string, feeCollectModule: string] & {collectNFT: string, nftGatedModule: string, assetCreateModule: string, tokenCollectModule: string, feeCollectModule: string})})>(
        abi, '0x3e841e5a7881d0f892d6607296c629857d6eeabd95146532b8c2723fc955f127'
    ),
    GlobalModuleChanged: new LogEvent<([globalModule: string] & {globalModule: string})>(
        abi, '0xafee23d90cd213e84d56f0832fe8482b67075587a254c64fd21a62387e619c88'
    ),
    HubCreatorNFTChanged: new LogEvent<([creatorNFT: string] & {creatorNFT: string})>(
        abi, '0x4a7bdf7a06d90f6a8b4d4a004966f13ff53b566529d9ce0c769485a3f389d0ac'
    ),
    Initialized: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2'
    ),
    ManagerInitialed: new LogEvent<([creatorNFT: string, globalModule: string] & {creatorNFT: string, globalModule: string})>(
        abi, '0xcf9a6312f7d042f619993960b0b9d14cfde9b09221855b28420b192d1d69e9b9'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Upgraded: new LogEvent<([implementation: string] & {implementation: string})>(
        abi, '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b'
    ),
}

export const functions = {
    UPGRADE_INTERFACE_VERSION: new Func<[], {}, string>(
        abi, '0xad3cb1cc'
    ),
    assetHubInfo: new Func<[hub: string], {hub: string}, ([collectNFT: string, nftGatedModule: string, assetCreateModule: string, tokenCollectModule: string, feeCollectModule: string] & {collectNFT: string, nftGatedModule: string, assetCreateModule: string, tokenCollectModule: string, feeCollectModule: string})>(
        abi, '0x12ca933f'
    ),
    assetHubInfoByName: new Func<[name: string], {name: string}, ([collectNFT: string, nftGatedModule: string, assetCreateModule: string, tokenCollectModule: string, feeCollectModule: string] & {collectNFT: string, nftGatedModule: string, assetCreateModule: string, tokenCollectModule: string, feeCollectModule: string})>(
        abi, '0x5cad390e'
    ),
    createFeeCollectModuleImpl: new Func<[hub: string, initData: string], {hub: string, initData: string}, string>(
        abi, '0x1ccf7d32'
    ),
    createHubImpl: new Func<[initData: string], {initData: string}, string>(
        abi, '0xf3f5b71e'
    ),
    createNftAssetGatedModuleImpl: new Func<[hub: string, initData: string], {hub: string, initData: string}, string>(
        abi, '0xb906c3aa'
    ),
    createTokenAssetCreateModule: new Func<[hub: string, initData: string], {hub: string, initData: string}, string>(
        abi, '0xf115a47b'
    ),
    createTokenCollectModuleImpl: new Func<[hub: string, initData: string], {hub: string, initData: string}, string>(
        abi, '0x9837257f'
    ),
    creatorNFT: new Func<[], {}, string>(
        abi, '0x4f6d3f23'
    ),
    deploy: new Func<[data: ([admin: string, name: string, collectNft: boolean, assetCreateModule: string] & {admin: string, name: string, collectNft: boolean, assetCreateModule: string})], {data: ([admin: string, name: string, collectNft: boolean, assetCreateModule: string] & {admin: string, name: string, collectNft: boolean, assetCreateModule: string})}, string>(
        abi, '0xe5a48f48'
    ),
    exitsName: new Func<[name: string], {name: string}, boolean>(
        abi, '0x39b0c9f1'
    ),
    factories: new Func<[], {}, ([assetHubFactory: string, tokenCollectModuleFactory: string, nftGatedModuleFactory: string, tokenAssetCreateModuleFactory: string, collectNFTFactory: string, feeCollectModuleFactory: string] & {assetHubFactory: string, tokenCollectModuleFactory: string, nftGatedModuleFactory: string, tokenAssetCreateModuleFactory: string, collectNFTFactory: string, feeCollectModuleFactory: string})>(
        abi, '0xfe5b38e4'
    ),
    globalModule: new Func<[], {}, string>(
        abi, '0x0c7fc3ed'
    ),
    initialize: new Func<[data: ([assetHubFactory: string, tokenCollectModuleFactory: string, nftGatedModuleFactory: string, tokenAssetCreateModuleFactory: string, collectNFTFactory: string, feeCollectModuleFactory: string] & {assetHubFactory: string, tokenCollectModuleFactory: string, nftGatedModuleFactory: string, tokenAssetCreateModuleFactory: string, collectNFTFactory: string, feeCollectModuleFactory: string}), creatorNFT_: string, globalModule_: string], {data: ([assetHubFactory: string, tokenCollectModuleFactory: string, nftGatedModuleFactory: string, tokenAssetCreateModuleFactory: string, collectNFTFactory: string, feeCollectModuleFactory: string] & {assetHubFactory: string, tokenCollectModuleFactory: string, nftGatedModuleFactory: string, tokenAssetCreateModuleFactory: string, collectNFTFactory: string, feeCollectModuleFactory: string}), creatorNFT_: string, globalModule_: string}, []>(
        abi, '0xf9396266'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    proxiableUUID: new Func<[], {}, string>(
        abi, '0x52d1902d'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    setFactories: new Func<[data: ([assetHubFactory: string, tokenCollectModuleFactory: string, nftGatedModuleFactory: string, tokenAssetCreateModuleFactory: string, collectNFTFactory: string, feeCollectModuleFactory: string] & {assetHubFactory: string, tokenCollectModuleFactory: string, nftGatedModuleFactory: string, tokenAssetCreateModuleFactory: string, collectNFTFactory: string, feeCollectModuleFactory: string})], {data: ([assetHubFactory: string, tokenCollectModuleFactory: string, nftGatedModuleFactory: string, tokenAssetCreateModuleFactory: string, collectNFTFactory: string, feeCollectModuleFactory: string] & {assetHubFactory: string, tokenCollectModuleFactory: string, nftGatedModuleFactory: string, tokenAssetCreateModuleFactory: string, collectNFTFactory: string, feeCollectModuleFactory: string})}, []>(
        abi, '0x3069e480'
    ),
    setGlobalModule: new Func<[gm: string], {gm: string}, []>(
        abi, '0xd7103f96'
    ),
    setHubCreatorNFT: new Func<[creatorNFT_: string], {creatorNFT_: string}, []>(
        abi, '0x29729078'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    upgradeToAndCall: new Func<[newImplementation: string, data: string], {newImplementation: string, data: string}, []>(
        abi, '0x4f1ef286'
    ),
    version: new Func<[], {}, string>(
        abi, '0x54fd4d50'
    ),
}

export class Contract extends ContractBase {

    UPGRADE_INTERFACE_VERSION(): Promise<string> {
        return this.eth_call(functions.UPGRADE_INTERFACE_VERSION, [])
    }

    assetHubInfo(hub: string): Promise<([collectNFT: string, nftGatedModule: string, assetCreateModule: string, tokenCollectModule: string, feeCollectModule: string] & {collectNFT: string, nftGatedModule: string, assetCreateModule: string, tokenCollectModule: string, feeCollectModule: string})> {
        return this.eth_call(functions.assetHubInfo, [hub])
    }

    assetHubInfoByName(name: string): Promise<([collectNFT: string, nftGatedModule: string, assetCreateModule: string, tokenCollectModule: string, feeCollectModule: string] & {collectNFT: string, nftGatedModule: string, assetCreateModule: string, tokenCollectModule: string, feeCollectModule: string})> {
        return this.eth_call(functions.assetHubInfoByName, [name])
    }

    creatorNFT(): Promise<string> {
        return this.eth_call(functions.creatorNFT, [])
    }

    exitsName(name: string): Promise<boolean> {
        return this.eth_call(functions.exitsName, [name])
    }

    factories(): Promise<([assetHubFactory: string, tokenCollectModuleFactory: string, nftGatedModuleFactory: string, tokenAssetCreateModuleFactory: string, collectNFTFactory: string, feeCollectModuleFactory: string] & {assetHubFactory: string, tokenCollectModuleFactory: string, nftGatedModuleFactory: string, tokenAssetCreateModuleFactory: string, collectNFTFactory: string, feeCollectModuleFactory: string})> {
        return this.eth_call(functions.factories, [])
    }

    globalModule(): Promise<string> {
        return this.eth_call(functions.globalModule, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    proxiableUUID(): Promise<string> {
        return this.eth_call(functions.proxiableUUID, [])
    }

    version(): Promise<string> {
        return this.eth_call(functions.version, [])
    }
}
