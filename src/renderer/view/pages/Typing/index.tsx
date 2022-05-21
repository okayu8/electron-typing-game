import { TextToType } from '../../components/TextToType';
import { typingContainer } from './typingContainer';
import { TPageList, TScore } from '../../../../common/types';

type TTypingPage = {
  setCurrentPage: (pageName: TPageList) => void;
  setScore: (score: TScore) => void;
};
export const TypingPage = ({ setCurrentPage, setScore }: TTypingPage) => {
  const {
    states: { word, playTime },
    functions: { handleClearDisplayWord, handleMissTypes },
  } = typingContainer({ setCurrentPage, setScore });

  return (
    <div>
      <div>
        {word && (
          <TextToType
            text={word}
            onClearDisplayWord={handleClearDisplayWord}
            countUpMissTypes={handleMissTypes}
          />
        )}
      </div>
      <div>{playTime}</div>
    </div>
  );
};
