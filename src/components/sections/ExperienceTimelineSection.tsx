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
                  <div className="flex justify-between items-start flex-col sm:flex-row">
                    <h3 className="text-xl font-semibold text-foreground/90">{exp.name}</h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap mt-1 sm:mt-0 sm:ml-4">{exp.date}</span>
                  </div>
                    <ul className="mt-2 text-foreground/70 list-disc pl-5 space-y-1">
                        {(Array.isArray(exp.description) ? exp.description : [exp.description]).map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
