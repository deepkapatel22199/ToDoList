import React from "react";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">📝 To Do List</div>
        <ul className="navbar__links">
          <li><a href="/">Home</a></li>
          <li><a href="/tasks">Tasks</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
      <form className="navbar__search" >
        <input
          type="text"
          placeholder="Search tasks..."
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;