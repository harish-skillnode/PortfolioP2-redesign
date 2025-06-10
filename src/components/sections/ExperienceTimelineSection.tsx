
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
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Central Timeline Line */}
        <div className="hidden md:block absolute w-1 bg-border/70 h-full top-0 left-1/2 transform -translate-x-1/2"></div>

        <div className="space-y-12 md:space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className="md:relative md:flex md:items-start group">
              {/* Timeline Marker (Desktop) */}
              <div className="hidden md:block absolute w-4 h-4 bg-primary rounded-full top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-background shadow-md"></div>
              
              {/* Connector (Desktop) */}
              <div
                className={`hidden md:block absolute top-8 h-0.5 w-1/2 
                            ${index % 2 === 0 ? "left-0 border-r-0 rounded-l-md" : "right-0 border-l-0 rounded-r-md"} 
                            ${index % 2 === 0 ? "pl-0" : "pr-0"}`}
              >
                 <div className={`h-full w-full ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-[calc(50%-1.25rem)] bg-border/70 group-hover:bg-primary/50 transition-colors duration-300`}></div>
              </div>


              {/* Card - Mobile full width, Desktop alternating */}
              <div className={`w-full md:w-[calc(50%-2.5rem)] mt-6 md:mt-0 ${index % 2 === 0 ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}`}>
                 {/* Mobile marker and line */}
                <div className="md:hidden flex items-center mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full border-2 border-background shadow-md mr-3"></div>
                  <div className="w-full h-0.5 bg-border/70"></div>
                </div>
                <ExperienceTimelineCard
                  date={exp.date}
                  title={exp.title}
                  company={exp.company}
                  location={exp.location}
                  descriptionPoints={exp.descriptionPoints}
                  align={index % 2 === 0 ? "left" : "right"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
