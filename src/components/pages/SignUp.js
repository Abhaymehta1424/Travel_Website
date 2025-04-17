import React, { useState } from 'react';
import '../../App.css';
import './SignUp.css'; 


export default function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User signed up:', { name, email, password });

  };

  return (
    <div className="sign-up-container">
      <h1 className="sign-up-heading">Sign Up</h1>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <div className="form-input">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>
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
        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
      
      <p className="sign-up-footer">
        Already have an account? <a href="/login">Log in </a>
      </p>
      </form>
    </div>
  );
}
