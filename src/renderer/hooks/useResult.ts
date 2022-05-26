import { useState } from 'react';
import { TResult } from '../../common/types';

export type TUseResult = {
  result: TResult;
  setResult: (result: TResult) => void;
};

export const useResult = (): TUseResult => {
  const initResult: TResult = {
    clearTime: 0,
    displayTime: '0:00',
    missType: 0,
    words: [],
    numberOfAllTyped: 0,
  };
  const [result, setResult] = useState<TResult>(initResult);

  return {
    result,
    setResult,
  };
};
