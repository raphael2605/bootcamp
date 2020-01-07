import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #9865E5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialised !important;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
