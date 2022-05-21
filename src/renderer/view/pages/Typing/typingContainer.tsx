import { useState, useEffect } from 'react';
import { TWords } from '../../../../common/types';
import { words } from '../../../../common/__mocks__/words';
import { usePlayTime } from '../../../hooks/usePlayTime';
import { PAGE_LIST } from '../../../../common/const';
import { TPageList, TScore } from '../../../../common/types';

export type TTypingContainer = {
  setCurrentPage: (pageName: TPageList) => void;
  setScore: (score: TScore) => void;
};

export type TTypingContainerReturnValue = {
  numberOfAllTyped: () => number;
  states: {
    word: string;
    playTime: string;
  };
  functions: {
    handleClearDisplayWord: () => void;
    handleMissTypes: () => void;
  };
};

export const typingContainer = ({
  setCurrentPage,
  setScore,
}: TTypingContainer): TTypingContainerReturnValue => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [word, setWord] = useState('');
  const [isAllCleared, setiIsAllCleared] = useState(false);
  const [missTypes, setMissTypes] = useState(0);
  const { timeCount, playTime } = usePlayTime();

  useEffect(() => {
    if (words[currentIndex]) {
      setWord(words[currentIndex].text);
    } else {
      setiIsAllCleared(true);
    }
  }, [currentIndex]);

  const numberOfAllTyped = (): number => {
    let count = 0;
    words.map((word) => {
      const wordLength = word.text.trim().length;
      count += wordLength;
    });

    return count;
  };

  // 表示ワードクリア時のハンドラー
  const handleClearDisplayWord = () => {
    setCurrentIndex(currentIndex + 1);
  };

  // タイプミス時のハンドラー
  const handleMissTypes = () => {
    setMissTypes(missTypes + 1);
  };

  // クリア時の処理
  useEffect(() => {
    if (isAllCleared) {
      setScore({
        clearTime: timeCount,
        displayTime: playTime,
        missType: missTypes,
        words: words,
        numberOfAllTyped: numberOfAllTyped(),
      });
      setCurrentPage(PAGE_LIST.SCORE);
    }
  }, [isAllCleared]);

  return {
    numberOfAllTyped,
    states: {
      word,
      playTime,
    },
    functions: { handleClearDisplayWord, handleMissTypes },
  };
};
