import React, { useState } from 'react';
import './LoginPage.css';
export default function LoginPage() {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  const [error, setError] = useState();
  const handleChange = (e) => {
    if (e.target.value === '') {
      setError({ ...error, [e.target.name]: `${e.target.name} is required` });
    } else {
      setError({ ...error, [e.target.name]: '' });
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var errKeys = Object.keys(user).filter((key) => {
      if (user[key] === '') {
        return key;
      }
    });
    if (errKeys.length >= 1) {
      alert('Please fill all fields');
    } else {
      console.log(user, error);
    }
  };
  return (
    <div className="form-text">
      <div className="form-container ">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2>Login</h2>
          <div className="flex-column">
            <label>Name:</label>
            <input
              type="text"
              id="Name"
              name="name"
              onChange={(e) => {
                handleChange(e);
              }}
              value={user.name}
            />
            <div className="error">{error && error.name}</div>
          </div>
          <div className="flex-column">
            <label>Password:</label>
            <input
              type="password"
              id="Password"
              name="password"
              onChange={(e) => {
                handleChange(e);
              }}
              value={user.password}
            />
            <div className="error">{error && error.password}</div>
          </div>
          <div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="display-flex">
        <div>New User?</div>
        <button className="signup-btn">SignUp</button>
      </div>
    </div>
  );
}
