import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Message:', message);
    setName('');
    setMessage('');
  };

  return (
    <section className="contact-form">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
