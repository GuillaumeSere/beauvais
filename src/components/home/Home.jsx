import React, { useEffect, useState } from 'react';
import './home.css';
import Country from '../country/Country';

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
    const [nextVideoIndex, setNextVideoIndex] = useState(1)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentVideoIndex((prevIndex) => 
          prevIndex === videoData.length - 1 ? 0 : prevIndex + 1
        )
        setNextVideoIndex((prevIndex) => 
          prevIndex === videoData.length - 1 ? 0 : prevIndex + 1
        )
      }, 9000) // Change toutes les 9 secondes
  
      return () => clearInterval(interval)
    }, [])

    useEffect(() => {
      const videoElement = document.querySelector(`#video-${nextVideoIndex}`);
      if (videoElement) {
        videoElement.load();
        videoElement.play();
      }
    }, [nextVideoIndex]);

    return (
        <>
      <section className="video-section">
        <video
          id={`video-${currentVideoIndex}`}
          key={videoData[currentVideoIndex].id}
          className="video-player"
          autoPlay
          muted
          loop={false}
          playsInline
          preload="metadata"
          aria-label={videoData[currentVideoIndex].title}
          onEnded={() => {
            setCurrentVideoIndex(nextVideoIndex);
          }}
        >
          <source src={process.env.PUBLIC_URL + videoData[currentVideoIndex].src} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <video
          id={`video-${nextVideoIndex}`}
          key={videoData[nextVideoIndex].id}
          className="video-player"
          muted
          loop={false}
          playsInline
          preload="auto"
          aria-label={videoData[nextVideoIndex].title}
          style={{ display: 'none' }}
        >
          <source src={process.env.PUBLIC_URL + videoData[nextVideoIndex].src} type="video/mp4" />
        </video>
        <div className="overlay-container">
          {/* Overlay optionnel pour améliorer la lisibilité du texte si nécessaire */}
         <h1>Bienvenue à Beauvais</h1> 
        </div>
      </section>
          <Country />
      </>
    )

};

export default Home;
