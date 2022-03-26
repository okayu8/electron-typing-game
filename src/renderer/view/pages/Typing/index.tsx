import { useEffect } from 'react';

import { TextToType } from '../../components/TextToType';
import { typingContainer } from './typingContainer';
import { TPageList } from '../../../../common/types';
import { PAGE_LIST } from '../../../../common/const';

type TTypingPage = {
  setCurrentPage: (pageName: TPageList) => void;
};
export const TypingPage = ({ setCurrentPage }: TTypingPage) => {
  const { word, clearDisplayWord, isAllCleared } = typingContainer();

  useEffect(() => {
    if (isAllCleared) setCurrentPage(PAGE_LIST.SCORE);
  }, [isAllCleared]);

  return (
    <div>
      {word && <TextToType text={word} onClearDisplayWord={clearDisplayWord} />}
    </div>
  );
};
