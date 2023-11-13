'use client';

import {ClientOnly} from '@/hocs/ClientOnly';
import { useAuth } from '@/hooks/useAuth';
import {ReactNode, FC} from 'react';
import {ConnectSuggestion}   from '@/components/ConnectSuggestion';
import {NavBar}   from '@/components/NavBar';

export const ClientOnlyWithGuard: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const {isConnected} = useAuth()

    return (
        <ClientOnly>
            {isConnected ? (
                <>
                    <NavBar/>
                    {children}
                </>
                ) : <ConnectSuggestion/>}
        </ClientOnly>
    );
};