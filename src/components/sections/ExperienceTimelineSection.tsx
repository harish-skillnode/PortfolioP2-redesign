"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Briefcase, FlaskConical, BookUser } from "lucide-react";
import React from "react";

const experiences = [
  {
    Icon: BookUser,
    name: "Teaching Assistant @ University of Guelph",
    description: "Taught weekly lab sections on discrete mathematics, sets, proofs, and logic for CIS*1910.",
    date: "Sep 2025 – Dec 2025",
    background: <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-800 opacity-30"></div>,
    className: "md:col-span-1",
  },
  {
    Icon: FlaskConical,
    name: "Research Assistant @ University of Guelph",
    description: "Investigated HCI in collaborative learning with AI. Co-authored one manuscript under submission to CHI '26.",
    date: "May 2025 – Aug 2025",
    background: <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 opacity-30"></div>,
    className: "md:col-span-1",
  },
    {
    Icon: Briefcase,
    name: "Software Developer @ Engineering Ambition",
    description: "Delivered full-stack features for a prep platform used by hundreds of students (MCAT/LSAT). Built scalable Next.js/React front ends with Tailwind.",
    date: "Feb 2024 – Apr 2024",
    background: <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-700 opacity-30"></div>,
    className: "md:col-span-1",
  },
];

export default function ExperienceTimelineSection() {
  return (
    <SectionWrapper id="experience" title="Experience" className="bg-gradient-to-t from-zinc-900 to-zinc-800">
       <BentoGrid className="grid-cols-1 md:grid-cols-3">
        {experiences.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </SectionWrapper>
  );
}
