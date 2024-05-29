import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = createContext();

export const ProtectedRouteProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(
  localStorage.getItem("token")||null
  );

  // const updateUser = (data) => {
  //   setCurrentUser(data);
  // };

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(currentUser));
  // }, [currentUser]);

  return (
    <ProtectedRoutes.Provider value={{ currentUser }}>
      {children}
    </ProtectedRoutes.Provider>
  );
};