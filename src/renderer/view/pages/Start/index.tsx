import styled from '@emotion/styled';

import { TPageList } from '../../../../common/types';
import { PAGE_LIST } from '../../../../common/const';

export type TSartPage = {
  setCurrentPage: (pageName: TPageList) => void;
};

export const StartPage = ({ setCurrentPage }: TSartPage) => {
  return (
    <Wrapper>
      <h1>Satrt Page.</h1>
      <button onClick={() => setCurrentPage(PAGE_LIST.TYPING)}>START</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 800px;
`;
