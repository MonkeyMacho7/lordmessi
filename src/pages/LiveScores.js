import React, { useEffect, useState } from "react";
import axios from "axios"; 
import "../App.css";

const API_KEY = "f032a5db1eca1fdf3b0e2fab251c5e40"; 
const TEAM_ID = 499; 
const LEAGUE_ID = 253; 
const SEASON = 2024; 

const LiveScores = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get("https://v3.football.api-sports.io/fixtures", {
          headers: { "x-apisports-key": API_KEY },
          params: {
            team: TEAM_ID,
            league: LEAGUE_ID,
            season: SEASON
          },
        });

        setMatches(response.data.response);
      } catch (error) {
        console.error("Error fetching live scores:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
    const interval = setInterval(fetchMatches, 30000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-scores">
      <h1>Live Scores</h1>
      <p>This will be my API.</p>

      {loading ? (
        <p>Loading live scores...</p>
      ) : (
        <div className="matches-container">
          {matches.length === 0 ? (
            <p>No upcoming or live matches found.</p>
          ) : (
            matches.map((match) => (
              <div key={match.fixture.id} className="match-card">
                <h3>{match.teams.home.name} vs {match.teams.away.name}</h3>
                <p>📅 {new Date(match.fixture.date).toLocaleString()}</p>
                <p>🏆 {match.league.name}</p>
                <p>📍 {match.fixture.venue.name}</p>
                <p>
                  {match.fixture.status.short === "FT"
                    ? `Final Score: ${match.goals.home} - ${match.goals.away}`
                    : match.fixture.status.short === "LIVE"
                    ? `🔴 Live: ${match.goals.home} - ${match.goals.away}`
                    : "Upcoming Match"}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default LiveScores;
