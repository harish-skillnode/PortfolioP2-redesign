"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Briefcase, Building } from "lucide-react";
import React from "react";

const experiences = [
  {
    Icon: Building,
    name: "Research Assistant",
    description: "Investigated heart rate variability (HRV) as a stress indicator, analyzing data and creating visualizations.",
    href: "#",
    cta: "Learn More",
    background: <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 opacity-30"></div>,
    className: "md:col-start-1 md:col-end-2",
  },
  {
    Icon: Briefcase,
    name: "Software Developer",
    description: "Designed and developed full-stack applications for clients, including a platform for MCAT and LSAT preparation.",
    href: "#",
    cta: "Learn More",
    background: <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-700 opacity-30"></div>,
    className: "md:col-start-2 md:col-end-4",
  },
];

export default function ExperienceTimelineSection() {
  return (
    <SectionWrapper id="experience" title="Experience" className="bg-gradient-to-t from-zinc-900 to-zinc-800">
      <BentoGrid>
        {experiences.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </SectionWrapper>
  );
}