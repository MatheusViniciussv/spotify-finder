import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   body {
    background: linear-gradient(270deg, #1db954, #191414); ;
    color: white;
    -webkit-font-smoothing: antialiased
  }
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;