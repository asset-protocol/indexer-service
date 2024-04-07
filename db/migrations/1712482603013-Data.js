module.exports = class Data1712482603013 {
    name = 'Data1712482603013'

    async up(db) {
        await db.query(`ALTER TABLE "asset_hub" ADD "management" text`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "asset_hub" DROP COLUMN "management"`)
    }
}
