import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class HubManager {
    constructor(props?: Partial<HubManager>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    timestamp!: bigint | undefined | null

    @Column_("text", {nullable: true})
    globalModule!: string | undefined | null

    @Column_("text", {nullable: true})
    hubCreatorNft!: string | undefined | null

    @Column_("text", {nullable: true})
    curation!: string | undefined | null
}
