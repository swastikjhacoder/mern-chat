import React, { useState } from "react";
import logo from "../Icons/icon_x512.png";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const Login = ({ toggleForm }) => {
  const { background, color } = useSelector((state) => state.liveChat);
  return (
    <>
      <div className="login-container">
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
        <Button variant="contained" size="large">
          Login
        </Button>
        <p className="create-account">
          Don't have an Account?
          <Button
            variant="outlined"
            size="medium"
            onClick={() => toggleForm()}
            style={{ width: "150px", marginLeft:'10px' }}
          >
            Register
          </Button>
        </p>
      </div>
    </>
  );
};

const SignUp = ({ toggleForm }) => {
  const { background, color } = useSelector((state) => state.liveChat);
  return (
    <>
      <div className="login-container">
        <p>Register your Account</p>
        <div className="input-box">
          <input type="text" name="name" required="required" />
          <span>Name</span>
        </div>
        <div className="input-box">
          <input type="email" name="email" required="required" />
          <span>Email</span>
        </div>
        <div className="input-box">
          <input type="text" name="mobile" required="required" />
          <span>Mobile</span>
        </div>
        <div className="input-box">
          <input type="password" name="password" required="required" />
          <span>Password</span>
        </div>
        <div className="input-box">
          <input type="file" name="file" />
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
      <div className="right-sidebar-container">
        <div className="loaded-form">
          
        </div>
      </div>
    </div>
  );
};

export default Login_SignUp;
