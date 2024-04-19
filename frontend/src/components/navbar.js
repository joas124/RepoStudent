import './navbar.css'
import React from 'react'
import { IoMenu } from "react-icons/io5";


function Navbar() {
  return (
    <nav className="navbar">
      <IoMenu className="menu-icon" onClick={() => console.log("nav")}/>
    </nav>
  )
}

export default Navbar;