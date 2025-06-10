
"use client";

import type React from 'react';
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/TypingAnimation";
import { ArrowDown, FileText } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {

  const handleScrollToAbout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-t from-zinc-900 to-zinc-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-background/50 backdrop-filter backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          {/* Text Content - Left on Large Screens, Bottom on Mobile */}
          <div className="max-w-3xl mx-auto lg:mx-0 order-2 lg:order-1 flex flex-col items-center lg:items-start lg:mr-16">
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-4 lg:text-left">
              Sriharish Eswarathas
            </h1>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-8 lg:text-left">
              Software Engineer
            </h2>
            <div className="min-h-[2.5em] mb-10 w-full text-center lg:text-left">
              <TypingAnimation text="Building the future." />
            </div>
            <div className="space-x-4 flex flex-row justify-center lg:justify-start">
              <Button asChild size="lg" className="shadow-glow-primary hover:shadow-glow-accent transition-shadow duration-300">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume/CV
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary/10 hover:text-accent transition-colors duration-300"
                onClick={handleScrollToAbout}
              >
                <ArrowDown className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>

          {/* GIF - Right on Large Screens, Top on Mobile, Hidden on screens smaller than lg */}
          <div 
            className="mb-8 lg:mb-0 lg:ml-16 order-1 lg:order-2 hidden lg:block"
          >
            <div className="w-[250px] h-[150px] md:w-[450px] md:h-[300px] mx-auto lg:mx-0">
              <Image 
                src="https://i.imgur.com/1VLFIhU.gif" 
                alt="Code animation gif" 
                width={450} 
                height={300}
                className="rounded-lg shadow-xl"
                unoptimized={true} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
