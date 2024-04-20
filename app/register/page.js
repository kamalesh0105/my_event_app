import React from "react";
import styles from "../styles/register.module.css";

const RegisterForm = () => {
  const wrapperStyles = {
    background: "transparent",
    border: "2px solid white",
    backdropFilter: "blur(50px)",
    color: "white",
    borderRadius: "10px",
    padding: "30px 40px",
    maxWidth: "800px", // Set maximum width for large screens
    width: "100%", // Take full width of the container
    margin: "0 auto", // Center horizontally
  };

  return (
    <div className={styles.container}>
      <div className="d-flex align-items-center justify-content-center">
        <div className="col g-3">
          <div className="card" style={wrapperStyles}>
            <div className="card-header">
              <h3 className="text-center">Event Registration</h3>
            </div>
            <div className="card-body">
              <form style={{ width: "500px  ", margin: "0 auto" }}>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control  text-white "
                    id="name"
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control  text-white "
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="eventNames">Event Names (JSON)</label>
                  <input
                    type="text"
                    className="form-control  text-white "
                    id="eventNames"
                    placeholder="Enter event names"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="text"
                    className="form-control  text-white "
                    id="mobile"
                    placeholder="Enter mobile number"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="collegeName">College Name</label>
                  <input
                    type="text"
                    className="form-control  text-white "
                    id="collegeName"
                    placeholder="Enter college name"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="registerNo">Register Number</label>
                  <input
                    type="text"
                    className="form-control  text-white "
                    id="registerNo"
                    placeholder="Enter register number"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="year">Year</label>
                  <input
                    type="text"
                    className="form-control  text-white "
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
  );
};
export default RegisterForm;
