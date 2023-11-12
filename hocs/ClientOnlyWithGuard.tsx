'use client';

import {ClientOnly} from '@/hocs/ClientOnly';
import { useAuth } from '@/hooks/useAuth';
import {ReactNode, FC} from 'react';
import {ConnectSuggestion}   from '@/components/ConnectSuggestion';

export const ClientOnlyWithGuard: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const {isConnected} = useAuth()

    return (
        <ClientOnly>
            {isConnected ? children : <ConnectSuggestion/>}
        </ClientOnly>
    );
};