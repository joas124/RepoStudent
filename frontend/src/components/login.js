import './login.css';
import React from 'react';
import Box from '@mui/material/Box';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import {Input} from '@mui/material';

export default function Login(){

  let message = '';

  const login = (e) => {
    e.preventDefault();
    const username = document.querySelector('.login-user').value;
    const password = document.querySelector('.login-password').value;
    try{
      fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      }).then(response => {
          if (response.status === 400) {
            //console.log('Invalid credentials');
            message = 'Username/Password is incorrect';
          } else if (response.status === 500) {
            message = 'Server error';
          } else if(response.status === 200){
            message = 'Logged in successfully';
          }
      })
      document.querySelector('.login-message').innerHTML = message;

      
    }catch(err){
      // console.log(err);
    }
  }

  return(
    <div className='login'>
      <div className='login-div'>
        <h2 className='login-title'>LOGIN</h2>
          <Box className='input-field'
            >
          <TextField
            id="outlined"
            label="Username"
            />
          </Box>
          <Box className='input-field'
            >
          <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Box>
          <Button 
              variant="contained"
              onClick={()=> {
                //login();
              }}
          >LOGIN
          </Button>
      </div>
    </div>
  );
}