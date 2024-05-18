"use client";
import React, { useState } from "react";
import axios from "axios";

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });

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

    try {
      await axios.post("localhost:5000/events/add", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Event created successfully!");
      // Optionally, clear the form after successful submission
      setFormData({
        name: "",
        description: "",
        image: null,
      });
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event. Please try again later.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} className="mt-4">
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
    </div>
  );
};

export default EventForm;
