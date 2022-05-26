import { useState } from 'react';
import styled from '@emotion/styled';

import { COLOR, SIZE } from '../../../const';
import { TWords } from '../../../../common/types';

export type TAphorismsList = {
  text: string;
  words: TWords;
};

export const AphorismsList = ({ text, words }: TAphorismsList) => {
  const [isOpen, SetIsOpen] = useState(false);
  return (
    <>
      <Head onClick={() => SetIsOpen(!isOpen)}>
        <p>{text}</p>
        <p>{isOpen ? '▼' : '▶︎'}</p>
      </Head>
      <ContentsList isOpen={isOpen}>
        {words.map(
          (word, i) =>
            isOpen && (
              <li key={i}>
                <Word>{word.text}</Word>
                <Japanese>{word.japanese}</Japanese>
                <Author>{word.author}</Author>
              </li>
            )
        )}
      </ContentsList>
    </>
  );
};

const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${COLOR.BACKGROUND.DARK_GRAY};
  color: ${COLOR.TEXT.WHITE};
  transition: all 0.3s;
  padding: ${SIZE.MARGIN.SIZEx2}px;
  font-size: ${SIZE.TEXT.ACCORDION_TITLE}px;
  font-weight: bold;
  box-sizing: border-box;

  &:hover {
    background: ${COLOR.BACKGROUND.GRAY};
  }

  > p {
    margin: 0;
  }
`;

const ContentsList = styled.ul<{ isOpen: boolean }>`
  width: 100%;
  margin: 0;
  padding: ${SIZE.MARGIN.SIZEx2}px;
  color: ${COLOR.TEXT.WHITE};
  box-sizing: border-box;

  > li {
    margin: 0;
    padding: ${SIZE.MARGIN.SIZEx2}px;
    list-style: none;
    border-bottom: 1px solid ${COLOR.BACKGROUND.WHITE};
  }
`;

const Word = styled.p`
  margin: 0;
  padding: ${SIZE.MARGIN.SIZEx2}px;
  font-size: ${SIZE.TEXT.WORD}px;
`;

const Japanese = styled.p`
  margin: 0;
  padding: 0 ${SIZE.MARGIN.SIZEx2}px;
  font-size: ${SIZE.TEXT.JAPANESE}px;
`;

const Author = styled.p`
  margin: 0;
  text-align: right;
  padding: ${SIZE.MARGIN.SIZEx2}px;
`;
