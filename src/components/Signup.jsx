// Inside Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  // ... your existing code

  return (
    <div className="signup">
      {/* ... your existing signup form */}
      <p>
        Already have an account? <Link to="/login">Log in here</Link>.
      </p>
    </div>
  );
}

export default Signup;
