"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bot,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Users,
} from "lucide-react";
import Image from "next/image";
import {
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

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

const projects: ProjectShowcase[] = [
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
    previewAlt:
      "Pipeline to Success branded website preview",
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
    previewAlt:
      "Code-inspired visual representing the AI Projects collection",
    repositoryUrl: "https://github.com/harishe182/AI-Research",
    availability: "Source available",
  },
];

const wrapIndex = (index: number) =>
  (index + projects.length) % projects.length;

function BrowserFrame({
  children,
  label,
  status,
}: {
  children: React.ReactNode;
  label: string;
  status: string;
}) {
  return (
    <div className="relative flex h-full min-h-[18rem] flex-col overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0d0d0f] shadow-2xl sm:min-h-[22rem] lg:min-h-full">
      <div className="flex h-11 shrink-0 items-center gap-3 border-b border-white/10 bg-white/[0.045] px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
          {label}
        </div>
        <span className="hidden text-[9px] font-bold uppercase tracking-[0.16em] text-emerald-300/70 sm:inline">
          {status}
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

function LiveProjectPreview({ project }: { project: ProjectShowcase }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [project.liveUrl]);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#101013]">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/45">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
            Loading live preview
          </div>
        </div>
      )}
      <iframe
        src={project.liveUrl}
        title={`${project.name} live website preview`}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        className={`pointer-events-none absolute inset-0 h-full w-full border-0 bg-white transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name} live website in a new tab`}
        className="group/live absolute inset-0 z-20 flex items-end justify-end bg-gradient-to-t from-black/45 via-transparent to-transparent p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset sm:p-6"
      >
        <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/65 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-xl backdrop-blur-md transition-transform duration-300 group-hover/live:-translate-y-1">
          Open live site
          <ExternalLink className="h-4 w-4" />
        </span>
      </a>
    </>
  );
}

function RateMyFacilitiesPreview() {
  const scatterPoints = [
    ["13%", "68%"],
    ["22%", "47%"],
    ["31%", "73%"],
    ["39%", "36%"],
    ["47%", "56%"],
    ["56%", "28%"],
    ["64%", "61%"],
    ["73%", "42%"],
    ["82%", "22%"],
    ["88%", "52%"],
  ];

  return (
    <div className="h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.09),transparent_38%),linear-gradient(135deg,#101216,#08090b)] p-4 sm:p-6">
      <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
        {[
          ["38.4K", "Facilities"],
          ["71%", "Accessible"],
          ["12%", "Poor condition"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/[0.045] p-3"
          >
            <div className="text-lg font-bold text-white sm:text-2xl">
              {value}
            </div>
            <div className="mt-1 truncate text-[8px] font-bold uppercase tracking-[0.14em] text-white/35 sm:text-[9px]">
              {label}
            </div>
          </div>
        ))}
      </div>
      <div className="grid h-[calc(100%-5.4rem)] min-h-[10.5rem] grid-cols-[4.5rem_1fr] gap-3 sm:grid-cols-[7rem_1fr]">
        <div className="space-y-2 rounded-xl border border-white/10 bg-white/[0.035] p-2.5 sm:p-3">
          {["Province", "Facility", "Year", "Condition"].map((label, index) => (
            <div key={label}>
              <div className="mb-1 text-[7px] font-bold uppercase tracking-[0.12em] text-white/30 sm:text-[8px]">
                {label}
              </div>
              <div
                className={`h-1.5 rounded-full bg-white/10 ${
                  index % 2 === 0 ? "w-full" : "w-3/4"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <div className="absolute inset-3 border-b border-l border-white/15">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:25%_25%]" />
            <div className="absolute bottom-[18%] left-[4%] h-px w-[90%] rotate-[-18deg] bg-gradient-to-r from-cyan-300/20 via-cyan-300/80 to-cyan-300/20" />
            {scatterPoints.map(([left, top], index) => (
              <span
                key={`${left}-${top}`}
                className={`absolute h-2.5 w-2.5 rounded-full border border-black/30 shadow-[0_0_12px_rgba(103,232,249,0.4)] ${
                  index % 3 === 0 ? "bg-orange-300" : "bg-cyan-300"
                }`}
                style={{ left, top }}
              />
            ))}
          </div>
          <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.13em] text-white/55">
            <BarChart3 className="h-3 w-3 text-cyan-300" />
            Scatterplot
          </div>
        </div>
      </div>
    </div>
  );
}

function SkinSyncPreview() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_50%),linear-gradient(135deg,#385d5b,#172d2f)] p-8">
      <div className="absolute -left-16 top-12 h-52 w-52 rounded-full border border-white/10" />
      <div className="absolute -right-12 bottom-0 h-44 w-44 rounded-full bg-cyan-200/10 blur-2xl" />
      <Image
        src="/images/project-logos/skin-symc.png"
        alt="Skin-Sync logo"
        width={340}
        height={340}
        className="relative z-10 h-auto w-[min(72%,20rem)] object-contain drop-shadow-2xl"
      />
    </div>
  );
}

function PipelinePreview() {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_75%_15%,rgba(255,193,7,0.18),transparent_28%),linear-gradient(135deg,#11212f,#0b1017)] p-7 sm:p-10">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300 text-slate-950">
          <Users className="h-5 w-5" />
        </div>
        <span className="text-xs font-black uppercase tracking-[0.18em] text-white">
          Pipeline to Success
        </span>
      </div>
      <div className="relative z-10 max-w-md">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300">
          By Gryphons, for Gryphons
        </div>
        <div className="text-3xl font-black leading-tight text-white sm:text-5xl">
          Building bridges from academia to real-world success.
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-[8px] font-bold uppercase tracking-[0.1em] text-white/50 sm:text-[9px]">
        {["MCAT Prep", "Clinical", "Research"].map((item) => (
          <div
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-2"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function StepByStepPreview() {
  return (
    <div className="grid h-full grid-cols-[5rem_1fr] bg-[linear-gradient(135deg,#11151c,#0b0c10)] sm:grid-cols-[8rem_1fr]">
      <div className="border-r border-white/10 bg-white/[0.025] p-3 sm:p-5">
        <div className="mb-8 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-400/15 text-violet-300">
          <Bot className="h-5 w-5" />
        </div>
        <div className="space-y-3">
          {[86, 62, 74, 45].map((width, index) => (
            <div key={width} className="space-y-1.5">
              <div className="h-1.5 rounded-full bg-white/10" />
              <div
                className={`h-1 rounded-full ${
                  index === 0 ? "bg-violet-300/70" : "bg-white/5"
                }`}
                style={{ width: `${width}%` }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex min-w-0 flex-col justify-between p-5 sm:p-8">
        <div>
          <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-violet-300">
            Algebra · Lesson 04
          </div>
          <div className="text-lg font-bold text-white sm:text-2xl">
            Solve for x
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-6">
          <div className="mb-4 text-center font-mono text-2xl font-bold text-white sm:text-4xl">
            3x + 7 = 25
          </div>
          <div className="rounded-xl border border-violet-300/20 bg-violet-300/[0.07] p-3 text-xs leading-relaxed text-white/60">
            <span className="font-bold text-violet-200">Hint:</span> Start by
            isolating the term containing x. What operation removes 7?
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
          <span>Adaptive guidance</span>
          <span>72% complete</span>
        </div>
      </div>
    </div>
  );
}

function PomoPandaPreview() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,186,135,0.28),transparent_45%),linear-gradient(135deg,#30211d,#14110f)] p-6">
      <div className="absolute left-[10%] top-[14%] h-[72%] w-[45%] rotate-[-7deg] overflow-hidden rounded-[1.5rem] border border-white/15 bg-white shadow-2xl sm:left-[16%] sm:w-[38%]">
        <Image
          src="/images/project-logos/pomopanda-onboarding.png"
          alt="PomoPanda waving panda mascot"
          fill
          sizes="(max-width: 1024px) 45vw, 25vw"
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-[10%] right-[9%] h-[72%] w-[45%] rotate-[6deg] overflow-hidden rounded-[1.5rem] border border-white/15 bg-white shadow-2xl sm:right-[16%] sm:w-[38%]">
        <Image
          src="/images/project-logos/pomopanda-home.png"
          alt="PomoPanda mascot beside a focus timer"
          fill
          sizes="(max-width: 1024px) 45vw, 25vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

function ImageRecognitionPreview() {
  return (
    <div className="relative h-full overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(129,140,248,0.2),transparent_35%),#090a0f] p-5 sm:p-8">
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-2xl">
        <Image
          src="/images/project-logos/imagerec.png"
          alt="Image-recognition interface showing a handwritten digit prediction"
          fill
          sizes="(max-width: 1024px) 90vw, 55vw"
          className="object-contain p-3 sm:p-6"
        />
      </div>
    </div>
  );
}

function AIProjectsPreview() {
  return (
    <div className="flex h-full flex-col bg-[#090b0f] p-5 font-mono sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">
          <Code2 className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
            ai-research / runner.py
          </div>
          <div className="text-sm font-bold text-white/80">
            Applied AI experiments
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-2 rounded-2xl border border-white/10 bg-black/30 p-4 text-[10px] leading-relaxed sm:p-6 sm:text-xs">
        <p>
          <span className="text-violet-300">def</span>{" "}
          <span className="text-cyan-300">evaluate_sentiment</span>
          <span className="text-white/70">(text):</span>
        </p>
        <p className="pl-4 text-white/40">
          polarity = TextBlob(text).sentiment.polarity
        </p>
        <p className="pl-4 text-emerald-300">
          return classify(polarity)
        </p>
        <p className="pt-4">
          <span className="text-violet-300">def</span>{" "}
          <span className="text-cyan-300">minimax</span>
          <span className="text-white/70">(board, maximizing):</span>
        </p>
        <p className="pl-4 text-white/40">
          scores = explore_possible_moves(board)
        </p>
        <p className="pl-4 text-emerald-300">
          return optimal_move(scores)
        </p>
        <p className="pt-4 text-white/25">
          # Small systems. Clear decisions. Explainable results.
        </p>
      </div>
    </div>
  );
}

function StaticProjectPreview({ project }: { project: ProjectShowcase }) {
  switch (project.previewKind) {
    case "rate-my-facilities":
      return <RateMyFacilitiesPreview />;
    case "skin-sync":
      return <SkinSyncPreview />;
    case "pipeline":
      return <PipelinePreview />;
    case "step-by-step":
      return <StepByStepPreview />;
    case "pomopanda":
      return <PomoPandaPreview />;
    case "image-recognition":
      return <ImageRecognitionPreview />;
    case "ai-projects":
      return <AIProjectsPreview />;
  }
}

function ProjectPreview({
  project,
  active,
}: {
  project: ProjectShowcase;
  active: boolean;
}) {
  const showsLivePreview = active && Boolean(project.liveUrl);

  return (
    <BrowserFrame
      label={project.liveUrl ?? project.category}
      status={showsLivePreview ? "Live" : "Project visual"}
    >
      {showsLivePreview ? (
        <LiveProjectPreview project={project} />
      ) : (
        <StaticProjectPreview project={project} />
      )}
    </BrowserFrame>
  );
}

function ProjectSlide({
  project,
  index,
  active,
}: {
  project: ProjectShowcase;
  index: number;
  active: boolean;
}) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      aria-label={`${project.name}, project ${index + 1} of ${projects.length}`}
      aria-hidden={!active}
      className="glass-card grid min-h-[45rem] overflow-hidden rounded-[2rem] border-white/10 bg-[#111114]/95 p-3 shadow-2xl sm:min-h-[47rem] sm:p-4 lg:min-h-[38rem] lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)]"
    >
      <ProjectPreview project={project} active={active} />

      <div className="flex min-w-0 flex-col p-5 sm:p-7 lg:p-9">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/65">
              {project.category}
            </div>
            <div className="text-sm font-medium text-foreground/50">
              {project.period}
            </div>
          </div>
          <span className="text-sm font-black tracking-[0.25em] text-white/20">
            {projectNumber}
          </span>
        </div>

        <h3 className="text-3xl font-black leading-[1.05] tracking-tight text-foreground sm:text-4xl">
          {project.name}
        </h3>
        {project.association && (
          <p className="mt-3 text-sm font-semibold text-primary/70">
            {project.association}
          </p>
        )}
        <p className="mt-6 text-sm leading-6 text-foreground/60 sm:text-base sm:leading-7">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground/55"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/35">
            <span
              className={`h-2 w-2 rounded-full ${
                project.liveUrl ? "bg-emerald-300" : "bg-white/25"
              }`}
            />
            {project.availability}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-background transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View live
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-foreground/75 transition-colors hover:border-white/30 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                GitHub
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectPeek({
  project,
  side,
  onClick,
}: {
  project: ProjectShowcase;
  side: "left" | "right";
  onClick: () => void;
}) {
  const Icon = side === "left" ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Show ${project.name}`}
      className={`absolute bottom-12 top-12 z-0 hidden w-28 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] text-left transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary xl:block ${
        side === "left" ? "left-0" : "right-0"
      }`}
    >
      <span
        className={`absolute top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/55 ${
          side === "left" ? "left-4" : "right-4"
        }`}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span
        className={`absolute bottom-5 max-h-[12rem] overflow-hidden text-xs font-bold uppercase tracking-[0.16em] text-white/35 [writing-mode:vertical-rl] ${
          side === "left" ? "left-5 rotate-180" : "right-5"
        }`}
      >
        {project.name}
      </span>
    </button>
  );
}

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const mobileScrollerRef = useRef<HTMLDivElement>(null);
  const mobileSlideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mobileScrollFrame = useRef<number | null>(null);
  const prefersReducedMotion = Boolean(useReducedMotion());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateMode = () => setIsDesktop(mediaQuery.matches);
    updateMode();
    mediaQuery.addEventListener("change", updateMode);
    return () => mediaQuery.removeEventListener("change", updateMode);
  }, []);

  useEffect(
    () => () => {
      if (mobileScrollFrame.current !== null) {
        window.cancelAnimationFrame(mobileScrollFrame.current);
      }
    },
    [],
  );

  const scrollMobileTo = useCallback(
    (index: number) => {
      window.requestAnimationFrame(() => {
        const scroller = mobileScrollerRef.current;
        const slide = mobileSlideRefs.current[index];
        if (!scroller || !slide) return;
        scroller.scrollTo({
          left: slide.offsetLeft - scroller.offsetLeft,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      });
    },
    [prefersReducedMotion],
  );

  useEffect(() => {
    if (isDesktop) return;
    scrollMobileTo(activeIndex);
  }, [activeIndex, isDesktop, scrollMobileTo]);

  const showProject = useCallback(
    (nextIndex: number, nextDirection: number) => {
      const wrappedIndex = wrapIndex(nextIndex);
      setDirection(nextDirection);
      setActiveIndex(wrappedIndex);
      if (!isDesktop) {
        scrollMobileTo(wrappedIndex);
      }
    },
    [isDesktop, scrollMobileTo],
  );

  const showPrevious = useCallback(() => {
    showProject(activeIndex - 1, -1);
  }, [activeIndex, showProject]);

  const showNext = useCallback(() => {
    showProject(activeIndex + 1, 1);
  }, [activeIndex, showProject]);

  const handleKeyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  const handleMobileScroll = () => {
    if (mobileScrollFrame.current !== null) {
      window.cancelAnimationFrame(mobileScrollFrame.current);
    }
    mobileScrollFrame.current = window.requestAnimationFrame(() => {
      const scroller = mobileScrollerRef.current;
      if (!scroller) return;

      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      mobileSlideRefs.current.forEach((slide, index) => {
        if (!slide) return;
        const distance = Math.abs(
          slide.offsetLeft - scroller.offsetLeft - scroller.scrollLeft,
        );
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveIndex((currentIndex) => {
        if (nearestIndex !== currentIndex) {
          setDirection(nearestIndex > currentIndex ? 1 : -1);
          return nearestIndex;
        }
        return currentIndex;
      });
    });
  };

  const activeProject = projects[activeIndex];
  const previousProject = projects[wrapIndex(activeIndex - 1)];
  const nextProject = projects[wrapIndex(activeIndex + 1)];
  const transitionDuration = prefersReducedMotion ? 0 : 0.42;

  return (
    <SectionWrapper
      id="projects"
      title="Featured Work"
      className="relative overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-10" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[70rem] -translate-x-1/2 rounded-full bg-primary/[0.035] blur-3xl" />

      <div
        className="relative z-10 rounded-[2rem] py-8 outline-none focus-visible:ring-1 focus-visible:ring-primary/50 focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:py-12"
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected software projects"
        tabIndex={0}
        onKeyDown={handleKeyboard}
      >
        <div className="mb-7 flex flex-col gap-5 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/65">
              <Globe2 className="h-3.5 w-3.5" />
              Product archive
            </div>
            <p className="max-w-xl text-sm leading-6 text-foreground/50 sm:text-base">
              Explore live products, shipped interfaces, and technical
              experiments. Live websites render directly inside their active
              slide.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="mr-1 text-xs font-bold tracking-[0.2em] text-foreground/35"
              aria-live="polite"
            >
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-foreground/65 transition-colors hover:border-white/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Show next project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-foreground/65 transition-colors hover:border-white/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {isDesktop ? (
          <div className="relative px-0 xl:px-20">
            <ProjectPeek
              project={previousProject}
              side="left"
              onClick={showPrevious}
            />
            <ProjectPeek
              project={nextProject}
              side="right"
              onClick={showNext}
            />

            <div className="relative z-10">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={activeProject.id}
                  custom={direction}
                  initial={{
                    x: prefersReducedMotion ? 0 : direction > 0 ? 70 : -70,
                    opacity: prefersReducedMotion ? 1 : 0,
                  }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{
                    x: prefersReducedMotion ? 0 : direction > 0 ? -70 : 70,
                    opacity: prefersReducedMotion ? 1 : 0,
                  }}
                  transition={{
                    duration: transitionDuration,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  drag={prefersReducedMotion ? false : "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.14}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -80 || info.velocity.x < -500) {
                      showNext();
                    } else if (
                      info.offset.x > 80 ||
                      info.velocity.x > 500
                    ) {
                      showPrevious();
                    }
                  }}
                >
                  <ProjectSlide
                    project={activeProject}
                    index={activeIndex}
                    active
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div
            ref={mobileScrollerRef}
            onScroll={handleMobileScroll}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6"
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(element) => {
                  mobileSlideRefs.current[index] = element;
                }}
                className="w-[calc(100vw-2rem)] shrink-0 snap-center sm:w-[calc(100vw-5rem)]"
              >
                <ProjectSlide
                  project={project}
                  index={index}
                  active={index === activeIndex}
                />
              </div>
            ))}
          </div>
        )}

        <div
          className="mt-7 flex items-center justify-center gap-2"
          aria-label="Choose a project"
        >
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() =>
                showProject(index, index >= activeIndex ? 1 : -1)
              }
              aria-label={`Show ${project.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {activeProject.name}, project {activeIndex + 1} of{" "}
          {projects.length}.
        </p>
      </div>
    </SectionWrapper>
  );
}
