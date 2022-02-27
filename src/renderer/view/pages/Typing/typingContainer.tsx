import { useState, useEffect } from 'react';
import { words } from '../../../../common/__mocks__/words';

export type TTypingContainer = {
  word: string;
  clearDisplayWord: () => void;
  isAllCleared: boolean;
};

export const typingContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [word, setWord] = useState('');
  const [isAllCleared, setiIsAllCleared] = useState(false);

  useEffect(() => {
    setWord(words[currentIndex].text);
  }, [currentIndex]);

  const clearDisplayWord = () => {
    if (words.length < currentIndex + 1) {
      setiIsAllCleared(true);
    }
    setCurrentIndex(currentIndex + 1);
  };

  return { word, clearDisplayWord, isAllCleared };
};
