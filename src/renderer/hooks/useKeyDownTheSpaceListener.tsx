import { useEffect } from 'react';

import { TPageList } from '../../common/types';

export const useKeyDownTheSpaceListener = (
  setCurrentPage: (pageName: TPageList) => void,
  page: TPageList
) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === ' ') setCurrentPage(page);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
};
