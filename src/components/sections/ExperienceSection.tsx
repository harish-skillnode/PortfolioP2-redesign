import SectionWrapper from "@/components/ui/SectionWrapper";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Bot, Brain, Users, FileText, Timer } from "lucide-react"; 
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
    description: "A full-stack tutoring system with adaptive, step-by-step math feedback using linear regression and advanced data modeling.",
    href: "https://github.com/harisheswarathas/StepByStep",
    background: <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-zinc-900/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />,
    className: "md:col-span-2",
  },
  {
    Icon: Brain,
    name: "Skin-Sync — AI Assistant",
    description: "Production-ready skincare advisor leveraging AI for personalized routines.",
    href: "https://skin-sync.netlify.app/",
    background: <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-zinc-900/5 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />,
    className: "md:col-span-1",
  },
  {
    Icon: Users,
    name: "Pipeline to Success",
    description: "Lead developer for a digital MCAT prep platform serving 100+ students at the University of Guelph.",
    href: "https://www.pipelinetosuccess.ca/",
    background: <div className="absolute inset-0 bg-gradient-to-bl from-primary/15 via-zinc-900/5 to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500" />,
    className: "md:col-span-1",
  },
  {
    Icon: Timer,
    name: "PomoPanda",
    description: "Gamified productivity tool powered by AI for focus optimization.",
    href: "https://github.com/harishe182/PomoPanda",
    background: <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-zinc-900/5 to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-500" />,
    className: "md:col-span-1",
  },
  {
    Icon: FileText,
    name: "Impact Analysis: Smartwatch Stress Monitor",
    description: "Co-authored research on wearable appropriation and socio-playful stress management.",
    href: "https://github.com/harishe182",
    background: (
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 via-zinc-900/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-4 right-4 text-[10px] font-bold tracking-widest text-primary/40 uppercase">Publication</div>
      </div>
    ),
    className: "md:col-span-1",
  },
];


export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="Featured Work" className="bg-background relative">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10 py-12">
        <BentoGrid>
          {projects.map((project) => (
            <BentoCard key={project.name} {...project} />
          ))}
        </BentoGrid>
      </div>
    </SectionWrapper>
  );
}
