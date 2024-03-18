import { DataHandlerContext, Log } from '@subsquid/evm-processor'
import { processor } from './processor'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { getLogHandler } from './mappings'

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
    for (let c of ctx.blocks) {
        for (let log of c.logs) {
            await handleLog(ctx, log)
        }
    }
})

const handleLog = async (ctx: DataHandlerContext<Store>, log: Log) => {
    const actions = await getLogHandler(ctx, log)
    if (actions) {
        for (let action of actions) {
            await action(ctx, log)
        }
    }
}
