import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from './components/navbar';
import LandingPage from './components/landing_page';
import Login from './components/login';
import SignUp from './components/signup';
import NoPage from './components/nopage';
import Profile from './components/profile';
import Repo from './components/repo';
import Folder from './components/folder';
import reportWebVitals from './reportWebVitals';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route index element={<LandingPage />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='profile/:username' element={<Profile />} />
          <Route path='repo/:repo' element={<Repo />} />
          <Route path='repo/:repo/*' element={<Folder />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
