import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Bienvenue à Beauvais</h1>
            <p>Découvrez notre belle ville et ses attractions.</p>
            <div className="video-container">
                <iframe 
                    width="100%" 
                    height="600" 
                    src="https://www.youtube.com/embed/bXiNhdhxB60?si=YK8vlX0wC-KLSjl1&autoplay=1&mute=1&loop=1&playlist=bXiNhdhxB60" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Home;
