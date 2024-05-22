// Events.js
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "@/app/components/eventCard";

const Events = () => {
  const [techEvents, setTechEvents] = useState([]);
  const [nonTechEvents, setNonTechEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const techResponse = await axios.get("/api/event/getEvents/tech");
        const nonTechResponse = await axios.get("/api/event/getEvents/nonTech");

        if (techResponse.data.status && nonTechResponse.data.status) {
          setTechEvents(techResponse.data.data);
          setNonTechEvents(nonTechResponse.data.data);
        } else {
          console.error("Failed to fetch events");
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        // Handle errors gracefully
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
    <div className="wrapper">
      <div className="technical">
        <h3>Technical</h3>
        <div className="container">
          <div className="row">
            {techEvents.length > 0 ? (
              techEvents.map((event) => (
                <EventCard key={event.event_id} event={event} />
              ))
            ) : (
              <p>No technical events found</p>
            )}
          </div>
        </div>
      </div>
      <div className="non-technical">
        <h3>Non-Technical</h3>
        <div className="container">
          <div className="row">
            {nonTechEvents.length > 0 ? (
              nonTechEvents.map((event) => (
                <EventCard key={event.event_id} event={event} />
              ))
            ) : (
              <p>No non-technical events found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
