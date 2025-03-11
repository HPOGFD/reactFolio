// src/components/NavTabs.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavTabs = () => {
  return (
    <Nav className="ms-auto">
      <Nav.Item>
        <Nav.Link as={Link} to="/" className="text-white">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Projects" className="text-white">
          Portfolio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Contact" className="text-white">
          Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/resume" className="text-white">
          Resume
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavTabs;