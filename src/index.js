import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import theme from "./components/theme/theme";

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);

reportWebVitals();
