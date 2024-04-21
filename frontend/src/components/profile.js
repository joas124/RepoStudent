import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import {Avatar} from '@mui/material';
import './profile.css'
import { Link } from 'react-router-dom';
import { hr } from 'react'; // Import hr
import OutlinedCard from "./projectCard";


export default function Profile(){
  const {username} = useParams();
  const [profile, setProfile] = useState(null);

  
  async function fetchProfile(){
    try{
      let data = null;
      const response = await fetch(`http://localhost:8000/api/profile/${username}`);
      if(response.status === 404){
        console.log('User not found');
      }else if(response.status === 500){
        console.log('Server error');
      }else if(response.status === 200){
        const data = await response.json();
        setProfile(data);
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await fetchProfile();
    }
    fetchData();
  }, [username]);
  
  console.log(profile);

  if(profile === null){
    return(
      <div className='profile'>
        <h1>Profile not found</h1>
      </div>
    );
  }
  else{
    return(
      <div className='profile'>
      <div className="profileContainer"> 
        <div className="profile-pic">
          <div className="profile-banner">
            <div className="profile-banner-text">
              <Avatar src={`/${profile.user}.png`} alt='profile pic' className="large"/>
              <h2 className="center">{profile.name}</h2>
              <h3 className="center username">@{profile.user}</h3>
            </div>
            <div className="profile-info">
              <h2>Favorite Projects</h2>
              {profile.favourite_projects.map((project, index) => {
                return(
                <div key={index}>
                  {/*<OutlinedCard name={result.name} description={result.description} />*/}
                  <Link to={`../repo/${project}`} >{project}</Link>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}