import { useState } from 'react';
import { PAGE_LIST } from '../../common/const';
import { TPageList } from '../../common/types';

export type TUseDisplayPage = {
  currentPage: TPageList;
  setCurrentPage: (pageName: TPageList) => void;
};

export const useDisplayPage = (): TUseDisplayPage => {
  const [currentPage, setCurrentPage] = useState<TPageList>(PAGE_LIST.START);

  return {
    currentPage,
    setCurrentPage,
  };
};
