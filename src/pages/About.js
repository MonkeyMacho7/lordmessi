import React from 'react';
import greatestImage from '../assets/greatest.png';
import "../App.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Lord Messi</h1>
      <p>This page is dedicated to Lionel Messi, the greatest footballer in history.</p>
      <img src={greatestImage} alt="Greatest Player" />

	  <section className="personal-story">
        <h2>My Journey as a Messi Fan ❤️💙</h2>
        <p>
          I have been a devoted fan of Lionel Messi since **2007**. Growing up, I watched all of his games—
          every goal, every assist, every magical moment. Whether it was his breathtaking dribbles, 
          historic wins, or heartbreaking losses, I followed every step of his career. 
        </p>
        <p>
          Watching Messi dominate football has been one of the greatest joys of my life. From his early days at 
          **Barcelona**, to lifting the **World Cup** with Argentina, his journey has inspired me in so many ways.
        </p>
      </section>
    </div>
  );
};

export default About;
