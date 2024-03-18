import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class AssetHub {
    constructor(props?: Partial<AssetHub>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: true})
    admin!: string | undefined | null

    @Index_({unique: true})
    @Column_("text", {nullable: true})
    name!: string | undefined | null

    @Column_("text", {nullable: true})
    feeCollectModule!: string | undefined | null

    @Column_("text", {nullable: true})
    nftGatedModule!: string | undefined | null

    @Column_("text", {nullable: true})
    createAssetModule!: string | undefined | null

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    timestamp!: bigint | undefined | null

    @Column_("text", {nullable: true})
    implementation!: string | undefined | null

    @Column_("text", {nullable: true})
    version!: string | undefined | null

    @Column_("text", {nullable: true})
    hash!: string | undefined | null
}
