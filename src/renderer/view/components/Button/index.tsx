import styled from '@emotion/styled';

import { SIZE, COLOR } from '../../../const';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export type TButton = {
  color?: string;
  width?: number;
  height?: number;
} & ButtonProps;

export const Button = styled.button<TButton>`
  background: ${COLOR.BACKGROUND.DARK_BLUE};
  color: #fff;
  cursor: pointer;
  font-size: ${SIZE.TEXT.BUTTON}px;
  padding: ${SIZE.MARGIN.SIZEx2}px ${SIZE.MARGIN.SIZEx4}px;
  border: none;
  transition: all 0.3s;

  &:hover {
    background: ${COLOR.BACKGROUND.LIGHT_BLUE};
  }
`;
