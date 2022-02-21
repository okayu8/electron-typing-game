import { useState, useEffect, useCallback } from 'react';

export type TUseCurrentIndex = {
  currentIndex: number;
};

export const useCurrentIndex = (text: string): TUseCurrentIndex => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      let currentChar = text[currentIndex];
      if (!currentChar) return;
      if (currentChar === ' ') {
        currentChar = text[currentIndex + 1];
        if (e.key === currentChar) setCurrentIndex(currentIndex + 2);
        return;
      }
      if (e.key !== currentChar) return;
      setCurrentIndex(currentIndex + 1);
    },
    [text, currentIndex, setCurrentIndex]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return { currentIndex };
};
