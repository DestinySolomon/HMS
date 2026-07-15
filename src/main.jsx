import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HotelProvider } from "./store/HotelContext";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HotelProvider>
        <App />
      </HotelProvider>
    </AuthProvider>
  </StrictMode>,
);
