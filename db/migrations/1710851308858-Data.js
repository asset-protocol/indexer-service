module.exports = class Data1710851308858 {
    name = 'Data1710851308858'

    async up(db) {
        await db.query(`ALTER TABLE "asset" DROP COLUMN "collect_module_data"`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "gated_module_data"`)
        await db.query(`ALTER TABLE "asset" ADD "collect_module_init_data" text`)
        await db.query(`ALTER TABLE "asset" ADD "gated_module_init_data" text`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "asset" ADD "collect_module_data" text`)
        await db.query(`ALTER TABLE "asset" ADD "gated_module_data" text`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "collect_module_init_data"`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "gated_module_init_data"`)
    }
}
