import { TPageList } from '../../../../common/types';
import { PAGE_LIST } from '../../../../common/const';

export type TScorePage = {
  setCurrentPage: (pageName: TPageList) => void;
};

export const ScorePage = ({ setCurrentPage }: TScorePage) => {
  return (
    <div>
      <h1>Score Page.</h1>
      <button onClick={() => setCurrentPage(PAGE_LIST.START)}>
        Go to start page
      </button>
    </div>
  );
};
