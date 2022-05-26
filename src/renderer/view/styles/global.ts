import { css } from '@emotion/react';
import { COLOR } from '../../const';

export const style = css`
  html {
    font-family: '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue',
      'Segoe UI', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans',
      'ヒラギノ角ゴ ProN W3', 'Arial', 'メイリオ', 'Meiryo', 'sans-serif';
    line-height: 1.75;
    font-weight: 400;
    font-size: 16px;
    -webkit-letter-spacing: 0.03em;
    -moz-letter-spacing: 0.03em;
    -ms-letter-spacing: 0.03em;
    letter-spacing: 0.03em;
    color: ${COLOR.TEXT.WHITE};
  }

  body {
    background: ${COLOR.BACKGROUND.SUMI};
    margin: 24px;
  }

  img {
    max-width: 100%;
  }
`;
