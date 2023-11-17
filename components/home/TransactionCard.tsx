export type Transaction = {
    gas: string;
    gas_price: string;
    from_address: string;
    hash: string;
}
export const TransactionCard = ({transaction}:{transaction:Transaction}) => {
    
    return (
        <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-white text-md">
                <span className="text-sm font-medium mb-4 text-slate-500">From Address:</span> {transaction?.from_address}
            </div>
            <div className="text-white text-md">
                <span className="text-sm font-medium mb-4 text-slate-500">Gas:</span> {transaction?.gas}
            </div>
            <div className="text-white text-md">
                <span className="text-sm font-medium mb-4 text-slate-500">Gas price:</span> {transaction?.gas_price}
            </div>
        </div>
    );
};