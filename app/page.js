"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, title, content, usebutton }) => {
  const handleCloseModal = () => {
    onClose(); // Call the onClose function passed as a prop
  };

  return (
    <>
      {isOpen && (
        <div
          className="modal d-flex align-items-center justify-content-center"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-dark">{title}</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-dark">
                <p className="text-dark">{content}</p>
                <hr></hr>
                {usebutton && (
                  <div className="btns">
                    <button type="button" className="btn btn-primary m-3">
                      Contact Developer
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleCloseModal}
                    >
                      close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Home = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true); // Set showModal to true when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal by setting showModal to false
    router.push("/auth/login");
  };

  return (
    <div>
      <Modal
        isOpen={showModal}
        onClose={handleCloseModal} // Pass the handleCloseModal function as a prop
        title="Unbuilt "
        content="To be implemented by the respestive event organizing tech team"
        usebutton={true}
      />
    </div>
  );
};

export default Home;
