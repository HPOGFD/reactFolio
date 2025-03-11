// src/pages/Projects.jsx
import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

export default function Projects() {
  console.log('Projects.jsx is running'); // Updated log for clarity

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

      <Row xs={1} md={2} className="g-4">
        {/* Project 1: sunChaser */}
        <Col>
          <Card className="bg-dark text-white border-danger h-100">
            <Card.Img variant="top" src="../images/weather.gif" alt="sunChaser demo" />
            <Card.Body>
              <Card.Title className="text-danger">sunChaser</Card.Title>
              <Card.Text>
                User-friendly application designed to help individuals stay on top of the weather efficiently.
              </Card.Text>
              <Button
                variant="danger"
                href="https://github.com/HPOGFD/sunChaser.git"
                target="_blank"
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Project 2: teamDepo */}
        <Col>
          <Card className="bg-dark text-white border-danger h-100">
            <Card.Img variant="top" src="../images/team.gif" alt="teamDepo demo" />
            <Card.Body>
              <Card.Title className="text-danger">teamDepo</Card.Title>
              <Card.Text>
                A command-line application for managing employee data, including departments, roles, and employees.
              </Card.Text>
              <Button
                variant="danger"
                href="https://github.com/HPOGFD/teamDepo.git"
                target="_blank"
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Project 3: whipBuilder */}
        <Col>
          <Card className="bg-dark text-white border-danger h-100">
            <Card.Img variant="top" src="../images/whip.gif" alt="whipBuilder demo" />
            <Card.Body>
              <Card.Title className="text-danger">whipBuilder</Card.Title>
              <Card.Text>
                A modular OOP project for building and customizing vehicles with components like color and wheels.
              </Card.Text>
              <Button
                variant="danger"
                href="https://github.com/HPOGFD/whipBuilder.git"
                target="_blank"
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Project 4: budgetApp */}
        <Col>
          <Card className="bg-dark text-white border-danger h-100">
            <Card.Img variant="top" src="../images/budget.gif" alt="budgetApp demo" />
            <Card.Body>
              <Card.Title className="text-danger">budgetApp</Card.Title>
              <Card.Text>
                Easy form to input salary and expenses with a user-friendly calculator.
              </Card.Text>
              <Button
                variant="danger"
                href="https://github.com/HPOGFD/BudgetApp.git"
                target="_blank"
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}