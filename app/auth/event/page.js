// components/EventForm.js
"use client";
import React, { useState } from "react";
import axios from "axios";
import CustomToast from "@/app/components/Toast";

const EventForm = () => {
  const toastTitle = "EventMania";
  const [toastMessage, setToastMessage] = useState("");
  const [formData, setFormData] = useState({
    event_id: "",
    name: "",
    description: "",
    image: null,
  });

  const [showToast, setShowToast] = useState(false);
  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Automatically hide the toast after 3 seconds
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("event_id", formData.event_id);

    try {
      const response = await axios.post(
        "http://localhost:5000/event/add",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.res) {
        // Event creation successful
        setToastMessage(response.data.status); // Display success message
      } else {
        // Event creation failed
        setToastMessage(response.data.status); // Display error message
      }
      handleShowToast();

      // Clear the form after successful or failed submission
      setFormData({
        event_id: "",
        name: "",
        description: "",
        image: null,
      });
    } catch (error) {
      console.error("Error creating event:", error);
      setToastMessage("Failed to create event. Please try again later.");
      handleShowToast();
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="event_id" className="form-label">
            Event ID:
          </label>
          <input
            type="text"
            id="event_id"
            name="event_id"
            value={formData.event_id}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Event Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Event
        </button>
      </form>
      <CustomToast
        show={showToast}
        setShow={setShowToast}
        title={toastTitle}
        message={toastMessage}
      />
    </div>
  );
};

export default EventForm;
