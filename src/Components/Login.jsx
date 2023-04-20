import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="reset">
      {/* Login container */}
      <div className="signup-container">
        <img height={80} className="logo" src={logo} />
        {/* heading */}
        <h1>Welcome Back</h1>
        <div className="div-log">
          <label className="title">Email Address</label>
          <input className="input-log" placeholder="Enter email address" />
        </div>
        <div className="div-log">
          <label className="title">Password</label>
          <input
            className="input-log"
            minLength={8}
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
          />
          <button
            className="buttona"
            onClick={() => setShowPassword(!showPassword)}
          >
            {/* eye icon */}
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </button>
          {/* forget password link */}
          <Link to="/forget" className="dec-none">
            <label className=" forget">Forgot Password ?</label>
          </Link>
        </div>

        <div className="div-log">
          <button className="button-log">Log In</button>
        </div>
        <div className="policy">
          <p className="text-login">
            Don't have an Account ?{" "}
            <Link to="/signup" className="dec-none">
              <span> Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
