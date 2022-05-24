export type TWords = {
  text: string;
  author: string;
}[];

export type TResult = {
  clearTime: number;
  displayTime: string;
  missType: number;
  words: TWords;
  numberOfAllTyped: number;
};
