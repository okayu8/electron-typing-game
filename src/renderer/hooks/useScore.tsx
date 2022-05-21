import { useState } from 'react';
import { PAGE_LIST } from '../../common/const';
import { TScore } from '../../common/types';

export type TUseDisplayPage = {
  score: TScore;
  setScore: (score: TScore) => void;
};

export const useScore = (): TUseDisplayPage => {
  const initScore: TScore = {
    clearTime: 0,
    displayTime: '0:00',
    missType: 0,
    words: [],
    numberOfAllTyped: 0,
  };
  const [score, setScore] = useState<TScore>(initScore);

  return {
    score,
    setScore,
  };
};
