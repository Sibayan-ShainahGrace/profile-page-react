import React, { useState } from 'react';
import SubmissionSuccess from './SubmissionSuccess';
import '../App.css'; 

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <SubmissionSuccess name={name} email={email} message={message} />;
  }

  return (
    <div className="page-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
