  import { Outlet, useNavigate } from 'react-router-dom'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './navbar.css'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchBar from "./search.js";
import ProfileButton from './profilebutton.js';
import Tooltip from '@mui/material/Tooltip';


export default function Navbar() {
  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate('/');
  };

  return(
    <>
      <nav className="navbar">
        <div className='logo' onClick={redirectToHomePage}>
          <img src='/LogoRepoStudentsemfundo.png' alt='logo' className='logo-img'/>
          <h1 className='logo-text'>RepoStudent</h1>
        </div>
        <div className="searchbar-container">
          <SearchBar />
        </div>
        <div className='nav-links'>
          <div className='new-project-div'>
             <Tooltip size="large" title="New Project">
             <IconButton> 
              <AddCircleIcon sx={{ fontSize: 50 }}  className='add-icon'/>
            </IconButton>
          </Tooltip>
          </div>
          <ProfileButton/>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
