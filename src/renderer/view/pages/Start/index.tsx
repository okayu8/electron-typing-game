import styled from '@emotion/styled';

import { Button } from '../../components/Button';
import { TPageList } from '../../../../common/types';
import { PAGE_LIST } from '../../../../common/const';
import { SIZE } from '../../../const/size';
import { useKeyDownTheSpaceListener } from '../../../hooks/useKeyDownTheSpaceListener';

export type TSartPage = {
  setCurrentPage: (pageName: TPageList) => void;
};

export const StartPage = ({ setCurrentPage }: TSartPage) => {
  useKeyDownTheSpaceListener(setCurrentPage, PAGE_LIST.TYPING);
  return (
    <>
      <TopSecitionWrapper>
        <Title>Aphorism Typing</Title>
        <Description>Press the START or press the SPACE key.</Description>
        <Button onClick={() => setCurrentPage(PAGE_LIST.TYPING)}>START</Button>
      </TopSecitionWrapper>
      <AnnotationArea>
        <Annotation>*Please set keyboard input to half-width input.</Annotation>
        <Annotation>*No need to enter space key</Annotation>
      </AnnotationArea>
    </>
  );
};

const TopSecitionWrapper = styled.section`
  text-align: center;
  margin: ${SIZE.MARGIN.SIZEx6}px;
`;

const Title = styled.h1`
  font-size: ${SIZE.TEXT.TITLE}px;
  margin: ${SIZE.MARGIN.SIZEx18}px 0;
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

const Description = styled.p`
  font-size: ${SIZE.TEXT.DESCRIPTION}px;
  animation-name: fade-in-out;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  @keyframes fade-in-out {
    0% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.8;
    }
  }
`;

const AnnotationArea = styled.div`
  margin: auto;
  max-width: 400px;
`;

const Annotation = styled.p`
  font-size: ${SIZE.TEXT.ANNOTATION};
`;
