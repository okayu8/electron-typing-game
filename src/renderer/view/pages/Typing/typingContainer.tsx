import { useState, useEffect } from 'react';
import { words } from '../../../../common/__mocks__/words';

export type TTypingContainer = {
  word: string;
  clearDisplayWord: () => void;
  isAllCleared: boolean;
};

export const typingContainer = (): TTypingContainer => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [word, setWord] = useState('');
  const [isAllCleared, setiIsAllCleared] = useState(false);

  useEffect(() => {
    if (words[currentIndex]) {
      setWord(words[currentIndex].text);
    } else {
      setiIsAllCleared(true);
    }
  }, [currentIndex]);

  const clearDisplayWord = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return { word, clearDisplayWord, isAllCleared };
};
