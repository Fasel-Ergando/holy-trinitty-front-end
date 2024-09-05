import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

import { ThemeProvider } from "./context/ThemeProvider";
import { SidebarProvider } from "./context/SidebarProvider.jsx";
import App from "./App.jsx";

import "./main.css";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>  
        <ThemeProvider>
          <SidebarProvider>
           <App />
          </SidebarProvider>
        </ThemeProvider>
       </BrowserRouter>
      </AuthProvider>
  </React.StrictMode>
);
