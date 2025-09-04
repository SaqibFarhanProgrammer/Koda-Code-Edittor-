import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./context/context.jsx";
import { BrowserRouter } from "react-router-dom";
import TopNavbar from "./Mycomponeents/Navbar.jsx";
import SideNavigate from "./Mycomponeents/SideNavigate.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
