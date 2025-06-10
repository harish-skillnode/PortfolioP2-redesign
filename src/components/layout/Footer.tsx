import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer-bg backdrop-blur-lg border-t border-border/50 py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/70">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/sriharishes" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="h-7 w-7 hover:text-accent icon-glow transition-colors duration-200" />
          </Link>
          <Link href="https://linkedin.com/in/sriharishes" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="h-7 w-7 hover:text-accent icon-glow transition-colors duration-200" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sriharish Eswarathas. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
