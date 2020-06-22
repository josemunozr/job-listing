import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #effafa;
    --filterTablets: #eef6f6;
    --darkCyan: #5ba4a4;
    --darkGrayingCyan: #7b8e8e;
    --VeryDarkGrayingCyan: #2c3a3a;
  }
  
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 15px;
    font-family: 'Spartan', sans-serif;
    margin: 0;
    background-color: var(--background);
  }

`;

export default GlobalStyle;
