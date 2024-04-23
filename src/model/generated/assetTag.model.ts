import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Asset} from "./asset.model"

@Entity_()
export class AssetTag {
    constructor(props?: Partial<AssetTag>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: true})
    name!: string | undefined | null

    @Column_("text", {nullable: true})
    normalizedName!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Asset, {nullable: true})
    asset!: Asset | undefined | null
}
