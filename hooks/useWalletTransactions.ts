import { useCallback, useEffect, useState } from "react";
import Moralis from "moralis";
import { useAuth } from "@/hooks/useAuth";
import { apiKey } from "@/utils/apiKey";
const { EvmChain } = require("@moralisweb3/common-evm-utils");

export function useWalletTransactions() {

    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [walletTransactions, setWalletTransactions] = useState<any>();
    const { address } = useAuth();
    const chain = EvmChain.CHILIZ_TESTNET._value
    const fetchWalletTransactions = useCallback(async () => {
        try {
            if (!address) return;
            if (!Moralis.Core.isStarted) {
                await Moralis.start({ apiKey });
            }

            const response = await Moralis.EvmApi.transaction.getWalletTransactions({
                address,
                chain,
              });

              setWalletTransactions(response.toJSON());

        } catch (error) {
            console.log("Error fetching wallet: ", error);
            setMessage("Error fetching wallet");
        } finally {
            setLoading(false);
        }
        
    }, []);

    useEffect(() => {
        fetchWalletTransactions();
    }, [fetchWalletTransactions]);

    return {
        loading,
        message,
        walletTransactions,

    };

}