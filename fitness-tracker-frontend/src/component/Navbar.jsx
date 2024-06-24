import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  console.log(localStorage.getItem("token"));

  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: "blue",
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    background: "#f8f9fa",
    borderBottom: "1px solid #e7e7e7",
  };

  return (
    <div>
      <Link to="/signin"> Signup</Link>
      <Link to="/home"> Home</Link>
      <Link to="/login"> Login</Link>
      <Link to="/about"> About</Link>
      <Link to="/"> Landing</Link>
      <Link to="userprofile/"> Profile</Link>
    </div>
  );
};

export default Navbar;
