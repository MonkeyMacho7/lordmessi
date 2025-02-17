import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css"; 

const LiveScores = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      setError("");

      try {
        const options = {
          method: "GET",
          url: "https://v3.football.api-sports.io/fixtures",
          params: {
            team: "9568", 
            league: "253",  
            season: "2023",  
            last: "5",  
          },
          headers: {
            "x-apisports-key": "f032a5db1eca1fdf3b0e2fab251c5e40",
          },
        };

        const response = await axios.request(options);
        console.log("API Response:", response.data); // Debugging Line

        if (response.data.errors) {
          setError("Error fetching matches. Check API limits.");
          setLoading(false);
          return;
        }

        if (response.data.response.length === 0) {
          setError("No past matches found for 2023.");
        } else {
          setMatches(response.data.response);
        }
      } catch (error) {
        console.error("Error fetching match data:", error);
        setError("Failed to fetch match data.");
      }

      setLoading(false);
    };

    fetchMatches();
  }, []);

  return (
    <div className="live-scores">
      <h1>Live Scores</h1>
      <p>This will be my API.</p>

      {loading ? (
        <p>Loading matches...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="matches-container">
          {matches.map((match, index) => (
            <div key={index} className="match-card">
              <div className="teams">
                <img src={match.teams.home.logo} alt={match.teams.home.name} />
                <span>{match.teams.home.name}</span>
                <strong>{match.goals.home} - {match.goals.away}</strong>
                <span>{match.teams.away.name}</span>
                <img src={match.teams.away.logo} alt={match.teams.away.name} />
              </div>
              <p className="match-date">{new Date(match.fixture.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LiveScores;
