'use client';
import React from 'react';
import {ClientOnlyWithGuard} from '@/hocs/ClientOnlyWithGuard';
import { useAuth } from '@/hooks/useAuth';
import {HomeMain} from '@/components/home/HomeMain';

export const Home = () => {
    const {isConnected} = useAuth()

    return (
        <ClientOnlyWithGuard>
            <HomeMain />
        </ClientOnlyWithGuard>
    );
};