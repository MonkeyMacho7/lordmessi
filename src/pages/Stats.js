import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const Stats = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://3.144.172.68:8000/stats")
      .then((response) => {
        setStats(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching stats:", error);
        setError("Could not load messi stats.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="stats-loading">Loading stats...</p>;
  if (error) return <p className="stats-error">{error}</p>;

  return (
    <div className="stats-container">
      <h1 className="stats-title">Messi's Season Stats</h1>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stats-card">
            <h2>{stat.team} – {stat.season}</h2>
            <p>Matches: {stat.matches}</p>
            <p>Goals: {stat.goals}</p>
            <p>Assists: {stat.assists}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
