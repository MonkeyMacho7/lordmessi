import React, { useState, useEffect } from "react";
import errorImage from "../assets/notfound.png";

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="not-found">
      <h1 className={isVisible ? "visible" : "hidden"}>404 - Page Not Found</h1>
      <p>Let's try that again. This page doesn't even exist.</p>
      <img src={errorImage} alt="Error" />

	  <a 
        href="https://www.youtube.com/watch?v=CeGOII4t52M" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="youtube-link"
      >
        I think you should watch this to re-jog your memory.
      </a>
    </div>
  );
};

export default NotFound;
