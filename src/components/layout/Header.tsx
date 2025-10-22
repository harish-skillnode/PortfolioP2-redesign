
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
                  ${scrolled ? 'bg-header-bg backdrop-blur-lg shadow-lg border-b border-border/50' : 'bg-transparent backdrop-blur-md'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <Link 
            href="#hero" 
            className="flex items-center transition-opacity duration-200 ease-in-out hover:opacity-85"
          >
            <Image
              src="/images/logo/logo.png"
              alt="S.E Logo"
              width={160} 
              height={51}  
              className="h-10 sm:h-12 w-auto" 
            />
          </Link>
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}
