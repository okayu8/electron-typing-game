import styled from '@emotion/styled';

import { TPageList } from '../../../../common/types';
import { PAGE_LIST } from '../../../../common/const';
import { TResult } from '../../../../common/types';
import { Button } from '../../components/Button';
import { SIZE } from '../../../const';
import { displayScore } from './displayScore';

export type TScorePage = {
  setCurrentPage: (pageName: TPageList) => void;
  result: TResult;
};

export const ScorePage = ({ setCurrentPage, result }: TScorePage) => {
  const { numberOfScore, evaluation } = displayScore(
    result.clearTime,
    result.numberOfAllTyped,
    result.missType
  );
  return (
    <>
      <h1>Score</h1>
      <Evaluation>{evaluation}</Evaluation>
      <ResultWrapper>
        <ResultTitle>Result</ResultTitle>
        <p>SCORE: {numberOfScore}</p>
        <p>TIME: {result.displayTime}</p>
        <p>NUMBER OF ALL TYPED WORDS: {result.numberOfAllTyped}</p>
        <p>MISS TYPE: {result.missType}</p>
      </ResultWrapper>

      <Footer>
        <Button onClick={() => setCurrentPage(PAGE_LIST.START)}>
          Go to start page
        </Button>
      </Footer>
    </>
  );
};

const Evaluation = styled.p`
  font-size: ${SIZE.TEXT.SCORE}px;
  text-align: center;
  animation-name: fade-in;
  animation-duration: 3s;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ResultWrapper = styled.div`
  margin: ${SIZE.MARGIN.SIZEx6}px;
`;

const ResultTitle = styled.p`
  font-weight: bold;
  font-size: ${SIZE.TEXT.DESCRIPTION};
`;

const Footer = styled.div`
  display: flex;
  justify-content: end;
`;
