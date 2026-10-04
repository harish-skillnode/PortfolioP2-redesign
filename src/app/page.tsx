"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import ContactDrawer from "@/components/ui/ContactDrawer";
import { experiences, projects, publication } from "@/data/portfolio";

const sections = [
  "About",
  "Experience",
  "Projects",
  "Research",
  "SkillNode",
] as const;
type Section = (typeof sections)[number];

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`portfolio-link ${className}`}
    >
      {children}
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

function Pager({
  index,
  count,
  onChange,
  label,
}: {
  index: number;
  count: number;
  onChange: (index: number) => void;
  label: string;
}) {
  return (
    <div className="panel-pager" aria-label={label}>
      <button
        onClick={() => onChange((index - 1 + count) % count)}
        aria-label={`Previous ${label}`}
      >
        <ArrowLeft size={17} />
      </button>
      <span aria-live="polite">
        {String(index + 1).padStart(2, "0")}{" "}
        <span>/ {String(count).padStart(2, "0")}</span>
      </span>
      <button
        onClick={() => onChange((index + 1) % count)}
        aria-label={`Next ${label}`}
      >
        <ArrowRight size={17} />
      </button>
    </div>
  );
}

function About() {
  const [page, setPage] = useState(0);
  return (
    <div className={`about-view about-content-${page}`}>
      <div className="about-copy">
        <p className="eyebrow">A little about me</p>
        <h2>
          I build systems.
          <br />
          <span>I stay curious.</span>
        </h2>
        <p className="about-lead">
          I build systems, study how people bend them, and teach others to make
          them better.
        </p>
        <div className={`about-pages about-page-${page}`}>
          <p className="about-paragraph about-intro">
            I&apos;m Sriharish — a Computer Science student at Guelph, a former
            software development intern at Criteo, and an HCI researcher. My
            work moves between production code, AI and creativity studies, and a
            smartwatch project about how an “imperfect” stress avatar becomes a
            joke, companion, or game.
          </p>
          <p className="about-paragraph about-perspective">
            That range is what keeps me curious. I care about what happens after
            software leaves the editor — where people hesitate, invent
            workarounds, or make a tool their own. I turn those moments into
            clearer interfaces, stronger systems, and better questions.
          </p>
          <div className="current-focus">
            <p className="mobile-profile-context">
              Building high-performance digital experiences and robust systems.
              Final year Computer Science student at the University of Guelph.
            </p>
            <p className="eyebrow">What I&apos;m working on now</p>
            <div>
              <span>01 / Building</span>
              <p>SkillNode · AI compatibility</p>
            </div>
            <div>
              <span>02 / In the lab</span>
              <p>AI, creativity &amp; wearable HCI</p>
            </div>
            <div>
              <span>03 / At Guelph</span>
              <p>Teaching UI design &amp; discrete structures</p>
            </div>
          </div>
        </div>
        <div className="about-mobile-pager">
          <span>{["Introduction", "Perspective", "Right now"][page]}</span>
          <Pager index={page} count={3} onChange={setPage} label="about page" />
        </div>
      </div>
      <figure className="about-art">
        <div className="art-label">
          <span className="status-dot" /> Somewhere between code &amp; curiosity
        </div>
        <Image
          src="/images/about-light-02.png"
          alt="Pixel-art portrait of Sriharish coding beside his dog"
          width={500}
          height={500}
          priority
        />
        <figcaption>
          <span>Code. Create. Repeat.</span>
          <span>↗</span>
        </figcaption>
      </figure>
    </div>
  );
}

function Experience() {
  const [index, setIndex] = useState(experiences.length - 1);
  const experience = experiences[index];
  return (
    <div className="section-view">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The journey so far</p>
          <h2>
            Experience<span className="title-dot">.</span>
          </h2>
        </div>
        <span className="quiet-count">7 roles / 2025—2026</span>
      </div>
      <div className="collection-layout">
        <div className="item-list" aria-label="Choose an experience">
          {[...experiences].reverse().map((item, reverseIndex) => {
            const itemIndex = experiences.length - 1 - reverseIndex;
            return (
              <button
                key={item.id}
                onClick={() => setIndex(itemIndex)}
                aria-pressed={index === itemIndex}
                className={index === itemIndex ? "selected" : ""}
              >
                <span>
                  <strong>
                    {item.company.replace(" Research", " · Research")}
                  </strong>
                  <small>
                    {item.role
                      .replace("Research Assistant - ", "")
                      .replace("Researcher - ", "")
                      .replace("Teaching Assistant - ", "TA · ")}
                  </small>
                </span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>
            );
          })}
        </div>
        <div className="item-select">
          <label htmlFor="experience-select">Choose a role</label>
          <select
            id="experience-select"
            value={index}
            onChange={(event) => setIndex(Number(event.target.value))}
          >
            {[...experiences].reverse().map((item, reverseIndex) => (
              <option
                key={item.id}
                value={experiences.length - 1 - reverseIndex}
              >
                {item.company} — {item.role}
              </option>
            ))}
          </select>
        </div>
        <article className="detail-card experience-detail">
          <div className="detail-topline">
            <div className={`company-logo logo-${experience.logoPresentation}`}>
              <Image
                src={experience.logoSrc}
                alt={experience.logoAlt}
                width={120}
                height={60}
              />
            </div>
            <span className="small-badge">{experience.employment}</span>
          </div>
          <div className="detail-body">
            <p className="eyebrow">{experience.company}</p>
            <h3>{experience.role}</h3>
            <p className="detail-meta">
              <span className="mobile-employment">
                {experience.employment} ·{" "}
              </span>
              {experience.date}
              <br />
              {experience.location}
            </p>
            {experience.detail && (
              <p className="detail-subtitle">{experience.detail}</p>
            )}
            <ul className="experience-bullets">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div className="detail-bottom">
            <span>Experience</span>
            <Pager
              index={index}
              count={experiences.length}
              onChange={setIndex}
              label="experience"
            />
          </div>
        </article>
      </div>
    </div>
  );
}

const projectImages: Record<string, string> = {
  "skin-sync": "/images/project-logos/skin-symc.png",
  pomopanda: "/images/project-logos/pomopanda-home.png",
  "image-recognition": "/images/project-logos/imagerec.png",
};

function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  return (
    <div className="section-view">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Ideas turned into things</p>
          <h2>
            Selected projects<span className="title-dot">.</span>
          </h2>
        </div>
        <span className="quiet-count">7 projects</span>
      </div>
      <div className="collection-layout">
        <div className="item-list" aria-label="Choose a project">
          {projects.map((item, itemIndex) => (
            <button
              key={item.id}
              onClick={() => setIndex(itemIndex)}
              aria-pressed={index === itemIndex}
              className={index === itemIndex ? "selected" : ""}
            >
              <span>
                <strong>{item.name}</strong>
                <small>{item.category}</small>
              </span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </button>
          ))}
        </div>
        <div className="item-select">
          <label htmlFor="project-select">Choose a project</label>
          <select
            id="project-select"
            value={index}
            onChange={(event) => setIndex(Number(event.target.value))}
          >
            {projects.map((item, itemIndex) => (
              <option key={item.id} value={itemIndex}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <article className="detail-card project-detail">
          <div className={`project-preview preview-${project.id}`}>
            {projectImages[project.id] ? (
              <Image
                src={projectImages[project.id]}
                alt={project.previewAlt}
                fill
                sizes="(max-width: 760px) 90vw, 40vw"
                className="project-image"
              />
            ) : (
              <div className="project-monogram" aria-hidden="true">
                <Code2 size={36} strokeWidth={1} />
                <span>{project.name}</span>
                <small>{project.category}</small>
              </div>
            )}
            <span className="preview-status">{project.availability}</span>
          </div>
          <div className="detail-body">
            <p className="eyebrow">
              {project.period}
              {project.association ? ` · ${project.association}` : ""}
            </p>
            <h3>{project.name}</h3>
            <p className="detail-description">{project.description}</p>
            <div className="skill-tags">
              {project.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="detail-bottom">
            <div className="project-links">
              {project.liveUrl && (
                <ExternalLink href={project.liveUrl}>Live site</ExternalLink>
              )}
              {project.repositoryUrl && (
                <ExternalLink href={project.repositoryUrl}>
                  Source code
                </ExternalLink>
              )}
              {!project.liveUrl && !project.repositoryUrl && (
                <span>{project.availability}</span>
              )}
            </div>
            <Pager
              index={index}
              count={projects.length}
              onChange={setIndex}
              label="project"
            />
          </div>
        </article>
      </div>
    </div>
  );
}

function Research() {
  const [page, setPage] = useState(0);
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(
      "(max-width: 360px) and (max-height: 640px)",
    );
    const update = () => {
      setSmallScreen(media.matches);
      setPage(0);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return (
    <div className="section-view">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Human-computer interaction</p>
          <h2>
            Research<span className="title-dot">.</span>
          </h2>
        </div>
        <span className="quiet-count">Featured publication</span>
      </div>
      <article className={`research-layout research-page-${page}`}>
        <a
          className="paper-cover"
          href={publication.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read ${publication.title}`}
        >
          <Image
            src={publication.coverImage}
            alt={publication.coverAlt}
            width={743}
            height={1100}
          />
          <span>
            Read the paper <ArrowUpRight size={16} />
          </span>
        </a>
        <div className="research-copy">
          <div className="research-intro">
            <p className="eyebrow">{publication.status}</p>
            <h3>{publication.title}</h3>
            <p className="authors">{publication.authors}</p>
            <p className="detail-description research-summary">
              {publication.summary}
            </p>
          </div>
          <div className="research-methods">
            <p className="research-venue">{publication.venue}</p>
            <div className="method-stats">
              {publication.methods.map((method) => (
                <div key={method.label}>
                  <strong>{method.value}</strong>
                  <span>{method.label}</span>
                </div>
              ))}
            </div>
            <p className="research-note">
              Multi-region qualitative study
              <br />
              Social play and wearable HCI
            </p>
            <p className="doi">
              DOI:{" "}
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {publication.doi}
              </a>
              <br />
              {publication.pageCount} pages · CC BY 4.0
            </p>
          </div>
          <div className="research-summary-page">
            <p className="eyebrow">About the study</p>
            <p className="detail-description">{publication.summary}</p>
          </div>
          <div className="research-bottom">
            <ExternalLink href={publication.pdfUrl} className="filled-link">
              Read full paper
            </ExternalLink>
            <div className="research-mobile-pager">
              <Pager
                index={page}
                count={smallScreen ? 3 : 2}
                onChange={setPage}
                label="research page"
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function SkillNode() {
  const [page, setPage] = useState(0);
  return (
    <div className={`skillnode-view skillnode-page-${page}`}>
      <div className="skillnode-copy">
        <p className="eyebrow">A project I&apos;m building</p>
        <div className="skillnode-brand">
          <Image
            src="/images/project-logos/skillnode-logo.png"
            alt="SkillNode logo"
            width={56}
            height={56}
          />
          <h2>
            SkillNode<span className="title-dot">.</span>
          </h2>
        </div>
        <span className="small-badge blue-badge">
          <span className="status-dot" /> Coming soon
        </span>
        <div className="skillnode-intro">
          <h3>
            Find the fit
            <br />
            <span>beyond the résumé.</span>
          </h3>
          <p className="detail-description">
            Matching people to opportunities through more than a list of
            keywords.
          </p>
          <p className="detail-description">
            I&apos;m building SkillNode to help students and employers find a
            better fit through AI-powered compatibility — connecting skills,
            real project work, and room to grow.
          </p>
        </div>
        <div className="skillnode-mobile-details">
          <p className="detail-description">
            I&apos;m building SkillNode to help students and employers find a
            better fit through AI-powered compatibility — connecting skills,
            real project work, and room to grow.
          </p>
          <p className="eyebrow">Compatibility in context</p>
          <p className="detail-description">
            Students: skills + projects. Employers: roles + potential.
            AI-powered compatibility connects the two.
          </p>
        </div>
        <div className="skillnode-actions">
          <ExternalLink href="https://skillnode.ca" className="filled-link">
            Explore the beta
          </ExternalLink>
          <span>skillnode.ca</span>
        </div>
        <div className="skillnode-mobile-pager">
          <Pager
            index={page}
            count={2}
            onChange={setPage}
            label="SkillNode page"
          />
        </div>
      </div>
      <div
        className="compatibility-art"
        aria-label="SkillNode connects students’ skills and projects to employers’ roles and potential"
      >
        <p className="eyebrow">
          <Sparkles size={14} /> Compatibility in context
        </p>
        <div className="compatibility-node">
          <GraduationCap size={25} />
          <strong>Student</strong>
          <span>Skills + projects</span>
        </div>
        <div className="node-connector" />
        <div className="compatibility-logo">
          <Image
            src="/images/project-logos/skillnode-logo.png"
            alt=""
            width={72}
            height={72}
          />
        </div>
        <div className="node-connector" />
        <div className="compatibility-node">
          <BriefcaseBusiness size={25} />
          <strong>Employer</strong>
          <span>Role + potential</span>
        </div>
        <p className="compatibility-caption">
          Better matches. More possibility.
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [section, setSection] = useState<Section>("About");
  const [contactOpen, setContactOpen] = useState(false);
  const contactButton = useRef<HTMLButtonElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeContact = useCallback(() => {
    setContactOpen(false);
    contactButton.current?.focus();
  }, []);

  useEffect(() => {
    const readHash = () => {
      const match = sections.find(
        (item) => `#${item.toLowerCase()}` === window.location.hash,
      );
      setSection(match ?? "About");
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  function changeSection(next: Section) {
    setSection(next);
    window.history.pushState(null, "", `#${next.toLowerCase()}`);
  }

  function handleTabKey(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % sections.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + sections.length) % sections.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = sections.length - 1;
    else return;
    event.preventDefault();
    changeSection(sections[next]);
    tabs.current[next]?.focus();
  }

  return (
    <div className="portfolio-shell">
      <header className="portfolio-header">
        <a
          href="#about"
          onClick={(event) => {
            event.preventDefault();
            changeSection("About");
          }}
          aria-label="Sriharish Eswarathas — About"
        >
          <Image
            src="/images/logo/logo.png"
            alt="Sriharish Eswarathas logo"
            width={160}
            height={51}
            priority
          />
        </a>
        <span className="header-caption">
          Personal portfolio <span>/</span> 2026
        </span>
        <a className="header-email" href="mailto:harisheswarathas@gmail.com">
          Let&apos;s talk <ArrowUpRight size={14} />
        </a>
      </header>
      <main className="portfolio-main">
        <aside className="profile-sidebar" aria-label="Profile">
          <div className="profile-identity">
            <p className="eyebrow">
              <span className="status-dot" /> Software engineer
            </p>
            <h1>
              Sriharish <br />
              Eswarathas<span className="title-dot">.</span>
            </h1>
            <p className="profile-summary">
              Building high-performance digital experiences and robust systems.
            </p>
            <p className="profile-education">
              Final year Computer Science <br />
              University of Guelph
            </p>
          </div>
          <div className="profile-actions">
            <a
              className="resume-link"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View résumé <ArrowDownToLine size={16} />
            </a>
            <button
              ref={contactButton}
              className="contact-link"
              onClick={() => setContactOpen(true)}
            >
              Get in touch <Mail size={16} />
            </button>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/sriharish-eswarathas-002023240/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/harishe182"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <p className="profile-quote">
            “The path that leads to truth
            <br />
            is a laborious one.”
          </p>
        </aside>
        <div className="portfolio-workspace">
          <nav
            className="section-tabs"
            role="tablist"
            aria-label="Portfolio sections"
          >
            {sections.map((item, index) => (
              <button
                key={item}
                ref={(element) => {
                  tabs.current[index] = element;
                }}
                id={`tab-${item.toLowerCase()}`}
                role="tab"
                aria-selected={section === item}
                aria-controls="portfolio-panel"
                tabIndex={section === item ? 0 : -1}
                onClick={() => changeSection(item)}
                onKeyDown={(event) => handleTabKey(event, index)}
              >
                <span className="tab-number">0{index + 1}</span>
                {item}
              </button>
            ))}
          </nav>
          <section
            id="portfolio-panel"
            role="tabpanel"
            aria-labelledby={`tab-${section.toLowerCase()}`}
            tabIndex={0}
            className="portfolio-panel"
            key={section}
          >
            {section === "About" ? (
              <About />
            ) : section === "Experience" ? (
              <Experience />
            ) : section === "Projects" ? (
              <Projects />
            ) : section === "Research" ? (
              <Research />
            ) : (
              <SkillNode />
            )}
          </section>
        </div>
      </main>
      <footer className="portfolio-footer">
        <span>© {new Date().getFullYear()} Sriharish Eswarathas</span>
        <a href="mailto:harisheswarathas@gmail.com">
          harisheswarathas@gmail.com <ArrowUpRight size={12} />
        </a>
        <span className="footer-note">Built with curiosity.</span>
      </footer>
      <ContactDrawer isOpen={contactOpen} onClose={closeContact} />
    </div>
  );
}
