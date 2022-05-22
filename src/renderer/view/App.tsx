import { useDisplayPage } from '../hooks/useDisplayPage';
import { useScore } from '../hooks/useScore';
import { TPageList } from '../../common/types';

import { StartPage } from './pages/Start';
import { TypingPage } from './pages/Typing';
import { ScorePage } from './pages/Score';
import { RankingPage } from './pages/Ranking';

export const App = () => {
  const { currentPage, setCurrentPage } = useDisplayPage();
  const { score, setScore } = useScore();
  const PageComponentList: { [key in TPageList]: React.ReactNode } = {
    start: <StartPage setCurrentPage={setCurrentPage} />,
    typing: (
      <TypingPage
        setCurrentPage={setCurrentPage}
        setScore={setScore}
        numberOfQuestions={5}
      />
    ),
    score: <ScorePage setCurrentPage={setCurrentPage} score={score} />,
    ranking: <RankingPage />,
  };
  return <div>{PageComponentList[currentPage]}</div>;
};
