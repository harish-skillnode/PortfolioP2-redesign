
import SectionWrapper from "@/components/ui/SectionWrapper";
import ExperienceTimelineCard from "@/components/ui/ExperienceTimelineCard";

const experiences = [
  {
    date: "May 2025 - Aug 2025",
    title: "Research Assistant",
    company: "University of Guelph Research",
    location: "Guelph, Ontario, Canada",
    descriptionPoints: [
      "Collaborated with a research team to investigate the reliability of heart rate variability (HRV) as an indicator of stress.",
      "Conducted data analysis and created visualizations to interpret physiological response patterns.",
    ],
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
  },
];

export default function ExperienceTimelineSection() {
  return (
    <SectionWrapper id="experience" title="Experience" className="bg-gradient-to-t from-zinc-900 to-zinc-800">
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-8 items-stretch">
        {experiences.map((exp, index) => (
          <div key={index} className="w-full md:max-w-md lg:max-w-lg flex"> {/* Added flex here for item-stretch to work properly */}
            <ExperienceTimelineCard
              date={exp.date}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              descriptionPoints={exp.descriptionPoints}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
