
"use client";

import { useState, useCallback } from 'react';
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceTimelineSection from "@/components/sections/ExperienceTimelineSection"; 
import SkillNodeSection from "@/components/sections/SkillNodeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ResearchSection from "@/components/sections/ResearchSection";
import Footer from "@/components/layout/Footer";
import { Dock, DockIcon } from "@/components/ui/Dock";
import ContactDrawer from "@/components/ui/ContactDrawer";
import { Mail, Linkedin, Github, Briefcase, Code, FileText } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";


export default function HomePage() { 
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  const openContactDrawer = useCallback(() => {
    setIsContactDrawerOpen(true);
  }, []);

  const closeContactDrawer = useCallback(() => {
    setIsContactDrawerOpen(false);
  }, []);

  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ExperienceTimelineSection /> 
        <SkillNodeSection />
        <ProjectsSection />
        <ResearchSection />
      </main>
      <Footer />
      {!isMobile && (
        <Dock>
          <DockIcon href="#experience">
            <Briefcase className="h-6 w-6 text-primary" />
          </DockIcon>
          <DockIcon href="#projects">
            <Code className="h-6 w-6 text-primary" />
          </DockIcon>
          <DockIcon href="#research">
            <FileText className="h-6 w-6 text-primary" />
          </DockIcon>
          <DockIcon href="https://www.linkedin.com/in/sriharish-eswarathas-002023240/">
            <Linkedin className="h-6 w-6 text-primary" />
          </DockIcon>
          <DockIcon href="https://github.com/harishe182">
            <Github className="h-6 w-6 text-primary" />
          </DockIcon>
          <DockIcon onClick={openContactDrawer}>
            <Mail className="h-6 w-6 text-primary" />
          </DockIcon>
        </Dock>
      )}
      <ContactDrawer isOpen={isContactDrawerOpen} onClose={closeContactDrawer} />
    </>
  );
}
