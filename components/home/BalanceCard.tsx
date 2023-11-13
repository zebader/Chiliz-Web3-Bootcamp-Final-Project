
export const BalanceCard = ({balance}:{balance:string}) => {
    
    return (  
        <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-white text-md">
                <span className="text-sm font-medium mb-4 text-slate-500">Balance:</span> {balance} CHZ
            </div>
        </div>
       
    );
};