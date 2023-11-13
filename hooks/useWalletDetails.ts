import { WalletDetails } from "@/models/walletDetails";
import { useCallback, useEffect, useState } from "react";
import Moralis from "moralis";
import { useAuth } from "@/hooks/useAuth";
import { apiKey } from "@/utils/apiKey";

export function useWalletDetails() {

    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [walletDetails, setWalletDetails] = useState<WalletDetails>();
    const { address } = useAuth();

    const fetchWalletDetails = useCallback(async () => {
        try {
            if (!address) return;
            if (!Moralis.Core.isStarted) {
                await Moralis.start({ apiKey });
            }

            const walletDetails = await Moralis.EvmApi.wallets.getWalletActiveChains({
                address
              });

              setWalletDetails(walletDetails.toJSON());

        } catch (error) {
            console.log("Error fetching wallet: ", error);
            setMessage("Error fetching wallet");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchWalletDetails();
    }, [fetchWalletDetails]);

    return {
        loading,
        message,
        walletDetails,

    };

}