import { RpcClient } from '@subsquid/rpc-client';

export const blockContext = {
  _chain: {
    client: new RpcClient({
      url: process.env.RPC_ENDPOINT ?? '',
    }),
  },
  block: {
    height: 0,
  },
};
