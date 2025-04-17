import React, { useState } from 'react';
import '../../App.css';  // Ensure this CSS file includes any styling you need for the page
import './Login.css'; // Create a custom CSS for Login page if needed

export default function Login() {
  // States for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the user input to the console
    console.log('User logged in:', { email, password });

    // Here, you would typically handle the user login logic,
    // like calling an API or checking credentials.
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Log In</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Log In
        </button>
      
      <p className="login-footer">
        Don't have an account? <a href="/sign-up" >Sign up </a>
      </p>
      </form>
    </div>
  );
}
