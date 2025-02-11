import React from "react";
import "./App.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to Lord Messi</h1>
        <p className="subheading">The Greatest of All Time!</p>
        <img src="/assets/messi-goat.jpg" alt="Messi Goat" className="messi-img" />
      </header>

      {/* Introduction Section */}
      <section className="intro">
        <h2>Why Lionel Messi is the GOAT 🐐</h2>
        <p>
          Lionel Messi is widely regarded as one of the greatest footballers of all time. 
          With **8 Ballon d'Ors**, multiple Champions League victories, and an unforgettable 
          World Cup win, his legacy is unmatched.
        </p>
        <p>
          This website is dedicated to showcasing his legendary moments, live stats, and more.
        </p>
        <a href="/stats" className="cta-button">See His Live Stats</a>
      </section>

      {/* Quick Facts */}
      <section className="quick-facts">
        <h2>Messi's Achievements 📊</h2>
        <ul>
          <li>🏆 8x Ballon d'Or Winner</li>
          <li>⚽ All-time Top Scorer for Barcelona</li>
          <li>🌎 2022 FIFA World Cup Champion</li>
          <li>🥇 Most Goals in a Calendar Year (91)</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
