import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = createContext();

export const ProtectedRouteProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("token")|| " "
  );

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    localStorage.setItem("token", currentUser);
  }, [currentUser]);

  return (
    <ProtectedRoutes.Provider value={{ currentUser,updateUser }}>
      {children}
    </ProtectedRoutes.Provider>
  );
};