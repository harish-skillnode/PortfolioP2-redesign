
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import { Dock, DockIcon } from "@/components/ui/Dock";
import { HomeIcon, User, Briefcase, Mail } from "lucide-react";


export default function HomePage() { 
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="bg-zinc-800"> {/* Solid background for the HR's margin space */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="border-t border-zinc-700 shadow-lg shadow-black/30 my-4" />
          </div>
        </div>
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
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
        <DockIcon href="#contact">
          <Mail className="h-6 w-6 text-primary" />
        </DockIcon>
      </Dock>
      <Footer />
    </>
  );
}
