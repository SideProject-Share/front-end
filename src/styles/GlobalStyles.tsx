import tw, { css, GlobalStyles as BaseStyles, theme } from 'twin.macro';

import { Global } from '@emotion/react';
import React from 'react';

const customStyles = css`
  body {
    ${tw`antialiased text-grayText-100`}
    overscroll-behavior: contain;
  }

  * {
    outline: none;
    box-sizing: border-box;
  }

  html,
  body,
  #__next,
  #root {
    height: 100%;
    overflow: hidden;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme`colors.line.main`};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-left: none;
    border-right: none;
  }
`;

export default function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <Global styles={[customStyles]} />
    </>
  );
}
