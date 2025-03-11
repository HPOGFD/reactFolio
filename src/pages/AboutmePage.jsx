// src/pages/AboutmePage.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import AboutmeComponent from '../components/AboutmeComponent';

const AboutmePage = () => {
  console.log('AboutmePage is running'); // For debugging

  return (
    <section className="py-5" style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
      <Container>
        <div className="card border-primary mb-5">
          <div className="card-header bg-primary text-white">
            <h2 className="mb-0">About Harry</h2>
          </div>
          <div className="card-body bg-dark text-light">
            <p className="lead">
              Get to know me—my journey, skills, and what drives me forward!
            </p>
          </div>
        </div>
        <AboutmeComponent />
      </Container>
    </section>
  );
};

export default AboutmePage;