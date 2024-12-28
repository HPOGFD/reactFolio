import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Portfolio. All Rights Reserved.</p>
      <div className="footer-links">
        <a
          href="https://github.com/HPOGFD"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://linkedin.com/in/harry-oyarvide-25a1585a/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
