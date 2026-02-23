import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/about" element={<App />} />
      </Routes>
    </BrowserRouter>
);
