import React, { useEffect, useState } from 'react';
import './home.css';
import Country from '../country/Country';

// ...existing code... (ancien tableau videoData)
// Remplacé par une URL de webcam configurable via REACT_APP_WEBCAM_URL
const WEBCAM_URL = process.env.REACT_APP_WEBCAM_URL || 'https://www.skaping.com/beauvais/place-jeanne-hachette/live';

const Home = () => {

    // La rotation de vidéos locales est désactivée : nous affichons une webcam en direct

    return (
        <>
      <section className="video-section">
        <div className="webcam-container" style={{position: 'relative', width: '100%', paddingTop: '56.25%'}}>
          <iframe
            title="Webcam en direct"
            src={WEBCAM_URL}
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}}
            allow="camera; microphone; fullscreen; autoplay; encrypted-media"
            loading="lazy"
          />
        </div>
        <div className="overlay-container">
        </div>
      </section>
          <Country />
      </>
    )

};

export default Home;
