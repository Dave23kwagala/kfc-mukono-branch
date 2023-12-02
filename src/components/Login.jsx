import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const loginContainerStyle = {
  backgroundImage: "url('https://images.deliveryhero.io/image/fd-th/Products/166978286.jpg?width=%s')", // Replace with your image path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#red',
   width: 1300,
   hight: 540
};

const loginStyle = {
  textAlign: 'center', // Center align text within the form
};

const labelStyle = {
  color: '#fff', // Color for labels
};

const inputStyle = {
  padding: '10px',
  marginBottom: '15px',
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#c70000',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const linkStyle = {
  color: '#c70000', // Color for links
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate an API call to validate the login credentials
    if (email === 'johndoe@example.com' && password === 'password123') {
      console.log('Login successful!');
      // Redirect to the home page or dashboard
    } else {
      console.error('Invalid login credentials');
      // Display an error message to the user
    }
  };

  return (
    <div style={loginContainerStyle}>
      <div style={loginStyle} className="login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required style={inputStyle} />

          <label htmlFor="password" style={labelStyle}>Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required style={inputStyle} />

          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup" style={linkStyle}>Sign up here</Link>.
        </p>
      </div>
    </div>
  );
}

export default Login;
