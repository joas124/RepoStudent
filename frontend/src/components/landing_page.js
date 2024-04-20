import "./landing_page.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material/";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
    <div className="landing-page">
      <div className="text-and-login">
        <h2 className="value">
          Save, manage and share any work/project you have!
        </h2>
        <p className="join">Join now!</p>
        <div className="button">
        <Button color = "primary"
          size="large"
          variant="contained"
          style={{marginTop:'1rem'}}
          href="/login">
          LOGIN
        </Button>
        </div>
          <p>OR</p>
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
