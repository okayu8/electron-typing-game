import styled from '@emotion/styled';
import { useTypedText } from '../../../hooks/useTypedText';
import { useCurrentIndex } from '../../../hooks/useCurrentIndex';

export type TTextToType = {
  text: string;
};

export const TextToType = ({ text }: TTextToType) => {
  const { currentIndex } = useCurrentIndex(text);
  const { typedText, untypedText } = useTypedText(text, currentIndex);

  return (
    <>
      <TypedText>{typedText}</TypedText>
      <UntypedTex>{untypedText}</UntypedTex>
    </>
  );
};

const TypedText = styled.span`
  color: red;
`;

const UntypedTex = styled.span`
  color: black;
`;
