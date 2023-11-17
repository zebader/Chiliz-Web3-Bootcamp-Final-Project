import { useBalances } from '@/hooks/useBalances';
import { useWalletDetails } from '@/hooks/useWalletDetails';
import { useWalletTransfers} from "@/hooks/useWalletTransfers";
import { useWalletTransactions} from "@/hooks/useWalletTransactions";
import { formatBalance } from '@/utils/formatBalance';
import {BalanceCard} from "./BalanceCard"
import {ChainCard} from "./ChainCard"
import {TransferCard, Transfer} from "./TransferCard"
import {TransactionCard, Transaction} from "./TransactionCard"
import {Title} from "@/components/Title";

export const HomeMain = () => {
    const { message: tokenMessage, loading: tokenLoading, nativeBalance } = useBalances();
    const { message: walletMessage ,loading: walletLoading, walletDetails } = useWalletDetails();
    const { message: walletTransfersMessage ,loading: walletTransfersLoading, walletTransfers } = useWalletTransfers();
    const { message: walletTransactionsMessage ,loading: walletTransactionsLoading, walletTransactions } = useWalletTransactions();
    
    return (
        <div className="flex max-w-7xl m-auto flex-col">
            <div className="p-8 w-full">
                <Title title="DVNE - DecentralVote & NFT Explorer"/>
                <p>
                Welcome to DecentralVote & NFT Explorer, the revolutionary Web3 application that seamlessly combines decentralized voting with a comprehensive NFT collection explorer. Immerse yourself in the world of blockchain technology, where transparency, security, and community engagement converge.
                </p>
                </div>

                <div className="p-8 w-full">
                <Title title="Wallet"/>
                    {
                        tokenLoading || walletLoading || walletTransfersLoading || walletTransactionsLoading ? <div>Loading information... </div>:
                            <div className="flex gap-4 flex-wrap">
                                
                                {nativeBalance?.balance && <div>
                                    <h2 className="text-sm font-medium mb-4 text-slate-500">Native Balance</h2>
                                    <BalanceCard balance={formatBalance(nativeBalance?.balance)} />
                                </div>}
                                {walletDetails?.active_chains.length && <div>
                                    <h2 className="text-sm font-medium mb-4 text-slate-500">Active chains (mainnet)</h2>
                                    <div>
                                        {walletDetails?.active_chains ? (
                                            walletDetails?.active_chains.map((chain) => {
                                                return <ChainCard chain={chain} key={chain.chain_id}/>
                                            })) : <div>No active chains</div>}
                                    </div>
                                </div>}

                            </div>
                    }
                </div>
                <div className="p-8 w-full">
                    <h2 className="text-sm font-medium mb-4 text-slate-500">Wallet transfers</h2>
                    <div className="flex flex-col gap-4">
                        {walletTransfers?.result ? (
                            walletTransfers?.result.map((transfer:Transfer, index:number) => {
                                return (
                                    <TransferCard transfer={transfer} key={transfer?.address+index}/>
                                )
                            })) : <div>No transfers</div>}
                    </div>
                </div>
                <div className="p-8 w-full">
                    <h2 className="text-sm font-medium mb-4 text-slate-500">Wallet transactions</h2>
                    <div className="flex flex-col gap-4">
                        {walletTransactions?.result ? (
                            walletTransactions?.result.map((transaction:Transaction, index:number) => {
                                return (
                                    <TransactionCard transaction={transaction} key={transaction?.hash + index}/>
                                )
                            })) : <div>No transactions</div>}
                    </div>
                </div>
                
                {tokenMessage || walletMessage || walletTransfersMessage || walletTransactionsMessage && (
                    <div className="p-8 w-full">
                        Notes: <p>{tokenMessage + ' ' + walletMessage + ' ' + walletTransfersMessage + ' ' + walletTransactionsMessage}</p>
                    </div>)
                }
        </div>

    );
};