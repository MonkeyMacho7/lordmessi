import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const LiveScores = () => {
    const [pastMatches, setPastMatches] = useState([]);
    const [futureMatches, setFutureMatches] = useState([]);
    const apiKey = "f032a5db1eca1fdf3b0e2fab251c5e40"; // Replace with your valid API key
    const season = "2024"; // Most recent season
    const teamId = "9568";  // Inter Miami
    const leagueId = "253"; // MLS or relevant league

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                // Fetch last 2 past games
                const pastMatchesResponse = await axios.get(
                    `https://v3.football.api-sports.io/fixtures`,
                    {
                        params: {
                            season: season,
                            team: teamId,
                            league: leagueId,
                            last: 2, // Fetch the last 2 past games
                        },
                        headers: {
                            "x-apisports-key": apiKey,
                        },
                    }
                );

                // Fetch next 3 upcoming games
                const futureMatchesResponse = await axios.get(
                    `https://v3.football.api-sports.io/fixtures`,
                    {
                        params: {
                            season: season,
                            team: teamId,
                            league: leagueId,
                            next: 3, // Fetch the next 3 upcoming games
                        },
                        headers: {
                            "x-apisports-key": apiKey,
                        },
                    }
                );

                console.log("Past Matches API Response:", pastMatchesResponse.data);
                console.log("Future Matches API Response:", futureMatchesResponse.data);

                setPastMatches(pastMatchesResponse.data.response || []);
                setFutureMatches(futureMatchesResponse.data.response || []);

            } catch (error) {
                console.error("Error fetching matches:", error);
            }
        };

        fetchMatches();
    }, []);

    return (
        <div className="live-scores">
            {/* Live Scores Header */}
            <h1 className="live-scores-title">Live Scores</h1>
            <p className="live-scores-subtitle">Let's see what Messi has to offer...</p>

            {/* Fixtures Section */}
            <div className="fixtures-container">
                {/* Past Fixtures */}
                <div className="past-fixtures">
                    <h2>Past Fixtures</h2>
                    {pastMatches.length > 0 ? (
                        <ul>
                            {pastMatches.map((match, index) => (
                                <li key={index}>
                                    {match.teams.home.name} {match.goals.home ?? "-"} - {match.goals.away ?? "-"} {match.teams.away.name} <br />
                                    <small>{new Date(match.fixture.date).toLocaleDateString()}</small>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No recent matches found.</p>
                    )}
                </div>

                {/* Future Fixtures */}
                <div className="future-fixtures">
                    <h2>Future Fixtures</h2>
                    {futureMatches.length > 0 ? (
                        <ul>
                            {futureMatches.map((match, index) => (
                                <li key={index}>
                                    {match.teams.home.name} vs {match.teams.away.name} <br />
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
