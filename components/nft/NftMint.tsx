import { MintMetadata } from "@/models/nft";
import { getNFTContract } from "@/utils/getContracts";
import { useAddress, useMintNFT } from "@thirdweb-dev/react";
import { useState } from "react";
import {Title} from "@/components/Title";

export const NftMint= () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const { nft_contract } = getNFTContract();

    const { mutate: mintNFT, isLoading, error } = useMintNFT(nft_contract);
    const address = useAddress();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setDescription(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        try {
            event.preventDefault();

            if (name === "" || description === "" || image === "") {
                return;
            }

            const metadata: MintMetadata = {
                metadata: {
                    name,
                    description,
                    image,
                },
                to: address ?? "",
                supply: 1,
            };

            mintNFT(metadata);
        } catch (e) {
            console.log("Error Minting", e);
        }
    };
    return (

            <div>
                <Title title="Nft Mint" />
                <div className="relative bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-2xl m-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-bold mb-2">Name:</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Name of the NFT"
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">
                                Description:{" "}
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Description of the NFT"
                                value={description}
                                onChange={handleDescriptionChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">
                                Image URL:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Image of the NFT"
                                type="text"
                                value={image}
                                onChange={handleImageChange}
                            />
                        </div>
                        <button
                            className="mt-6 rounded-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded self-end"
                            type="submit"
                        >
                            Mint
                        </button>
                    </form>

                    {isLoading && (
                        <div className="text-center mt-4">
                            Minting in progress ...
                        </div>
                    )}
                    {(error as unknown as boolean) && (
                        <div className="text-center mt-4">
                            Minting in progress ...
                        </div>
                    )}
                </div>
            </div>
    
    );
}
