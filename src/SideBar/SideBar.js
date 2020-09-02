import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
        classNames="sidebar"
        unmountOnExit
      >
        <div className="sidebar-content">
          <ul onClick={toggleSideBar}>
            <li>
              <NavLink exact={true} to="/" activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="selected">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="selected">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="selected">
                Contact
              </NavLink>
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
