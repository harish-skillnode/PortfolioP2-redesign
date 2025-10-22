
"use client";

import { useState, useCallback } from 'react';
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceTimelineSection from "@/components/sections/ExperienceTimelineSection"; 
import ProjectsSection from "@/components/sections/ExperienceSection"; 
import Footer from "@/components/layout/Footer";
import { Dock, DockIcon } from "@/components/ui/Dock";
import ContactDrawer from "@/components/ui/ContactDrawer";
import ChatbotDrawer from "@/components/ui/ChatbotDrawer"; // Import the new component
import { HomeIcon, User, Briefcase, Mail, Lightbulb, Linkedin, Github, Bot } from "lucide-react"; 
import { useIsMobile } from "@/hooks/use-mobile";


export default function HomePage() { 
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);
  const [isChatbotDrawerOpen, setIsChatbotDrawerOpen] = useState(false); // Add state for chatbot
  const isMobile = useIsMobile();

  const openContactDrawer = useCallback(() => {
    setIsContactDrawerOpen(true);
  }, []);

  const closeContactDrawer = useCallback(() => {
    setIsContactDrawerOpen(false);
  }, []);

  const openChatbotDrawer = useCallback(() => {
    setIsChatbotDrawerOpen(true);
  }, []);

  const closeChatbotDrawer = useCallback(() => {
    setIsChatbotDrawerOpen(false);
  }, []);

  return (
    <>
      <Header />
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
          <DockIcon href="#experience">
            <Briefcase className="h-6 w-6 text-primary" />
          </DockIcon>
          <DockIcon href="#projects">
            <Lightbulb className="h-6 w-6 text-primary" />
          </DockIcon>
          <DockIcon onClick={openChatbotDrawer}>
            <Bot className="h-6 w-6 text-primary" />
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
      <ChatbotDrawer isOpen={isChatbotDrawerOpen} onClose={closeChatbotDrawer} />
      <Footer />
    </>
  );
}
