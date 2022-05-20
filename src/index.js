import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import theme from "./components/theme/theme";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
