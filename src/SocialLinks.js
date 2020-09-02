import React from "react";
import "./SocialLinks.css";

function SocialLinks() {
  return (
    <div className="social-container">
      <a title="GitHub" target="_blank" href="https://github.com/isaif">
        <img className="github-icon" src="gh-icon.png" alt="github"></img>
      </a>
      <a
        title="Stackoverflow"
        target="_blank"
        href="https://stackoverflow.com/users/4901118/isaif"
      >
        <img
          className="stackoverflow-icon"
          src="so-icon.png"
          alt="stackoverflow"
        ></img>
      </a>
    </div>
  );
}

export default SocialLinks;
