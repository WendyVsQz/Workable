import WorkIcon from "@mui/icons-material/Work";
import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/"> HOME </Link>
        </li>
        <li>
          <Link to="/career-tips">CAREER TIPS</Link>
        </li>
        <li>
          <Link to="/wishlist">WISHLIST</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
