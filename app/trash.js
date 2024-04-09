import React from "react";
import styles from "../styles/register.module.css";

const RegisterForm = () => {
  return (
    <div className={styles.regpage}>
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-6">
            <div className="wrapper">
              <div className="card">
                <div
                  className="card-header"
                  // style={{
                  //   backgroundColor: "rgba(50, 66, 91, 0.5)",
                  //   color: "#2B747B",
                  // }}
                >
                  <h3 className="text-center">Registration Form</h3>
                </div>
                <div
                  className="card-body"
                  // style={{
                  //   backgroundColor: "rgba(50, 66, 91, 0.5)",
                  //   color: "#fff",
                  // }}
                >
                  <form>
                    <div className="form-group">
                      <div className="form-group ">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                        />
                      </div>
                      <label htmlFor="eventNames">Event Names (JSON)</label>
                      <input
                        type="text"
                        className="form-control"
                        id="eventNames"
                        placeholder="Enter event names"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobile">Mobile</label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        placeholder="Enter mobile number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="collegeName">College Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="collegeName"
                        placeholder="Enter college name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="registerNo">Register Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="registerNo"
                        placeholder="Enter register number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="year">Year</label>
                      <input
                        type="text"
                        className="form-control"
                        id="year"
                        placeholder="Enter year"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
<div className="wrapper" style={wrapperStyles}>
  <form action="">
    <h1>Login</h1>
    <div className="input-box">
      <input type="text" placeholder="Username" required></input>
    </div>
    <div className="input-box">
      <input type="password" placeholder="Password" required></input>
    </div>
    <div className="remember-forgot">
      <label>
        <input type="checkbox" />
        Remember me
      </label>
      <a href="#">Forgot password ?</a>
    </div>
    <button type="submit" className="btn">
      Login
    </button>

    <div className="register-link">
      <p>
        Don't have an account?<a href="#">Register</a>
      </p>
    </div>
  </form>
</div>;
