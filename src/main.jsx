import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeContext from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContext>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </ThemeContext>
);
