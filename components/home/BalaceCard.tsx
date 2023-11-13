
export const BalanceCard = ({balance}:{balance:string}) => {
    
    return (  
        <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-white text-xl">
            <span className="text-lg text-white font-medium mb-4 text-slate-500">Balance:</span> {balance} CHZ
            </div>
        </div>
       
    );
};