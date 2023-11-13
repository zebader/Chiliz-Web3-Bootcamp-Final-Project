export type NativeBalance = {
    balance: string;
};
export type TokenBalance = {
    token_address: string;
    name: string;
    symbol: string;
    logo?: string;
    thumbnail?: string;
    decimals?: number;
    balance: string;
    possible_spam?: boolean;
    verified_collection?: boolean;
};

export type TokenData = {
    address: string;
    name: string;
    symbol: string;
    decimals: string;
    logo?: string;
    logo_hash?: string;
    thumbnail?: string;
    block_number?: string | null;
    validated?: string | null;
    created_at?: string | null;
    possible_spam?: boolean;
    verified_collection?: boolean;
};
