import React from 'react';
import greatestImage from '../assets/greatest.png';

const About = () => {
  return (
    <div className="about">
      <h1>About Lord Messi</h1>
      <p>This page is dedicated to Lionel Messi, the greatest footballer in history.</p>
      <img src={greatestImage} alt="Greatest Player" />
    </div>
  );
};

export default About;
