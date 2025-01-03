import React, { useState } from 'react';
import '../style/form.css';

function Form() {
  // State variables for name, email, subject, and message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Get value and name from input field
    const { name, value } = e.target;

    // Update the appropriate state based on the input field name
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'subject') {
      setSubject(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Prevent the page from refreshing on form submit
    e.preventDefault();

    // Show an alert with the submitted information (you can replace this with an actual action)
    alert(`Message Sent by ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);

    // Clear input fields after submitting
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="form-container">
  <h1>Contact Me</h1>
  <div className="form-wrapper">
    <div className="form-details">
      <p><b>Telephone:</b> (914)5846063</p>
      <p><b>Email:</b> poyarvide87@yahoo.com</p>
    </div>
    <form className="form" onSubmit={handleFormSubmit}>
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
        value={message}
        name="message"
        onChange={handleInputChange}
        placeholder="Type your message here..."
        required
      />
      <button type="submit">Send!</button>
    </form>
  </div>
</div>

  );
}

export default Form;
