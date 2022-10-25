import React from "react";
import logo from "./logo.svg";
import ThemeProvider from "./theme/ThemeProvider";
import { lightTheme } from "./theme/themeLists";
import Button, { BUTTON_CATEGORY, BUTTON_TYPES } from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <Input
          onChange={() => {}}
          value={""}
          name="comment"
          label=""
          placeholder="please add comment"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
