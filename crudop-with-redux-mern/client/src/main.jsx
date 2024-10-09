import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Save from "./Save.jsx";
import Update from "./Update.jsx";

const route = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Save", element: <Save /> },
  { path: "/Update/:id", element: <Update /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={route}></RouterProvider>
  </>
);
