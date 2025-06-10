"use client";

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
}

export default function TypingAnimation({ text, speed = 100, delay = 1000 }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    const handleTyping = () => {
      const fullText = text;
      const currentText = isDeleting
        ? fullText.substring(0, displayedText.length - 1)
        : fullText.substring(0, displayedText.length + 1);

      setDisplayedText(currentText);

      if (!isDeleting && currentText === fullText) {
        typingTimeout = setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1); // Not strictly necessary for single phrase, but good for multiple
        typingTimeout = setTimeout(() => {}, 500); // Pause before re-typing
      } else {
        typingTimeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
      }
    };

    typingTimeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, text, speed, delay, loopNum]);

  return (
    <span className="font-mono text-lg md:text-xl text-muted-foreground">
      {displayedText}
      <span className="animate-ping">|</span>
    </span>
  );
}
