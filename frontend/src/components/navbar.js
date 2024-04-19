import { Outlet } from 'react-router-dom'
import './navbar.css'
import React from 'react'


export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className='logo'>
          <img src='./LogoRepoStudentsemfundo.png' alt='logo' className='logo-img'/>
          <h1 className='logo-text'>RepoStudent</h1>
        </div>
      </nav>
      <Outlet />
    </>

  )
}
