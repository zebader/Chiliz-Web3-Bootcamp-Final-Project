'use client';

import { FC, ReactNode, useEffect, useState } from "react";

export const ClientOnly: FC<{ children: ReactNode }> = ({
    children,
}) => {
    // State / Props
    const [hasMounted, setHasMounted] = useState(false);

    // Hooks
    useEffect(() => {
        setHasMounted(true);
    }, [])

    // Render
    if (!hasMounted) return null;

    return (
        <div>
            {children}
        </div>
    );
};