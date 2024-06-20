import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {CurationAsset} from "./curationAsset.model"
import {CurationTag} from "./curationTag.model"
import {AttributeItem} from "./_attributeItem"

@Entity_()
export class Curation {
    constructor(props?: Partial<Curation>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: true})
    tokenURI!: string | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    publisher!: string | undefined | null

    @Column_("int4", {nullable: true})
    status!: number | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    expiry!: bigint | undefined | null

    @Column_("text", {nullable: true})
    hash!: string | undefined | null

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    timestamp!: bigint | undefined | null

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    lastUpdatedAt!: bigint | undefined | null

    @OneToMany_(() => CurationAsset, e => e.curation)
    assets!: CurationAsset[]

    @Column_("text", {nullable: true})
    name!: string | undefined | null

    @Column_("text", {nullable: true})
    description!: string | undefined | null

    @Column_("text", {nullable: true})
    image!: string | undefined | null

    @Column_("text", {nullable: true})
    bannerImage!: string | undefined | null

    @Column_("text", {nullable: true})
    externalUrl!: string | undefined | null

    @Column_("text", {nullable: true})
    backgroundColor!: string | undefined | null

    @OneToMany_(() => CurationTag, e => e.curation)
    tags!: CurationTag[]

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val == null ? undefined : val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => val == null ? undefined : new AttributeItem(undefined, val))}, nullable: true})
    attributes!: (AttributeItem | undefined | null)[] | undefined | null

    @Column_("jsonb", {nullable: true})
    metadata!: unknown | undefined | null
}
