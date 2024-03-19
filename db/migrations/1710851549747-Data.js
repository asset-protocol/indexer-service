module.exports = class Data1710851549747 {
    name = 'Data1710851549747'

    async up(db) {
        await db.query(`CREATE TABLE "asset_metadata_history" ("id" character varying NOT NULL, "timestamp" numeric, "metadata" text, "asset_id" character varying, CONSTRAINT "PK_94cab17983a7cc063b3c9ffb88b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_8a6618115b581777839b5c5226" ON "asset_metadata_history" ("asset_id") `)
        await db.query(`CREATE INDEX "IDX_a5c56b22e8b74e45f5dcf76090" ON "asset_metadata_history" ("timestamp") `)
        await db.query(`CREATE TABLE "collector" ("id" character varying NOT NULL, "collector" text, "token_id" numeric, "collect_module" text, "collect_module_data" text, "timestamp" numeric, "asset_id" character varying, CONSTRAINT "PK_0d93071208ac3e8dd49506d903f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e235ae1707cf7e637e9353a51b" ON "collector" ("asset_id") `)
        await db.query(`CREATE INDEX "IDX_a8122903753f245d5aa3f2c7dd" ON "collector" ("collector") `)
        await db.query(`CREATE INDEX "IDX_11049fc3d3cabc159ee2fd3bd2" ON "collector" ("timestamp") `)
        await db.query(`CREATE TABLE "asset" ("id" character varying NOT NULL, "asset_id" numeric, "hub" text, "publisher" text, "content_uri" text, "timestamp" numeric, "hash" text, "name" text, "type" text, "tags" text, "metadata" text, "collect_module" text, "collect_module_init_data" text, "collect_nft" text, "collect_count" numeric, "gated_module" text, "gated_module_init_data" text, CONSTRAINT "PK_1209d107fe21482beaea51b745e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2a48e81afa7729ed31c2c7b18e" ON "asset" ("asset_id") `)
        await db.query(`CREATE INDEX "IDX_d439f59d73cbe9ba229c136375" ON "asset" ("hub") `)
        await db.query(`CREATE INDEX "IDX_da5414205913c272959745b45f" ON "asset" ("publisher") `)
        await db.query(`CREATE INDEX "IDX_b08d89b57c60050b62d774665f" ON "asset" ("timestamp") `)
        await db.query(`CREATE TABLE "contract_info" ("id" character varying NOT NULL, "name" text, "symbol" text, "description" text, "image" text, "banner_image" text, "featured_image" text, "external_link" text, "collaborators" text, CONSTRAINT "PK_de5fc90e42a90a8a9d5233e3f2e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "asset_hub" ("id" character varying NOT NULL, "admin" text, "name" text, "fee_collect_module" text, "nft_gated_module" text, "create_asset_module" text, "timestamp" numeric, "implementation" text, "version" text, "hash" text, CONSTRAINT "PK_99771a62f48504f4154931b5819" PRIMARY KEY ("id"))`)
        await db.query(`CREATE UNIQUE INDEX "IDX_02047cd2770a4aca3144fdc342" ON "asset_hub" ("name") `)
        await db.query(`CREATE INDEX "IDX_de83b6baa9c66ff8a598cddb4b" ON "asset_hub" ("timestamp") `)
        await db.query(`ALTER TABLE "asset_metadata_history" ADD CONSTRAINT "FK_8a6618115b581777839b5c52260" FOREIGN KEY ("asset_id") REFERENCES "asset"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "collector" ADD CONSTRAINT "FK_e235ae1707cf7e637e9353a51b7" FOREIGN KEY ("asset_id") REFERENCES "asset"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "asset_metadata_history"`)
        await db.query(`DROP INDEX "public"."IDX_8a6618115b581777839b5c5226"`)
        await db.query(`DROP INDEX "public"."IDX_a5c56b22e8b74e45f5dcf76090"`)
        await db.query(`DROP TABLE "collector"`)
        await db.query(`DROP INDEX "public"."IDX_e235ae1707cf7e637e9353a51b"`)
        await db.query(`DROP INDEX "public"."IDX_a8122903753f245d5aa3f2c7dd"`)
        await db.query(`DROP INDEX "public"."IDX_11049fc3d3cabc159ee2fd3bd2"`)
        await db.query(`DROP TABLE "asset"`)
        await db.query(`DROP INDEX "public"."IDX_2a48e81afa7729ed31c2c7b18e"`)
        await db.query(`DROP INDEX "public"."IDX_d439f59d73cbe9ba229c136375"`)
        await db.query(`DROP INDEX "public"."IDX_da5414205913c272959745b45f"`)
        await db.query(`DROP INDEX "public"."IDX_b08d89b57c60050b62d774665f"`)
        await db.query(`DROP TABLE "contract_info"`)
        await db.query(`DROP TABLE "asset_hub"`)
        await db.query(`DROP INDEX "public"."IDX_02047cd2770a4aca3144fdc342"`)
        await db.query(`DROP INDEX "public"."IDX_de83b6baa9c66ff8a598cddb4b"`)
        await db.query(`ALTER TABLE "asset_metadata_history" DROP CONSTRAINT "FK_8a6618115b581777839b5c52260"`)
        await db.query(`ALTER TABLE "collector" DROP CONSTRAINT "FK_e235ae1707cf7e637e9353a51b7"`)
    }
}
