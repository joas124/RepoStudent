import './signup.css';
import React from 'react';
import Box from '@mui/material/Box';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import {Input} from '@mui/material';
import theme from './theme'
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputAdornment } from '@mui/material';


export default function SignUp(){
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return(
    <ThemeProvider theme={theme}>
    <div className='signup'>
      <div className='signup-div'>
        <h2 className='signup-title'>Sign Up</h2>
        <div style={{ marginBottom: '1rem' }}>
          <TextField 
          id='outlined'
          label= "Your name"
          fullWidth variant ="outlined"
          />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <TextField
            id="outlined"
            label="E-mail"
            fullWidth variant ="outlined"
            />
          </div>
         
          <div style={{ marginBottom: '1rem' }}>
            <TextField
            id="outlined"
            label="Username"
            fullWidth variant ="outlined"
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
          style={{ marginTop: '1rem' }}
          onClick={()=> {
                //login();
              }}
          >REGISTER
          </Button>
      </div>
    </div>
    </ThemeProvider>
  );
}