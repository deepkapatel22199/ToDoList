import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";


const Navbar = () => { 
  return (
    <nav className="navbar">
      <h1>My TODO Lists</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/my-tasks">My Tasks</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;