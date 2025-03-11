// src/components/Form.jsx
import React, { useState } from 'react';
import { Card, Form as BootstrapForm, Button, Row, Col } from 'react-bootstrap';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'subject') setSubject(value);
    else setMessage(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent by ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <Card className="bg-dark text-white border-danger">
      <Card.Body>
        <h1 className="text-danger mb-4">Contact Me</h1>
        <Row>
          {/* Contact Details */}
          <Col md={4} className="mb-4">
            <Card className="bg-dark text-white border-danger">
              <Card.Body>
                <h4 className="text-danger">Get in Touch</h4>
                <p><strong>Telephone:</strong> (914) 584-6063</p>
                <p><strong>Email:</strong> poyarvide87@yahoo.com</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Form */}
          <Col md={8}>
            <BootstrapForm onSubmit={handleFormSubmit}>
              <BootstrapForm.Group className="mb-3">
                <BootstrapForm.Control
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-dark text-white border-danger"
                />
              </BootstrapForm.Group>

              <BootstrapForm.Group className="mb-3">
                <BootstrapForm.Control
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Your Email Address"
                  required
                  className="bg-dark text-white border-danger"
                />
              </BootstrapForm.Group>

              <BootstrapForm.Group className="mb-3">
                <BootstrapForm.Control
                  value={subject}
                  name="subject"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Subject"
                  required
                  className="bg-dark text-white border-danger"
                />
              </BootstrapForm.Group>

              <BootstrapForm.Group className="mb-3">
                <BootstrapForm.Control
                  as="textarea"
                  rows={5}
                  value={message}
                  name="message"
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                  required
                  className="bg-dark text-white border-danger"
                />
              </BootstrapForm.Group>

              <Button variant="danger" type="submit">
                Send!
              </Button>
            </BootstrapForm>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Form;