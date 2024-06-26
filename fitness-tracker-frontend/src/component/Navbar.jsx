import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Navbar = () => {
  console.log(localStorage.getItem("token"))

  return (
    <div>
      <Link to="/signin"> Signup</Link>
      <Link to="/home"> Home</Link>
      <Link to="/login"> Login</Link>
      <Link to="/about"> About</Link>
      <Link to="/"> Landing</Link>

      <Outlet/>
    </div>
  )
}

export default Navbar
