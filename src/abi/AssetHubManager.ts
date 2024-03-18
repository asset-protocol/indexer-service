import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './AssetHubManager.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AssetHubDeployed: new LogEvent<([admin: string, name: string, assetHub: string, feeCollectModule: string, nftGatedModule: string, assetCreateModule: string] & {admin: string, name: string, assetHub: string, feeCollectModule: string, nftGatedModule: string, assetCreateModule: string})>(
        abi, '0x0afec20a1cb515eb2caafa776748da898ab2ed867e1fbbc1464169cfa32c7d01'
    ),
    Initialized: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Upgraded: new LogEvent<([implementation: string] & {implementation: string})>(
        abi, '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b'
    ),
    Whitelisted: new LogEvent<([account: string, isWhitelisted: boolean] & {account: string, isWhitelisted: boolean})>(
        abi, '0xa54714518c5d275fdcd3d2a461e4858e4e8cb04fb93cd0bca9d6d34115f26440'
    ),
}

export const functions = {
    UPGRADE_INTERFACE_VERSION: new Func<[], {}, string>(
        abi, '0xad3cb1cc'
    ),
    assetHubInfo: new Func<[hub: string], {hub: string}, ([assetHub: string, feeCollectModule: string, nftGatedModule: string, assetCreateModule: string, collectNFT: string] & {assetHub: string, feeCollectModule: string, nftGatedModule: string, assetCreateModule: string, collectNFT: string})>(
        abi, '0x12ca933f'
    ),
    assetHubInfoByName: new Func<[name: string], {name: string}, ([assetHub: string, feeCollectModule: string, nftGatedModule: string, assetCreateModule: string, collectNFT: string] & {assetHub: string, feeCollectModule: string, nftGatedModule: string, assetCreateModule: string, collectNFT: string})>(
        abi, '0x5cad390e'
    ),
    createFeeAssetCreateModule: new Func<[hub: string, initData: string], {hub: string, initData: string}, string>(
        abi, '0x664e5ed2'
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
    deploy: new Func<[data: ([admin: string, name: string, collectNft: boolean, assetCreateModule: string] & {admin: string, name: string, collectNft: boolean, assetCreateModule: string})], {data: ([admin: string, name: string, collectNft: boolean, assetCreateModule: string] & {admin: string, name: string, collectNft: boolean, assetCreateModule: string})}, string>(
        abi, '0xe5a48f48'
    ),
    exitsName: new Func<[name: string], {name: string}, boolean>(
        abi, '0x39b0c9f1'
    ),
    factories: new Func<[], {}, ([assetHubFactory: string, feeCollectModuleFactory: string, nftGatedModuleFactory: string, feeCreateAssetModuleFactory: string, collectNFTFactory: string] & {assetHubFactory: string, feeCollectModuleFactory: string, nftGatedModuleFactory: string, feeCreateAssetModuleFactory: string, collectNFTFactory: string})>(
        abi, '0xfe5b38e4'
    ),
    initialize: new Func<[data: ([assetHubFactory: string, feeCollectModuleFactory: string, nftGatedModuleFactory: string, feeCreateAssetModuleFactory: string, collectNFTFactory: string] & {assetHubFactory: string, feeCollectModuleFactory: string, nftGatedModuleFactory: string, feeCreateAssetModuleFactory: string, collectNFTFactory: string})], {data: ([assetHubFactory: string, feeCollectModuleFactory: string, nftGatedModuleFactory: string, feeCreateAssetModuleFactory: string, collectNFTFactory: string] & {assetHubFactory: string, feeCollectModuleFactory: string, nftGatedModuleFactory: string, feeCreateAssetModuleFactory: string, collectNFTFactory: string})}, []>(
        abi, '0x8f656d22'
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
    setFactories: new Func<[data: ([assetHubFactory: string, feeCollectModuleFactory: string, nftGatedModuleFactory: string, feeCreateAssetModuleFactory: string, collectNFTFactory: string] & {assetHubFactory: string, feeCollectModuleFactory: string, nftGatedModuleFactory: string, feeCreateAssetModuleFactory: string, collectNFTFactory: string})], {data: ([assetHubFactory: string, feeCollectModuleFactory: string, nftGatedModuleFactory: string, feeCreateAssetModuleFactory: string, collectNFTFactory: string] & {assetHubFactory: string, feeCollectModuleFactory: string, nftGatedModuleFactory: string, feeCreateAssetModuleFactory: string, collectNFTFactory: string})}, []>(
        abi, '0xff058504'
    ),
    setWhitelist: new Func<[account: string, whitelist: boolean], {account: string, whitelist: boolean}, []>(
        abi, '0x53d6fd59'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    upgradeToAndCall: new Func<[newImplementation: string, data: string], {newImplementation: string, data: string}, []>(
        abi, '0x4f1ef286'
    ),
    version: new Func<[], {}, number>(
        abi, '0x54fd4d50'
    ),
    whitelisted: new Func<[account: string], {account: string}, boolean>(
        abi, '0xd936547e'
    ),
}

export class Contract extends ContractBase {

    UPGRADE_INTERFACE_VERSION(): Promise<string> {
        return this.eth_call(functions.UPGRADE_INTERFACE_VERSION, [])
    }

    assetHubInfo(hub: string): Promise<([assetHub: string, feeCollectModule: string, nftGatedModule: string, assetCreateModule: string, collectNFT: string] & {assetHub: string, feeCollectModule: string, nftGatedModule: string, assetCreateModule: string, collectNFT: string})> {
        return this.eth_call(functions.assetHubInfo, [hub])
    }

    assetHubInfoByName(name: string): Promise<([assetHub: string, feeCollectModule: string, nftGatedModule: string, assetCreateModule: string, collectNFT: string] & {assetHub: string, feeCollectModule: string, nftGatedModule: string, assetCreateModule: string, collectNFT: string})> {
        return this.eth_call(functions.assetHubInfoByName, [name])
    }

    exitsName(name: string): Promise<boolean> {
        return this.eth_call(functions.exitsName, [name])
    }

    factories(): Promise<([assetHubFactory: string, feeCollectModuleFactory: string, nftGatedModuleFactory: string, feeCreateAssetModuleFactory: string, collectNFTFactory: string] & {assetHubFactory: string, feeCollectModuleFactory: string, nftGatedModuleFactory: string, feeCreateAssetModuleFactory: string, collectNFTFactory: string})> {
        return this.eth_call(functions.factories, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    proxiableUUID(): Promise<string> {
        return this.eth_call(functions.proxiableUUID, [])
    }

    version(): Promise<number> {
        return this.eth_call(functions.version, [])
    }

    whitelisted(account: string): Promise<boolean> {
        return this.eth_call(functions.whitelisted, [account])
    }
}
