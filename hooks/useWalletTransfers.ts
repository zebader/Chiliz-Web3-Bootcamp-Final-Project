import { WalletTransfers } from "@/models/walletTransfers";
import { useCallback, useEffect, useState } from "react";
import Moralis from "moralis";
import { useAuth } from "@/hooks/useAuth";
import { apiKey } from "@/utils/apiKey";
const { EvmChain } = require("@moralisweb3/common-evm-utils");

export function useWalletTransfers() {

    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [walletTransfers, setWalletTransfers] = useState<WalletTransfers>();
    const { address } = useAuth();
    const chain = EvmChain.CHILIZ_TESTNET._value
    const fetchWalletTransfers = useCallback(async () => {
        try {
            if (!address) return;
            if (!Moralis.Core.isStarted) {
                await Moralis.start({ apiKey });
            }

            const response = await Moralis.EvmApi.token.getWalletTokenTransfers({
                address,
                chain,
              });

              setWalletTransfers(response.toJSON());

        } catch (error) {
            console.log("Error fetching wallet: ", error);
            setMessage("Error fetching wallet");
        } finally {
            setLoading(false);
        }
        
    }, []);

    useEffect(() => {
        fetchWalletTransfers();
    }, [fetchWalletTransfers]);

    return {
        loading,
        message,
        walletTransfers,

    };

}