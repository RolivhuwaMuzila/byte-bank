import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPasswordPage.css';

function ResetPasswordPage() {
  const [idNumber, setIdNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    if (!idNumber || !newPassword) {
      alert('Please fill in both your ID Number and your new password.');
      return;
    }

    // Simulate password update logic
    console.log('Resetting password for ID:', idNumber, 'with new password:', newPassword);
    alert('Password has been reset successfully!');
    // Redirect to login page after reset
    navigate('/');
  };

  return (
    <div className="reset-container">
      <form className="reset-form" onSubmit={handleReset}>
        <h2>Reset Password</h2>
        <label>ID Number:</label>
        <input
          type="text"
          placeholder="Enter your ID Number"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />

        <label>New Password:</label>
        <input
          type="password"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button type="submit" className="reset-btn">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
