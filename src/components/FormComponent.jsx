import React, { useState } from 'react';
import '../css/form.css';

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
    <div className="form-container">
      <h1 className="form-title">Contact Me</h1>

      {/* Contact Details */}
      <div className="contact-details">
        <h4>Get in Touch</h4>
        <p><strong>Telephone:</strong> (914) 584-6063</p>
        <p><strong>Email:</strong> poyarvide87@yahoo.com</p>
      </div>

      {/* Form */}
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email Address"
          required
        />

        <input
          value={subject}
          name="subject"
          onChange={handleInputChange}
          type="text"
          placeholder="Subject"
          required
        />

        <textarea
          rows={5}
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Type your message here..."
          required
        />

        <button type="submit">Send!</button>
      </form>
    </div>
  );
}

export default Form;
