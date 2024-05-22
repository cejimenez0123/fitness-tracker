import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import UserProfile from "../Profile/UserProfile";

const Nav = () => {
  const [user, setUser] = useState({ name: "John Doe" });

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link> {}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <UserProfile user={user} />
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Nav;
