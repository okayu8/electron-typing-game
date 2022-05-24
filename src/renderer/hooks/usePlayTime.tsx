import { useState, useEffect } from 'react';

export type TUsePlayTime = {
  /** 文字列の分秒。画面表示時に使用 */
  timeCount: number;
  /** 秒数。スコア計測時に利用 */
  playTime: string;
  waitTime: number;
  isWaitToStart: boolean;
};

export const usePlayTime = (): TUsePlayTime => {
  /** 秒数 */
  const [timeCount, setCount] = useState(0);
  /** 秒数を分秒に変換した文字列型 */
  const [playTime, setPlayTime] = useState('0:00');
  /** スタートまでの時間 */
  const [waitTime, setWaitTime] = useState(3);
  /** スタート待機フラグ */
  const [isWaitToStart, setIsWaitToStart] = useState(true);

  const countup = () => {
    if (isWaitToStart) {
      // 待機フラグが有効の場合、waitTimeをdecrementsする
      setWaitTime(waitTime - 1);

      if (waitTime === 1) setIsWaitToStart(false);
    }
    if (!isWaitToStart) {
      const currentCount = timeCount + 1;
      setCount(currentCount);

      const seconds =
        (currentCount < 10 ? '0' : '') + (currentCount % 60).toString();
      const minutes = Math.floor(currentCount / 60).toString();
      setPlayTime(`${minutes}:${seconds}`);
    }
  };

  useEffect(() => {
    const timerId = setInterval(countup, 1000);
    return () => clearInterval(timerId);
  }, [countup]);

  return {
    timeCount,
    playTime,
    waitTime,
    isWaitToStart,
  };
};
