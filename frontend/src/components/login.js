import './login.css';
import React from 'react';
import Box from '@mui/material/Box';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';

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
        <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
      <div>
      <TextField
        required
        id="outlined-required"
        label="Username"
      />
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
          <Button variant="outline" color="">LOGIN</Button>
          </Box>
      </div>
    </div>
  );
}