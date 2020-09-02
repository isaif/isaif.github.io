import React from "react";
import "./MenuButton.css";

function MenuButton({ handleClick, showSideBar }) {
  const getClassNames = () => {
    return `MenuButton ${showSideBar ? "change" : ""}`;
  };

  return (
    <div className={getClassNames()} onClick={handleClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}

export default MenuButton;
