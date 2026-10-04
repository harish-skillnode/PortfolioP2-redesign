// Shared portfolio content, with experience updated from the latest resume.

type LogoPresentation = "square" | "wordmark" | "permalution";

export type Experience = {
  id: string;
  role: string;
  company: string;
  employment: string;
  date: string;
  location: string;
  detail?: string;
  liveUrl?: string;
  bullets: string[];
  logoSrc: string;
  logoAlt: string;
  logoPresentation: LogoPresentation;
};

type TimelinePoint = {
  x: number;
  y: number;
};

export const experiences: Experience[] = [
  {
    id: "hci-research",
    role: "Research Assistant",
    company: "University of Guelph",
    employment: "Research",
    date: "May 2025 - Aug 2026",
    location: "Guelph, Ontario, Canada",
    detail: "Human-Computer Interaction, AI & Wearable Technology Research",
    bullets: [
      "Built an AI-assisted drawing application and designed experiments comparing AI-supported and static creative workflows.",
      "Analyzed user interaction logs, 18 interviews, and 238 app reviews to identify behavioral and usability patterns.",
      "Translated qualitative and behavioral findings into interface design recommendations for AI and wearable systems.",
    ],
    logoSrc: "/images/company-logos/RA.png",
    logoAlt: "University of Guelph logo",
    logoPresentation: "square",
  },
  {
    id: "teaching-assistant",
    role: "Teaching Assistant",
    company: "University of Guelph",
    employment: "Contract Part-time",
    date: "Sep 2025 - Dec 2026",
    location: "Guelph, Ontario, Canada",
    detail:
      "Courses: CIS*1910 Discrete Structures (F25, F26); CIS*2170 User Interface Design (W26); ENGG*1410 Introductory Programming for Engineers (F26); STAT*2040 Statistics (F26).",
    bullets: [
      "Led weekly Discrete Structures labs for 25+ students, teaching logic, proofs, and algorithmic problem solving.",
      "Explained technical concepts through examples, guided problem solving, and individualized feedback.",
      "Supported students across 5 course offerings through labs, tutorials, office hours, grading, and feedback.",
    ],
    logoSrc: "/images/company-logos/RA.png",
    logoAlt: "University of Guelph logo",
    logoPresentation: "square",
  },
  {
    id: "axon-health",
    role: "Data Analyst",
    company: "Axon Health",
    employment: "Internship",
    date: "Jan 2026 - Mar 2026 · 3 mos",
    location: "Canada · Remote",
    detail: "The Unified HMIS for Ending Homelessness",
    bullets: [
      "Conducted market research and data analysis to support product and growth decisions.",
    ],
    logoSrc: "/images/company-logos/axon-health-logo.jpg",
    logoAlt: "Axon Health logo",
    logoPresentation: "square",
  },
  {
    id: "permalution",
    role: "User Experience Researcher",
    company: "Permalution",
    employment: "Contract Part-time",
    date: "Mar 2026 - May 2026",
    location: "Remote",
    detail: "Climate Technology Company",
    bullets: [
      "Collaborated with a team to redesign Permalution’s website using Claude-assisted design workflows.",
      "Evaluated usability, accessibility, and navigation across key website flows, translating findings into actionable UX improvements.",
      "Produced wireframes and interface recommendations that aligned product messaging, user needs, and climate-technology use cases.",
    ],
    logoSrc: "/images/company-logos/permalution-logo.png",
    logoAlt: "Permalution water droplet logo",
    logoPresentation: "permalution",
  },
  {
    id: "criteo",
    role: "Software Development Engineer Intern",
    company: "Criteo",
    employment: "Internship",
    date: "May 2026 - Aug 2026",
    location: "Toronto, Ontario, Canada · Hybrid",
    detail: "Ad Validation & Activation, Retail Media R&D",
    bullets: [
      "Improved a core budget service by removing unnecessary lookups, boosting edge-case performance by ~60%.",
      "Led a cross-team approval-tracking project across 3 systems, coordinating 10 sub-tasks and 2 code reviews with zero issues.",
      "Designed the activity-log architecture by extending an existing data structure, earning approval from 2 engineering teams.",
      "Simplified an approval workflow by cutting rejection clicks by ~50% and retiring 6 outdated feature flags.",
    ],
    logoSrc: "/images/company-logos/criteo-logo.svg",
    logoAlt: "Criteo logo",
    logoPresentation: "wordmark",
  },
  {
    id: "skillnode",
    role: "Founder & Technical Lead",
    company: "SkillNode",
    employment: "Entrepreneurial",
    date: "Ongoing",
    location: "skillnode.ca",
    detail: "AI Career Development Platform",
    liveUrl: "https://skillnode.ca/",
    bullets: [
      "Architected and deployed an AI career platform with Next.js, Firebase, and AI APIs, generating tailored documents in 1-2 minutes.",
      "Built evaluation workflows across 30 test cases, 210 renders, and 120 AI outputs to validate layout and generation consistency.",
      "Optimized prompt pipelines, model selection, and API usage to reduce inference costs while maintaining 95%+ gross margins.",
    ],
    logoSrc: "/images/project-logos/skillnode-logo.png",
    logoAlt: "SkillNode logo",
    logoPresentation: "square",
  },
];

type PreviewKind =
  | "rate-my-facilities"
  | "skin-sync"
  | "pipeline"
  | "step-by-step"
  | "pomopanda"
  | "image-recognition"
  | "ai-projects";

type ProjectShowcase = {
  id: string;
  name: string;
  period: string;
  association?: string;
  category: string;
  description: string;
  skills: string[];
  previewKind: PreviewKind;
  previewAlt: string;
  liveUrl?: string;
  repositoryUrl?: string;
  availability: string;
};

export const projects: ProjectShowcase[] = [
  {
    id: "rate-my-facilities",
    name: "RateMyFacilities",
    period: "Jan 2026 - Apr 2026",
    association: "University of Guelph",
    category: "Full-stack data visualization",
    description:
      "An interactive platform for exploring Canadian public infrastructure through configurable scatter plots, geographic filters, a Canada map, and dashboard-style summary metrics.",
    skills: ["React", "TypeScript", "Spring Boot", "Recharts", "Docker"],
    previewKind: "rate-my-facilities",
    previewAlt:
      "Conceptual data dashboard preview representing RateMyFacilities",
    repositoryUrl: "https://github.com/harishe182/RateMyFacilities",
    availability: "Source available",
  },
  {
    id: "skin-sync",
    name: "Skin-Sync",
    period: "May 2024 - May 2025",
    category: "AI skincare assistant",
    description:
      "A personalized skincare companion that combines conversational guidance, routine tracking, and product discovery with Google Gemini-powered recommendations.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "SQLite"],
    previewKind: "skin-sync",
    previewAlt: "Skin-Sync logo",
    liveUrl: "https://skin-sync.netlify.app/",
    availability: "Live website",
  },
  {
    id: "pipeline-to-success",
    name: "Pipeline to Success",
    period: "2024",
    association: "University of Guelph",
    category: "Student career platform",
    description:
      "A student-led platform connecting more than 100 learners with MCAT preparation, clinical volunteering, and undergraduate research opportunities.",
    skills: ["React", "TypeScript", "Product Design", "Leadership"],
    previewKind: "pipeline",
    previewAlt: "Pipeline to Success branded website preview",
    liveUrl: "https://www.pipelinetosuccess.ca/",
    availability: "Live website",
  },
  {
    id: "step-by-step",
    name: "StepByStep",
    period: "Sep 2025 - Nov 2025",
    association: "University of Guelph",
    category: "Intelligent tutoring system",
    description:
      "A Grade 9 mathematics learning experience with adaptive step-by-step feedback, personalized recommendations, and a teacher-facing analytics dashboard.",
    skills: ["TypeScript", "Machine Learning", "UX Design", "Data Modeling"],
    previewKind: "step-by-step",
    previewAlt:
      "Conceptual tutoring dashboard representing the StepByStep project",
    availability: "Offline prototype",
  },
  {
    id: "pomopanda",
    name: "PomoPanda",
    period: "Sep 2025 - Nov 2025",
    association: "University of Guelph",
    category: "AI productivity app",
    description:
      "A friendly Pomodoro companion that combines customizable focus sessions, distraction blocking, productivity analytics, and AI-supported insights.",
    skills: ["Flutter", "Dart", "Product Management", "AI"],
    previewKind: "pomopanda",
    previewAlt: "PomoPanda panda mascot and timer artwork",
    repositoryUrl: "https://github.com/harishe182/PomoPanda",
    availability: "Source available",
  },
  {
    id: "image-recognition",
    name: "AI-Based Image Recognition",
    period: "Independent study",
    category: "Machine learning fundamentals",
    description:
      "A neural network built from scratch with custom weight initialization, ReLU and softmax activations, backpropagation, and Adam optimization for MNIST predictions.",
    skills: ["Python", "Neural Networks", "MNIST", "Adam Optimizer"],
    previewKind: "image-recognition",
    previewAlt:
      "Image-recognition interface showing a handwritten digit prediction",
    availability: "Research prototype",
  },
  {
    id: "ai-projects",
    name: "AI Projects",
    period: "Independent projects",
    category: "Applied artificial intelligence",
    description:
      "A collection of focused AI experiments, including sentiment classification with TextBlob and an unbeatable Tic-Tac-Toe opponent using the Minimax algorithm.",
    skills: ["Python", "TextBlob", "Minimax", "Game Theory"],
    previewKind: "ai-projects",
    previewAlt: "Code-inspired visual representing the AI Projects collection",
    repositoryUrl: "https://github.com/harishe182/AI-Research",
    availability: "Source available",
  },
];

type Publication = {
  title: string;
  authors: string;
  venue: string;
  status: string;
  pageCount: number;
  doi: string;
  summary: string;
  pdfUrl: string;
  coverImage: string;
  coverAlt: string;
  methods: Array<{
    value: string;
    label: string;
  }>;
};

export const publication: Publication = {
  title:
    'Ludic Ambiguity on the Wrist: How an "Imperfect" Stress Avatar Becomes a Social Play Mechanic',
  authors: "Sriharish Eswarathas and Zhao Zhao",
  venue:
    "Proceedings of the ACM on Human-Computer Interaction, Vol. 10, No. 7, Article GAMES046",
  status: "Forthcoming November 2026",
  pageCount: 28,
  doi: "10.1145/3831349",
  summary:
    "This multi-method HCI study examines how people turn an ambiguous smartwatch stress avatar into a performative cue, companion, game piece, and reflective prompt. The work identifies a playable gap between system inference and lived experience, then translates it into design guidance for legible uncertainty and consentful sharing.",
  pdfUrl: "/papers/ludic-ambiguity-on-the-wrist.pdf",
  coverImage: "/images/research/ludic-ambiguity-cover.jpg",
  coverAlt:
    'First page of "Ludic Ambiguity on the Wrist," including its illustrated stress-watch study overview',
  methods: [
    { value: "238", label: "App Store reviews" },
    { value: "174", label: "Public RED posts" },
    { value: "18", label: "Interviews" },
  ],
};
