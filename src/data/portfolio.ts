// Portfolio content retained from the original sections.

type LogoPresentation = "square" | "wordmark" | "permalution";

type Experience = {
  id: string;
  role: string;
  company: string;
  employment: string;
  date: string;
  location: string;
  detail?: string;
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
    id: "wearable-technology-research",
    role: "Research Assistant - Wearable Technology HCI",
    company: "University of Guelph Research",
    employment: "Contract Full-time",
    date: "May 2025 - Aug 2025 · 4 mos",
    location: "Guelph, Ontario, Canada · Hybrid",
    bullets: [
      "Analyzed and visualized wearable stress-tracking data for an HCI study of user behavior.",
    ],
    logoSrc: "/images/company-logos/RA.png",
    logoAlt: "University of Guelph Research logo",
    logoPresentation: "square",
  },
  {
    id: "ai-creativity-research",
    role: "Researcher - AI & Creativity HCI",
    company: "University of Guelph Research",
    employment: "Contract Part-time",
    date: "Sep 2025 - Present · 11 mos",
    location: "Guelph, Ontario, Canada · Remote",
    bullets: [
      "Study how AI tools influence human creativity through HCI research and software prototyping.",
    ],
    logoSrc: "/images/company-logos/RA.png",
    logoAlt: "University of Guelph Research logo",
    logoPresentation: "square",
  },
  {
    id: "teaching-assistant-discrete-structures",
    role: "Teaching Assistant - Discrete Structures In Computing I",
    company: "University of Guelph",
    employment: "Contract Part-time",
    date: "Sep 2025 - Dec 2025 · 4 mos",
    location: "Guelph, Ontario, Canada · Hybrid",
    detail: "CIS*1910 (F25)",
    bullets: [
      "Supported Discrete Structures labs, student questions, grading, and course delivery.",
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
    id: "teaching-assistant-interface-design",
    role: "Teaching Assistant - User Interface Design",
    company: "University of Guelph",
    employment: "Contract Part-time",
    date: "Jan 2026 - Apr 2026 · 4 mos",
    location: "Guelph, Ontario, Canada · Hybrid",
    detail: "CIS*2170 (W26)",
    bullets: [
      "Supported User Interface Design labs, student questions, and assignment feedback.",
    ],
    logoSrc: "/images/company-logos/RA.png",
    logoAlt: "University of Guelph logo",
    logoPresentation: "square",
  },
  {
    id: "permalution",
    role: "User Experience Designer",
    company: "Permalution",
    employment: "Internship",
    date: "Mar 2026 - May 2026 · 3 mos",
    location: "Remote",
    bullets: [
      "Used UX research and user-behavior insights to improve product workflows and interface decisions.",
    ],
    logoSrc: "/images/company-logos/permalution-logo.png",
    logoAlt: "Permalution water droplet logo",
    logoPresentation: "permalution",
  },
  {
    id: "criteo",
    role: "Software Development Engineer",
    company: "Criteo",
    employment: "Internship",
    date: "May 2026 - Present · 3 mos",
    location: "Toronto, Ontario, Canada · Hybrid",
    detail: "Ad Validation & Activations (AVA)",
    bullets: [
      "Contribute to software development for the Ad Validation & Activations team.",
    ],
    logoSrc: "/images/company-logos/criteo-logo.svg",
    logoAlt: "Criteo logo",
    logoPresentation: "wordmark",
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
