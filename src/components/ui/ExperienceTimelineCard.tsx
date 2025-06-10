
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin } from "lucide-react";

interface ExperienceTimelineCardProps {
  date: string;
  title: string;
  company: string;
  location: string;
  descriptionPoints: string[];
  align: "left" | "right";
}

export default function ExperienceTimelineCard({
  date,
  title,
  company,
  location,
  descriptionPoints,
  align,
}: ExperienceTimelineCardProps) {
  const cardAlignmentClass = align === "left" ? "md:mr-auto" : "md:ml-auto";
  const titleColor = "text-accent"; // Using accent for title consistency

  return (
    <Card className={`w-full max-w-md bg-card/80 backdrop-blur-sm shadow-lg border-primary/30 ${cardAlignmentClass}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className={`font-headline text-xl ${titleColor}`}>{title}</CardTitle>
            <p className="text-md font-semibold text-foreground/90 flex items-center">
              <Briefcase className="w-4 h-4 mr-2 text-primary" />
              {company}
            </p>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap pt-1">{date}</span>
        </div>
        <p className="text-sm text-muted-foreground flex items-center">
          <MapPin className="w-3 h-3 mr-1.5 text-primary" />
          {location}
        </p>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-1 text-foreground/80 text-sm">
          {descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
