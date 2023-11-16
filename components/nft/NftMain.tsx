import ContractMetadata from "@/components/nft/ContractMetadata";

import { Metadata } from "@/models/nft";
import { getMarketplaceContract, getNFTContract } from "@/utils/getContracts";
import { useContractMetadata } from "@thirdweb-dev/react";

export const NftMain = () => {
    const { marketplace } = getMarketplaceContract();
    const { nft_contract } = getNFTContract();

    const { data: nft_metadata, isLoading: nftMetadataLoading } =
        useContractMetadata(nft_contract);
    const { data: market_metadata, isLoading: marketMetadataLoading } =
        useContractMetadata(marketplace);

    return (
        <div className="flex max-w-7xl m-auto">
            <div className="p-8">
                <h1 className="text-2xl text-white font-medium mb-6">
                    Contract Details
                </h1>{
                        nftMetadataLoading && marketMetadataLoading ? <div>Loading information... </div> :
                <div className="flex gap-4 flex-wrap">
                    {nftMetadataLoading ||
                        (marketMetadataLoading && (
                            <div className="text-center">
                                Loading Contract Info..
                            </div>
                        ))}
                    {market_metadata && (
                        <ContractMetadata
                            title={"NFT Marketplace Contract Metadata"}
                            metadata={market_metadata as Metadata}
                        />
                    )}
                    {nft_metadata && (
                        <ContractMetadata
                            title={"NFT Collection Contract Metadata"}
                            metadata={nft_metadata as Metadata}
                        />
                    )}
                </div>}
            </div>
        </div>
       
    );
}