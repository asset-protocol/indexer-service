module.exports = class Data1711438531529 {
    name = 'Data1711438531529'

    async up(db) {
        await db.query(`ALTER TABLE "asset" ADD "last_updated_at" numeric`)
        await db.query(`ALTER TABLE "asset" ADD "query1" text`)
        await db.query(`ALTER TABLE "asset" ADD "query2" text`)
        await db.query(`CREATE INDEX "IDX_1e7c82e366bef4ec6c2ba46ca2" ON "asset" ("last_updated_at") `)
        await db.query(`CREATE INDEX "IDX_0b784bbba208ae9850eb203dd0" ON "asset" ("query1") `)
        await db.query(`CREATE INDEX "IDX_c829d56b31e8e2730cea6029f8" ON "asset" ("query2") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "asset" DROP COLUMN "last_updated_at"`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "query1"`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "query2"`)
        await db.query(`DROP INDEX "public"."IDX_1e7c82e366bef4ec6c2ba46ca2"`)
        await db.query(`DROP INDEX "public"."IDX_0b784bbba208ae9850eb203dd0"`)
        await db.query(`DROP INDEX "public"."IDX_c829d56b31e8e2730cea6029f8"`)
    }
}
