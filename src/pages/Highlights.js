import React from "react";
import "../App.css";

const videoData = [
  {
    title: "The Encara Messi",
    src: "https://www.youtube.com/embed/waETo-ZWCRw?si=4cn_uvi6gJuk5WTs"
  },
  {
    title: "The World Cup Triumph",
    src: "https://www.youtube.com/embed/ZmKy_fnRM_E?start=5"
  },
  {
    title: "The GOAT of Football",
    src: "https://youtu.be/G4wTERfoPfA?si=XPrL7LCRrCeOVgxg"
  }
];

const Highlights = () => {
  return (
    <div className="highlights">
      <h1>Enjoy...</h1>
      <p>Relive the greatest moments of Lionel Messi's career.</p>

      {videoData.map((video, index) => (
        <div className="video-section" key={index}>
          <h2 className="video-title">{video.title}</h2>
          <div className="video-container">
            <iframe
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
