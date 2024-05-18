"use client";
import { useEffect, useState } from "react";
import Session from "./session.class";

const UseAuth = () => {
  const [isLoading, SetisLoading] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      const isLoggedIn = await Session.isLoggedIn();
      if (!isLoggedIn) {
        window.location.href = "/auth/login";
      } else {
        SetisLoading(false);
      }
    };
    checkAuth();
  }, []);
  return isLoading;
};

export default UseAuth;
