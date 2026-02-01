
"use client";
import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import { Toaster } from "@/components/ui/toaster";
import { motion } from 'framer-motion';

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {children}
            <Toaster />
        </motion.div>
    );
}
