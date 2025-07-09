import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

AOS.init(); // Initialize AOS

export const server = "https://skillnest-backend.onrender.com";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import { CourseContextProvider } from "./context/CourseContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CourseContextProvider>
          <App />
        </CourseContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
);
