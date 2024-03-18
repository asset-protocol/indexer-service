import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './AssetHub.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: bigint] & {owner: string, approved: string, tokenId: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    AssetMetadataUpdate: new LogEvent<([assetId: bigint, contentURI: string, timestamp: bigint] & {assetId: bigint, contentURI: string, timestamp: bigint})>(
        abi, '0x11ab6dd3fcd9fa27d6494e9dbe102367b34d49443db985e1d525cfed66f3935d'
    ),
    AssetUpdated: new LogEvent<([assetId: bigint, data: ([collectModule: string, gatedModule: string] & {collectModule: string, gatedModule: string}), timestamp: bigint] & {assetId: bigint, data: ([collectModule: string, gatedModule: string] & {collectModule: string, gatedModule: string}), timestamp: bigint})>(
        abi, '0xd5e3b2dd66cda5d7895c235e983834b22e13a4e6ed49c2cffdd261fdf9ac02c0'
    ),
    BatchMetadataUpdate: new LogEvent<([_fromTokenId: bigint, _toTokenId: bigint] & {_fromTokenId: bigint, _toTokenId: bigint})>(
        abi, '0x6bd5c950a8d8df17f772f5af37cb3655737899cbf903264b9795592da439661c'
    ),
    CollectModuleWhitelisted: new LogEvent<([collectModule: string, whitelisted: boolean, timestamp: bigint] & {collectModule: string, whitelisted: boolean, timestamp: bigint})>(
        abi, '0x6cc19a794d6a439023150cd58748eed4353190c0bb060d2e6250e2df4a68b673'
    ),
    CollectNFTTransfered: new LogEvent<([publiser: string, assetId: bigint, collectNFTTokenId: bigint, from: string, to: string, timestamp: bigint] & {publiser: string, assetId: bigint, collectNFTTokenId: bigint, from: string, to: string, timestamp: bigint})>(
        abi, '0xdf5dd6ccf51c23566bff8768aa77c7600aeee6a155c1547a6dae8b444cbbfe41'
    ),
    Initialized: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2'
    ),
    MetadataUpdate: new LogEvent<([_tokenId: bigint] & {_tokenId: bigint})>(
        abi, '0xf8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Paused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: bigint] & {from: string, to: string, tokenId: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    Unpaused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa'
    ),
    Upgraded: new LogEvent<([implementation: string] & {implementation: string})>(
        abi, '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b'
    ),
}

export const functions = {
    UPGRADE_INTERFACE_VERSION: new Func<[], {}, string>(
        abi, '0xad3cb1cc'
    ),
    approve: new Func<[to: string, tokenId: bigint], {to: string, tokenId: bigint}, []>(
        abi, '0x095ea7b3'
    ),
    assetCollectCount: new Func<[assetId: bigint], {assetId: bigint}, bigint>(
        abi, '0xa6fe3ffd'
    ),
    assetCollectNFT: new Func<[assetId: bigint], {assetId: bigint}, string>(
        abi, '0x7f4349c3'
    ),
    assetGated: new Func<[assetId: bigint, account: string], {assetId: bigint, account: string}, boolean>(
        abi, '0x4a21ce6b'
    ),
    assetPublisher: new Func<[assetId: bigint], {assetId: bigint}, string>(
        abi, '0xa36cb050'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, bigint>(
        abi, '0x70a08231'
    ),
    collect: new Func<[assetId: bigint, collectModuleData: string], {assetId: bigint, collectModuleData: string}, bigint>(
        abi, '0x89439b1c'
    ),
    collectModuleWhitelist: new Func<[collectModule: string, whitelist: boolean], {collectModule: string, whitelist: boolean}, []>(
        abi, '0xb7338d17'
    ),
    count: new Func<[publisher: string], {publisher: string}, bigint>(
        abi, '0x05d85eda'
    ),
    create: new Func<[data: ([publisher: string, contentURI: string, assetCreateModuleData: string, collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string] & {publisher: string, contentURI: string, assetCreateModuleData: string, collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string})], {data: ([publisher: string, contentURI: string, assetCreateModuleData: string, collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string] & {publisher: string, contentURI: string, assetCreateModuleData: string, collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string})}, bigint>(
        abi, '0x2e4c36a6'
    ),
    emitCollectNFTTransferEvent: new Func<[publiser: string, assetId: bigint, collectNFTId: bigint, from: string, to: string], {publiser: string, assetId: bigint, collectNFTId: bigint, from: string, to: string}, []>(
        abi, '0x431f174d'
    ),
    getApproved: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x081812fc'
    ),
    getCreateAssetModule: new Func<[], {}, string>(
        abi, '0x2417d307'
    ),
    hubOwner: new Func<[], {}, string>(
        abi, '0x9c7eb413'
    ),
    initialize: new Func<[name: string, symbol: string, admin: string, collectNFT: string, createAssetModule: string], {name: string, symbol: string, admin: string, collectNFT: string, createAssetModule: string}, []>(
        abi, '0xdb0ed6a0'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    isCollectModuleWhitelisted: new Func<[followModule: string], {followModule: string}, boolean>(
        abi, '0xad3e72bf'
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
    paused: new Func<[], {}, boolean>(
        abi, '0x5c975abb'
    ),
    proxiableUUID: new Func<[], {}, string>(
        abi, '0x52d1902d'
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
    setCreateAssetModule: new Func<[assetModule: string], {assetModule: string}, []>(
        abi, '0x670e431b'
    ),
    setTokenURI: new Func<[assetId: bigint, contentURI: string], {assetId: bigint, contentURI: string}, []>(
        abi, '0x162094c4'
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
    update: new Func<[assetId: bigint, data: ([collectModule: string, gatedModule: string] & {collectModule: string, gatedModule: string})], {assetId: bigint, data: ([collectModule: string, gatedModule: string] & {collectModule: string, gatedModule: string})}, []>(
        abi, '0xa26a1490'
    ),
    upgradeToAndCall: new Func<[newImplementation: string, data: string], {newImplementation: string, data: string}, []>(
        abi, '0x4f1ef286'
    ),
    userCollectCount: new Func<[assetId: bigint, collector: string], {assetId: bigint, collector: string}, bigint>(
        abi, '0x0f3e7928'
    ),
    version: new Func<[], {}, string>(
        abi, '0x54fd4d50'
    ),
}

export class Contract extends ContractBase {

    UPGRADE_INTERFACE_VERSION(): Promise<string> {
        return this.eth_call(functions.UPGRADE_INTERFACE_VERSION, [])
    }

    assetCollectCount(assetId: bigint): Promise<bigint> {
        return this.eth_call(functions.assetCollectCount, [assetId])
    }

    assetCollectNFT(assetId: bigint): Promise<string> {
        return this.eth_call(functions.assetCollectNFT, [assetId])
    }

    assetGated(assetId: bigint, account: string): Promise<boolean> {
        return this.eth_call(functions.assetGated, [assetId, account])
    }

    assetPublisher(assetId: bigint): Promise<string> {
        return this.eth_call(functions.assetPublisher, [assetId])
    }

    balanceOf(owner: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    count(publisher: string): Promise<bigint> {
        return this.eth_call(functions.count, [publisher])
    }

    getApproved(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    getCreateAssetModule(): Promise<string> {
        return this.eth_call(functions.getCreateAssetModule, [])
    }

    hubOwner(): Promise<string> {
        return this.eth_call(functions.hubOwner, [])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    isCollectModuleWhitelisted(followModule: string): Promise<boolean> {
        return this.eth_call(functions.isCollectModuleWhitelisted, [followModule])
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

    paused(): Promise<boolean> {
        return this.eth_call(functions.paused, [])
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

    userCollectCount(assetId: bigint, collector: string): Promise<bigint> {
        return this.eth_call(functions.userCollectCount, [assetId, collector])
    }

    version(): Promise<string> {
        return this.eth_call(functions.version, [])
    }
}
