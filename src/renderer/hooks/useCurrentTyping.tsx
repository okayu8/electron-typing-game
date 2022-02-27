import { useState, useEffect, useCallback } from 'react';

export type TUseCurrentTyping = {
  currentIndex: number;
  isCollectType: boolean;
};

export const useCurrentTyping = (
  text: string,
  onClearDisplayWord: () => void
): TUseCurrentTyping => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCollectType, setIsCollectType] = useState(true);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // タイプミスフラグの初期化
      setIsCollectType(true);

      let currentChar = text[currentIndex];
      if (!currentChar) return;
      if (currentChar === ' ') {
        currentChar = text[currentIndex + 1];
        if (e.key === currentChar) setCurrentIndex(currentIndex + 2);
        return;
      }
      if (e.key !== currentChar) {
        setIsCollectType(false);
        return;
      }
      setCurrentIndex(currentIndex + 1);
    },
    [text, currentIndex, setCurrentIndex]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (text.length === currentIndex) onClearDisplayWord();
  }, [currentIndex]);

  return { currentIndex, isCollectType };
};
