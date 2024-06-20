import assert from "assert"
import * as marshal from "./marshal"

export class AttributeItem {
    private _traitType!: string | undefined | null
    private _displayType!: string | undefined | null
    private _value!: string | undefined | null

    constructor(props?: Partial<Omit<AttributeItem, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._traitType = json.traitType == null ? undefined : marshal.string.fromJSON(json.traitType)
            this._displayType = json.displayType == null ? undefined : marshal.string.fromJSON(json.displayType)
            this._value = json.value == null ? undefined : marshal.string.fromJSON(json.value)
        }
    }

    get traitType(): string | undefined | null {
        return this._traitType
    }

    set traitType(value: string | undefined | null) {
        this._traitType = value
    }

    get displayType(): string | undefined | null {
        return this._displayType
    }

    set displayType(value: string | undefined | null) {
        this._displayType = value
    }

    get value(): string | undefined | null {
        return this._value
    }

    set value(value: string | undefined | null) {
        this._value = value
    }

    toJSON(): object {
        return {
            traitType: this.traitType,
            displayType: this.displayType,
            value: this.value,
        }
    }
}
