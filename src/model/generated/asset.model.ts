import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {AssetMetadataHistory} from "./assetMetadataHistory.model"
import {Collector} from "./collector.model"

@Entity_()
export class Asset {
    constructor(props?: Partial<Asset>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    assetId!: bigint | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    hub!: string | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    publisher!: string | undefined | null

    @Column_("text", {nullable: true})
    contentUri!: string | undefined | null

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    timestamp!: bigint | undefined | null

    @Column_("text", {nullable: true})
    hash!: string | undefined | null

    @Column_("text", {nullable: true})
    name!: string | undefined | null

    @Column_("text", {nullable: true})
    type!: string | undefined | null

    @Column_("text", {nullable: true})
    tags!: string | undefined | null

    @Column_("text", {nullable: true})
    metadata!: string | undefined | null

    @OneToMany_(() => AssetMetadataHistory, e => e.asset)
    metadataHistories!: AssetMetadataHistory[]

    @Column_("text", {nullable: true})
    collectModule!: string | undefined | null

    @Column_("text", {nullable: true})
    collectModuleData!: string | undefined | null

    @Column_("text", {nullable: true})
    collectNft!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    collectCount!: bigint | undefined | null

    @OneToMany_(() => Collector, e => e.asset)
    collectors!: Collector[]

    @Column_("text", {nullable: true})
    gatedModule!: string | undefined | null

    @Column_("text", {nullable: true})
    gatedModuleData!: string | undefined | null
}
