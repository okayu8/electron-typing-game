import styled from '@emotion/styled';

import { useTypedText } from '../../../hooks/useTypedText';
import { useCurrentTyping } from '../../../hooks/useCurrentTyping';
import { COLOR, SIZE } from '../../../const';

export type TTextToType = {
  text: string;
  onClearDisplayWord: () => void;
  /** ミスタイプカウント用関数 */
  countUpMissTypes: () => void;
};

export const TextToType = ({
  text,
  onClearDisplayWord,
  countUpMissTypes,
}: TTextToType) => {
  const { currentIndex, isCollectType } = useCurrentTyping(
    text,
    onClearDisplayWord,
    countUpMissTypes
  );
  const { typedText, typingText, untypedText } = useTypedText(
    text,
    currentIndex
  );

  return (
    <TextWrapper>
      <TypedText>{typedText}</TypedText>
      <TypingText isCollectType={isCollectType}>{typingText}</TypingText>
      <UntypedTex>{untypedText}</UntypedTex>
    </TextWrapper>
  );
};

const TextWrapper = styled.p`
  font-size: ${SIZE.TEXT.TYPING}px;
`;

const TypedText = styled.span`
  color: ${COLOR.TEXT.LIGHT_GRAY};
`;

const TypingText = styled.span<{ isCollectType: boolean }>`
  color: ${(props) =>
    props.isCollectType ? COLOR.TEXT.WHITE : COLOR.TEXT.ORANGE};
`;

const UntypedTex = styled.span`
  color: ${COLOR.TEXT.WHITE};
`;
