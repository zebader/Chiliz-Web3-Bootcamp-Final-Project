const { GetWalletTokenTransfersJSONResponse } = require("@moralisweb3/common-evm-utils");

/* Keeping this as any, it is hard to type this I dont understand why Moralis doesnt export types n interfaces or couldnt find it */
export type WalletTransfers = typeof GetWalletTokenTransfersJSONResponse 