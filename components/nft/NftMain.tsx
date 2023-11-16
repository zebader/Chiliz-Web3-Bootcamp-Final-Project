import ContractMetadata from "@/components/nft/ContractMetadata";
import {Title} from "@/components/Title";
import { Metadata } from "@/models/nft";
import { getMarketplaceContract, getNFTContract } from "@/utils/getContracts";
import { useContractMetadata, useOwnedNFTs, useAddress, ThirdwebNftMedia } from "@thirdweb-dev/react";
import { NftMint } from "./NftMint";

export const NftMain = () => {
    const { marketplace } = getMarketplaceContract();
    const { nft_contract } = getNFTContract();

    const { data: nft_metadata, isLoading: nftMetadataLoading } =
        useContractMetadata(nft_contract);
    const { data: market_metadata, isLoading: marketMetadataLoading } =
        useContractMetadata(marketplace);
        
    const address = useAddress();
    const { data: ownedNFTs, isLoading: isNftsLoading } = useOwnedNFTs(nft_contract, address);

    console.log(ownedNFTs);
    

    return (
        <div className="flex max-w-7xl m-auto flex-col pb-8">
            <div className="p-8 w-full">
                <Title title=" NFT Collections" />
                { nftMetadataLoading && marketMetadataLoading ? <div>Loading information... </div> :
                <div className="flex gap-4 flex-wrap mb-6">
                    {nftMetadataLoading ||
                        (marketMetadataLoading && (
                            <div className="text-center">
                                Loading Contract Info..
                            </div>
                        ))}
                    {nft_metadata && (
                        <>
                            <ContractMetadata
                                title={"NFT Collection Contract Metadata"}
                                metadata={nft_metadata as Metadata}
                                variant="inactive"
                            />
                            <div className="flex w-full gap-4 flex-wrap">
                                {isNftsLoading && <div>Loading NFT Collection</div>}
                                {ownedNFTs &&
                                    ownedNFTs.map((nft, id) => {
                                        return (
                                            <div className="relative bg-gray-800 w-full text-white p-6 rounded-lg shadow-md flex min-[1080px]:flex-1 gap-4">
                                                <ThirdwebNftMedia
                                                    metadata={nft.metadata}
                                                    height={"auto"}
                                                    width={"auto"}
                                                    style={{ maxHeight: 130 }}
                                                />

                                                <div>
                                                    <div className="p-1">
                                                        <h2 className="text-xl font-bold mb-2">
                                                            {nft.metadata.name}
                                                        </h2>
                                                        <p className="text-gray-400">
                                                            {nft.metadata.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                            )}
                        </div>
                        
                    }
            </div>
            <div className="px-8 pb-8 w-full">
                {market_metadata && (
                    <ContractMetadata
                        title={"NFT Marketplace Contract Metadata"}
                        metadata={market_metadata as Metadata}
                        variant="inactive"
                    />
                )}
            </div>
            <div className="p-8 w-full">
                <NftMint />
            </div>
            
        </div>
    );
}