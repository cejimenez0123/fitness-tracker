import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Userlogin from "./pages/Userlogin.jsx";
import {
  ProtectedRoutes,
  ProtectedRouteProvider,
} from "./component/ProtectedRoutes.jsx";
import Homepage from "./Homepage.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import UserProfile from "./pages/UserProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/b",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Userlogin />,
      },
      {
        path: "signin",
        element: <UserSignup />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
    ],
  },
  /* {
    path: "/a",
    element: <Requiredauth />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "Userprofile",
        element: <Userlogin />,
      },
      {
        path: "History",
        element: <Userlogin />,
      },
    ],
  }, */
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ProtectedRouteProvider> */}
    <RouterProvider router={router} />
    {/* </ProtectedRouteProvider> */}
  </React.StrictMode>
);
