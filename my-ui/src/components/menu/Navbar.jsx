import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [isActive, setisActive] = useState(false);
  return (
    <>
      <IconContext.Provider value={{ color: "#c1c1c1" }}>
        <div className="navbar"></div>
        <nav className="nav-menu" role="navigation">
          <ul className="nav-menu-items">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink activeClassName="active" to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
