import { createGlobalStyle } from "styled-components";
import { device } from "./breakPoints";

const GlobalStyle = createGlobalStyle<{ theme: any }>`
html{
  font-size: 100%;
  @media ${device.mobile}{
    font-size: 80%;
  }
}
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme?.body};
    color: ${({ theme }) => theme?.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: background 150ms linear;
    * {
      box-sizing: border-box;
      font-size: 1rem;
    }
    [aria-disabled=true]{
      pointer-events: none;
    }
    .notice{
     color: ${({ theme }) => theme.error}
    }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
container {
  max-width: 1440px;
}
`;

export default GlobalStyle;
