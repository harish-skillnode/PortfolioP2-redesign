
import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const skills = {
    "Programming & Data": ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL", "R", "Bash"],
    "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express.js", "Flask", "FastAPI", "Pandas", "NumPy", "Matplotlib", "SciPy"],
    "Databases & APIs": ["PostgreSQL", "MySQL", "SQLite", "REST APIs", "Data Modeling", "ETL Pipelines"],
    "Tools & Platforms": ["Git", "GitHub", "Docker", "AWS", "Google Cloud", "CI/CD", "Figma"]
};

const values = [
  "User-centric design", "Clean & maintainable code", "Continuous learning", "Collaborative teamwork"
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-gradient-to-t from-zinc-800 to-zinc-900">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group w-full max-w-md mx-auto aspect-square">
           <Image
            src="/images/about-light-02.png"
            alt="Abstract geometric design with glowing lines, representing technology and innovation"
            width={600}
            height={600}
            className="rounded-lg shadow-xl object-contain group-hover:scale-105 transition-transform duration-300"
            data-ai-hint="abstract design"
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
                Hello! I'm Sriharish, a Full Stack Developer and Computer Science student at the University of Guelph. I'm passionate about leveraging technology to solve real-world problems, with a special interest in AI development and Human-Computer Interaction (HCI). My goal is to build fast, functional, and visually engaging digital experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-accent">My Tech Stack</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="font-semibold text-foreground/90 mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map(skill => (
                      <span key={skill} className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
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
