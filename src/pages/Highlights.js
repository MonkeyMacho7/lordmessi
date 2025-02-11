import React from "react";
import "../App.css";

const Highlights = () => {
  return (
    <div className="highlights">
      <h1>Enjoy...</h1>
      <p>Relive the greatest moments of Lionel Messi's career.</p>

	  <div className="video-container">
	  <iframe
          src="https://www.youtube.com/embed/waETo-ZWCRw?autoplay=1&mute=1&loop=1&playlist=waETo-ZWCRw"
          title="Messi Highlights"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
	</div>
	</div>
  );
};

export default Highlights;
