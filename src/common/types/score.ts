export type TWords = {
  text: string;
  author: string;
}[];

export type TScore = {
  clearTime: number;
  displayTime: string;
  missType: number;
  words: TWords;
  numberOfAllTyped: number;
};
