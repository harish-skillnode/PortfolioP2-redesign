"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react'; // Using Code2 as a generic logo icon

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

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
        <div className="flex items-center justify-between h-20">
          <Link href="#hero" className="flex items-center space-x-2 text-2xl font-headline font-bold text-primary hover:text-accent transition-colors">
            <Code2 className="h-8 w-8 icon-glow" />
            <span>Sri's Folio</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium text-foreground hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {/* Mobile menu button can be added here if needed */}
        </div>
      </div>
    </header>
  );
}
