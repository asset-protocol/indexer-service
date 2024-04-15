import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './LiteAssetHubManager.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AssetHubDeployed: new LogEvent<([admin: string, name: string, assetHub: string, data: ([createModule: string, tokenCollectModule: string, feeCollectModule: string, nftGatedModule: string] & {createModule: string, tokenCollectModule: string, feeCollectModule: string, nftGatedModule: string})] & {admin: string, name: string, assetHub: string, data: ([createModule: string, tokenCollectModule: string, feeCollectModule: string, nftGatedModule: string] & {createModule: string, tokenCollectModule: string, feeCollectModule: string, nftGatedModule: string})})>(
        abi, '0x3592cd8e5fa76253b0426ee2cfc473c3a520b82cdefa746f920e0c99f67de94a'
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
    ManagerInitialized: new LogEvent<([creatorNFT: string, globalModule: string] & {creatorNFT: string, globalModule: string})>(
        abi, '0x295802990335482caa4564f3cdfee52662c526a3a08a183cc2d895f64566b7c3'
    ),
    MultipleUpgraded: new LogEvent<([index: bigint, implementation: string] & {index: bigint, implementation: string})>(
        abi, '0x64c8f86d8c97b441906cadbcaf6e07314af95bd0049f7f3356f7703af91c5a6f'
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
    assetHubImpl: new Func<[], {}, string>(
        abi, '0x5c863b2a'
    ),
    assetHubInfo: new Func<[hub: string], {hub: string}, ([createModule: string, tokenCollectModule: string, feeCollectModule: string, nftGatedModule: string] & {createModule: string, tokenCollectModule: string, feeCollectModule: string, nftGatedModule: string})>(
        abi, '0x12ca933f'
    ),
    assetHubInfoByName: new Func<[name: string], {name: string}, ([createModule: string, tokenCollectModule: string, feeCollectModule: string, nftGatedModule: string] & {createModule: string, tokenCollectModule: string, feeCollectModule: string, nftGatedModule: string})>(
        abi, '0x5cad390e'
    ),
    creatorNFT: new Func<[], {}, string>(
        abi, '0x4f6d3f23'
    ),
    deploy: new Func<[data: ([admin: string, name: string, createModule: string] & {admin: string, name: string, createModule: string})], {data: ([admin: string, name: string, createModule: string] & {admin: string, name: string, createModule: string})}, string>(
        abi, '0x793350c0'
    ),
    globalModule: new Func<[], {}, string>(
        abi, '0x0c7fc3ed'
    ),
    implementation: new Func<[index: bigint], {index: bigint}, string>(
        abi, '0xac9a0b26'
    ),
    initialize: new Func<[data: ([assetHubImpl: string, tokenCreateModule: string, collectNFT: string, feeCollectModule: string, tokenCollectModule: string, nftGatedModule: string] & {assetHubImpl: string, tokenCreateModule: string, collectNFT: string, feeCollectModule: string, tokenCollectModule: string, nftGatedModule: string}), creatorNFT_: string, globalModule_: string], {data: ([assetHubImpl: string, tokenCreateModule: string, collectNFT: string, feeCollectModule: string, tokenCollectModule: string, nftGatedModule: string] & {assetHubImpl: string, tokenCreateModule: string, collectNFT: string, feeCollectModule: string, tokenCollectModule: string, nftGatedModule: string}), creatorNFT_: string, globalModule_: string}, []>(
        abi, '0xf9396266'
    ),
    isHub: new Func<[hub: string], {hub: string}, boolean>(
        abi, '0x6933059e'
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

    assetHubImpl(): Promise<string> {
        return this.eth_call(functions.assetHubImpl, [])
    }

    assetHubInfo(hub: string): Promise<([createModule: string, tokenCollectModule: string, feeCollectModule: string, nftGatedModule: string] & {createModule: string, tokenCollectModule: string, feeCollectModule: string, nftGatedModule: string})> {
        return this.eth_call(functions.assetHubInfo, [hub])
    }

    assetHubInfoByName(name: string): Promise<([createModule: string, tokenCollectModule: string, feeCollectModule: string, nftGatedModule: string] & {createModule: string, tokenCollectModule: string, feeCollectModule: string, nftGatedModule: string})> {
        return this.eth_call(functions.assetHubInfoByName, [name])
    }

    creatorNFT(): Promise<string> {
        return this.eth_call(functions.creatorNFT, [])
    }

    globalModule(): Promise<string> {
        return this.eth_call(functions.globalModule, [])
    }

    implementation(index: bigint): Promise<string> {
        return this.eth_call(functions.implementation, [index])
    }

    isHub(hub: string): Promise<boolean> {
        return this.eth_call(functions.isHub, [hub])
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
