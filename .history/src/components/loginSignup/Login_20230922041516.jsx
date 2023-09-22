import React from 'react'

const Login = ({ toggleForm }) => {
  return (
    <>
      <div className="right-sidebar-container">
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
            Email
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

export default Login