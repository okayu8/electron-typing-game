import { useState, useEffect } from 'react';

export type TUseTypedText = {
  typedText: string;
  typingText: string;
  untypedText: string;
};

export const useTypedText = (
  text: string,
  currentIndex: number
): TUseTypedText => {
  const [typedText, setTypedText] = useState('');
  const [typingText, setTypingTextt] = useState('');
  const [untypedText, setUntypedText] = useState('');

  useEffect(() => {
    const textLength = text.length;
    const typed = text.substring(0, currentIndex);
    const typing = text.substring(currentIndex, currentIndex + 1);
    const untyped = text.substring(currentIndex + 1, textLength);
    setTypedText(typed);
    setTypingTextt(typing);
    setUntypedText(untyped);
  }, [text, currentIndex]);

  return {
    typedText,
    typingText,
    untypedText,
  };
};
