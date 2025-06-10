
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ExperienceTimelineCard from "@/components/ui/ExperienceTimelineCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const experiences = [
  {
    date: "May 2024 - Present",
    title: "Founder",
    company: "Eswarathas Innovations",
    location: "Greater Toronto Area, Canada · Remote",
    descriptionPoints: [
      "Leading the development of innovative software solutions tailored to meet dynamic market needs.",
      "Focusing on leveraging cutting-edge technologies, including AI and full-stack frameworks, to solve real-world problems and enhance user experiences.",
      "Managing project lifecycles from ideation to deployment, ensuring high-quality deliverables and strategic alignment with business goals."
    ],
    imageUrl: "/image/company-logos/eswarathas-innovations-logo.png",
    imageHint: "company logo",
  },
  {
    date: "May 2025 - Aug 2025",
    title: "Research Assistant",
    company: "University of Guelph Research",
    location: "Guelph, Ontario, Canada",
    descriptionPoints: [
      "Collaborated with a research team to investigate the reliability of heart rate variability (HRV) as an indicator of stress.",
      "Conducted data analysis and created visualizations to interpret physiological response patterns.",
    ],
    imageUrl: "/image/company-logos/uofg-research-logo.png",
    imageHint: "university logo",
  },
  {
    date: "Feb 2024 - Apr 2024",
    title: "Software Developer",
    company: "Engineering Ambition",
    location: "Guelph, Ontario, Canada",
    descriptionPoints: [
      "Designed and developed full-stack applications for clients, including a platform enabling hundreds of students to prepare for exams like the MCAT and LSAT.",
      "Built scalable software solutions using Next.js and React, ensuring responsive, user-friendly designs with Tailwind CSS.",
    ],
    imageUrl: "/image/company-logos/engineering-ambition-logo.png",
    imageHint: "company logo",
  },
];

export default function ExperienceTimelineSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <SectionWrapper id="experience" title="Experience" className="bg-gradient-to-t from-zinc-900 to-zinc-800">
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="overflow-hidden rounded-lg">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {experiences.map((exp, index) => (
              <div key={index} className="w-full flex-shrink-0 p-1 md:p-2">
                <ExperienceTimelineCard
                  date={exp.date}
                  title={exp.title}
                  company={exp.company}
                  location={exp.location}
                  descriptionPoints={exp.descriptionPoints}
                  imageUrl={exp.imageUrl}
                  imageHint={exp.imageHint}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {experiences.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous experience"
              className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 z-10 bg-card/40 backdrop-blur-md border border-border rounded-full p-2 text-primary hover:bg-card/60 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next experience"
              className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 z-10 bg-card/40 backdrop-blur-md border border-border rounded-full p-2 text-primary hover:bg-card/60 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>
    </SectionWrapper>
  );
}
