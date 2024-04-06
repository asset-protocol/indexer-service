module.exports = class Data1712389501880 {
    name = 'Data1712389501880'

    async up(db) {
        await db.query(`ALTER TABLE "asset_metadata_history" ADD "content_uri" text`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "asset_metadata_history" DROP COLUMN "content_uri"`)
    }
}
