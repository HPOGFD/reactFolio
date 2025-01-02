import React from 'react';
import Nav from './NavTabs'; // Import the navigation component
import '../style/header.css';

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
