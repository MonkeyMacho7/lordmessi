import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import goatImage from "../assets/goat.png";

const Home = () => {
	const navigate = useNavigate(); 

	const [isHovered, setIsHovered] = useState(false); 
	const [buttonText, setButtonText] = useState("See His Live Stats");
	const [liveScoresText, setLiveScoresText] = useState("Live Scores"); 
  
	const handleStatsClick = () => {
	  setButtonText("Loading Stats...");
	  setTimeout(() => {
		setButtonText("See His Live Stats");
		navigate("/stats"); 
	  }, 2000);
	};
  
	const handleLiveScoresClick = () => {
	  setLiveScoresText("Loading Live Scores...");
	  setTimeout(() => {
		setLiveScoresText("Live Scores");
		navigate("/livescores"); 
	  }, 2000);
	};

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to Lord Messi</h1>
        <p className="subheading">The Greatest of All Time!</p>
        <img src={goatImage} alt="Messi Goat" className={`messi-img ${isHovered ? "glow" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}/>
      </header>

      {/* Introduction Section */}
      <section className="intro">
        <h2>Why Lionel Messi is the GOAT 🐐</h2>
        <p>
          Lionel Messi is widely regarded as one of the greatest footballers of all time. 
          With 8 Ballon d'Ors, multiple Champions League victories, and an unforgettable 
          World Cup win, his legacy is unmatched.
        </p>
        <p>
          This website is dedicated to showcasing his legendary moments, live stats, and more.
        </p>
        <div className="button-container">
    	<button className="cta-button" onClick={handleStatsClick} disabled={buttonText.includes("Loading")}>
      	{buttonText}
    	</button>

    	<button className="cta-button live-scores-btn" onClick={handleLiveScoresClick} disabled={liveScoresText.includes("Loading")}>
     	 {liveScoresText}
    		</button>
  		</div>
      </section>

      {/* Quick Facts */}
      <section className="quick-facts">
        <h2>Messi's Achievements </h2>
        <ul>
          <li> 8x Ballon d'Or Winner</li>
          <li> All-time Top Scorer for Barcelona</li>
          <li> 2022 FIFA World Cup Champion</li>
          <li> Most Goals in a Calendar Year (91)</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
