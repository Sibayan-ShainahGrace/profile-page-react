import React from 'react';
import '../App.css';

function SubmissionSuccess({ name, email, message }) {
  return (
    <div className="container">
      <h1>Thank you, {name}!</h1>
      <p>Your message has been sent.</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  );
}

export default SubmissionSuccess;
