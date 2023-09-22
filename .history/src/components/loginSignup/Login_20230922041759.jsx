import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

const Login = ( { toggleForm } ) =>
{
  const navigate = useNavigate();
  const { color, background } = useSelector((state) => state.liveChat);
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
            Email/ Mobile
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
          <NavLink to
        </p>
      </div>
    </>
  );
};

export default Login;
