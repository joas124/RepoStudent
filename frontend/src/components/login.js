import './login.css';
import React from 'react';

export default function Login(){
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
      }).then(response => console.log(response))
    }catch(err){
      console.log(err);
    }
  }

  return(
    <div className='login'>
      <div className='login-div'>
        <h2 className='login-title'>Login</h2>
        <form className='login-form'>
          <input type='text' className='login-user' placeholder='Email/Username' />
          <input type='password' className='login-password' placeholder='Password'/>
          <button className='login-button' onClick={login}>Login</button>
        </form>
      </div>
    </div>
  );
}