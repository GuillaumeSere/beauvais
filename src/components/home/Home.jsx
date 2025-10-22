import React, { useEffect, useState } from 'react';
import './home.css';
import Country from '../country/Country';

// ...existing code... (ancien tableau videoData)
// Remplacé par deux URLs de webcam configurables via REACT_APP_WEBCAM_URL_1 et REACT_APP_WEBCAM_URL_2
const WEBCAM_URLS = [
  process.env.REACT_APP_WEBCAM_URL_1 || 'https://www.skaping.com/beauvais/cathedrale-saint-pierre/video',
  process.env.REACT_APP_WEBCAM_URL_2 || 'https://www.skaping.com/beauvais/plan-d-eau-du-canada/live/',
    process.env.REACT_APP_WEBCAM_URL_3 || 'https://www.skaping.com/beauvais/place-jeanne-hachette/live',
];

const Home = () => {

    // Rotation entre les deux webcams toutes les 2 minutes
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex(i => (i + 1) % WEBCAM_URLS.length);
      }, 120000); // 2 minutes

      return () => clearInterval(interval);
    }, []);

    return (
        <>
      <section className="video-section">
        <div className="webcam-container" style={{position: 'relative', width: '100%',height:'100%', paddingTop: '56.25%'}}>
          <iframe
            key={activeIndex}
            title={`Webcam en direct ${activeIndex + 1}`}
            src={WEBCAM_URLS[activeIndex]}
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
