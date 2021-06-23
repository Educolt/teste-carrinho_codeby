import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #d1d8e5;
    --blue: #3c78f2;
    --text-color: #111111;
    --free-tax-background: #b4eda7;
    --free-tax-text-color: #3a901b;
    --border-color: #e5e5e5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    width: 100%;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--background);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;