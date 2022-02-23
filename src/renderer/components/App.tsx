import { useDisplayPage } from '../hooks/useDisplayPage';
import { TPageList } from '../../common/types';

import { Start } from './Pages/Start';
import { Typing } from './Pages/Typing';
import { Score } from './Pages/Score';
import { Ranking } from './Pages/Ranking';

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
