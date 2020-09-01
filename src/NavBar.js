import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import NavButton from "./NavButton";
import { CSSTransition } from "react-transition-group";

function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleNavBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div>
      <NavButton handleClick={toggleNavBar} />
      <CSSTransition
        in={showSideBar}
        timeout={350}
        classNames="my-node"
        unmountOnExit
      >
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
      </CSSTransition>
      {showSideBar && (<div onClick={toggleNavBar} className="overlay-sidebar"></div>)}
    </div>
  );
}

export default NavBar;
