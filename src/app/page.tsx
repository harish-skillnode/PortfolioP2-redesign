
"use client";

import { useState, useCallback } from 'react'; // Added useCallback
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceTimelineSection from "@/components/sections/ExperienceTimelineSection"; 
import ProjectsSection from "@/components/sections/ExperienceSection"; 
import Footer from "@/components/layout/Footer";
import { Dock, DockIcon } from "@/components/ui/Dock";
import ContactDrawer from "@/components/ui/ContactDrawer";
import { HomeIcon, User, Briefcase, Mail, Lightbulb, Linkedin, Github } from "lucide-react"; 
import { useIsMobile } from "@/hooks/use-mobile";
import { ScrollProgress } from '@/components/ui/ScrollProgress';


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
      <ScrollProgress />
      <main className="flex-grow">
        <HeroSection />
        <div className="bg-zinc-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="border-t border-zinc-700 shadow-lg shadow-black/30 my-4" />
          </div>
        </div>
        <AboutSection />
        <ExperienceTimelineSection /> 
        <ProjectsSection />
      </main>
      {!isMobile && (
        <Dock>
          <DockIcon href="#hero">
            <HomeIcon className="h-6 w-6 text-primary" />
          </DockIcon>
          <DockIcon href="#about">
            <User className="h-6 w-6 text-primary" />
          </DockIcon>
          <DockIcon href="#experience"> {/* Points to ExperienceTimelineSection */}
            <Briefcase className="h-6 w-6 text-primary" />
          </DockIcon>
          <DockIcon href="#projects"> {/* New DockIcon for ProjectsSection */}
            <Lightbulb className="h-6 w-6 text-primary" />
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
      <Footer />
    </>
  );
}
