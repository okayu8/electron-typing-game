import { useState, useEffect, useCallback } from 'react';

export type TUseCurrentTyping = {
  currentIndex: number;
  isCollectType: boolean;
};

export const useCurrentTyping = (
  text: string,
  onClearDisplayWord: () => void
): TUseCurrentTyping => {
  // クリア文字数カウント
  const [currentIndex, setCurrentIndex] = useState(0);
  // 正しい文字をタイプしたかのフラグ
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
      if (e.key === 'Shift') return;
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
    if (text.length === currentIndex) {
      // clear
      onClearDisplayWord();
      // クリア文字数カウントを0に戻す
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  return { currentIndex, isCollectType };
};
