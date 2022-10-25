import React from "react";
import logo from "./logo.svg";
import ThemeProvider from "./theme/ThemeProvider";
import { lightTheme } from "./theme/themeLists";
import Button, { BUTTON_CATEGORY, BUTTON_TYPES } from "./lib/components/Button";
import { Input } from "./lib/components";
import Comments from "./containers/Comments";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <Comments />
      </div>
    </ThemeProvider>
  );
}

export default App;
