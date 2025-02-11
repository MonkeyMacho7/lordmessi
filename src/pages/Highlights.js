import React from "react";
import "../App.css";

const Highlights = () => {
  return (
    <div className="highlights">
      <h1>Enjoy...</h1>
      <p>Relive the greatest moments of Lionel Messi's career.</p>

	  <div className="video-container">
	  <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/G4wTERfoPfA?autoplay=1&mute=1&loop=1&playlist=G4wTERfoPfA"
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
