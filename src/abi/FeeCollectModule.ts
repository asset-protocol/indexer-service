import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './FeeCollectModule.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    FeeConfigChanged: new LogEvent<([assetId: bigint, config: ([currency: string, recipient: string, amount: bigint] & {currency: string, recipient: string, amount: bigint})] & {assetId: bigint, config: ([currency: string, recipient: string, amount: bigint] & {currency: string, recipient: string, amount: bigint})})>(
        abi, '0x70dc24d6f215b519fcf3b2d4048e55ec02d7a44afd1647c289141939adf660e8'
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
    HUB: new Func<[], {}, string>(
        abi, '0xa4c52b86'
    ),
    UPGRADE_INTERFACE_VERSION: new Func<[], {}, string>(
        abi, '0xad3cb1cc'
    ),
    getFeeConfig: new Func<[assetId: bigint], {assetId: bigint}, ([currency: string, recipient: string, amount: bigint] & {currency: string, recipient: string, amount: bigint})>(
        abi, '0xc8b7cdb5'
    ),
    initialModule: new Func<[_: string, assetId: bigint, data: string], {assetId: bigint, data: string}, string>(
        abi, '0x39b28390'
    ),
    initialize: new Func<[hub: string, admin: string], {hub: string, admin: string}, []>(
        abi, '0x485cc955'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    processCollect: new Func<[collector: string, _: string, assetId: bigint, _: string], {collector: string, assetId: bigint}, string>(
        abi, '0x66ac4dc2'
    ),
    proxiableUUID: new Func<[], {}, string>(
        abi, '0x52d1902d'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    setFeeConfig: new Func<[assetId: bigint, feeConfig: ([currency: string, recipient: string, amount: bigint] & {currency: string, recipient: string, amount: bigint})], {assetId: bigint, feeConfig: ([currency: string, recipient: string, amount: bigint] & {currency: string, recipient: string, amount: bigint})}, []>(
        abi, '0xd24a41fe'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    upgradeToAndCall: new Func<[newImplementation: string, data: string], {newImplementation: string, data: string}, []>(
        abi, '0x4f1ef286'
    ),
}

export class Contract extends ContractBase {

    HUB(): Promise<string> {
        return this.eth_call(functions.HUB, [])
    }

    UPGRADE_INTERFACE_VERSION(): Promise<string> {
        return this.eth_call(functions.UPGRADE_INTERFACE_VERSION, [])
    }

    getFeeConfig(assetId: bigint): Promise<([currency: string, recipient: string, amount: bigint] & {currency: string, recipient: string, amount: bigint})> {
        return this.eth_call(functions.getFeeConfig, [assetId])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    proxiableUUID(): Promise<string> {
        return this.eth_call(functions.proxiableUUID, [])
    }
}
