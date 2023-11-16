import { useBalances } from '@/hooks/useBalances';
import { useWalletDetails } from '@/hooks/useWalletDetails';
import { formatBalance } from '@/utils/formatBalance';
import {BalanceCard} from "./BalanceCard"
import {ChainCard} from "./ChainCard"
import {Title} from "@/components/Title";

export const HomeMain = () => {
    const { message: tokenMessage, loading: tokenLoading, nativeBalance } = useBalances();
    const { message: walletMessage ,loading: walletLoading, walletDetails } = useWalletDetails();
    
    return (
        <div className="flex max-w-7xl m-auto">

                <div className="p-8 w-full">
                <Title title="Welcome"/>
                    {
                        tokenLoading || walletLoading ? <div>Loading information... </div>:
                            <div className="flex gap-4">
                                <div>
                                    <h2 className="text-sm font-medium mb-4 text-slate-500">Native Balance</h2>
                                    <BalanceCard balance={formatBalance(nativeBalance?.balance)} />
                                </div>
                                <div>
                                    <h2 className="text-sm font-medium mb-4 text-slate-500">Active chains (mainnet)</h2>
                                    <div>
                                        {walletDetails?.active_chains ? (
                                            walletDetails?.active_chains.map((chain) => {
                                                return <ChainCard chain={chain} key={chain.chain_id}/>
                                            })) : <div>No active chains</div>}
                                    </div>
                                </div>
                            </div>
                    }
                </div> 
            {tokenMessage || walletMessage && <p>{tokenMessage + ' ' + walletMessage}</p>}
        </div>

    );
};