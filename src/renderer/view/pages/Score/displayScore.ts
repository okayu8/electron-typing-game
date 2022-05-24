import { takeHeapSnapshot } from 'process';

type TDisplayScore = (
  time: number,
  numberOfTotalChar: number,
  missType: number
) => { numberOfScore: number; evaluation: string };

export const displayScore: TDisplayScore = (
  time,
  numberOfTotalChar,
  missType
) => {
  let evaluation = '';
  const floorTotalScore = (numberOfTotalChar - missType * 3) / time;
  const totalScore = Math.round(floorTotalScore * 100);

  if (totalScore < 100) evaluation = 'FUCK YOU.';
  if (100 <= totalScore) evaluation = 'You have a sad result😢';
  if (300 <= totalScore) evaluation = 'You are normal 😕';
  if (500 <= totalScore) evaluation = 'You are ok 😁';
  if (600 <= totalScore) evaluation = 'You are good 👍';
  if (700 <= totalScore) evaluation = 'You are great! 🚀';
  if (800 <= totalScore) evaluation = 'You are wonderful! ✨';
  if (900 <= totalScore) evaluation = 'You are a mater of typing 👴';
  if (1000 <= totalScore) evaluation = 'You are God 🌏';

  return { numberOfScore: totalScore, evaluation };
};
