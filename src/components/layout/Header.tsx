"use client";

import Link from 'next/link';
import Image from 'next/image'; 
import { useEffect, useState } from 'react';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out 
                  ${scrolled ? 'bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-2xl py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <Link 
            href="#hero" 
            className="flex items-center transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Image
              src="/images/logo/logo.png"
              alt="Sriharish Eswarathas Logo"
              width={160} 
              height={51}  
              className="h-10 sm:h-12 w-auto brightness-110" 
            />
          </Link>
      </div>
      <ScrollProgress />
    </header>
  );
}
