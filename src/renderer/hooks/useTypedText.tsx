import { useState, useEffect } from 'react';

export type TUseTypedText = {
  typedText: string;
  untypedText: string;
};

export const useTypedText = (
  text: string,
  currentIndex: number
): TUseTypedText => {
  const [typedText, setTypedText] = useState('');
  const [untypedText, setUntypedText] = useState('');

  useEffect(() => {
    const textLength = text.length;
    const typed = text.substring(0, currentIndex);
    const untyped = text.substring(currentIndex, textLength);
    setTypedText(typed);
    setUntypedText(untyped);
  }, [text, currentIndex]);

  return {
    typedText,
    untypedText,
  };
};
