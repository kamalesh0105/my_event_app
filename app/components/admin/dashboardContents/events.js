"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const home = () => {
  const [events, setEventsData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/event/getEvents"
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
          <div key={event.event_id} className="col-md-4 mb-4">
            <div
              className="card event-card"
              style={{ height: "300px", margin: "20px" }}
            >
              <img
                src={event.public_url}
                className="card-img-top"
                alt={event.name}
              />
              <div className="card-body">
                <h5 className="card-title text-dark ">{event.name}</h5>
                <p className="card-text description text-dark ">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default home;
