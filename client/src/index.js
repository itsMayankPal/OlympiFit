import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./AuthContext"; // Import the AuthProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    {/* Wrap your App with AuthProvider */}
    <App />
  </AuthProvider>
);

reportWebVitals();
