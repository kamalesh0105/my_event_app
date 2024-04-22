"use client";
import React, { useState, useEffect } from "react";
import supabaseClient from "../config/supabaseClient";

const Test = () => {
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch session data when component mounts
    fetchSessionData();
  }, []);

  const fetchSessionData = async () => {
    try {
      const { data, error } = await supabaseClient.auth.getSession();

      const {
        data: { user },
      } = await supabaseClient.auth.getUser();
      if (error) {
        throw error;
      }
      setSessionData(data);
      setUser(user);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    setLoading(true);
    await fetchSessionData();
  };

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {sessionData && (
        <div>
          <p>Session Data:</p>
          <pre>{JSON.stringify(sessionData, null, 2)}</pre>
          <p>USER DATA:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
      <button
        className="btn btn-primary btn-lg"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "Fetching Session..." : "Fetch Session Data"}
      </button>
    </div>
  );
};

export default Test;
