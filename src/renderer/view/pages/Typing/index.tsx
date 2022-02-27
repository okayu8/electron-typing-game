import { TextToType } from '../../components/TextToType';
import { typingContainer } from './typingContainer';

export const Typing = () => {
  const { word, clearDisplayWord, isAllCleared } = typingContainer();
  return (
    <div>
      <TextToType text={word} onClearDisplayWord={clearDisplayWord} />
    </div>
  );
};
