// app/components/LoginForm.js
"use client";
import React, { useState } from "react";
import { navigate } from "@/actions";
import axios from "axios";
import styles from "../styles/admin.module.css";

const LoginForm = () => {
  const wrapperStyles = {
    background: "transparent",
    border: "2px solid white",
    backdropFilter: "blur(90px) !important",
    color: "#fff",
    borderRadius: "10px",
    padding: "30px 40px",
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);

  const onChangerUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const Onsignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/adminlogin", {
        username,
        password,
      });

      if (response.status === 200 && response.data.success) {
        setLoginStatus(true);
        setTimeout(() => {
          setLoginStatus(null); // Clear the success message
          navigate("/admin/dashboard/home");
        }, 1000);
      } else {
        console.log(response.data.message);
        setLoginStatus(false);
        setTimeout(() => {
          setLoginStatus(null); // Clear the success message
          navigate("/admin");
        }, 1000);
      }
    } catch (error) {
      setLoginStatus(false);
      setTimeout(() => {
        setLoginStatus(null); // Clear the success message
        navigate("/admin");
      }, 1000);
      console.log("Error While Signin: " + error);
    }
  };

  return (
    <div className={styles.container}>
      <div className="wrapper d-flex flex-column align-items-center justify-content-center vh-100">
        <form
          method="post"
          onSubmit={Onsignin}
          action="/submit-url"
          className="login-form p-4  rounded"
          style={{
            width: "500px",
          }}
        >
          <div className="wrap" style={wrapperStyles}>
            <h2 className="text-center text-dark mb-4">Login</h2>
            <div className="mb-2  ">
              <label htmlFor="username" className="form-label font-weight-bold">
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
              <label htmlFor="password" className="form-label font-weight-bold">
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
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </div>
        </form>

        {loginStatus !== null && (
          <p>{loginStatus ? "Login success!" : "Login failed...Try Again"}</p>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
