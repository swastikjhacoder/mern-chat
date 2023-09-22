import React, { useState } from 'react'
import logo from "../Icons/icon_x512.png";

const Login = ({ toggleForm }) => {
  return (
    <>
      <div className="login-box">
        <p>Login to your Account</p>
        <div className="input-box">
          <input
            type="text"
            name="name"
            required="required"
          />
          <span>Email / Mobile</span>
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            required="required"
          />
          <span>Password</span>
        </div>
        <p className="create-account">
          Don't have an Account?
          <button onClick={() => toggleForm()}>SignUp</button>
        </p>
      </div>
    </>
  );
};

const SignUp = ({ toggleForm }) => {
  return (
    <>
      <div className="signUp-container">
        <div className="signUp">
          <p>Register your Account</p>
          <div className="input-box">
            <div className="input-box">
              <input
                type="text"
                name="name"
                required="required"
                style={{ border: `1px solid ${color}`, color: color }}
              />
              <span
                style={{
                  color: color,
                  border: `1px solid ${color}`,
                  background: background,
                }}
              >
                Name
              </span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-box">
              <input
                type="email"
                name="email"
                required="required"
                style={{ border: `1px solid ${color}`, color: color }}
              />
              <span
                style={{
                  color: color,
                  border: `1px solid ${color}`,
                  background: background,
                }}
              >
                Email
              </span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-box">
              <input
                type="text"
                name="mobile"
                required="required"
                style={{ border: `1px solid ${color}`, color: color }}
              />
              <span
                style={{
                  color: color,
                  border: `1px solid ${color}`,
                  background: background,
                }}
              >
                Mobile
              </span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-box">
              <input
                type="password"
                name="password"
                required="required"
                style={{ border: `1px solid ${color}`, color: color }}
              />
              <span
                style={{
                  color: color,
                  border: `1px solid ${color}`,
                  background: background,
                }}
              >
                Password
              </span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-box">
              <input
                type="file"
                name="profile"
                required="required"
                style={{ border: `1px solid ${color}`, color: color }}
              />
              <span
                style={{
                  color: color,
                  border: `1px solid ${color}`,
                  background: background,
                }}
              >
                Profile Picture
              </span>
            </div>
          </div>
          <Button variant="contained" size="large" style={{ width: "150px" }}>
            Register
          </Button>
        </div>
        <p className="create-account">
          Already have an Account?
          <Button
            variant="outlined"
            style={{ marginLeft: "10px" }}
            onClick={toggleForm()}
          >
            Register
          </Button>
        </p>
      </div>
    </>
  );
};

const Login_SignUp = () => {
  return (
    <>
    
    </>
  );
}

export default Login_SignUp