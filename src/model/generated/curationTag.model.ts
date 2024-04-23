import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Curation} from "./curation.model"

@Entity_()
export class CurationTag {
    constructor(props?: Partial<CurationTag>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Curation, {nullable: true})
    curation!: Curation | undefined | null

    @Column_("text", {nullable: true})
    name!: string | undefined | null

    @Column_("text", {nullable: true})
    normalizedName!: string | undefined | null
}
