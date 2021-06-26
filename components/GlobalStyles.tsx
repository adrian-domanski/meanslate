import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body, html, #__next {
    min-height: 100%;
  }

  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`};
    font-family: 'Cairo', sans-serif;
    overflow-x: hidden;
    background-color: #fdfdfd;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
