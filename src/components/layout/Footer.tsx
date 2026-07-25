"use client";

import Link from "next/link";
import Image from 'next/image';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
          <div className="space-y-6">
            <Link href="#hero" className="inline-block transition-transform hover:scale-105 active:scale-95">
              <Image
                src="/images/logo/logo.png"
                alt="Sriharish Eswarathas Logo"
                width={175} 
                height={56}  
                className="h-12 w-auto brightness-110" 
              />
            </Link>
            <p className="text-foreground/60 leading-relaxed max-w-sm italic">
              "The path that leads to truth is a laborious one."
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Contact</h4>
            <div className="space-y-4">
               <a
                href="mailto:harisheswarathas@gmail.com"
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors hover:text-glow-primary"
              >
                harisheswarathas@gmail.com
              </a>
              <div className="flex gap-6 items-center">
                <a
                  href="https://www.linkedin.com/in/sriharish-eswarathas-002023240/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110 icon-glow"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://github.com/harishe182"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110 icon-glow"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Navigation</h4>
            <ul className="space-y-3 text-foreground/60 text-sm">
               <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
               <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
               <li><a href="#skillnode" className="hover:text-primary transition-colors">SkillNode</a></li>
               <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
               <li><a href="#research" className="hover:text-primary transition-colors">Research</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/40 font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} SRIHARISH ESWARATHAS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span className="hover:text-primary/60 cursor-pointer transition-colors">PRIVACY POLICY</span>
            <span className="hover:text-primary/60 cursor-pointer transition-colors">TERMS OF SERVICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
