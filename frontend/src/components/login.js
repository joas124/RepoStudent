import './login.css';
import React from 'react';
import Box from '@mui/material/Box';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import {Input} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import theme from './theme';

export default function Login(){
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
    <ThemeProvider theme={theme}>
    <div className='login'>
      <div className='login-div'>
      <h2 className='login-title'>LOGIN</h2>
      <div style={{ marginBottom: '1rem' }}> 
        <TextField 
          id="outlined"
          label="Username"
          fullWidth variant="outlined"
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          </FormControl>
          </div>
          <Button color="primary"
          variant="contained"
          style={{ position: 'absolute' , left: '??'}}
          onClick={()=> {
                //login();
              }}
          >LOGIN
          </Button>
      </div>
      </div>
    </ThemeProvider>
  );
}