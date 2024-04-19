import './login.css';
import React from 'react';

export default function Login(){
  return(
    <div className='login'>
      <div className='login-div'>
        <h2 className='login-title'>Login</h2>
        <form className='login-form'>
          <input type='text' className='login-input' placeholder='Email/Username' />
          <input type='password' className='login-input' placeholder='Password'/>
          <button className='login-button'>Login</button>
        </form>
      </div>
    </div>
  );
}