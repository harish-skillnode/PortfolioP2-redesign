"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Briefcase, FlaskConical, BookUser } from "lucide-react";
import React from "react";

const experiences = [
  {
    Icon: BookUser,
    name: "Teaching Assistant @ University of Guelph",
    description: "Taught weekly lab sections on discrete mathematics, sets, proofs, and logic for CIS*1910.",
    date: "Sep 2025 – Dec 2025",
  },
  {
    Icon: FlaskConical,
    name: "Research Assistant @ University of Guelph",
    description: "Investigated HCI in collaborative learning with AI. Co-authored one manuscript under submission to CHI '26.",
    date: "May 2025 – Aug 2025",
  },
  {
    Icon: Briefcase,
    name: "Software Developer @ Engineering Ambition",
    description: "Delivered full-stack features for a prep platform used by hundreds of students (MCAT/LSAT). Built scalable Next.js/React front ends with Tailwind.",
    date: "Feb 2024 – Apr 2024",
  },
];

export default function ExperienceTimelineSection() {
  return (
    <SectionWrapper id="experience" title="Experience" className="bg-gradient-to-t from-zinc-900 to-zinc-800">
      <div className="relative">
        {/* The vertical line */}
        <div className="absolute left-9 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-20">
              {/* The circle on the timeline */}
              <div className="absolute left-9 top-1 w-6 h-6 bg-accent rounded-full -translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <exp.Icon className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-foreground/90">{exp.name}</h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{exp.date}</span>
                  </div>
                  <p className="mt-2 text-foreground/70">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
