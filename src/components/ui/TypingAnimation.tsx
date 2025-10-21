"use client";

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delayBeforeStart?: number; // Optional delay before typing starts
}

export default function TypingAnimation({ text, speed = 100, delayBeforeStart = 0 }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (delayBeforeStart > 0 && !hasStarted) {
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
      }, delayBeforeStart);
      return () => clearTimeout(startTimeout);
    }

    if (delayBeforeStart === 0 && !hasStarted) {
      setHasStarted(true); // Start immediately if no delay
    }

    if (!hasStarted) {
      return; // Don't start typing yet if still in delay phase
    }

    if (displayedText.length < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(typingTimeout);
    }
  }, [displayedText, text, speed, delayBeforeStart, hasStarted]);

  return (
    <span className="font-mono text-xl md:text-2xl text-muted-foreground">
      {displayedText}
      {displayedText.length === text.length ? <span className="animate-ping">|</span> : <span className="animate-ping">|</span>}
    </span>
  );
}
