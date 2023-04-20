import React from "react";
import "./Reset.css";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

function ResetLink() {
  return (
    <div className="reset">
      {/* Login container */}
      <div className="reset-container">
        <img height={80} className="logo" src={logo} />

        <h1>Check Your Email</h1>
        <p className="text-signup log">
          We Sent Password Resend Link to{" "}
          <span className="mail"> Johndoe@gmail.com</span>
        </p>

        <div className="policy">
          <p className="text-reset">
            Check Recieve Email Link ?{" "}
            <Link to="/SetnewPassword" className="dec-none">
              <span> Check Link</span>
            </Link>
          </p>
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

export default ResetLink;
