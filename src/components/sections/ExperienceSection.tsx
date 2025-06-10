
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard, { type Project } from "@/components/ui/ProjectCard";

const experiencesAndProjects: Project[] = [
  {
    id: "research-assistant-uog",
    name: "Research Assistant - University of Guelph",
    description: "Collaborated with a research team (May 2025 - Aug 2025) to investigate heart rate variability (HRV) as a stress indicator. Conducted data analysis and created visualizations for physiological response patterns.",
    technologies: ["Python", "R", "Data Analysis", "Data Visualization"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "research data analysis",
  },
  {
    id: "founder-skin-sync",
    name: "Founder - Skin-Sync",
    description: "Led the development (May 2024 - Aug 2024) of an AI-powered skincare app for diagnosing skin types and concerns. Integrated specialized AI for tailored routines, improving user accessibility and engagement.",
    technologies: ["AI", "React", "Next.js", "Flask", "Python", "Google Gemini API"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "skincare app interface",
  },
  {
    id: "software-developer-eng-ambition",
    name: "Software Developer - Engineering Ambition",
    description: "Designed and developed full-stack applications (Feb 2024 - Apr 2024), including a platform for MCAT/LSAT exam preparation. Built scalable solutions using Next.js and React with Tailwind CSS.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Full-Stack Development", "JavaScript", "TypeScript"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "web application dashboard",
  },
  {
    id: "project-skin-sync-ai",
    name: "Skin-Sync: AI-Driven Skincare App",
    description: "Developed 'Dermie', an AI chatbot integrated with Google Gemini API, trained on dermatologist research to provide personalized skincare advice and guidance in an engaging manner.",
    technologies: ["AI", "Google Gemini API", "Flask", "React", "Python"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "AI chatbot interface",
    githubUrl: "https://github.com/harishe182", // Generic placeholder
  },
  {
    id: "project-nn-image-recognition",
    name: "Neural Network Image Recognition",
    description: "Developed a neural network from scratch for image recognition, incorporating custom weight initialization, ReLU/softmax activation, and Adam optimization. Implemented forward/backward propagation and real-time prediction.",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "AI"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "neural network diagram",
    githubUrl: "https://github.com/harishe182", // Generic placeholder
  },
  {
    id: "volunteer-cbs",
    name: "Marketing Team Member - Canadian Blood Service",
    description: "Designed digital assets and marketing materials (Sept 2021 - Sept 2022), showcasing creativity in tools like Adobe Photoshop. Increased donor numbers by 50% using data-driven strategies.",
    technologies: ["Marketing", "Adobe Photoshop", "Community Engagement", "Data Analysis"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "marketing campaign",
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Experience & Projects" className="bg-gradient-to-t from-zinc-900 to-zinc-800">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiencesAndProjects.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
