import { DataHandlerContext, Log } from '@subsquid/evm-processor'
import { processor } from './processor'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import logHandlers from './mappings'

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
    for (let c of ctx.blocks) {
        for (let log of c.logs) {
            handleLog(ctx, log)
        }
    }
})

const handleLog = async (ctx: DataHandlerContext<Store>, log: Log) => {
    const actions = logHandlers.get(log.topics[0])
    if (actions) {
        actions.forEach(action => {
            action(ctx, log);
        })
    }
}
