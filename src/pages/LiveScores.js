import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const LiveScores = () => {
    const [pastMatches, setPastMatches] = useState([]);
    const [futureMatches, setFutureMatches] = useState([]);
    
    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const season = "2025"; 
        const teamId = "9568"; 
        const leagueId = "253"; 

        const fetchMatches = async () => {
            if (!apiKey) {
                console.error("API Key is missing");
                return;
            }

            try {
                const pastResponse = await axios.get(
                    `https://v3.football.api-sports.io/fixtures`,
                    {
                        params: {
                            season: season,
                            team: teamId,
                            league: leagueId,
                            last: 2,
                        },
                        headers: {
                            "x-apisports-key": apiKey,
                        },
                    }
                );

                console.log("Past Matches API Response:", pastResponse.data);
                setPastMatches(pastResponse.data.response || []);

                const futureResponse = await axios.get(
                    `https://v3.football.api-sports.io/fixtures`,
                    {
                        params: {
                            season: season,
                            team: teamId,
                            league: leagueId,
                            next: 3,
                        },
                        headers: {
                            "x-apisports-key": apiKey,
                        },
                    }
                );

                console.log("Future Matches API Response:", futureResponse.data);
                setFutureMatches(futureResponse.data.response || []);
            } catch (error) {
                console.error("Error fetching matches:", error);
            }
        };

        fetchMatches();
    }, []);

    return (
        <div className="live-scores">
            <h1>Messi's Matchday</h1>
            <p>Let's see what Messi has to offer...</p>

            <div className="match-container">
                <div className="past-matches">
                    <h2>Past Fixtures</h2>
                    {pastMatches.length > 0 ? (
                        <ul>
                            {pastMatches.map((match, index) => (
                                <li key={index}>
                                    <strong>{match.teams.home.name} {match.goals.home ?? "-"} - {match.goals.away ?? "-"} {match.teams.away.name}</strong>
                                    <br />
                                    <small>{new Date(match.fixture.date).toLocaleDateString()}</small>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No past matches found.</p>
                    )}
                </div>

                <div className="future-matches">
                    <h2>Future Fixtures</h2>
                    {futureMatches.length > 0 ? (
                        <ul>
                            {futureMatches.map((match, index) => (
                                <li key={index}>
                                    <strong>{match.teams.home.name} vs {match.teams.away.name}</strong>
                                    <br />
                                    <small>{new Date(match.fixture.date).toLocaleDateString()}</small>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No upcoming matches found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LiveScores;
