// components/Dashboard.js

import React from "react";

const Dashboard = ({ selectedOption }) => {
  // Function to render content based on the selected option
  const renderContent = () => {
    switch (selectedOption) {
      case "option1":
        return <div>Content for Option 1</div>;
      case "option2":
        return <div>Content for Option 2</div>;
      // Add more cases for additional options
      default:
        return <div>Default Content</div>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default Dashboard;
