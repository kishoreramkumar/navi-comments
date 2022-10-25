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
        <Button type={BUTTON_TYPES.normal} category={BUTTON_CATEGORY.primary}>
          Button
        </Button>
        <Button type={BUTTON_TYPES.normal} category={BUTTON_CATEGORY.secondary}>
          Button
        </Button>
        <Button type={BUTTON_TYPES.normal} category={BUTTON_CATEGORY.error}>
          Button
        </Button>
        <Button type={BUTTON_TYPES.outline} category={BUTTON_CATEGORY.primary}>
          Button
        </Button>
        <Button
          type={BUTTON_TYPES.outline}
          category={BUTTON_CATEGORY.secondary}
        >
          Button
        </Button>
        <Button type={BUTTON_TYPES.outline} category={BUTTON_CATEGORY.error}>
          Button
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
