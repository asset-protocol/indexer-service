import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './NftAssetGatedModule.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    ConfigChanged: new LogEvent<([assetId: bigint, config: Array<([nftContract: string, nftType: number, tokenId: bigint, amount: bigint, isOr: boolean] & {nftContract: string, nftType: number, tokenId: bigint, amount: bigint, isOr: boolean})>] & {assetId: bigint, config: Array<([nftContract: string, nftType: number, tokenId: bigint, amount: bigint, isOr: boolean] & {nftContract: string, nftType: number, tokenId: bigint, amount: bigint, isOr: boolean})>})>(
        abi, '0xb8f566c47591dca0c29e447be59f4ec71ad42e1c00481a5da050e63a8ae87f1a'
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
}

export const functions = {
    ERC1155_INTERFACE: new Func<[], {}, string>(
        abi, '0xeacdaed8'
    ),
    ERC20_INTERFACE: new Func<[], {}, string>(
        abi, '0xfc0a8dbd'
    ),
    ERC721_INTERFACE: new Func<[], {}, string>(
        abi, '0x7ad4e58e'
    ),
    HUB: new Func<[], {}, string>(
        abi, '0xa4c52b86'
    ),
    UPGRADE_INTERFACE_VERSION: new Func<[], {}, string>(
        abi, '0xad3cb1cc'
    ),
    getConfig: new Func<[assetId: bigint], {assetId: bigint}, Array<([nftContract: string, nftType: number, tokenId: bigint, amount: bigint, isOr: boolean] & {nftContract: string, nftType: number, tokenId: bigint, amount: bigint, isOr: boolean})>>(
        abi, '0xa81b2f8d'
    ),
    initialModule: new Func<[_: string, assetId: bigint, data: string], {assetId: bigint, data: string}, string>(
        abi, '0x39b28390'
    ),
    initialize: new Func<[hub: string, admin: string], {hub: string, admin: string}, []>(
        abi, '0x485cc955'
    ),
    isGated: new Func<[assetId: bigint, account: string], {assetId: bigint, account: string}, boolean>(
        abi, '0x8a1975a5'
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
    setConfig: new Func<[assetId: bigint, config: Array<([nftContract: string, nftType: number, tokenId: bigint, amount: bigint, isOr: boolean] & {nftContract: string, nftType: number, tokenId: bigint, amount: bigint, isOr: boolean})>], {assetId: bigint, config: Array<([nftContract: string, nftType: number, tokenId: bigint, amount: bigint, isOr: boolean] & {nftContract: string, nftType: number, tokenId: bigint, amount: bigint, isOr: boolean})>}, []>(
        abi, '0xadeda352'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    upgradeToAndCall: new Func<[newImplementation: string, data: string], {newImplementation: string, data: string}, []>(
        abi, '0x4f1ef286'
    ),
}

export class Contract extends ContractBase {

    ERC1155_INTERFACE(): Promise<string> {
        return this.eth_call(functions.ERC1155_INTERFACE, [])
    }

    ERC20_INTERFACE(): Promise<string> {
        return this.eth_call(functions.ERC20_INTERFACE, [])
    }

    ERC721_INTERFACE(): Promise<string> {
        return this.eth_call(functions.ERC721_INTERFACE, [])
    }

    HUB(): Promise<string> {
        return this.eth_call(functions.HUB, [])
    }

    UPGRADE_INTERFACE_VERSION(): Promise<string> {
        return this.eth_call(functions.UPGRADE_INTERFACE_VERSION, [])
    }

    getConfig(assetId: bigint): Promise<Array<([nftContract: string, nftType: number, tokenId: bigint, amount: bigint, isOr: boolean] & {nftContract: string, nftType: number, tokenId: bigint, amount: bigint, isOr: boolean})>> {
        return this.eth_call(functions.getConfig, [assetId])
    }

    isGated(assetId: bigint, account: string): Promise<boolean> {
        return this.eth_call(functions.isGated, [assetId, account])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    proxiableUUID(): Promise<string> {
        return this.eth_call(functions.proxiableUUID, [])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }
}
