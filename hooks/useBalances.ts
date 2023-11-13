import { NativeBalance, TokenBalance } from "@/models/tokenBalance";
import { useCallback, useEffect, useState } from "react";
import Moralis from "moralis";
import { useAuth } from "@/hooks/useAuth";
import { apiKey } from "@/utils/apiKey";
const { EvmChain } = require("@moralisweb3/common-evm-utils");

export function useBalances() {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [tokenBalances, setTokenBalances] = useState<TokenBalance[]>([]);
    const [nativeBalance, setNativeBalance] = useState<NativeBalance>();
    const { address } = useAuth();
    const chain = EvmChain.CHILIZ_TESTNET._value

    const fetchTokenBalance = useCallback(async () => {
        try {
            if (!address) return;
            if (!Moralis.Core.isStarted) {
                await Moralis.start({ apiKey });
            }

            const token_balances =
                await Moralis.EvmApi.token.getWalletTokenBalances({
                    address,
                    chain
                });

            setTokenBalances(token_balances.toJSON());

            const native_balance =
                await Moralis.EvmApi.balance.getNativeBalance({
                    address,
                    chain
                });
            setNativeBalance(native_balance.toJSON());

        } catch (error) {
            console.log("Error fetching token balances: ", error);
            setMessage("Error fetching token balances");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchTokenBalance();
    }, [fetchTokenBalance]);

    return {
        loading,
        message,
        tokenBalances,
        nativeBalance,
    };
}
