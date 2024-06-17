import { useContext } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { Outlet, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "./component/ProtectedRoutes";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Outlet />
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

// import axios from "axios";

// axios.post('/', {}, {
//   headers:{
//     'Authorization' : ` Bearer ${toten}`
//   }
// })
