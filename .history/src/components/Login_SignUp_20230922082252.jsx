import React, { useState } from 'react';
import logo from "../Icons/icon_x512.png";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const Login = ({ toggleForm }) => {
  const { background, color } = useSelector((state) => state.liveChat);
  return (
    <>
      <div className="login-box">
        <p>Login to your Account</p>
        <div className="input-box">
          <input
            type="name"
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
        <p className="create-account">
          Don't have an Account?
          <button onClick={() => toggleForm()}>SignUp</button>
        </p>
      </div>
    </>
  );
};

const SignUp = ({ toggleForm }) => {
  const { background, color } = useSelector((state) => state.liveChat);
  return (
    <>
      <div className="login-box">
        <p >Register your Account</p>
        <div className="input-box">
          <input
            type="text"
            name="name"
            required="required"
          />
          <span>Name</span>
        </div>
        <div className="input-box">
          <input
            type="email"
            name="email"
            required="required"
          />
          <span>Email</span>
        </div>
        <div className="input-box">
          <input
            type="text"
            name="mobile"
            required="required"
          />
          <span>Mobile</span>
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            required="required"
          />
          <span>Password</span>
        </div>
        <div className="input-box">
          <input type="file" name="file"  />
          <span>Profile Picture</span>
        </div>
        <p className="create-account">
          Already have an Account?
          <button onClick={() => toggleForm()}>Login</button>
        </p>
      </div>
    </>
  );
};

const Login_SignUp = () => {
  const [loginLoaded, setLoginLoaded] = useState(true);
  const toggleForm = () => {
    setLoginLoaded(!loginLoaded);
  };
  return (
    <div className="container">
      <div className="image-box">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-box">
        {loginLoaded === false ? (
          <SignUp toggleForm={toggleForm} />
        ) : (
          <Login toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default Login_SignUp