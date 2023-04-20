import React from "react";
import { useState } from "react";
import "./Login.css";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function SetnewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [ShowconfrimPassword, setShowconfrimPassword] = useState(false);
  return (
    <div className="signup">
      {/* set new password container */}
      <div className="signup-container">
        <img height={80} className="logo" src={logo} />

        <h1>Set New Password</h1>

        {/* text */}

        <p className="text-signup ">
          Your new password must be different to previously used passwords
        </p>

        {/* email */}

        <div className="div-log">
          <label className="title">Enter Password</label>
          <input
            className="input-log"
            minLength={8}
            type={ShowconfrimPassword ? "text" : "password"}
            placeholder="************"
          />
          <button
            className="buttona"
            onClick={() => setShowconfrimPassword(!ShowconfrimPassword)}
          >
            {/* eye icon  */}
            {ShowconfrimPassword ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </button>
          <label className="title-cp">Must be at least 8 character</label>
        </div>
        {/* password */}
        <div className="div-log">
          <label className="title">Confirm Password</label>
          <input
            className="input-log"
            minLength={8}
            type={showPassword ? "text" : "password"}
            placeholder="************"
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
        </div>

        <div className="div-log">
          <Link className="dec-none" to="/PasswordReset">
            <button className="button-log">Reset Password</button>
          </Link>
        </div>
        <div className="policy">
          <p className="text-reset">
            Back to{" "}
            <Link to="/login" className="dec-none">
              <span> Log In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SetnewPassword;
