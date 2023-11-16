export type Metadata = {
    description: string;
    fee_recipient: string;
    name: string;
    seller_fee_basis_points?: number;
    symbol: string;
};

export type MintMetadata = {
    metadata: {
        image: string;
        name: string;
        description: string;
    };
    to: string;
    supply: 1;
};