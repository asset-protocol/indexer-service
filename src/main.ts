import { DataHandlerContext, Log } from '@subsquid/evm-processor'
import { processor } from './processor'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { getLogHandler } from './mappings'
import { ASSETHUB_MANAGER } from './config'

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
    for (let c of ctx.blocks) {
        for (let log of c.logs) {
            handleLog(ctx, log)
        }
    }
})

const handleLog = async (ctx: DataHandlerContext<Store>, log: Log) => {
    if (log.address === ASSETHUB_MANAGER) {
        ctx.log.info("Handling AssetHubManager log")
    }
    const actions = await getLogHandler(ctx, log)
    if (actions) {
        for (let action of actions) {
            await action(ctx, log)
        }
    }
}
