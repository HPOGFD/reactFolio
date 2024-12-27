import { useState } from 'react';
import '../style/Form.css';


function Form() {
  // State variables for name, email, and message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Get value and name from input field
    const { name, value } = e.target;

    // Update the appropriate state based on the input field name
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Prevent the page from refreshing on form submit
    e.preventDefault();

    // Show an alert with the submitted information (you can replace this with an actual action)
    alert(`Message Sent by ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Clear input fields after submitting
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="form-container">
      <h1>Contact me</h1>
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
          placeholder="Your Email"
          required
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Form;
