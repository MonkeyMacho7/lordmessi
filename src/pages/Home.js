import React from 'react';
import goatImage from '../assets/goat.png';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Lord Messi</h1>
      <p>The Greatest Of All Time!</p>
      <img src={goatImage} alt="GOAT" />
    </div>
  );
};

export default Home;
