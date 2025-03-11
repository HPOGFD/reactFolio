import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

function NavTabs() {
  return (
    <nav className="navbar">
      {/* Header Content */}
      <div className="navbar-brand">
        <h1>Harry P Oyarvide</h1>
        <p className="tagline">
          Electrical Application 
          <span className="highlight"> Engineer </span>
          | Full-Stack 
          <span className="highlight"> Developer </span>
        </p>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/Projects" className="nav-link">Portfolio</Link>
        </li>
        <li>
          <Link to="/Contact" className="nav-link">Contact</Link>
        </li>
        <li>
          <Link to="/resume" className="nav-link">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
