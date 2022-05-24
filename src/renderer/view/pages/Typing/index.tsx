import styled from '@emotion/styled';

import { TextToType } from '../../components/TextToType';
import { typingContainer } from './typingContainer';
import { PAGE_LIST } from '../../../../common/const';
import { TPageList, TResult } from '../../../../common/types';
import { Button } from '../../components/Button';

type TTypingPage = {
  setCurrentPage: (pageName: TPageList) => void;
  setResult: (result: TResult) => void;
  numberOfQuestions: number;
};
export const TypingPage = ({
  setCurrentPage,
  setResult,
  numberOfQuestions,
}: TTypingPage) => {
  const {
    states: { word, playTime },
    functions: { handleClearDisplayWord, handleMissTypes },
  } = typingContainer({ setCurrentPage, setResult, numberOfQuestions });

  return (
    <Wrapper>
      <Header>
        <Button onClick={() => setCurrentPage(PAGE_LIST.START)}>BACK</Button>
        <TimeWrapper>
          <p>TIME:</p>
          <Time>{playTime}</Time>
        </TimeWrapper>
      </Header>
      <TextWrapper>
        <TextToType
          text={word}
          onClearDisplayWord={handleClearDisplayWord}
          countUpMissTypes={handleMissTypes}
        />
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const TimeWrapper = styled.div`
  display: flex;
  justify-content: right;
  font-weight: bold;

  > p {
    margin: 0;
  }
`;

const Time = styled.p`
  width: 60px;
  display: flex;
  justify-content: right;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;
