import Homepage from "./Homepage";
import { useContext } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { Outlet, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "./component/ProtectedRoutes";

const App = () => {
  /*  const { currentUser } = useContext(ProtectedRoutes);
  if (!currentUser) return <Navigate to="/login" />; */
  return (
    <>
      <div className="">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default App;
