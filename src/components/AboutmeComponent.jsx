// src/components/AboutmeComponent.jsx
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const AboutmeComponent = () => {
  return (
    <Card className="bg-dark text-light border-danger mb-4">
      <Card.Body>
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-3 mb-md-0">
            <img
              src="/images/IMG_2973.JPG" // Public folder path
              alt="Harry Oyarvide"
              className="img-fluid rounded-circle"
              style={{ maxWidth: '200px' }}
            />
          </Col>
          <Col md={8}>
            <h3 className="text-danger mb-3">About Me</h3>
            <p>
              Hi there! 👋 My name is <strong>Harry Oyarvide</strong>, a sales application engineer with a passion for back-end development and AWS cloud computing. 
              My background in electrical engineering, combined with growing skills in JavaScript, Node, SQL, and React, fuels my love for problem-solving. 
              Outside of tech, I enjoy hiking with my family and our dog, Xena, and I’m a huge F1 enthusiast 🏎️. 
              I’m on a mission to merge my engineering mindset with cutting-edge tech to create impactful solutions. 
              Let’s collaborate and build something amazing! 🚀
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default AboutmeComponent;