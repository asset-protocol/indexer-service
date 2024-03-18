module.exports = class Data1710759157149 {
    name = 'Data1710759157149'

    async up(db) {
        await db.query(`ALTER TABLE "asset_hub" DROP COLUMN "version"`)
        await db.query(`ALTER TABLE "asset_hub" ADD "version" text`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "asset_hub" ADD "version" integer`)
        await db.query(`ALTER TABLE "asset_hub" DROP COLUMN "version"`)
    }
}
