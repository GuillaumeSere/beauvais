import React, { useEffect, useState } from 'react';
import './home.css';
import { data } from '../../data/data';
import Modal from '../modal/Modal';

const Home = () => {

    const [randomizedData, setRandomizedData] = useState([]);

    useEffect(() => {
        // Générer l'ordre aléatoire une seule fois lors du montage du composant
        const randomOrder = [...data].sort(() => Math.random() - 0.5);
        setRandomizedData(randomOrder);
    }, []);

    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'overlay';
    }

    return (
        <div className="homes">
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
                <div className='container-galerie-1'>
                    <div className='scrolling-container'>
                        <div className='scrolling-container-inner'>
                            {randomizedData.map(({ id, image }) => (
                                <div className='card-galerie-1' key={id}>
                                    <div className="card-img-galerie-1">
                                        <Modal image={image} openWindow={true} key={id} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
