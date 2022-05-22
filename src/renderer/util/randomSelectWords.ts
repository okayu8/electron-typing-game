import { TWords } from '../../common/types';

// 配列arrayからランダムにnum個の要素を取り出す
const randomSelectWords = (words: TWords, num: number) => {
  let newWords = [];

  while (newWords.length < num && words.length > 0) {
    // 配列からランダムな要素を選ぶ
    const rand = Math.floor(Math.random() * words.length);
    // 選んだ要素を別の配列に登録する
    newWords.push(words[rand]);
    // もとの配列からは削除する
    words.splice(rand, 1);
  }

  return newWords;
};

export default randomSelectWords;
