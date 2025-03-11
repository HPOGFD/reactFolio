import React from 'react';
import Nav from './NavComponent'; // Import the navigation component


function Header() {
  return (
    <header className="header">
    <div className="header-title">
      <h1>Harry P Oyarvide</h1>
      <p className="tagline">
        Electrical Application 
        <span className="highlight"> Engineer </span>
        | Full-Stack 
        <span className="highlight"> Developer </span>
      </p>
    </div>
    <Nav />
  </header>
  );
}

export default Header;
