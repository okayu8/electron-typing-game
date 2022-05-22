import { TextToType } from '../../components/TextToType';
import { typingContainer } from './typingContainer';
import { TPageList, TScore } from '../../../../common/types';

type TTypingPage = {
  setCurrentPage: (pageName: TPageList) => void;
  setScore: (score: TScore) => void;
  numberOfQuestions: number;
};
export const TypingPage = ({
  setCurrentPage,
  setScore,
  numberOfQuestions,
}: TTypingPage) => {
  const {
    states: { word, playTime },
    functions: { handleClearDisplayWord, handleMissTypes },
  } = typingContainer({ setCurrentPage, setScore, numberOfQuestions });

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
