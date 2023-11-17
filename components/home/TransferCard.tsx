
export type Transfer = {
    token_name: string;
    token_symbol: string;
    address: string;
    from_address: string;
    to_address: string;
    value: string;
}

export const TransferCard = ({transfer}:{transfer:Transfer}) => {
    
    return (
        <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-white text-md">
                <span className="text-sm font-medium mb-4 text-slate-500">Token name:</span> {transfer?.token_name}
            </div>
            <div className="text-white text-md">
                <span className="text-sm font-medium mb-4 text-slate-500">Symbol:</span> {transfer?.token_symbol}
            </div>
            <div className="text-white text-md">
                <span className="text-sm font-medium mb-4 text-slate-500">Address:</span> {transfer?.address}
            </div>
            <div className="text-white text-md">
                <span className="text-sm font-medium mb-4 text-slate-500">From address:</span> {transfer?.from_address}
            </div>
            <div className="text-white text-md">
                <span className="text-sm font-medium mb-4 text-slate-500">To address:</span> {transfer?.to_address}
            </div>
            <div className="text-white text-md">
                <span className="text-sm font-medium mb-4 text-slate-500">To address:</span> {transfer?.to_address}
            </div>
            <div className="text-white text-md">
                <span className="text-sm font-medium mb-4 text-slate-500">Value:</span> {transfer?.value}
            </div>
        </div>
    );
};