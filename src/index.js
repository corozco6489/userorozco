import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {LangProvider} from "./context/langContext";
import {ThemeProvider} from "./context/context";

ReactDOM.render(
  <LangProvider>
    <ThemeProvider>
    <App />

    </ThemeProvider>
  </LangProvider>,
  document.getElementById("root")
);
