import React, { useState } from "react";
import "./Signup.css";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Signup() {
  // seen unseen password

  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);

  //form inputs

  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [OrganizationType, setOrganizationType] = useState("");
  const [OrganizationName, setOrganizationName] = useState("");
  const [Country, setCountry] = useState("");
  const [Role, setRole] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [TeleNumber, setTeleNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // check email is avlid or not
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(event.target.value.indexOf("@") !== -1);
  };

  // check the data is correct or not

  const handleClick = () => {
    if (Fname === "") {
      alert("Please Enter First Name !");
    } else if (Lname === "") {
      alert("Please Enter Last Name !");
    } else if (OrganizationType === "") {
      alert("Please Enter Organization Type !");
    } else if (OrganizationName === "") {
      alert("Please Enter Organization Name !");
    } else if (Country === "") {
      alert("Please Enter Country!");
    } else if (Role === "") {
      alert("Please Enter Role!");
    } else if (Email === "") {
      alert("Please Enter Email !");
    } else if (!isValidEmail) {
      alert("Please Enter Correct Email !");
    } else if (TeleNumber === "") {
      alert("Please Enter Telephone Number !");
    } else if (isChecked !== true) {
      alert("Accept the Term !");
    } else if (Password !== ConfirmPassword) {
      alert("Password Doesn't Match !");
    } else if (Password === "") {
      alert("Please Enter Password!");
    } else if (ConfirmPassword === "") {
      alert("Please Enter Confirm Password !");
    } else {
      alert("Succesfully Submited");
    }
  };

  return (
    <div className="signup">
      {/* signup container */}
      <div className="signup-container">
        <img height={80} className="logo" src={logo} />
        {/* sign up heading */}
        <h1>Create Your Account</h1>
        {/* sign up text */}
        <p className="text-signup log">
          Once you create your account, you will have a 7-day free trial to use
          Climate Finance Copilot and we will notify you once the trial expires.
        </p>
        {/* sign up form */}
        <div>
          <div className="div-sub">
            <label className="title">First Name</label>
            <input
              className="input"
              value={Fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="John"
            />
          </div>
          <div className="div-sub">
            <label className="title">Last Name</label>
            <input
              className="input"
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Smith"
            />
          </div>
          <div className="div-sub">
            <label className="title">Organization Type</label>
            <input
              className="input"
              value={OrganizationType}
              onChange={(e) => setOrganizationType(e.target.value)}
              placeholder="Select"
            />
          </div>
          <div className="div-sub">
            <label className="title">Organization Name</label>
            <input
              className="input"
              value={OrganizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              placeholder="Green Energy"
            />
          </div>
          <div className="div-sub">
            <label className="title">Role</label>
            <input
              className="input"
              value={Role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Founder"
            />
          </div>
          <div className="div-sub">
            <label className="title">Country</label>
            <input
              className="input"
              value={Country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="USA"
            />
          </div>
          <div className="div-sub">
            <label className="title">Email Address</label>
            <input
              className="input"
              value={Email}
              onChange={handleEmailChange}
              type="email"
              placeholder="Johnsmith@gmail.com"
            />
          </div>
          <div className="div-sub">
            <label className="title">Password</label>
            <input
              className="input"
              minLength={8}
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <button
              className="buttona"
              onClick={() => setShowPassword(!showPassword)}
            >
              {/* eye icon  */}
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </button>
            <label className="title-cp">Must be at least 8 character</label>
          </div>

          <div className="div-sub">
            <label className="title">Confirm Password</label>
            <input
              className="input"
              minLength={8}
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={showcPassword ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <button
              className="buttona"
              onClick={() => setShowcPassword(!showcPassword)}
            ></button>
            <label className="title-cp">Must be at least 8 character</label>
          </div>
          <div className="div-sub">
            <label className="title">Telephone Number</label>
            <input
              className="input"
              value={TeleNumber}
              onChange={(e) => setTeleNumber(e.target.value)}
              type="number"
              placeholder="1-854-896-3214-65"
            />
          </div>
          {/* terms and conditions */}
          <div className="policy">
            <input
              className="input-radio"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              type="checkbox"
            />
            <p className="text-policy">
              I accept the <span>Terms</span> & <span> Privacy Policy</span>{" "}
            </p>
          </div>
          <div className="div-sub">
            <button className="button" onClick={handleClick}>
              Sign Up
            </button>
            {/*   */}
            {/* disabled={isButtonDisabled} className={`btn ${isButtonDisabled ? 'btn-disabled' : 'button'}`} */}
          </div>

          <div className="policy">
            <p className="text-login">
              Already have an Account ?{" "}
              <Link to="/Login" className="dec-none">
                <span>Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
