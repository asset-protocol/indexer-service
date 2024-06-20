import assert from "assert"
import * as marshal from "./marshal"

export class ModulesInfo {
    private _assetHubImpl!: string | undefined | null
    private _tokenCreateModule!: string | undefined | null
    private _collectNFT!: string | undefined | null
    private _feeCollectModule!: string | undefined | null
    private _tokenCollectModule!: string | undefined | null
    private _nftGatedModule!: string | undefined | null

    constructor(props?: Partial<Omit<ModulesInfo, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._assetHubImpl = json.assetHubImpl == null ? undefined : marshal.string.fromJSON(json.assetHubImpl)
            this._tokenCreateModule = json.tokenCreateModule == null ? undefined : marshal.string.fromJSON(json.tokenCreateModule)
            this._collectNFT = json.collectNFT == null ? undefined : marshal.string.fromJSON(json.collectNFT)
            this._feeCollectModule = json.feeCollectModule == null ? undefined : marshal.string.fromJSON(json.feeCollectModule)
            this._tokenCollectModule = json.tokenCollectModule == null ? undefined : marshal.string.fromJSON(json.tokenCollectModule)
            this._nftGatedModule = json.nftGatedModule == null ? undefined : marshal.string.fromJSON(json.nftGatedModule)
        }
    }

    get assetHubImpl(): string | undefined | null {
        return this._assetHubImpl
    }

    set assetHubImpl(value: string | undefined | null) {
        this._assetHubImpl = value
    }

    get tokenCreateModule(): string | undefined | null {
        return this._tokenCreateModule
    }

    set tokenCreateModule(value: string | undefined | null) {
        this._tokenCreateModule = value
    }

    get collectNFT(): string | undefined | null {
        return this._collectNFT
    }

    set collectNFT(value: string | undefined | null) {
        this._collectNFT = value
    }

    get feeCollectModule(): string | undefined | null {
        return this._feeCollectModule
    }

    set feeCollectModule(value: string | undefined | null) {
        this._feeCollectModule = value
    }

    get tokenCollectModule(): string | undefined | null {
        return this._tokenCollectModule
    }

    set tokenCollectModule(value: string | undefined | null) {
        this._tokenCollectModule = value
    }

    get nftGatedModule(): string | undefined | null {
        return this._nftGatedModule
    }

    set nftGatedModule(value: string | undefined | null) {
        this._nftGatedModule = value
    }

    toJSON(): object {
        return {
            assetHubImpl: this.assetHubImpl,
            tokenCreateModule: this.tokenCreateModule,
            collectNFT: this.collectNFT,
            feeCollectModule: this.feeCollectModule,
            tokenCollectModule: this.tokenCollectModule,
            nftGatedModule: this.nftGatedModule,
        }
    }
}
