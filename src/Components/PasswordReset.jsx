import React from "react";
import "./Login.css";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

function PasswordReset() {
  return (
    <div className="reset">
      {/* password reset container */}
      <div className="signup-container">
        <img height={80} className="logo" src={logo} />

        <h1>Password Reset</h1>
        <p className="text-signup">
          Your password has been successfully reset. Click continue below to log
          back in with your new password.
        </p>

        <div className="div-log">
          <button className="button-log">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
