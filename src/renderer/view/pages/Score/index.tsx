import { TPageList } from '../../../../common/types';
import { PAGE_LIST } from '../../../../common/const';
import { TScore } from '../../../../common/types';
import { Button } from '../../components/Button';

export type TScorePage = {
  setCurrentPage: (pageName: TPageList) => void;
  score: TScore;
};

export const ScorePage = ({ setCurrentPage, score }: TScorePage) => {
  return (
    <>
      <h1>Score</h1>
      <p>time: {score.displayTime}</p>
      <p>number of all typed words: {score.numberOfAllTyped}</p>
      <p>miss type: {score.missType}</p>
      <Button onClick={() => setCurrentPage(PAGE_LIST.START)}>
        Go to start page
      </Button>
    </>
  );
};
