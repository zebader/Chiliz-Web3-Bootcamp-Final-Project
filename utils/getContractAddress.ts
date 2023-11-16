export const getMarketplaceAddress = () => {
    return process.env.NEXT_PUBLIC_MARKET_CONTRACT_ADDRESS ?? "";
};

export const getNFTAddress = () => {
    return process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS ?? "";
};

export const getVoteAddress = () => {
    return process.env.NEXT_PUBLIC_VOTE_CONTRACT_ADDRESS ?? "";
};

export const getTokenAddress = () => {
    return process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS ?? "";
};

