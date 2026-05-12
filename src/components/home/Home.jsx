import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import Country from '../country/Country';

const WEBCAM_URLS = [
    process.env.REACT_APP_WEBCAM_URL_1 || 'https://www.skaping.com/beauvais/cathedrale-saint-pierre/video',
    process.env.REACT_APP_WEBCAM_URL_2 || 'https://www.skaping.com/beauvais/place-jeanne-hachette/live',
    process.env.REACT_APP_WEBCAM_URL_3 || 'https://www.skaping.com/beauvais/plan-d-eau-du-canada/live/',
];

const ROTATION_TIME = 30000; // 30 secondes

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    const startRotation = () => {
        intervalRef.current = setInterval(() => {
            setActiveIndex(i => (i + 1) % WEBCAM_URLS.length);
        }, ROTATION_TIME);
    };

    const resetRotation = () => {
        clearInterval(intervalRef.current);
        startRotation();
    };

    const changeWebcam = (index) => {
        setActiveIndex(index);
        resetRotation();
    };

    useEffect(() => {
        startRotation();
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <>
            <section className="video-section">
                <div className="webcam-container">
                    <div className="webcam-overlay">
                        <h1>Webcams en direct de Beauvais</h1>
                        <p>
                            Regardez Beauvais en direct grâce aux webcams de la
                            cathédrale Saint-Pierre, de la place Jeanne Hachette
                            et du plan d’eau du Canada.
                        </p>
                    </div>
                    <iframe
                        key={activeIndex}
                        title={`Webcam ${activeIndex + 1}`}
                        src={WEBCAM_URLS[activeIndex]}
                        allow="camera; microphone; fullscreen; autoplay; encrypted-media"
                        loading="lazy"
                    />
                </div>

                <div className="webcam-controls">
                    {WEBCAM_URLS.map((_, index) => (
                        <button
                            key={index}
                            className={index === activeIndex ? 'active' : ''}
                            onClick={() => changeWebcam(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </section>

            <section className="seo-container">
                <div className="seo-content">
                    <h1>Guide complet de Beauvais</h1>

                    <p>
                        Découvrez Beauvais, une ville historique située dans l’Oise en
                        Hauts-de-France. Retrouvez les meilleurs lieux à visiter,
                        restaurants, bars, sorties, événements et actualités locales
                        pour profiter pleinement de la ville.
                    </p>

                    <h2>Que faire à Beauvais ?</h2>

                    <p>
                        Explorez les incontournables comme la cathédrale Saint-Pierre,
                        le plan d’eau du Canada, la place Jeanne Hachette et les nombreux
                        lieux culturels de Beauvais.
                    </p>

                    <h2>Les meilleurs lieux à visiter à Beauvais</h2>

                    <p>
                        Que vous soyez habitant ou touriste, trouvez facilement les
                        meilleures activités, les restaurants, les bars et les endroits
                        à découvrir à Beauvais.
                    </p>
                </div>
            </section>

            <Country />
        </>
    );
};

export default Home;

