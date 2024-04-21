import "./landing_page.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material/";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <h2 className="value">
        <div style={{marginLeft: '10rem',marginTop: '20rem',maxWidth: '50%'}}>
          Save, manage and share any work/project you have!
          </div>
        </h2>
    <div className="landing-page">
      <div style={{marginLeft: '10rem',marginTop: '1rem'}}>
        </div>
      <div className="text-and-login">
        <p 
        className="join">
          Join now!
          </p>
        <div className="button">
        <Button color = "primary"
          size="large"
          variant="contained"
          style={{marginLeft: '10rem'}}
          href="/login">
          LOGIN
        </Button>
        </div>
          <p>
            <div style={{marginLeft:'2rem',marginRight:'2rem'}}>

             OR 

             </div>
             </p>
            
             
          <div className="button">
        <Button color = "primary"
          variant="contained"
          size="large"
          href="/signup">
          SIGN UP
        </Button>
        </div>
        </div>
      </div>
      <img
        className="image-landing"
        src="./happy-blonde-college-student-posing-against-pink-wall.png"
        alt="Mulher Sorrindo"
      />
    </ThemeProvider>
  );
}
