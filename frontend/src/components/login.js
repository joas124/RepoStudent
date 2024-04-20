import './login.css';
import React from 'react';

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
        <h2 className='login-title'>Login</h2>
        <form className='login-form'>
          <input type='text' className='login-user' placeholder='Email/Username' />
          <input type='password' className='login-password' placeholder='Password'/>
          <p className='login-message'>{message}</p>
          <button className='login-button' onClick={(e) => login(e) }>Login</button>
        </form>
      </div>
    </div>
  );
}