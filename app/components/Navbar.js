"use client";
// import { logoutsession } from "../api/auth/logout/route";
import Session from "@/app/includes/session.class";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [logout, setLogout] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loggedIn = await Session.isLoggedIn();
        setIsLoggedIn(loggedIn);
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);
  const handleLogout = async () => {
    console.log("Heeloo");
    try {
      setLogout(true);
      const { redirect } = await Session.logoutSession();
      if (redirect.status) {
        window.location.href = redirect.destination;
      }
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setLogout(false);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark justify-content-center pt-3 border-bottom border-dark ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <div className="d-flex align-items-center">
          <div className="img ">
            <a className="navbar-brand" href="/">
              <img
                src="/logo.png"
                style={{ width: "40px", height: "auto" }}
                alt="Logo"
              />
            </a>
          </div>
        </div>
        <ul className="navbar-nav ">
          <li className="nav-item px-3">
            <a href="/" className="nav-link active">
              Home
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/events" className="nav-link">
              Events
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/gallery" className="nav-link">
              Gallery
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item px-0">
            <i
              className="far fa-search nav-link"
              style={{ color: "white" }}
            ></i>
          </li>
          <li className="nav-item px-0">
            <button className="btn btn-outline-secondary transparent-btn text-light">
              <a href="/register"> Register Now!</a>
            </button>
          </li>
          <li className="nav-item px-4">
            <button className="btn btn-outline-secondary transparent-btn text-light">
              <a href="/auth/login">Dashboard</a>
            </button>
          </li>
          {isLoggedIn && (
            <li className="nav-item px-0">
              <button
                className="btn btn-outline-secondary transparent-btn text-light"
                onClick={handleLogout}
              >
                <a>Logout</a>
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
