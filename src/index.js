import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./theme";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
