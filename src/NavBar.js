import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import NavButton from "./NavButton";

function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleNavBar = () => {
    console.log("clicked");
    setShowSideBar(!showSideBar);
  };

  return (
    <div>
      <NavButton handleClick={toggleNavBar} />
      {showSideBar && (
        <div className="NavBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
