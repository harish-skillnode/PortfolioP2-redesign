
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin } from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface ExperienceTimelineCardProps {
  date: string;
  title: string;
  company: string;
  location: string;
  descriptionPoints: string[];
  imageUrl: string | StaticImageData;
  imageHint?: string;
}

export default function ExperienceTimelineCard({
  date,
  title,
  company,
  location,
  descriptionPoints,
  imageUrl,
  imageHint,
}: ExperienceTimelineCardProps) {
  const titleColor = "text-accent"; 

  return (
    <Card className={`w-full bg-card/80 backdrop-blur-sm shadow-lg border-primary/30 flex flex-col h-full overflow-hidden`}>
      <div className="relative w-full aspect-[16/9] md:aspect-[2/1]">
        <Image
          src={imageUrl}
          alt={`${title} at ${company}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          data-ai-hint={imageHint || "professional experience"}
        />
      </div>
      <CardHeader className="pt-4">
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
      <CardContent className="flex-grow">
        <ul className="list-disc pl-5 space-y-1 text-foreground/80 text-sm">
          {descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

