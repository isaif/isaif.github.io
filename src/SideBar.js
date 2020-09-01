import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import MenuButton from "./MenuButton";
import { CSSTransition } from "react-transition-group";

function SideBar() {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div>
      <MenuButton handleClick={toggleSideBar} showSideBar={showSideBar} />
      <CSSTransition
        in={showSideBar}
        timeout={350}
        classNames="my-node"
        unmountOnExit
      >
        <div className="SideBar">
          <ul onClick={toggleSideBar}>
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
      {showSideBar && (
        <div onClick={toggleSideBar} className="overlay-sidebar"></div>
      )}
    </div>
  );
}

export default SideBar;
