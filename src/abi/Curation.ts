import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './Curation.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: bigint] & {owner: string, approved: string, tokenId: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    AssetApproved: new LogEvent<([curationId: bigint, hub: string, assetId: bigint, status: number] & {curationId: bigint, hub: string, assetId: bigint, status: number})>(
        abi, '0x14358ab97efbb386f246adc39ca9b9d4970da95a287cd56074331574c790dbc5'
    ),
    AssetsAdded: new LogEvent<([curationId: bigint, assets: Array<([hub: string, assetId: bigint, order: bigint] & {hub: string, assetId: bigint, order: bigint})>] & {curationId: bigint, assets: Array<([hub: string, assetId: bigint, order: bigint] & {hub: string, assetId: bigint, order: bigint})>})>(
        abi, '0xe982f881c52e71fee1270fc50c24987a8d47405cb9daadb0388ccb49a61c5141'
    ),
    AssetsRemoved: new LogEvent<([curationId: bigint, hubs: Array<string>, assetIds: Array<bigint>] & {curationId: bigint, hubs: Array<string>, assetIds: Array<bigint>})>(
        abi, '0x11f56be51f0467d264f88c5d5757bb342af98f582293f3d19473db324f27b3b3'
    ),
    CurationCreated: new LogEvent<([publisher: string, curationId: bigint, curationURI: string, status: number, assets: Array<([hub: string, assetId: bigint, order: bigint] & {hub: string, assetId: bigint, order: bigint})>] & {publisher: string, curationId: bigint, curationURI: string, status: number, assets: Array<([hub: string, assetId: bigint, order: bigint] & {hub: string, assetId: bigint, order: bigint})>})>(
        abi, '0xd8039e413e3f94efdfc76b8a80c3180416e69825b1866fe3b2378570b6d10509'
    ),
    CurationUpdated: new LogEvent<([curationId: bigint, curationURI: string, status: number] & {curationId: bigint, curationURI: string, status: number})>(
        abi, '0x8a98792bfaf4b24cfb73c1a1a044e31508e1279cc62924ec9009bcdde8a34bfa'
    ),
    Initialized: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: bigint] & {from: string, to: string, tokenId: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    Upgraded: new LogEvent<([implementation: string] & {implementation: string})>(
        abi, '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b'
    ),
}

export const functions = {
    UPGRADE_INTERFACE_VERSION: new Func<[], {}, string>(
        abi, '0xad3cb1cc'
    ),
    addAssets: new Func<[curationId: bigint, assets: Array<([hub: string, assetId: bigint, order: bigint] & {hub: string, assetId: bigint, order: bigint})>], {curationId: bigint, assets: Array<([hub: string, assetId: bigint, order: bigint] & {hub: string, assetId: bigint, order: bigint})>}, []>(
        abi, '0x6f63aca6'
    ),
    approve: new Func<[to: string, tokenId: bigint], {to: string, tokenId: bigint}, []>(
        abi, '0x095ea7b3'
    ),
    approveAsset: new Func<[id: bigint, hub: string, assetId: bigint, status: number], {id: bigint, hub: string, assetId: bigint, status: number}, []>(
        abi, '0xd6e762ef'
    ),
    approveAssetBatch: new Func<[id: bigint, hub: string, assetIds: Array<bigint>, status: Array<number>], {id: bigint, hub: string, assetIds: Array<bigint>, status: Array<number>}, []>(
        abi, '0xdc5bc95f'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, bigint>(
        abi, '0x70a08231'
    ),
    create: new Func<[curationURI: string, status: number, assets: Array<([hub: string, assetId: bigint, order: bigint] & {hub: string, assetId: bigint, order: bigint})>], {curationURI: string, status: number, assets: Array<([hub: string, assetId: bigint, order: bigint] & {hub: string, assetId: bigint, order: bigint})>}, bigint>(
        abi, '0x1dcfd928'
    ),
    curationData: new Func<[curationId: bigint], {curationId: bigint}, ([assets: Array<([hub: string, assetId: bigint, order: bigint, status: number] & {hub: string, assetId: bigint, order: bigint, status: number})>, tokenURI: string, status: number] & {assets: Array<([hub: string, assetId: bigint, order: bigint, status: number] & {hub: string, assetId: bigint, order: bigint, status: number})>, tokenURI: string, status: number})>(
        abi, '0x88aede7b'
    ),
    getApproved: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x081812fc'
    ),
    initialize: new Func<[name: string, symbol: string, manager: string], {name: string, symbol: string, manager: string}, []>(
        abi, '0x077f224a'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    ownerOf: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x6352211e'
    ),
    proxiableUUID: new Func<[], {}, string>(
        abi, '0x52d1902d'
    ),
    removeAssets: new Func<[curationId: bigint, hubs: Array<string>, assetIds: Array<bigint>], {curationId: bigint, hubs: Array<string>, assetIds: Array<bigint>}, []>(
        abi, '0x38ac09e6'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: bigint, data: string], {from: string, to: string, tokenId: bigint, data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    setCurationURI: new Func<[curationId: bigint, curationURI: string], {curationId: bigint, curationURI: string}, []>(
        abi, '0xfed65e80'
    ),
    setStatus: new Func<[curationId: bigint, status: number], {curationId: bigint, status: number}, []>(
        abi, '0xd896dd64'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenURI: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0xc87b56dd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x23b872dd'
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

    balanceOf(owner: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    curationData(curationId: bigint): Promise<([assets: Array<([hub: string, assetId: bigint, order: bigint, status: number] & {hub: string, assetId: bigint, order: bigint, status: number})>, tokenURI: string, status: number] & {assets: Array<([hub: string, assetId: bigint, order: bigint, status: number] & {hub: string, assetId: bigint, order: bigint, status: number})>, tokenURI: string, status: number})> {
        return this.eth_call(functions.curationData, [curationId])
    }

    getApproved(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    ownerOf(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    proxiableUUID(): Promise<string> {
        return this.eth_call(functions.proxiableUUID, [])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tokenURI(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    version(): Promise<string> {
        return this.eth_call(functions.version, [])
    }
}
