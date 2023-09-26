import React, { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";
import webLogo from "../assets/webLogo.png";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In Successfully!");
      navigate('/home')
    } catch (err) {
      console.log(err);
      toast.error("Please check your Credentials!");
    }
  };
  const googleSignIn = () => {
    try {
      let response =  GoogleSignInAPI();
      console.log(response);
      toast.success("Signed In Successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Please check your Credentials!");
    }
  };
  return (
    <div className="login-wrapper">
      <img src={webLogo} className="webLogo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone No."
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Enter your Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <hr class="hr-text" data-content="or" />
      <div className="login-wrapper-inner">
        <GoogleButton
          className="google-btn"
          onClick={googleSignIn}
        />
        <p className="go-to-signup">
          New to WebWizardry? <span className="join-now" onClick={ () => navigate('/register')}>Join now</span>
        </p>
      </div>
    </div>
  );
}
