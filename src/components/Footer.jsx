import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <p>© {new Date().getFullYear()} Your Portfolio. All Rights Reserved.</p>
      <div>
        <a
          href="https://github.com/HPOGFD"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 1rem', color: '#fff' }}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://linkedin.com/in/harry-oyarvide-25a1585a/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 1rem', color: '#fff' }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
