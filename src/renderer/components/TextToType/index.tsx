import React from 'react';

export type TTextToType = {
  children: React.ReactNode
}

export function TextToType({ children }: TTextToType) {
  return <p>{children}</p>;
}
