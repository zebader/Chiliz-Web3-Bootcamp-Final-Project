'use client'
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";
import { AppContextProvider } from "@/contexts/AppContext";
import { PropsWithChildren } from "react";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { SpicyChain } from "@thirdweb-dev/chains";

const config = createConfig({
    autoConnect: true,
    publicClient: createPublicClient({
        chain: mainnet,
        transport: http(),
    }),
});

export const Providers = ({ children }:PropsWithChildren) => {
    return (
        <WagmiConfig config={config}>
            <ThirdwebProvider
                activeChain={SpicyChain}
                clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
                supportedWallets={[metamaskWallet()]}
            >
                <AppContextProvider>
                    {children}
                </AppContextProvider>
            </ThirdwebProvider>
        </WagmiConfig> 
    );
} 

