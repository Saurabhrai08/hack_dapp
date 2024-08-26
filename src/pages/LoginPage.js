import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file for styling

function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => setIsSignup(prev => !prev);

  return (
    <div className={`login-container ${isSignup ? 'signup' : ''}`}>
      <div className="form-container">
        {!isSignup ? (
          <form id="signinForm">
            <h2>Login</h2>
            <div className="inputBox">
              <input type="text" placeholder="Username" required />
            </div>
            <div className="inputBox">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="inputBox group">
              <a href="#">Forgot Password</a>
              <a href="#" onClick={toggleForm}>Signup</a>
            </div>
            <div className="inputBox">
              <input type="submit" value="Sign in" />
            </div>
          </form>
        ) : (
          <form id="signupForm">
            <h2>Registration</h2>
            <div className="inputBox">
              <input type="text" placeholder="Username" required />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="inputBox">
              <input type="password" placeholder="Create Password" required />
            </div>
            <div className="inputBox">
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <div className="inputBox">
              <input type="submit" value="Register Account" />
            </div>
            <div className="inputBox group">
              <a href="#">Already Have an Account? <b onClick={toggleForm}>Login</b></a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
