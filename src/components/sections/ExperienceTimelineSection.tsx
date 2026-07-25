"use client";

import Image from "next/image";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, {
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

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

const experiences: Experience[] = [
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

const DESKTOP_TRACK_HEIGHT = 650;
const DESKTOP_NODE_START = 280;
const DESKTOP_NODE_GAP = 520;
const DESKTOP_CARD_WIDTH = 420;
const DESKTOP_CARD_HEIGHT = 320;
const DESKTOP_NODE_Y = [240, 400, 230, 400, 250, 400, 240];
const DESKTOP_TRACK_WIDTH =
  DESKTOP_NODE_START * 2 + DESKTOP_NODE_GAP * (experiences.length - 1);

const NATIVE_TRACK_HEIGHT = 720;
const NATIVE_NODE_START = 196;
const NATIVE_NODE_GAP = 368;
const NATIVE_CARD_WIDTH = 344;
const NATIVE_CARD_HEIGHT = 430;
const NATIVE_NODE_Y = [82, 112, 74, 118, 84, 108, 76];
const NATIVE_TRACK_WIDTH =
  NATIVE_NODE_START * 2 + NATIVE_NODE_GAP * (experiences.length - 1);

const desktopPoints: TimelinePoint[] = experiences.map((_, index) => ({
  x: DESKTOP_NODE_START + index * DESKTOP_NODE_GAP,
  y: DESKTOP_NODE_Y[index],
}));

const nativePoints: TimelinePoint[] = experiences.map((_, index) => ({
  x: NATIVE_NODE_START + index * NATIVE_NODE_GAP,
  y: NATIVE_NODE_Y[index],
}));

function buildWavePath(points: TimelinePoint[]) {
  if (points.length === 0) return "";

  return points.slice(1).reduce((path, point, index) => {
    const previous = points[index];
    const controlOffset = (point.x - previous.x) * 0.46;

    return `${path} C ${previous.x + controlOffset} ${previous.y}, ${
      point.x - controlOffset
    } ${point.y}, ${point.x} ${point.y}`;
  }, `M ${points[0].x} ${points[0].y}`);
}

const desktopWavePath = buildWavePath(desktopPoints);
const nativeWavePath = buildWavePath(nativePoints);

function CompanyLogo({ experience }: { experience: Experience }) {
  if (experience.logoPresentation === "permalution") {
    return (
      <span className="relative block h-14 w-14 overflow-hidden rounded-full">
        <Image
          src={experience.logoSrc}
          alt={experience.logoAlt}
          width={154}
          height={56}
          className="absolute left-1 top-1/2 h-14 w-auto max-w-none -translate-y-1/2"
        />
      </span>
    );
  }

  if (experience.logoPresentation === "wordmark") {
    return (
      <Image
        src={experience.logoSrc}
        alt={experience.logoAlt}
        width={118}
        height={24}
        className="h-auto w-14 object-contain"
      />
    );
  }

  return (
    <Image
      src={experience.logoSrc}
      alt={experience.logoAlt}
      width={64}
      height={64}
      className="h-14 w-14 rounded-lg object-contain"
    />
  );
}

function TimelineNode({
  experience,
  active,
  reached,
}: {
  experience: Experience;
  active: boolean;
  reached: boolean;
}) {
  return (
    <motion.div
      animate={{
        scale: active ? 1.12 : 1,
        opacity: reached ? 1 : 0.52,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative z-20 flex h-[74px] w-[74px] items-center justify-center rounded-full border bg-white p-2 shadow-2xl transition-colors ${
        active
          ? "border-white shadow-[0_0_42px_rgba(255,255,255,0.3)]"
          : reached
            ? "border-white/70"
            : "border-white/20"
      }`}
    >
      <CompanyLogo experience={experience} />
      <span
        aria-hidden="true"
        className={`absolute -inset-2 -z-10 rounded-full border transition-all duration-300 ${
          active ? "scale-100 border-white/30 opacity-100" : "scale-75 border-transparent opacity-0"
        }`}
      />
    </motion.div>
  );
}

function ExperienceCard({
  experience,
  index,
  activeIndex,
  className = "",
}: {
  experience: Experience;
  index: number;
  activeIndex: number;
  className?: string;
}) {
  const active = index === activeIndex;
  const passed = index < activeIndex;

  return (
    <motion.article
      id={`experience-card-${experience.id}`}
      aria-current={active ? "step" : undefined}
      animate={{
        opacity: active ? 1 : passed ? 0.68 : 0.38,
        scale: active ? 1 : 0.95,
        y: active ? 0 : index % 2 === 0 ? 8 : -8,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`glass-card flex flex-col rounded-[2rem] border-white/10 bg-zinc-950/75 p-6 shadow-2xl backdrop-blur-2xl transition-colors ${
        active ? "border-white/30" : "hover:border-white/20"
      } ${className}`}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
          {experience.date}
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mb-3">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
          {experience.employment}
        </p>
        <h3 className="text-xl font-bold leading-tight text-foreground">
          {experience.role}
        </h3>
        <p className="mt-1 text-sm font-semibold text-white/55">
          {experience.company}
        </p>
        <p className="mt-2 text-[11px] leading-4 text-white/35">
          {experience.location}
        </p>
        {experience.detail && (
          <p className="mt-1 text-[11px] font-semibold leading-4 text-primary/60">
            {experience.detail}
          </p>
        )}
      </div>

      <ul className="mt-auto space-y-2 text-[13px] leading-5 text-foreground/65">
        {experience.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2.5">
            <span
              aria-hidden="true"
              className="mt-[0.55rem] h-1 w-1 flex-shrink-0 rounded-full bg-white/65"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function TimelineControls({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onSelect(activeIndex - 1)}
        disabled={activeIndex === 0}
        aria-label="Previous experience"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-zinc-950/80 text-foreground shadow-xl backdrop-blur-xl transition hover:border-white/35 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-25"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>

      <div
        className="min-w-[5.5rem] text-center text-xs font-semibold tracking-[0.18em] text-white/45"
        aria-live="polite"
      >
        {String(activeIndex + 1).padStart(2, "0")}
        <span aria-hidden="true"> / </span>
        <span className="sr-only"> of </span>
        {String(experiences.length).padStart(2, "0")}
      </div>

      <button
        type="button"
        onClick={() => onSelect(activeIndex + 1)}
        disabled={activeIndex === experiences.length - 1}
        aria-label="Next experience"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-zinc-950/80 text-foreground shadow-xl backdrop-blur-xl transition hover:border-white/35 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-25"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

export default function ExperienceTimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const nativeScrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [desktopTravel, setDesktopTravel] = useState(0);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const desktopScrubEnabled = isDesktop && !shouldReduceMotion;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const desktopXRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -desktopTravel],
  );
  const desktopX = useSpring(desktopXRaw, {
    stiffness: 120,
    damping: 28,
    mass: 0.28,
  });
  const desktopPathProgress = useTransform(
    scrollYProgress,
    [0.025, 0.96],
    [0, 1],
  );
  const nativePathProgress = useMotionValue(0);
  const nativePathProgressSpring = useSpring(nativePathProgress, {
    stiffness: 150,
    damping: 30,
    mass: 0.25,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateViewport = () => {
      setIsDesktop(mediaQuery.matches);
      setViewportHeight(window.innerHeight);
      setDesktopTravel(
        Math.max(
          0,
          desktopPoints[desktopPoints.length - 1].x - window.innerWidth / 2,
        ),
      );
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    window.addEventListener("resize", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!desktopScrubEnabled) return;

    const nextIndex = Math.min(
      experiences.length - 1,
      Math.max(0, Math.round(progress * (experiences.length - 1))),
    );

    setActiveIndex((currentIndex) =>
      currentIndex === nextIndex ? currentIndex : nextIndex,
    );
  });

  const scrollToDesktopIndex = useCallback(
    (index: number) => {
      const nextIndex = Math.min(
        experiences.length - 1,
        Math.max(0, index),
      );
      const section = sectionRef.current;

      if (!section) return;

      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY;
      const scrollableDistance = Math.max(
        0,
        section.offsetHeight - window.innerHeight,
      );
      const targetProgress = nextIndex / (experiences.length - 1);

      window.scrollTo({
        top: sectionTop + scrollableDistance * targetProgress,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
      setActiveIndex(nextIndex);
    },
    [shouldReduceMotion],
  );

  const scrollToNativeIndex = useCallback(
    (index: number) => {
      const nextIndex = Math.min(
        experiences.length - 1,
        Math.max(0, index),
      );
      const scroller = nativeScrollerRef.current;

      if (!scroller) return;

      const targetLeft =
        nativePoints[nextIndex].x - scroller.clientWidth / 2;
      scroller.scrollTo({
        left: Math.max(
          0,
          Math.min(targetLeft, scroller.scrollWidth - scroller.clientWidth),
        ),
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
      setActiveIndex(nextIndex);
    },
    [shouldReduceMotion],
  );

  const handleNativeScroll = useCallback(() => {
    const scroller = nativeScrollerRef.current;
    if (!scroller) return;

    const maxScroll = Math.max(1, scroller.scrollWidth - scroller.clientWidth);
    const progress = scroller.scrollLeft / maxScroll;
    nativePathProgress.set(progress);

    const nextIndex = Math.min(
      experiences.length - 1,
      Math.max(0, Math.round(progress * (experiences.length - 1))),
    );
    setActiveIndex((currentIndex) =>
      currentIndex === nextIndex ? currentIndex : nextIndex,
    );
  }, [nativePathProgress]);

  useEffect(() => {
    if (desktopScrubEnabled) return;

    const animationFrame = window.requestAnimationFrame(handleNativeScroll);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [desktopScrubEnabled, handleNativeScroll]);

  const handleTimelineKeyDown = (
    event: KeyboardEvent<HTMLElement | HTMLDivElement>,
    onSelect: (index: number) => void,
  ) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      onSelect(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      onSelect(activeIndex + 1);
    }
  };

  const desktopSectionHeight =
    viewportHeight + desktopTravel + Math.min(420, viewportHeight * 0.55);

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-label="Professional Journey"
      className="relative scroll-mt-20 bg-background"
      style={
        desktopScrubEnabled
          ? { height: `${desktopSectionHeight}px` }
          : undefined
      }
    >
      {desktopScrubEnabled ? (
        <div
          className="sticky top-0 h-screen overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60"
          tabIndex={0}
          onKeyDown={(event) =>
            handleTimelineKeyDown(event, scrollToDesktopIndex)
          }
        >
          <div className="dot-grid absolute inset-0 opacity-10" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-30 w-24 bg-gradient-to-r from-background to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-30 w-24 bg-gradient-to-l from-background to-transparent"
            aria-hidden="true"
          />

          <div className="absolute left-1/2 top-8 z-40 -translate-x-1/2 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/35">
              From research to production
            </p>
            <h2 className="whitespace-nowrap text-4xl font-bold text-primary lg:text-5xl">
              Professional Journey
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Scroll to follow the path
            </p>
          </div>

          <motion.div
            className="absolute left-0 top-[120px]"
            style={{
              x: desktopX,
              width: DESKTOP_TRACK_WIDTH,
              height: DESKTOP_TRACK_HEIGHT,
            }}
          >
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-visible"
              width={DESKTOP_TRACK_WIDTH}
              height={DESKTOP_TRACK_HEIGHT}
              viewBox={`0 0 ${DESKTOP_TRACK_WIDTH} ${DESKTOP_TRACK_HEIGHT}`}
              fill="none"
            >
              <path
                d={desktopWavePath}
                stroke="rgba(255,255,255,0.11)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <motion.path
                d={desktopWavePath}
                stroke="rgba(255,255,255,0.88)"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength: desktopPathProgress }}
              />
            </svg>

            <div role="list" aria-label="Career experiences">
              {experiences.map((experience, index) => {
                const point = desktopPoints[index];
                const cardBelow = index % 2 === 0;
                const cardTop = cardBelow
                  ? point.y + 66
                  : point.y - 66 - DESKTOP_CARD_HEIGHT;

                return (
                  <div key={experience.id} role="listitem">
                    <div
                      className="absolute z-10 w-px bg-gradient-to-b from-white/5 via-white/35 to-white/5"
                      style={{
                        left: point.x,
                        top: cardBelow ? point.y + 37 : cardTop + DESKTOP_CARD_HEIGHT,
                        height: 29,
                      }}
                      aria-hidden="true"
                    />

                    <div
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: point.x, top: point.y }}
                    >
                      <TimelineNode
                        experience={experience}
                        active={index === activeIndex}
                        reached={index <= activeIndex}
                      />
                    </div>

                    <div
                      className="absolute"
                      style={{
                        left: point.x - DESKTOP_CARD_WIDTH / 2,
                        top: cardTop,
                        width: DESKTOP_CARD_WIDTH,
                        height: DESKTOP_CARD_HEIGHT,
                      }}
                    >
                      <ExperienceCard
                        experience={experience}
                        index={index}
                        activeIndex={activeIndex}
                        className="h-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <div className="absolute bottom-7 right-8 z-40">
            <TimelineControls
              activeIndex={activeIndex}
              onSelect={scrollToDesktopIndex}
            />
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden py-20 md:py-24">
          <div className="dot-grid absolute inset-0 opacity-10" aria-hidden="true" />

          <div className="relative z-10 mx-auto mb-10 px-6 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
              From research to production
            </p>
            <h2 className="text-4xl font-bold text-primary md:text-5xl">
              Professional Journey
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {shouldReduceMotion
                ? "Use the controls or arrow keys to explore"
                : "Swipe to follow the path"}
            </p>
          </div>

          <div
            ref={nativeScrollerRef}
            onScroll={handleNativeScroll}
            onKeyDown={(event) =>
              handleTimelineKeyDown(event, scrollToNativeIndex)
            }
            tabIndex={0}
            role="region"
            aria-label="Scrollable career timeline"
            className="relative z-10 overflow-x-auto overscroll-x-contain scroll-smooth outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60 [&::-webkit-scrollbar]:hidden"
          >
            <div
              className="relative"
              style={{
                width: NATIVE_TRACK_WIDTH,
                height: NATIVE_TRACK_HEIGHT,
              }}
            >
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-visible"
                width={NATIVE_TRACK_WIDTH}
                height={160}
                viewBox={`0 0 ${NATIVE_TRACK_WIDTH} 160`}
                fill="none"
              >
                <path
                  d={nativeWavePath}
                  stroke="rgba(255,255,255,0.11)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <motion.path
                  d={nativeWavePath}
                  stroke="rgba(255,255,255,0.88)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{
                    pathLength: shouldReduceMotion
                      ? 1
                      : nativePathProgressSpring,
                  }}
                />
              </svg>

              <div role="list" aria-label="Career experiences">
                {experiences.map((experience, index) => {
                  const point = nativePoints[index];
                  const cardTop = point.y + 82 + (index % 2 === 0 ? 0 : 18);

                  return (
                    <div
                      key={experience.id}
                      role="listitem"
                      className="absolute snap-center"
                      style={{
                        left: point.x - NATIVE_CARD_WIDTH / 2,
                        top: 0,
                        width: NATIVE_CARD_WIDTH,
                        height: NATIVE_TRACK_HEIGHT,
                        scrollSnapAlign: "center",
                      }}
                    >
                      <div
                        className="absolute left-1/2 z-10 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-white/30 to-white/5"
                        style={{ top: point.y + 36 }}
                        aria-hidden="true"
                      />

                      <div
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ top: point.y }}
                      >
                        <TimelineNode
                          experience={experience}
                          active={index === activeIndex}
                          reached={index <= activeIndex}
                        />
                      </div>

                      <div
                        className="absolute left-0"
                        style={{
                          top: cardTop,
                          width: NATIVE_CARD_WIDTH,
                          height: NATIVE_CARD_HEIGHT,
                        }}
                      >
                        <ExperienceCard
                          experience={experience}
                          index={index}
                          activeIndex={activeIndex}
                          className="h-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-1 flex justify-center">
            <TimelineControls
              activeIndex={activeIndex}
              onSelect={scrollToNativeIndex}
            />
          </div>
        </div>
      )}
    </section>
  );
}
