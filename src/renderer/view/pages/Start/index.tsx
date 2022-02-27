import { TPageList } from '../../../../common/types';
import { PAGE_LIST } from '../../../../common/const';

export type TSart = {
  setCurrentPage: (pageName: TPageList) => void;
};

export const Start = ({ setCurrentPage }: TSart) => {
  return (
    <div>
      <h1>Satrt Page.</h1>
      <button onClick={() => setCurrentPage(PAGE_LIST.TYPING)}>START</button>
    </div>
  );
};
