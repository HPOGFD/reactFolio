import React from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css'

const NavTabs = () => {
   
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to="/">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/Projects">Projects</Link>
            </li>
            <li className="nav-item">
                <Link to="/Contact">Contact</Link>
            </li>
            <li className = "nav-item">
                <Link to="/Resume">Resume</Link>
            </li>
        </ul>
    )
}

export default NavTabs;