"use client";
import Modal from "@/app/utils/modal";
import React, { useState, useEffect } from "react";
const Home = () => {
  const [showModal, setShowModal] = useState(true); // Set showModal to true initially

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Home Page</h1>
      {showModal && (
        <Modal
          title="Example Modal"
          content="This is the content of the modal."
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Home;
