import { useEffect } from 'react';

import { TextToType } from '../../components/TextToType';
import { typingContainer } from './typingContainer';
import { TPageList } from '../../../../common/types';
import { PAGE_LIST } from '../../../../common/const';
import { usePlayTime } from '../../../hooks/usePlayTime';

type TTypingPage = {
  setCurrentPage: (pageName: TPageList) => void;
};
export const TypingPage = ({ setCurrentPage }: TTypingPage) => {
  const { word, clearDisplayWord, isAllCleared } = typingContainer();
  const { timeCount, playTime } = usePlayTime();

  useEffect(() => {
    if (isAllCleared) setCurrentPage(PAGE_LIST.SCORE);
  }, [isAllCleared]);

  return (
    <div>
      <div>
        {word && (
          <TextToType text={word} onClearDisplayWord={clearDisplayWord} />
        )}
      </div>
      <div>{playTime}</div>
    </div>
  );
};
