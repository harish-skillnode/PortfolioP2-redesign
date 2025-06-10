import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Firebase", "GraphQL", "Tailwind CSS"
];

const values = [
  "User-centric design", "Clean & maintainable code", "Continuous learning", "Collaborative teamwork"
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-background/70 backdrop-blur-sm">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group w-full max-w-md mx-auto aspect-square">
           <Image
            src="https://placehold.co/600x600.png"
            alt="Sriharish Eswarathas"
            width={600}
            height={600}
            className="rounded-lg shadow-xl object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint="professional portrait"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
        </div>
        <div className="space-y-6">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-accent">Who I Am</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Hello! I'm Sriharish, a passionate Software Engineer dedicated to crafting exceptional digital experiences. 
                With a strong foundation in modern web technologies, I thrive on solving complex problems and turning innovative ideas into reality. 
                My journey in tech is driven by a curiosity to learn and a commitment to excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-accent">My Tech Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="bg-primary/20 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-accent">Core Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {values.map(value => (
                  <li key={value} className="flex items-center text-foreground/90">
                    <CheckCircle className="h-5 w-5 mr-2 text-accent" />
                    {value}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
