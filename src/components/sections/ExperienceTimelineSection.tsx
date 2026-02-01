"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { FlaskConical, BookUser, BarChart3, Target } from "lucide-react";
import React from "react";

const experiences = [
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
  {
    Icon: BookUser,
    name: "Teaching Assistant @ University of Guelph",
    description: [
        "Led weekly labs for Discrete Structures & User Interface Design, reinforcing algorithmic and logical thinking for 250+ students.",
        "Held office hours, graded assignments, and supported course delivery for approximately 10 hours per week."
    ],
    date: "Sep 2025 – Apr 2026",
  },
  {
    Icon: FlaskConical,
    name: "Research Assistant @ University of Guelph",
    description: [
      "Conducted qualitative HCI research on smartwatch-based stress monitoring and user appropriation.",
      "Analyzed data from 18 semi-structured interviews, 238 app store reviews, and public social media posts.",
    ],
    date: "May 2025 – Aug 2025",
  },
];

export default function ExperienceTimelineSection() {
  return (
    <SectionWrapper id="experience" title="Experience" className="bg-gradient-to-t from-zinc-900 to-zinc-800">
      <div className="relative max-w-4xl mx-auto">
        {/* The vertical timeline bar */}
        <div className="absolute left-4 top-2 h-full w-0.5 bg-border/30"></div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              {/* Timeline Dot */}
              <div className="absolute left-[7px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-background"></div>

              {/* Content */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-grow pr-4">
                   <h3 className="text-xl font-semibold text-accent flex items-center gap-3">
                     <exp.Icon className="h-6 w-6 text-primary flex-shrink-0" />
                     <span>{exp.name}</span>
                   </h3>
                   <ul className="mt-3 list-disc pl-5 space-y-2 text-foreground/80 text-sm">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                </div>
                <p className="text-sm text-muted-foreground mt-2 sm:mt-1 sm:ml-6 sm:text-right whitespace-nowrap">{exp.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
