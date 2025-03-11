// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white border-top border-danger py-3">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              © {new Date().getFullYear()} Harry Oyarvide. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a
              href="https://github.com/HPOGFD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-danger mx-2"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://linkedin.com/in/harry-oyarvide-25a1585a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-danger mx-2"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;