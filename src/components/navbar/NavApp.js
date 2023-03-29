import WorkIcon from "@mui/icons-material/Work";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavApp.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <span>
          Workable <WorkIcon />
        </span>
      </Link>
      <ul>
        <li>
          <NavLink to="/"> HOME </NavLink>
        </li>
        <li>
          <NavLink to="/career-tips">CAREER TIPS</NavLink>
        </li>
        <li>
          <NavLink to="/wishlist">WISHLIST</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
