
export type ActiveChain = { 
  chain: string; 
  chain_id: string; 
  first_transaction?: 
    { block_number: string;
      block_timestamp: string;
      transaction_hash?: string | undefined; } | undefined;
  last_transaction?:
    { block_number: string;
      block_timestamp: string;
      transaction_hash?: string | undefined; } | undefined;
}

 export type WalletDetails = { 
  active_chains: ActiveChain[];
  address: string;

    }