import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import illustration from '../assets/illustration.PNG';
import './LoginPage.css';

function LoginPage() {
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('weak');

  const validatePassword = (pwd) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#_*&])[A-Za-z\d@#_*&]{8,}$/;
    return regex.test(pwd);
  };

  const getPasswordStrength = (pwd) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#_*&]).{8,}$/;
    const mediumRegex = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[@#_*&])|(?=.*[a-z])(?=.*\d)(?=.*[@#_*&])).{6,}$/;

    if (strongRegex.test(pwd)) return 'strong';
    if (mediumRegex.test(pwd)) return 'medium';
    return 'weak';
  };

  const handleSignIn = () => {
    if (!idNumber || !password) {
      alert('Please fill in both ID Number and password.');
      return;
    }

    if (!validatePassword(password)) {
      alert(
        'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character (@#_*&...).'
      );
      return;
    }

    // Insert actual authentication logic here
    console.log('Signing in with:', { idNumber, password });
    alert(`Signed in as ${idNumber}`);
  };

  const handleSignUp = () => {
    alert('Redirecting to Sign Up page...');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="logo">FinTech</h1>
        <h2 className="title">Login</h2>

        <label>ID Number</label>
        <div className="input-wrapper">
          <span className="icon">🆔</span>
          <input
            type="text"
            placeholder="Enter your ID Number"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
        </div>

        <label>Password</label>
        <div className="input-wrapper">
          <span className="icon">🔒</span>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              const value = e.target.value;
              setPassword(value);
              setPasswordStrength(getPasswordStrength(value));
            }}
            className={`password-input ${passwordStrength}`}
          />
          <button className="toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <small className="password-hint">
          * Must be 8+ characters, 1 uppercase, 1 lowercase, 1 number & 1 special (@#_*&)
        </small>

        {password && (
          <small
            style={{
              color:
                passwordStrength === 'strong'
                  ? 'green'
                  : passwordStrength === 'medium'
                  ? 'orange'
                  : 'red',
              fontWeight: 'bold',
            }}
          >
            {passwordStrength === 'strong'
              ? 'Strong password'
              : passwordStrength === 'medium'
              ? 'Almost there'
              : 'Weak password'}
          </small>
        )}

        <Link to="/forgot-password" className="forgot-link">
          Forgot password?
        </Link>

        <button className="sign-in-btn" onClick={handleSignIn}>
          Sign in
        </button>
      </div>

      <div className="signup-side">
        <img src={illustration} alt="Welcome" className="illustration" />
        <p>Don't have an account?</p>
        <button className="sign-up-btn" onClick={handleSignUp}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
