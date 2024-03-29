"use client";
import Modal from "@/app/utils/modal";
import React, { useState, useEffect } from "react";
const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    handleShowModal(); // Show the modal when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <h1>Home Page</h1>
      {showModal && (
        <Modal
          title="Example Modal"
          content="This is the content of the modal."
          onHide={handleHideModal}
        />
      )}
    </div>
  );
};

export default Home;
