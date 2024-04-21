import { Outlet, useNavigate, useLocation } from 'react-router-dom'
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
import { OutlinedInput } from '@mui/material';


export default function Navbar() {
  const navigate = useNavigate();

  const [active, setActive] = React.useState(true); // This line remains the same

  const location = useLocation();

  
  React.useEffect(() => {
    if ((location.pathname === "/login"|| location.pathname==="/" || location.pathname===" "|| location.pathname==="/signup" ))
    setActive(false);
  });


  const redirectToHomePage = () => {
    navigate('/');
  };

  if(!active){
    return(
      <>
      <nav className="navbar">
        <div className='logo' onClick={redirectToHomePage}>
          <img src='/LogoRepoStudentsemfundo.png' alt='logo' className='logo-img'/>
          <h1 className='logo-text'>RepoStudent</h1>
        </div>
        <div className="searchbar-containerAlt">
          <SearchBar />
        </div>
      </nav>
      <Outlet />
    </>
    )
  }
  else{
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
}