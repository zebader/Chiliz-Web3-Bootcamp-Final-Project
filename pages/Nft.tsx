'use client';
import React from 'react';
import {ClientOnlyWithGuard} from '@/hocs/ClientOnlyWithGuard';
import {NftMain} from '@/components/nft/NftMain';

export const Nft = () => {
    return (
        <ClientOnlyWithGuard>
            <NftMain />
        </ClientOnlyWithGuard>
    );
};