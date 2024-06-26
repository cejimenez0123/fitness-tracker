import React from "react";
import ReactDOM from "react-dom/client";
import { App, Requiredauth } from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Userlogin from "./pages/Userlogin.jsx";

import {
  ProtectedRoutes,
  ProtectedRouteProvider,
} from "./component/ProtectedRoutes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserSignup from "./pages/UserSignup.jsx";
import History from "./pages/History.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Landing from "./pages/Landing.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      
      },
      {
        path: "/login",
        element: <Userlogin />,
    
      },
    
      {
        path: "/signin",
        element: <UserSignup />,
      },
      { path: "/about", element: <About /> },
    ],
  },
  {
    path: "/",
    element: <Requiredauth />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProtectedRouteProvider>
        <RouterProvider router={router} />
      </ProtectedRouteProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
