"use client";
import React, { useState } from "react";
import { navigate } from "@/actions";
import axios from "axios";
import styles from "../../styles/admin.module.css";
const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [signupStatus, setSignupStatus] = useState(null);

  const onChangerUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmpass = (e) => {
    setconfirmpass(e.target.value);
  };

  const Onsignup = async (e) => {
    e.preventDefault();
    setPasswordMatch(password == confirmpass);
    if (!passwordMatch) {
      return;
    } else {
      try {
        const response = await axios.post("/api/auth/signup", {
          username,
          password,
        });

        if (response.status === 200 && response.data.success) {
          setSignupStatus(true);
          setTimeout(() => {
            setSignupStatus(null); // Clear the success message
            navigate("/auth/login");
          }, 1000);
        } else {
          console.log(response.data.message);
          setSignupStatus(false);
          setTimeout(() => {
            setSignupStatus(null); // Clear the success message
            navigate("/auth/signup");
          }, 3000);
        }
      } catch (error) {
        setSignupStatus(false);
        setTimeout(() => {
          setSignupStatus(null); // Clear the success message
          navigate("/auth/signup");
        }, 1000);
        console.log("Error While Signin: " + error);
      }
    }
  };

  return (
    <div className="Admin bg-black">
      <div className="wrapper d-flex flex-column align-items-center justify-content-center vh-100">
        <form
          method="post"
          onSubmit={Onsignup}
          action="/submit-url"
          className="login-form p-4 bg-black shadow-lg rounded"
          style={{
            maxWidth: "500px",
            width: "90%",
            border: "2px solid #fff",
            borderRadius: "10px",
          }}
        >
          <h2 className="text-center text-light mb-4">Signup</h2>
          <div className="mb-3">
            <label
              htmlFor="username"
              className="form-label font-weight-bold text-light"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              required
              onChange={onChangerUsername}
              className="form-control"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label font-weight-bold text-light"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              required
              onChange={onChangePassword}
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="form-label font-weight-bold text-light"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmpass}
              required
              onChange={onChangeConfirmpass}
              className="form-control"
              placeholder="Confirm your password"
            />
          </div>
          {!passwordMatch && (
            <small className="text-danger ">Password Does not match</small>
          )}
          <button
            type="submit"
            className={` btn btn-success text-light mt-3 `}
            style={{
              width: "100%",
              "@media (minWidth: 500px)": { width: "50%" },
            }}
          >
            Signup
          </button>
          <p className="pt-3 ">
            Already Registered ?{" "}
            <a href="login" className={styles.cus_col}>
              Signin!
            </a>
          </p>
          {signupStatus !== null && (
            <p className="text-primary">
              {signupStatus ? "Signup Success" : "Signup Failed!Try Again"}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
