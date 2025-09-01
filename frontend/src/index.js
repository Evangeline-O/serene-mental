import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";  // Tailwind + global styles
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance measuring (optional)
reportWebVitals();
