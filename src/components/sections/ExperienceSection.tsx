
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard, { type Project } from "@/components/ui/ProjectCard";

// Updated to only include projects
const projectsData: Project[] = [
  {
    id: "project-skin-sync-ai",
    name: "Skin-Sync: AI-Driven Skincare App",
    description: "Developed 'Dermie', an AI chatbot integrated with Google Gemini API, trained on dermatologist research to provide personalized skincare advice and guidance in an engaging manner.",
    technologies: ["AI", "Google Gemini API", "Flask", "React", "Python"],
    imageUrl: "/images/project-logos/skin-symc.png",
    imageHint: "AI chatbot interface",
    githubUrl: "https://github.com/harishe182",
  },
  {
    id: "project-nn-image-recognition",
    name: "Neural Network Image Recognition",
    description: "Developed a neural network from scratch for image recognition, incorporating custom weight initialization, ReLU/softmax activation, and Adam optimization. Implemented forward/backward propagation and real-time prediction.",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "AI"],
    imageUrl: "https://placehold.co/400x300/FFFFFF/FFFFFF.png", 
    imageHint: "generic network icon", 
    githubUrl: "https://github.com/harishe182",
  },
  {
    id: "project-sentiment-analysis",
    name: "Sentimental Text Analysis",
    description: "This project involves a sentiment analysis tool built using Python. It utilizes the TextBlob library to evaluate and categorize text sentiment. The tool provides descriptive feedback based on the polarity of the input text, classifying sentiments into categories such as \"Very Positive,\" \"Slightly Positive,\" \"Neutral,\" \"Slightly Negative,\" and \"Very Negative.\" The aim is to offer insightful analysis of textual data to gauge emotional tone and sentiment.",
    technologies: ["Python", "TextBlob", "AI"],
    imageUrl: "https://placehold.co/400x300/FFFFFF/FFFFFF.png", // Generic white placeholder
    imageHint: "generic analysis icon", // Hint for a white/light generic icon
    githubUrl: "https://github.com/harishe182",
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="Projects" className="bg-gradient-to-t from-zinc-800 to-zinc-900">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
