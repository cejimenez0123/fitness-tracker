import React from "react";
import { Link, Outlet } from "react-router-dom"; // Import Link and Outlet
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Use Link component for navigation */}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Nav;
