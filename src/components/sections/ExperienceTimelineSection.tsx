"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { FlaskConical, BookUser, BarChart3, Target, Calendar, Code, Search, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    Icon: Code,
    name: "Incoming Software Development Engineer (SDE) Intern @ Criteo",
    description: [
      "Joining the engineering team for a Summer 2026 internship to building high-scale distributed systems.",
    ],
    date: "May 2026 – Aug 2026",
  },
  {
    Icon: BookUser,
    name: "Teaching Assistant @ University of Guelph",
    description: [
        "Led weekly labs for Discrete Structures & User Interface Design, reinforcing algorithmic and logical thinking for 250+ students.",
        "Held office hours, graded assignments, and supported course delivery for approximately 10 hours per week."
    ],
    date: "Sep 2025 – Present",
  },
  {
    Icon: FlaskConical,
    name: "Research Assistant @ University of Guelph",
    description: [
      "Conducted qualitative HCI research on smartwatch-based stress monitoring and user appropriation.",
      "Analyzed data from 18 semi-structured interviews, 238 app store reviews, and public social media posts.",
    ],
    date: "May 2025 – Present",
  },
  {
    Icon: Search,
    name: "User Experience Researcher (Contract · Part-time) @ Permalution (Riipen)",
    description: [
      "Conduct user research to understand platform usability, workflows, and user needs across digital products.",
      "Design and execute research studies including user interviews, usability testing, and feedback analysis.",
    ],
    date: "Mar 2026 – May 2026",
  },
  {
    Icon: BarChart3,
    name: "Data & Growth Analytics (Contract) @ Axon Health Inc.",
    description: [
      "Built and maintained structured datasets using Python and SQL to support customer and market analysis.",
      "Developed segmentation logic across 5–7 customer cohorts to inform onboarding and growth initiatives.",
      "Collaborated with product and leadership to translate qualitative and quantitative data into actionable insights.",
    ],
    date: "Jan 2026 – Mar 2026",
  },
  {
    Icon: Target,
    name: "Growth Strategy Analyst (Contract) @ Roots Funding",
    description: [
      "Conducted market, customer, and operational analysis to support the development of a data-driven growth strategy.",
      "Produced a final Growth Strategy Report synthesizing insights into actionable recommendations for stakeholders.",
    ],
    date: "Jan 2026 – Feb 2026",
  },
];

export default function ExperienceTimelineSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Match a card width
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <SectionWrapper id="experience" title="Professional Journey" className="bg-background relative overflow-hidden group/section">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none"></div>
      
      <div className="relative w-full py-20 px-4 md:px-12">
        <div className="max-w-[1400px] mx-auto relative">
          
          {/* Navigation Arrows - Moved further out and styled better */}
          <div className="absolute top-[45%] -translate-y-1/2 -left-4 md:-left-12 z-40 hidden sm:block">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full glass-card hover:bg-white/10 transition-all duration-300 shadow-glow-primary active:scale-95 border border-white/20"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
          </div>

          <div className="absolute top-[45%] -translate-y-1/2 -right-4 md:-right-12 z-40 hidden sm:block">
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full glass-card hover:bg-white/10 transition-all duration-300 shadow-glow-primary active:scale-95 border border-white/20"
              aria-label="Scroll Right"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>

          {/* Horizontal Timeline Container */}
          <div 
            ref={scrollContainerRef}
            className="flex items-start gap-10 overflow-x-auto pb-16 px-4 md:px-10 no-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          >
            
            {/* Connecting Line (Horizontal) - Aligned with node center (32px from top of h-16 container) */}
            <div className="absolute top-[32px] left-0 h-px w-[1000%] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"></div>

            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[420px] snap-center relative pt-20"
              >
                {/* Timeline Node (Above the Card) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                   <div className="h-16 w-16 rounded-full glass-card flex items-center justify-center z-20 shadow-[0_0_25px_rgba(255,255,255,0.1)] border border-white/20 group-hover:scale-110 transition-transform duration-500 mb-4 bg-zinc-900/80">
                      <exp.Icon className="h-8 w-8 text-primary group-hover:text-glow-primary" />
                   </div>
                   {/* Visual stem connecting node to line */}
                   <div className="h-8 w-px bg-white/20"></div>
                </div>

                {/* Content Card */}
                <div className="glass-card p-8 rounded-[2.5rem] hover:border-white/25 transition-all duration-500 group relative bg-zinc-900/40 backdrop-blur-2xl h-full flex flex-col shadow-2xl">
                   {/* Date Tag */}
                   <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-muted-foreground mb-6 w-fit">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.date}
                   </div>

                   <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors min-h-[3.5rem] leading-tight">
                     {exp.name}
                   </h3>

                   <ul className="space-y-4 text-foreground/75 text-sm list-none flex-grow">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(161,161,170,0.6)]" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
            
            {/* Spacer at the end for better scroll feel */}
            <div className="flex-shrink-0 w-32 md:w-64"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </SectionWrapper>
  );
}
