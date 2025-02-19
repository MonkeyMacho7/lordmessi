import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const LiveScores = () => {
    const [pastMatches, setPastMatches] = useState([]);
    const [futureMatches, setFutureMatches] = useState([]);
    const apiKey = "f032a5db1eca1fdf3b0e2fab251c5e40";
    const season = "2025"; 
    const teamId = "9568";  
    const leagueId = "253"; 

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const pastResponse = await axios.get(
					`https://v3.football.api-sports.io/fixtures`,
					{
						params: {
							season: "2025",
							team: "9568", 
							league: "253",
							last: "2", 
						},
						headers: {
							"x-apisports-key": apiKey,
						},
					}
				);
				console.log("Past Matches API Response:", pastResponse.data);
				

                const futureResponse = await axios.get(
					`https://v3.football.api-sports.io/fixtures`,
					{
						params: {
							season: "2025", 
							team: "9568",
							league: "253",
							next: "3",  
						},
						headers: {
							"x-apisports-key": apiKey,
						},
					}
				);
				console.log("Future Matches API Response:", futureResponse.data);
				
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
                					<strong>{match.teams.home.name} {match.goals.home ?? "-"} - {match.goals.away ?? "-"} {match.teams.away.name}</strong>
                					<br />
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
