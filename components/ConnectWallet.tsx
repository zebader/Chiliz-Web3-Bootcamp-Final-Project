'use client';

import { useAuth } from '@/hooks/useAuth';
import {ClientOnly} from '@/hocs/ClientOnly';
import Image from 'next/image'
import shutdown from '@/assets/images/shutdown.png'

export const ConnectWallet = () => {
    const {address, isConnected, handleConnect, handleDisconnect, connectLoading, disconnectLoading} = useAuth()

    return (
            <ClientOnly>
                {!isConnected
                    ? 
                        <button className="h-10 bg-pink-600 text-white px-6 rounded-full hover:bg-pink-800 transition-colors ease-in-out duration-200" onClick={() => handleConnect()}>{connectLoading  ? 'Loading' : "Connect Wallet"}</button>
                    
                    : 
                        <button 
                            onClick={() => handleDisconnect()}>               
                            <Image
                                src={shutdown}
                                width={32}
                                height={32}
                                alt="Picture of the author"
                        /></button>
                    }
            </ClientOnly>
    
    );
};