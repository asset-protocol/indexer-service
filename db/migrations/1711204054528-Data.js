module.exports = class Data1711204054528 {
    name = 'Data1711204054528'

    async up(db) {
        await db.query(`ALTER TABLE "asset" ADD "image" text`)
        await db.query(`ALTER TABLE "asset" ADD "description" text`)
        await db.query(`ALTER TABLE "asset" ADD "extra" text`)
        await db.query(`ALTER TABLE "asset" ADD "content" text`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "asset" DROP COLUMN "image"`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "description"`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "extra"`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "content"`)
    }
}
