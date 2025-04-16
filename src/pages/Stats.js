import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const Stats = () => {
  const [stats, setStats] = useState([]);
  const [allTimeStats, setAllTimeStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const seasonRes = await axios.get("https://gz0gp3ko1i.execute-api.us-east-2.amazonaws.com/prod/stats");
        const allTimeRes = await axios.get("https://gz0gp3ko1i.execute-api.us-east-2.amazonaws.com/prod/all-time");

        setStats(seasonRes.data);
        setAllTimeStats(allTimeRes.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError("Could not load messi stats.");
        setLoading(false);
      }
    };

    fetchStats();
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

      {allTimeStats && (
        <>
          <h1 className="stats-title" style={{ marginTop: "3rem" }}>Messi's All Time Stats</h1>
          <div className="stats-grid">
            <div className="stats-card">
              <p>Games Played: {allTimeStats.games_played}</p>
              <p>Goals: {allTimeStats.goals}</p>
              <p>Assists: {allTimeStats.assists}</p>
              <p>Trophies Won: {allTimeStats.trophies_won}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Stats;
