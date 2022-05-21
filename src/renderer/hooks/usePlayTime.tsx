import { useState, useEffect } from 'react';

export type TUsePlayTime = {
  /** 文字列の分秒。画面表示時に使用 */
  timeCount: number;
  /** 秒数。スコア計測時に利用 */
  playTime: string;
};

export const usePlayTime = (): TUsePlayTime => {
  /** 秒数 */
  const [timeCount, setCount] = useState(0);
  /** 秒数を分秒に変換した文字列型 */
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
