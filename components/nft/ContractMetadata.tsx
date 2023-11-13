import { Metadata } from "@/models/nft";
import { FC } from "react";

type MetadataProps = {
    metadata: Metadata;
    title: string;
};

const ContractMetadata: FC<MetadataProps> = ({ metadata, title }) => {
    return (
        <div>
            <h2 className="text-sm font-medium mb-4 text-slate-500">
                {title}
            </h2>

            <div className="bg-gray-800 rounded-lg p-4">
                {metadata.name && (
                    <div className="text-white text-md">
                        <span className="text-sm font-medium mb-4 text-slate-500">Name:</span> {metadata.name}
                    </div>
                )}
                {metadata.description && (
                    <div className="text-white text-md">
                        <span className="text-sm font-medium mb-4 text-slate-500">Description:</span> {metadata.description}
                    </div>
                )}
                {metadata.symbol && (
                    <div className="text-white text-md">
                        <span className="text-sm font-medium mb-4 text-slate-500">Symbol:</span> {metadata.symbol}
                    </div>
                )}
                {metadata.fee_recipient && (
                    <div className="text-white text-md">
                        <span className="text-sm font-medium mb-4 text-slate-500">Fee Recipient:</span> {metadata.fee_recipient}
                    </div>
                )}
                {metadata.seller_fee_basis_points !== undefined && (
                    <div className="text-white text-md">
                        <span className="text-sm font-medium mb-4 text-slate-500">Seller Fee Basis Points: </span>
                        {metadata.seller_fee_basis_points}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContractMetadata;