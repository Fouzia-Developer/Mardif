import React from "react";
import "./Splash.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

// first screen
function Splash() {
  return (
    <div className="login-body">
      {/* logo on login screen  */}
      <img height={70} src={logo} />

      {/*  heading login page*/}

      <h1 className="heading">Welcome to Climate Finance Copilot</h1>
      <div style={{ marginTop: "-3vh" }}>
        <p>
          Experience a New and Transformational Way to Win <br></br>
          Funding For Climate Adaptation/Mitigation projects.
        </p>
      </div>
      {/* button section */}
      <div className="btn-login">
        <Link className="dec-none" to="/Login">
          <button className="btn">Log In</button>
        </Link>
        <Link className="dec-none" to="/signup">
          <button className="btn"> Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Splash;
