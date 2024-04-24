import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./components/AuthProvider";
import { Root } from "./layouts/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateUser from "./pages/UpdateUser";
import Users from "./pages/Users";
import API_URL from "./utils/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch(`${API_URL}/users`),
      },
      {
        path: "/update/:id",
        element: <UpdateUser />,
        loader: ({ params }) => fetch(`${API_URL}/users/${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
