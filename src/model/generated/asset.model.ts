import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {AssetTag} from "./assetTag.model"
import {AssetMetadataHistory} from "./assetMetadataHistory.model"
import {AttributeItem} from "./_attributeItem"
import {Collector} from "./collector.model"
import {CurationAsset} from "./curationAsset.model"

@Entity_()
export class Asset {
    constructor(props?: Partial<Asset>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_({unique: true})
    @Column_("text", {nullable: false})
    bizId!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    assetId!: bigint

    @Column_("text", {nullable: false})
    hub!: string

    @Column_("text", {nullable: true})
    hubName!: string | undefined | null

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

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    lastUpdatedAt!: bigint | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    query1!: string | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    query2!: string | undefined | null

    @Column_("text", {nullable: true})
    name!: string | undefined | null

    @Column_("text", {nullable: true})
    type!: string | undefined | null

    @Column_("text", {nullable: true})
    image!: string | undefined | null

    @Column_("text", {nullable: true})
    description!: string | undefined | null

    @OneToMany_(() => AssetTag, e => e.asset)
    tags!: AssetTag[]

    @Column_("jsonb", {nullable: true})
    metadata!: unknown | undefined | null

    @Column_("text", {nullable: true})
    content!: string | undefined | null

    @OneToMany_(() => AssetMetadataHistory, e => e.asset)
    metadataHistories!: AssetMetadataHistory[]

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new AttributeItem(undefined, marshal.nonNull(val)))}, nullable: true})
    attributes!: (AttributeItem)[] | undefined | null

    @Column_("text", {nullable: true})
    collectModule!: string | undefined | null

    @Column_("text", {nullable: true})
    collectModuleInitData!: string | undefined | null

    @Column_("text", {nullable: true})
    collectNft!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    collectCount!: bigint | undefined | null

    @OneToMany_(() => Collector, e => e.asset)
    collectors!: Collector[]

    @Column_("text", {nullable: true})
    gatedModule!: string | undefined | null

    @Column_("text", {nullable: true})
    gatedModuleInitData!: string | undefined | null

    @OneToMany_(() => CurationAsset, e => e.asset)
    curations!: CurationAsset[]
}
