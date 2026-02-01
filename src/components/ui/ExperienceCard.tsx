import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface Experience {
    Icon: LucideIcon;
    name: string;
    description: string[];
    date: string;
}

interface ExperienceCardProps {
    experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    const { Icon, name, description, date } = experience;

    return (
        <Card className="bg-card/80 backdrop-blur-sm shadow-lg border border-primary/20 flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-glow-accent hover:border-primary/40">
            <CardHeader>
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                        <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-grow">
                        <CardTitle className="text-lg font-semibold text-accent">{name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{date}</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-grow pt-0">
                <ul className="list-disc pl-5 space-y-2 text-foreground/80 text-sm">
                    {description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
