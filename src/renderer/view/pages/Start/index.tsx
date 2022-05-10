import styled from '@emotion/styled';

import { TPageList } from '../../../../common/types';
import { PAGE_LIST } from '../../../../common/const';
import { SIZE } from '../../../const/size';

export type TSartPage = {
  setCurrentPage: (pageName: TPageList) => void;
};

export const StartPage = ({ setCurrentPage }: TSartPage) => {
  return (
    <Wrapper>
      <h1>Typing Game</h1>
      <button onClick={() => setCurrentPage(PAGE_LIST.TYPING)}>START</button>
      <AnnotationArea>
        <Annotation>*Please set keyboard input to half-width input.</Annotation>
        <Annotation>*No need to enter space key</Annotation>
      </AnnotationArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 800px;
`;

const AnnotationArea = styled.div``;

const Annotation = styled.p`
  font-size: ${SIZE.TEXT.ANNOTATION};
`;
