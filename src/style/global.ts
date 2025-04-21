import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    background-color: #f9f9f9;
    font-family: 'Roboto', sans-serif;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;
