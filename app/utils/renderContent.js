import React from "react";
import Home from "./home";

const renderContent = (router) => {
  switch (router.pathname) {
    case "/dashboard":
      return <Home />;
    // Add more cases for other routes
    default:
      return null;
  }
};

export default renderContent;
