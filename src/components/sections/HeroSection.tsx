"use client";

import type React from 'react';
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/TypingAnimation";
import { ArrowDown, FileText } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {

  const handleScrollToAbout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Background Layers */}
      <div className="absolute inset-0 dot-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"></div>
      
      {/* Animated Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[160px] animate-pulse delay-1000"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between py-20">
          
          {/* Text Content - Left on Large Screens */}
          <div className="max-w-3xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start lg:mr-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 text-center lg:text-left leading-tight text-glow-primary">
                Sriharish Eswarathas
              </h1>
              <div className="min-h-[2.5em] mb-10 w-full text-center lg:text-left">
                <span className="text-xl sm:text-2xl md:text-3xl font-light text-foreground/80 tracking-wide uppercase">
                  <TypingAnimation text="Software Engineer" delayBeforeStart={500} />
                </span>
              </div>

              <p className="text-lg text-muted-foreground mb-12 text-center lg:text-left leading-relaxed max-w-xl font-medium">
                Building high-performance digital experiences and robust systems. 
                Final year Computer Science student at the University of Guelph.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Button
                  asChild
                  className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-zinc-900 shadow-none transition-colors hover:bg-white/90"
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
                <Button 
                  variant="ghost"
                  className="h-12 rounded-full px-5 text-sm font-semibold text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={handleScrollToAbout}
                >
                  <ArrowDown className="mr-2 h-4 w-4" />
                  Explore work
                </Button>
              </div>
            </motion.div>
          </div>

          {/* GIF - Right on Large Screens */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 lg:mb-0 lg:ml-16 hidden lg:block relative"
          >
            <div className="w-[300px] h-[200px] md:w-[450px] md:h-[300px]">
              <Image 
                src="https://i.imgur.com/1VLFIhU.gif" 
                alt="Animated visual" 
                width={450} 
                height={300}
                className="w-full h-auto brightness-90 contrast-110"
                unoptimized={true} 
              />
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Hero Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
