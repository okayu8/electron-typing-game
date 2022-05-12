import { useState, useEffect } from 'react';

export type TUsePlayTime = {
  timeCount: number;
  playTime: string;
};

export const usePlayTime = (): TUsePlayTime => {
  const [timeCount, setCount] = useState(0);
  const [playTime, setPlayTime] = useState('0:00');

  const countup = () => {
    const currentCount = timeCount + 1;
    setCount(currentCount);

    const seconds =
      (currentCount < 10 ? '0' : '') + (currentCount % 60).toString();
    const minutes = Math.floor(currentCount / 60).toString();
    setPlayTime(`${minutes}:${seconds}`);
  };

  useEffect(() => {
    const timerId = setInterval(countup, 1000);
    return () => clearInterval(timerId);
  }, [countup]);

  return {
    timeCount,
    playTime,
  };
};
