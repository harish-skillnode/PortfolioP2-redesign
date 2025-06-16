
"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

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
        <div className="flex items-center justify-center h-20">
          <Link 
            href="#hero" 
            className="flex items-center transition-opacity duration-200 ease-in-out hover:opacity-85"
          >
            <span className="font-headline text-4xl font-bold text-primary">
              S.E
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
