import { TextToType } from '../../components/TextToType';
import { typingContainer } from './typingContainer';
import { TPageList } from '../../../../common/types';

type TTypingPage = {
  setCurrentPage: (pageName: TPageList) => void;
};
export const TypingPage = ({ setCurrentPage }: TTypingPage) => {
  const { word, clearDisplayWord, isAllCleared } = typingContainer();
  return (
    <div>
      <TextToType text={word} onClearDisplayWord={clearDisplayWord} />
    </div>
  );
};
