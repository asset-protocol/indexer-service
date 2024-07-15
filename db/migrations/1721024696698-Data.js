module.exports = class Data1721024696698 {
    name = 'Data1721024696698'

    async up(db) {
        await db.query(`ALTER TABLE "curation" ADD "biz_id" text NOT NULL`)
        await db.query(`CREATE UNIQUE INDEX "IDX_1eb72187a37b463874fd16ad88" ON "curation" ("biz_id") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "curation" DROP COLUMN "biz_id"`)
        await db.query(`DROP INDEX "public"."IDX_1eb72187a37b463874fd16ad88"`)
    }
}
