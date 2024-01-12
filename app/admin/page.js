"use client";
import React, { useState } from "react";
import { navigate } from "@/actions";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangerUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const Onsignin = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    if (user.username == "admin" && user.password == "root") {
      console.log("Login success");
      navigate("/");
    } else {
      console.log("login failed");
    }
    // Add logic for form submission or any other actions
  };

  return (
    <div className="Admin">
      <div className="wrapper d-flex flex-column align-items-center justify-content-center vh-100">
        <form
          method="post"
          onSubmit={Onsignin}
          action="/submit-url"
          className="login-form p-4  bg-white shadow-lg  rounded"
          style={{ width: "300px" }}
        >
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
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
