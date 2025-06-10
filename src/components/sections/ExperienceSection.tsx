import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard, { type Project } from "@/components/ui/ProjectCard";

const projects: Project[] = [
  {
    id: "1",
    name: "E-commerce Platform",
    description: "A full-stack e-commerce solution with features like product listings, cart management, user authentication, and payment integration. Built for scalability and performance.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    githubUrl: "https://github.com",
    liveDemoUrl: "https://example.com",
  },
  {
    id: "2",
    name: "Project Management Tool",
    description: "A collaborative tool for teams to manage projects, tasks, and deadlines. Features real-time updates and a user-friendly interface.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material UI"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "dashboard interface",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    name: "Personal Portfolio Website",
    description: "This very portfolio website, designed to showcase skills and projects. Built with a focus on modern design and user experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "web design",
    liveDemoUrl: "#",
  },
   {
    id: "4",
    name: "AI Content Generator",
    description: "A web application that leverages AI models to generate various types of content, such as blog posts, marketing copy, and creative stories. Includes user accounts and content management.",
    technologies: ["Python (Flask/Django)", "OpenAI API", "React", "Firebase"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "artificial intelligence",
    githubUrl: "https://github.com",
    liveDemoUrl: "https://example.com",
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Experience & Projects" className="bg-background/50 backdrop-blur-sm">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
