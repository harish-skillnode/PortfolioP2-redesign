import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/TypingAnimation";
import Link from "next/link";
import { ArrowDown, FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center py-20 px-4 bg-cover bg-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-background/50 backdrop-filter backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-4">
          Sriharish Eswarathas
        </h1>
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-8">
          Software Engineer
        </h2>
        <div className="min-h-[2.5em] mb-10">
          <TypingAnimation text="I build experiences that are fast, functional, and visually engaging." />
        </div>
        <div className="space-x-4">
          <Button asChild size="lg" className="shadow-glow-primary hover:shadow-glow-accent transition-shadow duration-300">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-5 w-5" />
              View Resume/CV
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-accent transition-colors duration-300">
            <Link href="#about">
              <ArrowDown className="mr-2 h-5 w-5" />
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
