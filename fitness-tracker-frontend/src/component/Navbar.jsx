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
    <div style={navbarStyle}>
      <Link to="/home" style={linkStyle}>
        Home
      </Link>
      <Link to="/signin" style={linkStyle}>
        Signup
      </Link>
      <Link to="/login" style={linkStyle}>
        Login
      </Link>
      <Link to="/" style={linkStyle}>
        Landing
      </Link>
      <Link to="/userProfile" style={linkStyle}>
        UserProfile
      </Link>
    </div>
  );
};

export default Navbar;
