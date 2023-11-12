'use client'
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";
import { AppContextProvider } from "@/contexts/AppContext";
import { PropsWithChildren } from "react";

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
            <AppContextProvider>
                {children}
            </AppContextProvider>
        </WagmiConfig> 
    );
} 

