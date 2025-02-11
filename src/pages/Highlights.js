import React from "react";
import "../App.css";

const Highlights = () => {
  return (
    <div className="highlights">
      <h1>Enjoy...</h1>
      <p>Relive the greatest moments of Lionel Messi's career.</p>

	  <div className="video-container">
	  <iframe width="560" height="315" src="https://www.youtube.com/embed/waETo-ZWCRw?si=T66r7bE-3MOgCqLb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
    </div>
  );
};

export default Highlights;
