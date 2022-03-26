import { useDisplayPage } from '../hooks/useDisplayPage';
import { TPageList } from '../../common/types';

import { StartPage } from './pages/Start';
import { TypingPage } from './pages/Typing';
import { ScorePage } from './pages/Score';
import { RankingPage } from './pages/Ranking';

export const App = () => {
  const { currentPage, setCurrentPage } = useDisplayPage();
  const PageComponentList: { [key in TPageList]: React.ReactNode } = {
    start: <StartPage setCurrentPage={setCurrentPage} />,
    typing: <TypingPage setCurrentPage={setCurrentPage} />,
    score: <ScorePage />,
    ranking: <RankingPage />,
  };
  return <div>{PageComponentList[currentPage]}</div>;
};
