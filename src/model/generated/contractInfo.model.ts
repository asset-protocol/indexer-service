import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class ContractInfo {
    constructor(props?: Partial<ContractInfo>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: true})
    name!: string | undefined | null

    @Column_("text", {nullable: true})
    symbol!: string | undefined | null

    @Column_("text", {nullable: true})
    description!: string | undefined | null

    @Column_("text", {nullable: true})
    image!: string | undefined | null

    @Column_("text", {nullable: true})
    bannerImage!: string | undefined | null

    @Column_("text", {nullable: true})
    featuredImage!: string | undefined | null

    @Column_("text", {nullable: true})
    externalLink!: string | undefined | null

    @Column_("text", {nullable: true})
    collaborators!: string | undefined | null
}
