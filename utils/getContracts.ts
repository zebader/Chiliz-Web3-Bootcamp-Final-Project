import { useContract } from "@thirdweb-dev/react";
import { getMarketplaceAddress, getNFTAddress, getVoteAddress } from "./getContractAddress";

export const getMarketplaceContract = () => {
    let market_address = getMarketplaceAddress();

    const { contract: marketplace, isLoading: marketplaceLoading } =
        useContract(market_address, "marketplace-v3");

    return { marketplace, marketplaceLoading };
};

export const getNFTContract = () => {
    const nft_address = getNFTAddress();
    const { contract: nft_contract, isLoading: nftLoading } =
        useContract(nft_address);
    return { nft_contract, nftLoading };
};

export const getVoteContract = () => {
    const vote_address = getVoteAddress();
    const { contract: vote_contract, isLoading: voteLoading } =
        useContract(vote_address, "vote");
    return { vote_contract, voteLoading };
};
