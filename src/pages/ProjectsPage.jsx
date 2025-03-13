import React from 'react';
import { Container, Card } from 'react-bootstrap';
import ProjectsComponent from '../components/ProjectsComponent';


export default function Contact() {
    console.log('About.jsx is running');
    return (
      <Container className="py-5">
      <Card className="bg-dark text-white border-danger mb-5">
        <Card.Header className="bg-danger text-white">
          <h2 className="mb-0">My Projects</h2>
        </Card.Header>
        <Card.Body>
          <p className="lead">
          Check out some of the projects I’ve built—showcasing my skills in development and problem-solving!
          </p>
        </Card.Body>
      </Card>
      <ProjectsComponent />
    </Container>
    );
}