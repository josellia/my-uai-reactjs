import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="#" className="navbar__menu-bars">
          <FaIcons.FaBars />
        </Link>
      </div>
    </>
  );
}

export default Navbar;
