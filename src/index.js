import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";
import CountryContextProvider from "./context/CountryContext";
import ThemeContextProvider from "./context/ThemeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextProvider>
    <CountryContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountryContextProvider>
  </ThemeContextProvider>
);
