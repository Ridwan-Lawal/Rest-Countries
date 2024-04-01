import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CountryProvider } from "./contexts/CountryContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountryProvider>
      <App />
    </CountryProvider>
  </React.StrictMode>
);
