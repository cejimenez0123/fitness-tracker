import { useContext } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { Outlet, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "./component/ProtectedRoutes";
function App() {
  return (
    <>
      <div className="bg-back h-screen">
        <Navbar />
      </div>
    </>
  );
}

const Requiredauth = () => {
  const { currentUser } = useContext(ProtectedRoutes);
  if (!currentUser) return <Navigate to="/login" />;
  return (
    <>
      <div className="">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export { App, Requiredauth };
