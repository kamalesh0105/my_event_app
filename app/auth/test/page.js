// pages/events.js
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/event/getEvents"
        );
        const result = response.data;

        if (result.res) {
          setEvents(result.data);
        } else {
          console.error("Failed to fetch events");
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Events</h1>
      <pre>{JSON.stringify(events, null, 2)}</pre>
    </div>
  );
};

export default Events;
