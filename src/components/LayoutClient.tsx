
"use client";
import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import { Toaster } from "@/components/ui/toaster";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 7000); // This duration should be enough for the animation to play out

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Preloader />;
    }

    return (
        <>
            {children}
            <Toaster />
        </>
    );
}
