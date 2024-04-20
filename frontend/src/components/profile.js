import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

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
        <h1>Profile - {profile.user} </h1>
        <img src={`/${profile.user}.png`} alt='profile pic' className='profile-pic'/>
        <h2>Email: {profile.email}</h2>
      </div>
    );
  }
}