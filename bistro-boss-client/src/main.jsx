import React from "react";
import ReactDOM from "react-dom/client";
import  { Toaster } from 'react-hot-toast';
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";
import AuthProvider from "./AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
    <Toaster />
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
