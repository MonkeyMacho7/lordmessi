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
    </div>
  );
};

export default NotFound;
