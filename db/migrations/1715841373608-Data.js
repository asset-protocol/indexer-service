module.exports = class Data1715841373608 {
    name = 'Data1715841373608'

    async up(db) {
        await db.query(`ALTER TABLE "curation_asset" DROP COLUMN "order"`)
        await db.query(`ALTER TABLE "curation" ADD "expiry" numeric`)
        await db.query(`ALTER TABLE "curation_asset" ADD "expiry" numeric`)
        await db.query(`ALTER TABLE "curation_asset" ADD "hash" text`)
        await db.query(`ALTER TABLE "curation_asset" DROP COLUMN "status"`)
        await db.query(`ALTER TABLE "curation_asset" ADD "status" integer`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "curation_asset" ADD "order" numeric`)
        await db.query(`ALTER TABLE "curation" DROP COLUMN "expiry"`)
        await db.query(`ALTER TABLE "curation_asset" DROP COLUMN "expiry"`)
        await db.query(`ALTER TABLE "curation_asset" DROP COLUMN "hash"`)
        await db.query(`ALTER TABLE "curation_asset" ADD "status" character varying(8)`)
        await db.query(`ALTER TABLE "curation_asset" DROP COLUMN "status"`)
    }
}
