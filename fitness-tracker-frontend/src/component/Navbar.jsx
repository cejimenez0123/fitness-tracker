import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Navbar = () => {
  console.log(localStorage.getItem("token"))

  return (
    <div>
      <Link to="/signin"> signup</Link>
      <Link to="/home"> home</Link>
      <Link to="/login"> login</Link>
      <Link to="/"> Landing</Link>

      <Outlet/>
    </div>
  )
}

export default Navbar
