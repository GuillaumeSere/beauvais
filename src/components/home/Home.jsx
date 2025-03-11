import React, { useEffect, useState } from 'react';
import './home.css';

const videoData = [
    {
      id: 1,
      src: './videos/video1.mp4',
      title: 'Vidéo 1',
    },
    {
      id: 2,
      src: './videos/video2.mp4',
      title: 'Vidéo 2',
    },
    {
        id: 3,
        src: './videos/video3.mp4',
        title: 'Vidéo 3',
      },
      {
        id: 4,
        src: './videos/video4.mp4',
        title: 'Vidéo 4',
      },
  ]

const Home = () => {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentVideoIndex((prevIndex) => 
          prevIndex === videoData.length - 1 ? 0 : prevIndex + 1
        )
      }, 9000) // Change toutes les 10 secondes
  
      return () => clearInterval(interval)
    }, [])
  
    return (
      <section className="video-section">
        <video
          key={videoData[currentVideoIndex].id}
          className="video-player"
          autoPlay
          muted
          loop={false}
          playsInline
          preload="metadata"
          aria-label={videoData[currentVideoIndex].title}
        >
          <source src={process.env.PUBLIC_URL + videoData[currentVideoIndex].src} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <div className="overlay-container">
          {/* Overlay optionnel pour améliorer la lisibilité du texte si nécessaire */}
          Bienvenue à Beauvais
        </div>
      </section>
    )

};

export default Home;
