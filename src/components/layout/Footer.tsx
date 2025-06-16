
"use client";
import Link from "next/link";
import Image from 'next/image';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#272729] mt-auto">
      <div className="container mx-auto px-4 md:px-8 2xl:px-0">
        {/* Footer Top */}
        <div className="py-20 lg:py-25">
          <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
            <div
              className="w-full md:w-1/2 lg:w-1/3"
            >
              <Link href="#hero" className="inline-block mb-5 text-primary hover:text-accent transition-opacity duration-200 ease-in-out hover:opacity-85">
                <Image
                  src="/images/logo/logo.png"
                  alt="S.E Logo"
                  width={150}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mt-1 mb-10 text-foreground/80">
                The path that leads to truth is a laborious one.
              </p>
              <p className="mb-1.5 text-lg font-medium uppercase tracking-wider text-foreground">
                Contact
              </p>
              <a
                href="mailto:harisheswarathas@gmail.com"
                className="text-base font-medium text-accent hover:text-primary transition-colors"
              >
                harisheswarathas@gmail.com
              </a>
              <div className="flex gap-6 mt-6 items-center">
                <a
                  href="https://www.linkedin.com/in/sriharish-eswarathas-002023240/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors icon-glow"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/harishe182"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors icon-glow"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={30} />
                </a>
              </div>
               <div className="mt-4">
                 <a
                  href="https://eswarathasinnovations.com" // Placeholder URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors"
                  aria-label="Eswarathas Innovations Website"
                >
                  Eswarathas Innovations
                </a>
               </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-8 text-center text-sm text-foreground/70">
          <p>
            &copy; {new Date().getFullYear()} Sriharish Eswarathas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
