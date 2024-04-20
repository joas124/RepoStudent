import './signup.css';
import React from 'react';
import Box from '@mui/material/Box';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import {Input} from '@mui/material';

export default function SignUp(){
  return(
    <div className='signup'>
      <div className='signup-div'>
        <h2 className='signup-title'>Sign Up</h2>
        <Box className='input-field'>
          <TextField 
          id='outlined'
          label= "Your name"
          />
          </Box>
          <Box className='input-field'>
          <TextField 
          id='outlined'
          label= "Email"
          />
          </Box>
          <Box className='input-field'>
            <TextField
            id="outlined"
            label="Username"
            />
          </Box>
          <Box className='input-field'>
            <TextField
            id = "outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            />
          </Box>
          <Box className='butao'>
          <Button
          onClick={()=>{
            //signup();
          }}
          >SIGN UP
          </Button>
          </Box>
      </div>
    </div>
  );
}