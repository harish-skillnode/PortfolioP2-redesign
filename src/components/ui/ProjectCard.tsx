import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-glow-accent transition-shadow duration-300 border-primary/30">
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          data-ai-hint={project.imageHint || "technology project"}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-accent">{project.name}</CardTitle>
        <CardDescription className="text-foreground/80 h-20 overflow-y-auto">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary-foreground">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2 pt-4 border-t border-border/50">
        {project.githubUrl && (
          <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10 hover:text-accent">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {project.liveDemoUrl && (
          <Button asChild size="sm" className="bg-primary hover:bg-accent">
            <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
