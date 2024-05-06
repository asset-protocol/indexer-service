module.exports = class Data1714993581003 {
    name = 'Data1714993581003'

    async up(db) {
        await db.query(`ALTER TABLE "curation" ADD "status" integer`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "curation" DROP COLUMN "status"`)
    }
}
