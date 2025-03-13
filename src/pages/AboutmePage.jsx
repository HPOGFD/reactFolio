import React from 'react';
import AboutmeComponent from '../components/AboutmeComponent';

import { Container, Card } from 'react-bootstrap';


const AboutmePage = () => {
  console.log('AboutmePage is running'); // For debugging

  return (
    <Container className="py-5">
        <Card className="bg-dark text-white border-danger mb-5">
          <Card.Header className="bg-danger text-white">
            <h2 className="mb-0">About me</h2>
          </Card.Header>
          <Card.Body>
            <p className="lead">
            Get in touch and let&apos;s create someting amazing
            </p>
          </Card.Body>
        </Card>
        <AboutmeComponent />
      </Container>
  );
};

export default AboutmePage;
