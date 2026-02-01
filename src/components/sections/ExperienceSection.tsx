
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard, { type Project } from "@/components/ui/ProjectCard";
import { Bot, Brain, Users, FileText } from "lucide-react"; 

// Updated projects based on the new resume
const projectsData: Project[] = [
  {
    id: "project-step-by-step-ai",
    name: "StepByStep — AI Math Tutor",
    description: "Built a full-stack tutoring system with adaptive, step-by-step math feedback in a 7-person team. Implemented a difficulty estimation algorithm using linear regression.",
    technologies: ["React", "Next.js", "Python", "AI", "Linear Regression"],
    icon: Bot,
    imageAlt: "An AI Math tutor interface showing a math problem.",
    githubUrl: "https://github.com/harishe182", 
  },
  {
    id: "project-skin-sync-ai",
    name: "Skin-Sync — AI Skincare Assistant",
    description: "Developed a production-ready full-stack web app delivering personalized, AI-driven skincare recommendations. Built RESTful backend services with Flask and integrated AI workflows for routine generation.",
    technologies: ["AI", "Flask", "React", "Python", "REST APIs"],
    icon: Brain,
    imageAlt: "Screenshot of the Skin-Sync AI skincare assistant application.",
    liveDemoUrl: "https://skin-sync.netlify.app/",
  },
  {
    id: "project-pipeline-to-success",
    name: "Pipeline to Success — Education Platform",
    description: "Contributed to frontend development for a platform used by 100+ Guelph students preparing for the MCAT. Improved UI layout, responsiveness, and usability in collaboration with engineers and designers.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Figma"],
    icon: Users,
    imageAlt: "Interface of the Pipeline to Success education platform.",
    liveDemoUrl: "https://www.pipelinetosuccess.ca/",
  },
  {
    id: "publication-chi-26",
    name: "Publication: Social and Playful Appropriation of a Smartwatch Stress Monitor",
    description: "Under submission to CHI 2026. Co-authored the paper, focusing on qualitative analysis and manuscript preparation.",
    technologies: ["HCI", "Qualitative Analysis", "Academic Writing", "Research"],
    icon: FileText,
    imageAlt: "Icon representing a published research paper.",
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="Projects & Publications" className="bg-gradient-to-t from-zinc-800 to-zinc-900">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectsData.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
