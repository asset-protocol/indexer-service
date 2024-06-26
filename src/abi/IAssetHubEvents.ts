import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './IAssetHubEvents.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AdminChanged: new LogEvent<([previousAdmin: string, newAdmin: string] & {previousAdmin: string, newAdmin: string})>(
        abi, '0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f'
    ),
    Approval: new LogEvent<([owner: string, approved: string, tokenId: bigint] & {owner: string, approved: string, tokenId: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    AssetCreated: new LogEvent<([assetId: bigint, publisher: string, collectNFT: string, createModuleData: string] & {assetId: bigint, publisher: string, collectNFT: string, createModuleData: string})>(
        abi, '0x2e9bf1ec7ad60e6432a25ef1e6b7f292cca5768b33eea2aedf1827ca6749af24'
    ),
    AssetUpdated: new LogEvent<([assetId: bigint, data: ([collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string, contentURI: string] & {collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string, contentURI: string})] & {assetId: bigint, data: ([collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string, contentURI: string] & {collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string, contentURI: string})})>(
        abi, '0x7aeee9d30ee7c79f441ef04b78036801e4cccc30a2f943c72d88b060ed39d59c'
    ),
    BatchMetadataUpdate: new LogEvent<([_fromTokenId: bigint, _toTokenId: bigint] & {_fromTokenId: bigint, _toTokenId: bigint})>(
        abi, '0x6bd5c950a8d8df17f772f5af37cb3655737899cbf903264b9795592da439661c'
    ),
    BeaconUpgraded: new LogEvent<([beacon: string] & {beacon: string})>(
        abi, '0x1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e'
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
    ContractURIUpdated: new LogEvent<[]>(
        abi, '0xa5d4097edda6d87cb9329af83fb3712ef77eeb13738ffe43cc35a4ce305ad962'
    ),
    InfoURIChanged: new LogEvent<([uri: string] & {uri: string})>(
        abi, '0xe74b49e1a5380bf0c1f3c644643bacdff09aace1dd038c4ecd68e0e900d3f70d'
    ),
    IsOpenChanged: new LogEvent<([isOpen: boolean] & {isOpen: boolean})>(
        abi, '0x2863fe5152fcc5d81fc1b4e7f66389baf5c7ca420a123d567bbbc7afd59ba1f9'
    ),
    MetadataUpdate: new LogEvent<([_tokenId: bigint] & {_tokenId: bigint})>(
        abi, '0xf8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: bigint] & {from: string, to: string, tokenId: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    Upgraded: new LogEvent<([implementation: string] & {implementation: string})>(
        abi, '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b'
    ),
}

export const functions = {
    approve: new Func<[to: string, tokenId: bigint], {to: string, tokenId: bigint}, []>(
        abi, '0x095ea7b3'
    ),
    assetPublisher: new Func<[assetId: bigint], {assetId: bigint}, string>(
        abi, '0xa36cb050'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, bigint>(
        abi, '0x70a08231'
    ),
    collect: new Func<[assetId: bigint, data: string], {assetId: bigint, data: string}, bigint>(
        abi, '0x89439b1c'
    ),
    contractURI: new Func<[], {}, string>(
        abi, '0xe8a3d485'
    ),
    create: new Func<[data: ([publisher: string, contentURI: string, assetCreateModuleData: string, collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string] & {publisher: string, contentURI: string, assetCreateModuleData: string, collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string})], {data: ([publisher: string, contentURI: string, assetCreateModuleData: string, collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string] & {publisher: string, contentURI: string, assetCreateModuleData: string, collectModule: string, collectModuleInitData: string, gatedModule: string, gatedModuleInitData: string})}, bigint>(
        abi, '0x2e4c36a6'
    ),
    emitCollectNFTTransferEvent: new Func<[publiser: string, assetId: bigint, tokenId: bigint, from: string, to: string], {publiser: string, assetId: bigint, tokenId: bigint, from: string, to: string}, []>(
        abi, '0x431f174d'
    ),
    getApproved: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x081812fc'
    ),
    hubOwner: new Func<[], {}, string>(
        abi, '0x9c7eb413'
    ),
    initialize: new Func<[name: string, manager: string, admin: string, collectNFT: string, createAssetModule: string, whitelistedCollectModules: Array<string>, contractURI: string], {name: string, manager: string, admin: string, collectNFT: string, createAssetModule: string, whitelistedCollectModules: Array<string>, contractURI: string}, []>(
        abi, '0x9833031c'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    ownerOf: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x6352211e'
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
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x23b872dd'
    ),
}

export class Contract extends ContractBase {

    assetPublisher(assetId: bigint): Promise<string> {
        return this.eth_call(functions.assetPublisher, [assetId])
    }

    balanceOf(owner: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    contractURI(): Promise<string> {
        return this.eth_call(functions.contractURI, [])
    }

    getApproved(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    hubOwner(): Promise<string> {
        return this.eth_call(functions.hubOwner, [])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    ownerOf(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }
}
