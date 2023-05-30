import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    width: 100%;
    height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
		font-family: 'Popins', sans-serif;
  }
`;
