import { Outlet } from 'react-router-dom'
import './navbar.css'
import React from 'react'


export default function Navbar(props) {

  if (props.logged === true) {
    return (
      <>
        <nav className="navbar">
          <div className='logo'>
            <img src='./LogoRepoStudentsemfundo.png' alt='logo' className='logo-img'/>
            <h1 className='logo-text'>RepoStudent</h1>
          </div>
          <input type='text' placeholder='Search' className='search'/>
          <div className='nav-links'>
            <button className='new-project-btn'>+</button>
            <a href='/profile' className='nav-link'>Profile</a>
          </div>
        </nav>
        <Outlet />
      </>
    )
  }else{
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
}
