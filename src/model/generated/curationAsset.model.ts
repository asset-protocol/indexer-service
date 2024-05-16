import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Curation} from "./curation.model"
import {Asset} from "./asset.model"

@Entity_()
export class CurationAsset {
    constructor(props?: Partial<CurationAsset>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Curation, {nullable: true})
    curation!: Curation | undefined | null

    @Index_()
    @ManyToOne_(() => Asset, {nullable: true})
    asset!: Asset | undefined | null

    @Column_("int4", {nullable: true})
    status!: number | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    expiry!: bigint | undefined | null

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    timestamp!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    approveAt!: bigint | undefined | null

    @Column_("text", {nullable: true})
    hash!: string | undefined | null
}
