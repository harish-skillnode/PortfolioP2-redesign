
"use client";
import { AnimatedSpan } from "@/components/magicui/animated-span";
import { Terminal } from "@/components/magicui/terminal";
import { TypingAnimation } from "@/components/magicui/typing-animation";


export default function Preloader() {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
        <Terminal>
            <TypingAnimation>&gt; ./load-portfolio.sh</TypingAnimation>

            <AnimatedSpan className="text-green-500">
                ✔ Firing up virtual environment...
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
                ✔ Connecting to quantum mainframe...
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
                ✔ Compiling experience modules...
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
                ✔ Calibrating project showcase...
            </AnimatedSpan>
            
            <AnimatedSpan className="text-green-500">
                ✔ Polishing UI components...
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
                ✔ Rerouting flux capacitor...
            </AnimatedSpan>
            
            <AnimatedSpan className="text-green-500">
                ✔ Decrypting skill matrix...
            </AnimatedSpan>

            <AnimatedSpan className="text-blue-500">
                <span>ℹ Almost there...</span>
            </AnimatedSpan>

            <TypingAnimation className="text-muted-foreground">
                Success! Welcome to the portfolio of Sriharish Eswarathas.
            </TypingAnimation>

            <TypingAnimation className="text-muted-foreground">
                You may now explore the digital space.
            </TypingAnimation>
        </Terminal>
    </div>
  );
}
