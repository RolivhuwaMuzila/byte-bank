import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPasswordPage.css';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert('Please provide your email address.');
      return;
    }

    // Simulate sending email
    console.log('Sending password reset link to:', email);
    setEmailSent(true);
  };

  return (
    <div className="forgot-container">
      {!emailSent ? (
        <form className="forgot-form" onSubmit={handleSubmit}>
          <h2>Reset Your Password</h2>
          <label>Enter your email address:</label>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            Send Reset Link
          </button>
        </form>
      ) : (
        <div className="email-sent-message">
          <p>
            An email has been sent to <strong>{email}</strong> with a password reset
            link.
          </p>
          {/* In a real app, the user would click the link in their email.
              Here we simulate by providing a link that takes the user to the reset page. */}
          <Link to="/reset-password" className="reset-link">
            Click here to reset your password now.
          </Link>
        </div>
      )}
    </div>
  );
}

export default ForgotPasswordPage;
