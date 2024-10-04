import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import AuthScreen from "./components/AuthScreen.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/app/*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
