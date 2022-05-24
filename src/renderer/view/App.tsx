import { Global } from '@emotion/react';
import { style } from './styles/global';
import { useDisplayPage } from '../hooks/useDisplayPage';
import { useResult } from '../hooks/useResult';
import { TPageList } from '../../common/types';

import { StartPage } from './pages/Start';
import { TypingPage } from './pages/Typing';
import { ScorePage } from './pages/Score';
import { RankingPage } from './pages/Ranking';
import { PageTemplate } from './template';

export const App = () => {
  const { currentPage, setCurrentPage } = useDisplayPage();
  const { result, setResult } = useResult();
  const PageComponentList: { [key in TPageList]: React.ReactNode } = {
    start: <StartPage setCurrentPage={setCurrentPage} />,
    typing: (
      <TypingPage
        setCurrentPage={setCurrentPage}
        setResult={setResult}
        numberOfQuestions={5}
      />
    ),
    score: <ScorePage setCurrentPage={setCurrentPage} result={result} />,
    ranking: <RankingPage />,
  };
  return (
    <>
      <Global styles={style} />
      <PageTemplate>{PageComponentList[currentPage]}</PageTemplate>
    </>
  );
};
