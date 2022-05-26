export type TWords = {
  text: string;
  japanese: string;
  author: string;
}[];

export type TResult = {
  clearTime: number;
  displayTime: string;
  missType: number;
  words: TWords;
  numberOfAllTyped: number;
};
