"use client";

import { useState, useEffect } from "react";

export function useTypewriter(
  phrases: string[],
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 3000
) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    // Reset when phrases change
    setPhraseIndex(0);
    setDisplayedText("");
    setIsDeleting(false);
  }, [JSON.stringify(phrases)]);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      if (displayedText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        return;
      }

      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, deletingSpeed);

      return () => clearTimeout(timer);
    } else {
      if (displayedText === currentPhrase) {
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);

        return () => clearTimeout(timer);
      }

      const timer = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [
    displayedText,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayedText;
}
