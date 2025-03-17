import React from 'react';
import { Container, Card } from 'react-bootstrap';
import FormComponent from '../components/FormComponent';


export default function Contact() {
    console.log('About.jsx is running');
    return (
        <Container className="py-5">
        <Card className="bg-dark text-white border-danger mb-5">
          <Card.Header className="bg-danger text-white">
            <h2 className="mb-0">My Contact</h2>
          </Card.Header>
          <Card.Body>
            <p className="lead">
            Get in touch and let&apos;s create someting amazing!
            </p>
          </Card.Body>
        </Card>
        <FormComponent />
      </Container>
    );
}