import React, { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";
import webLogo from "../assets/webLogo.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Image from "../assets/image.svg";
import { doc, setDoc } from "firebase/firestore";

const RegisterComponent = () => {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Registered Successfully!");
      navigate('/')
    } catch (err) {
      console.log(err);
      toast.error("Cannot create Account!");
    }
  };

  const googleSignIn = () => {
    try {
      let response =  GoogleSignInAPI();
      console.log(response);
      toast.success("Registered Successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Cannot create Account!");
    }
  };

  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db,"users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
          });
        }
        );
        (error) => {
          setErr(true);
        }
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="login-wrapper">
      <img src={webLogo} className="webLogo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="auth-inputs">
            <input
              type="text"
              className="common-input"
              placeholder="Username"
            />
            <input
              type="email"
              className="common-input"
              placeholder="Email or Phone Number"
            />
            <input
              type="password"
              className="common-input"
              placeholder="Password (6 or more characters)"
            />
            <input
              style={{ display: "none" }}
              className="common-input"
              type="file"
              id="file"
            />
            <label htmlFor="file">
              <img src={Image} alt="" />
              <span>Add an Avatar </span>
            </label>
            <button
              onClick={register}
              className="login-btn"
            >
              Agree & Join
            </button>
          </div>
          {err && <span>Something went wrong...</span>}
        </form>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="login-wrapper-inner">
        <GoogleButton className="google-btn" onClick={googleSignIn} />
        <p className="go-to-signup">
          Already on WebWizardry? <span className="join-now" onClick={ () => navigate('/')} >Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterComponent;
