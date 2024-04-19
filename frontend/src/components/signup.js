import './signup.css';
import React from 'react';

export default function SignUp(){
  return(
    <div className='signup'>
      <h2 className='signup-title'>Sign Up</h2>
      <form className='signup-form'>
        <input type='mail' className='signup-input' placeholder='Email' />
        <input type='text' className='signup-input' placeholder='Username' />
        <input type='password' className='signup-input' placeholder='Password'/>
        <input type='password' className='signup-input' placeholder='Confirm Password'/>
        <button className='login-button'>Sign Up</button>
      </form>
    </div>
  );
}