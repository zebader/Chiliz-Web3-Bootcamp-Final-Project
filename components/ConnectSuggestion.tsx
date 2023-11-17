import Image from 'next/image'
import loop from '@/assets/images/loop.gif'
import { ConnectWallet } from '@/components/ConnectWallet';
export const ConnectSuggestion = () => {
    return (
        <div className='flex flex-col h-screen justify-center items-center'>
                <Image
                    src={loop}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                />
                <h1 className='text-3xl font-bold'>Welcome to DVNE</h1>
            <p>Please connect to your wallet</p>
            <div className='p-12'>
                <ConnectWallet />

            </div>
        </div>
    );
};