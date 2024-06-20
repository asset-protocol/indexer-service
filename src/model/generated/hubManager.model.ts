import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"
import {ModulesInfo} from "./_modulesInfo"

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

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new ModulesInfo(undefined, obj)}, nullable: true})
    moudles!: ModulesInfo | undefined | null
}
