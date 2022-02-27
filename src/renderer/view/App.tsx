import { useDisplayPage } from '../hooks/useDisplayPage';
import { TPageList } from '../../common/types';

import { Start } from './pages/Start';
import { Typing } from './pages/Typing';
import { Score } from './pages/Score';
import { Ranking } from './pages/Ranking';

export const App = () => {
  const { currentPage, setCurrentPage } = useDisplayPage();
  const PageComponentList: { [key in TPageList]: React.ReactNode } = {
    start: <Start setCurrentPage={setCurrentPage} />,
    typing: <Typing />,
    score: <Score />,
    ranking: <Ranking />,
  };
  return <div>{PageComponentList[currentPage]}</div>;
};
