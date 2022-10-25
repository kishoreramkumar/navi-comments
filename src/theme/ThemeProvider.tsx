import React from "react";
import { ThemeProvider as Provider } from "styled-components";
import GlobalStyle from "./globalStyles";

interface PropType {
  theme: { [key: string]: string };
  children: React.ReactNode;
}

function ThemeProvider({ theme, children }: PropType) {
  return (
    <Provider theme={theme}>
      <GlobalStyle />
      {children}
    </Provider>
  );
}

export default ThemeProvider;
