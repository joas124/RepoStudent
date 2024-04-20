import { Outlet, useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import './navbar.css'
import React from 'react'
import IconButton from '@mui/icons-material/Button'


export default function Navbar() {
  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate('/');
  };

  return (
    <>
      <nav className="navbar">
        <div className='logo' onClick={redirectToHomePage}>
          <img src='/LogoRepoStudentsemfundo.png' alt='logo' className='logo-img'/>
          <h1 className='logo-text'>RepoStudent</h1>
        </div>
        <input type='text' placeholder='Search' className='search'/>
        <div className='nav-links'>
          <div className='new-project-div'>
            <IconButton> 
              <AddIcon className='add-icon' color='primary'/>
            </IconButton>
            <p className='new-project-text'>New Project</p>
          </div>
          <a href='/profile' className='nav-link'>Profile</a>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
