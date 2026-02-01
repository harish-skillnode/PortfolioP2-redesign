
import SectionWrapper from "@/components/ui/SectionWrapper";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Bot, Brain, Users, FileText } from "lucide-react"; 
import { ReactNode } from "react";

interface Project {
    Icon: React.ElementType;
    name: string;
    description: string;
    href: string;
    background: ReactNode;
    className: string;
}

const projects: Project[] = [
  {
    Icon: Bot,
    name: "StepByStep — AI Math Tutor",
    description: "A full-stack tutoring system with adaptive, step-by-step math feedback using linear regression.",
    href: "https://github.com/harishe182",
    background: <div />,
    className: "md:col-span-2",
  },
  {
    Icon: Brain,
    name: "Skin-Sync — AI Skincare Assistant",
    description: "A production-ready app for personalized, AI-driven skincare recommendations.",
    href: "https://skin-sync.netlify.app/",
    background: <div />,
    className: "md:col-span-1",
  },
  {
    Icon: Users,
    name: "Pipeline to Success — Education Platform",
    description: "Contributed to frontend development for a platform used by 100+ Guelph students for MCAT prep.",
    href: "https://www.pipelinetosuccess.ca/",
    background: <div />,
    className: "md:col-span-1",
  },
  {
    Icon: FileText,
    name: "Publication: Smartwatch Stress Monitor",
    description: "Co-authored a paper on the social and playful appropriation of stress monitoring smartwatches.",
    href: "#",
    background: <div />,
    className: "md:col-span-2",
  },
];


export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="Projects & Publications" className="bg-gradient-to-t from-zinc-800 to-zinc-900">
      <BentoGrid>
        {projects.map((project) => (
          <BentoCard key={project.name} {...project} />
        ))}
      </BentoGrid>
    </SectionWrapper>
  );
}
