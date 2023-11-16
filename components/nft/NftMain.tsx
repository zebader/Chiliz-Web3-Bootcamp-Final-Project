import ContractMetadata from "@/components/nft/ContractMetadata";
import { Metadata } from "@/models/nft";
import { getMarketplaceContract, getNFTContract } from "@/utils/getContracts";
import { useContractMetadata, useOwnedNFTs, useAddress, ThirdwebNftMedia } from "@thirdweb-dev/react";

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
        <div className="flex max-w-7xl m-auto">
            <div className="p-8">
                <h1 className="text-2xl text-white font-medium mb-6">
                    NFT Collections
                </h1>{
                        nftMetadataLoading && marketMetadataLoading ? <div>Loading information... </div> :
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
                                            style={{ maxHeight: 150 }}
                                        />

                                        <div>
                                            <div className="p-1">
                                                <h2 className="text-2xl font-bold mb-2">
                                                    {nft.metadata.name}
                                                </h2>
                                                <p className="mb-2 text-gray-400">
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
                        {market_metadata && (
                            <ContractMetadata
                                title={"NFT Marketplace Contract Metadata"}
                                metadata={market_metadata as Metadata}
                                variant="inactive"
                            />
                        )}
            </div>
            
        </div>
    );
}