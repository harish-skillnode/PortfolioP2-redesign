
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-zinc-800 to-zinc-900 mt-auto">
      <div className="container mx-auto px-4 md:px-8 2xl:px-0">
        {/* Footer Top */}
        <div className="py-20 lg:py-25">
          <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 lg:w-1/3"
            >
              <Link href="#hero" className="inline-block mb-5 text-3xl font-cursive font-bold text-primary hover:text-accent transition-colors">
                <span>S.E</span>
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
              <div className="flex gap-6 mt-6">
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
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full lg:w-auto flex lg:justify-end" 
            >
              <div className="flex flex-col">
                <h4 className="mb-9 text-xl font-medium text-foreground text-left lg:text-right">
                  Quick Links
                </h4>
                <ul className="text-left lg:text-right">
                  <li>
                    <Link
                      href="#hero"
                      className="mb-3 inline-block text-base text-foreground/80 hover:text-accent transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                   <li>
                    <Link
                      href="#about"
                      className="mb-3 inline-block text-base text-foreground/80 hover:text-accent transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/resume/Sriharish_Eswarathas_Resume_3.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-3 inline-block text-base text-foreground/80 hover:text-accent transition-colors"
                    >
                      CV/Resume
                    </a>
                  </li>
                  <li>
                    <Link
                      href="#experience"
                      className="mb-3 inline-block text-base text-foreground/80 hover:text-accent transition-colors"
                    >
                      Projects
                    </Link>
                  </li>
                   <li>
                    <Link
                      href="#contact"
                      className="mb-3 inline-block text-base text-foreground/80 hover:text-accent transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
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
