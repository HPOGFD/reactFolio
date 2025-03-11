// src/pages/ResumePage.jsx
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import ResumeComponent from '../components/ResumeComponent';

const ResumePage = () => {
  console.log('ResumePage.jsx is running');
  return (
    <Container className="py-5">
      <Card className="bg-dark text-white border-danger mb-5">
        <Card.Header className="bg-danger text-white">
          <h2 className="mb-0">My Resume</h2>
        </Card.Header>
        <Card.Body>
          <p className="lead">
            Explore my professional journey, skills, and achievements.
          </p>
        </Card.Body>
      </Card>
      <ResumeComponent />
    </Container>
  );
};

export default ResumePage;