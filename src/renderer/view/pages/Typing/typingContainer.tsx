import { useState, useEffect } from 'react';
import { TWords } from '../../../../common/types';
import randomSelectWords from '../../../util/randomSelectWords';
import { words } from '../../../../common/__mocks__/words';
import { usePlayTime } from '../../../hooks/usePlayTime';
import { PAGE_LIST } from '../../../../common/const';
import { TPageList, TResult } from '../../../../common/types';

export type TTypingContainer = {
  setCurrentPage: (pageName: TPageList) => void;
  setResult: (result: TResult) => void;
  numberOfQuestions: number;
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
  setResult,
  numberOfQuestions,
}: TTypingContainer): TTypingContainerReturnValue => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [word, setWord] = useState('');
  const [isAllCleared, setiIsAllCleared] = useState(false);
  const [missTypes, setMissTypes] = useState(0);
  const { timeCount, playTime } = usePlayTime();
  const [selectedWords, setSelectedWords] = useState<TWords>([]);

  // words　からランダムで抜き出す。APIからデータを受け取るようになった場合は不要な処理
  useEffect(() => {
    const selected = randomSelectWords(words, numberOfQuestions);
    setSelectedWords(selected);
    // 初期描画時のみ
  }, []);

  useEffect(() => {
    if (!selectedWords.length) {
      return;
    }
    if (selectedWords[currentIndex]) {
      setWord(selectedWords[currentIndex].text);
    } else {
      setiIsAllCleared(true);
    }
  }, [currentIndex, selectedWords]);

  const numberOfAllTyped = (): number => {
    let count = 0;
    selectedWords.map((word) => {
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
      setResult({
        clearTime: timeCount,
        displayTime: playTime,
        missType: missTypes,
        words: selectedWords,
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
