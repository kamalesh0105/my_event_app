"use client";
import React, { useState, useEffect } from "react";
import { navigate } from "@/actions";
import axios from "axios";
import styles from "../../styles/admin.module.css";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

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
    <div className="Admin bg-black">
      <div className="wrapper d-flex flex-column align-items-center justify-content-center vh-100">
        <form
          method="post"
          onSubmit={Onsignin}
          action="/submit-url"
          className="login-form p-4 bg-black shadow-lg rounded"
          style={{
            maxWidth: "500px",
            width: "90%",
            border: "2px solid #fff",
            borderRadius: "10px",
          }}
        >
          <h2 className="text-center text-light mb-4">Login</h2>
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
          <div className="mb-4">
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
          <button
            type="submit"
            className={` btn btn-primary text-light `}
            style={{
              width: "100%",
              "@media (minWidth: 500px)": { width: "50%" },
            }}
          >
            Signin
          </button>
          <p className="pt-3 ">
            Don't have and Account ?{" "}
            <a href="signup" className={styles.cus_col}>
              Signup!
            </a>
          </p>
        </form>
        {loginStatus !== null && (
          <p>{loginStatus ? "Login success!" : "Login failed...Try Again"}</p>
        )}
      </div>
    </div>
  );
};

export default LoginForm;