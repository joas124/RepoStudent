import "./landing_page.css";
import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){

  return(
    <div className='landing-page'>
      <div className='text-and-login'>
        <h2 className='value'>Save, Manage and Share any work/project you have!</h2>
        <p className='join'>Join Now!</p>
        <div className='login-register'>
          <button className='login-landing'>
            <Link to='/login'>Login</Link>
          </button>
          <p>OR</p>
          <button className='signup-landing'>
            <Link to='/signup'>Sign Up</Link>
          </button>
        </div>
      </div>
      <img src="./LogoRepoStudentsemfundo.png"/>
    </div>
  );
}