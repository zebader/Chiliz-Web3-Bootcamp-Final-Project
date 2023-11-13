import {ActiveChain} from "@/models/walletDetails"
export const ChainCard = ({chain}:{chain:ActiveChain}) => {
    
    return (
        <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-white text-xl">
                <span className="text-lg text-white font-medium mb-4 text-slate-500">Chain:</span> {chain.chain}
            </div>
            <div className="text-white text-xl">
                <span className="text-lg text-white font-medium mb-4 text-slate-500">Chain ID:</span> {chain.chain_id}
            </div>
        </div>
    );
};