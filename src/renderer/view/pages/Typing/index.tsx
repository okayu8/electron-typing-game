import styled from '@emotion/styled';

import { TextToType } from '../../components/TextToType';
import { typingContainer } from './typingContainer';
import { PAGE_LIST } from '../../../../common/const';
import { TPageList, TResult } from '../../../../common/types';
import { Button } from '../../components/Button';
import { SIZE } from '../../../const/size';

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
    states: { word, playTime, waitTime, isWaitToStart },
    functions: { handleClearDisplayWord, handleMissTypes },
  } = typingContainer({ setCurrentPage, setResult, numberOfQuestions });

  return (
    <Wrapper>
      {isWaitToStart ? (
        <StartCount>{waitTime}</StartCount>
      ) : (
        <>
          <Header>
            <Button onClick={() => setCurrentPage(PAGE_LIST.START)}>
              BACK
            </Button>
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
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
`;

const StartCount = styled.div`
  font-size: ${SIZE.TEXT.START_COUNT}px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border: 4px solid;
  border-radius: 100px;
  text-align: center;
  line-height: 120px;
  width: 120px;
  height: 120px;
  animation-name: fade-in-out;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.7;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
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
