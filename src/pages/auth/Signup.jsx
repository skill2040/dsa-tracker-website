// Signup Component
import React, { useRef, useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db, auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import "./Signup.css";
import { MdAlternateEmail } from "react-icons/md";
import { BiRename } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

const Signup = ({ toggleSignupModal }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      const { user } = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );
      await addDoc(collection(db, "users"), {
        userId: user.uid,
        email: emailRef.current.value,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
      });
      navigate("/");
    } catch (error) {
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { user } = result;
      await addDoc(collection(db, "users"), {
        userId: user.uid,
        email: user.email,
        name: user.displayName,
        phone: user.phoneNumber,
      });
      navigate("/");
    } catch (error) {
      setError("Failed to sign up with Google");
    }
  };



  return (
    <div className="outer-container-signup">
      <div className="inner-container-signup">
        <div className="signup-component-heading-container">
          <h2 className="signup-component-heading">
            Sign Up
            <IoIosCloseCircle
              className="signup-component-close-mark"
              onClick={toggleSignupModal}
            />
          </h2>
        </div>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="signup-component-label-and-input-container">
            <label className="signup-component-label">Email</label>
            <div className="signup-component-input-container">
              <div className="signup-component-input-icon-wrapper">
                <MdAlternateEmail className="signup-component-input-icon" />
              </div>
              <input
                className="signup-component-input"
                type="email"
                ref={emailRef}
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="signup-component-label-and-input-container">
            <label className="signup-component-label">Name</label>
            <div className="signup-component-input-container">
              <div className="signup-component-input-icon-wrapper">
                <BiRename className="signup-component-input-icon" />
              </div>
              <input
                className="signup-component-input"
                type="text"
                ref={nameRef}
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="signup-component-label-and-input-container">
            <label className="signup-component-label">Phone Number</label>
            <div className="signup-component-input-container">
              <div className="signup-component-input-icon-wrapper">
                <FaPhoneAlt className="signup-component-input-icon-phone" />
              </div>
              <input
                className="signup-component-input"
                type="tel"
                ref={phoneRef}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
          <div className="signup-component-label-and-input-container">
            <label className="signup-component-label">Password</label>
            <div className="signup-component-input-container">
              <div className="signup-component-input-icon-wrapper">
                <IoLockClosed className="signup-component-input-icon" />
              </div>
              <input
                className="signup-component-input"
                type="password"
                ref={passwordRef}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div className="signup-component-label-and-input-container">
            <label className="signup-component-label">Confirm Password</label>
            <div className="signup-component-input-container">
              <div className="signup-component-input-icon-wrapper">
                <IoLockClosed className="signup-component-input-icon" />
              </div>
              <input
                className="signup-component-input"
                type="password"
                ref={confirmPasswordRef}
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>
          <div className="signup-component-signup-button-container">
            <button
              disabled={loading}
              type="submit"
              className="signup-component-signup-button"
              alt="Signup"
            >
              <i>s</i>
              <i>i</i>
              <i>g</i>
              <i>n</i>
              <i>u</i>
              <i>p</i>
            </button>
          </div>
          <div className="signup-component-or-description"> OR </div>
          <div className="signup-component-google-button-container">
            <button
              onClick={handleGoogleSignUp}
              className="signup-component-google-button"
              alt="Sign Up with Google"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 262"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                ></path>
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                ></path>
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                ></path>
              </svg>
              Continue with Google
            </button>
          </div>
        </form>
        <div className="signup-component-login-redirect-description">
          Already have an account?{" "}
          <a href="/login" className="signup-component-login-redirect">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
