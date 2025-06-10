
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import { Dock, DockIcon } from "@/components/ui/Dock";
import { HomeIcon, UserCircle, Briefcase, Mail } from "lucide-react"; // Corrected UserCircle import if that's the intended icon, or use User for a simpler one.
// UserCircle is not standard in lucide-react, using User instead. If UserCircle is custom, ensure it's available.
// Using User as a placeholder for UserCircle
import { User } from "lucide-react";


export default function HomePage() { // Renamed component to avoid conflict with HomeIcon
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
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
