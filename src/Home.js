import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <p className="intro-name">I'm Saif</p>
        <h1 className="intro-main">Web Developer</h1>
        <p className="intro-details">
          Looking to create modern and aesthetically pleasing websites.
        </p>
      </div>
      <div className="intro-links">
        <Link to="/about">About</Link>
        <span className="intro-links-divider">/</span>
        <Link to="/projects">Projects</Link>
        <span className="intro-links-divider">/</span>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Home;
