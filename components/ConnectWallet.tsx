'use client';

import { useAuth } from '@/hooks/useAuth';
import {ClientOnly} from '@/hocs/ClientOnly';

export const ConnectWallet = () => {
    const {address, isConnected, handleConnect, handleDisconnect, connectLoading, disconnectLoading} = useAuth()

    return (
        <div className='fixed bottom-0 flex flex-row w-full justify-center p-6'>
            <ClientOnly>
                {!isConnected
                    ? <div>
                        <button className="h-10 bg-blue-600 text-white px-6 rounded-full hover:bg-blue-800 transition-colors ease-in-out duration-200" onClick={() => handleConnect()}>{connectLoading  ? 'Loading' : "Connect Wallet"}</button>
                    </div>
                    : <div className='flex flex-col items-center'>
                        <label className="text-zinc-400 block mb-2">Wallet Address Connected</label>
                        <code className="bg-zinc-700 text-zinc-200 p-4 rounded block mb-4"><pre>{address}</pre></code>
                        <button className="h-10 bg-red-600 text-white px-6 rounded-full hover:bg-red-800 transition-colors ease-in-out duration-200" onClick={() => handleDisconnect()}>{ disconnectLoading ? 'Loading' : "Disconnect Wallet"}</button>
                    </div>}
            </ClientOnly>
        </div>
    );
};