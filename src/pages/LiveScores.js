import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const LiveScores = () => {
    const [matches, setMatches] = useState([]);
    const apiKey = "f032a5db1eca1fdf3b0e2fab251c5e40"; 
    const season = "2024"; 
    const teamId = "9568";  
    const leagueId = "253"; 

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const pastMatchesResponse = await axios.get(
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

                const futureMatchesResponse = await axios.get(
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

                console.log("Past Matches API Response:", pastMatchesResponse.data);
                console.log("Future Matches API Response:", futureMatchesResponse.data);

                
                const allMatches = [
                    ...(pastMatchesResponse.data.response || []),
                    ...(futureMatchesResponse.data.response || [])
                ];

                setMatches(allMatches);

            } catch (error) {
                console.error("Error fetching matches:", error);
            }
        };

        fetchMatches();
    }, []);

    return (
        <div className="live-scores">
            <h1>Live Scores</h1>
            <p>Let's see what Messi has to offer...</p>
            {matches.length > 0 ? (
                <ul>
                    {matches.map((match, index) => (
                        <li key={index}>
                            {match.teams.home.name} {match.goals.home} - {match.goals.away} {match.teams.away.name} <br />
                            <small>{match.fixture.date}</small>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No recent or upcoming matches found.</p>
            )}
        </div>
    );
};

export default LiveScores;
