'use client';
import React from 'react';
import {ClientOnlyWithGuard} from '@/hocs/ClientOnlyWithGuard';
import {DaoMain} from '@/components/dao/DaoMain';

export const Dao = () => {
    return (
        <ClientOnlyWithGuard>
            <DaoMain />
        </ClientOnlyWithGuard>
    );
};