"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "../../eventCard";

const home = () => {
  const [events, setEventsData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/event/getEvents/all"
        );
        const result = response.data;

        if (result.res) {
          setEventsData(result.data);
          console.log(result.data);
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
    <div className="container">
      <div className="row">
        {events.map((event) => (
          <EventCard key={event.event_id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default home;
