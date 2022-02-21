import React from 'react';

export type TTextToType = {
  text: string;
};

export function TextToType({ text }: TTextToType) {
  return <p>{text}</p>;
}
