'use client';
import React from 'react';
import {ClientOnlyWithGuard} from '@/hocs/ClientOnlyWithGuard';
import {HomeMain} from '@/components/home/HomeMain';

export const Home = () => {
    return (
        <ClientOnlyWithGuard>
            <HomeMain />
        </ClientOnlyWithGuard>
    );
};