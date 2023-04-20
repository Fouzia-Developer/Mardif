import React from "react";
import "./Login.css";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Forget() {
  return (
    <div className="reset">
      {/* forget container */}
      <div className="signup-container">
        <img height={80} className="logo" src={logo} />
        {/* forget heading */}
        <h1>Forgot Password?</h1>
        <p className="text-signup log">
          Don’t sweat it, we will email you reset instructions to set a new
          password.
        </p>

        <div className="div-log">
          <label className="title">Email Address</label>
          <input className="input-log" placeholder="Johnsteve@gmail.com" />
        </div>
        {/* reset password container */}
        <div className="div-log">
          <Link to="/reset" className="dec-none">
            {" "}
            <button className="button-log"> Continue </button>
          </Link>
        </div>
        <div className="policy">
          <p className="text-login">
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

export default Forget;
