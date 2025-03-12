import React from 'react';
import { Link } from 'react-router-dom';
import './tourisme.css';
import img1 from "../../images/cathedrale.png";
import img2 from "../../images/musee.png";
import img3 from "../../images/tour1.png";
import img4 from "../../images/maladrerie.png";

const Tourisme = () => {
    const handleMouseEnter = (id) => {
        const element = document.getElementById(id);
        element.style.display = 'block';
        // Petit délai pour permettre à la transition de s'exécuter
        setTimeout(() => element.style.opacity = '1', 0);
    };

    const handleMouseLeave = (id) => {
        const element = document.getElementById(id);
        element.style.opacity = '0';
        // Attendre la fin de la transition avant de cacher l'élément
        setTimeout(() => element.style.display = 'none', 200);
    };

    return (
        <div className="tourisme">
            <h2>Tourisme à Beauvais</h2>
            <p>Découvrez les attractions touristiques de notre belle ville.</p>
            <div className="glass-card">
                <ul>
                    <li>
                        <Link to="/cathedrale" 
                            onMouseEnter={() => handleMouseEnter('cathedraleImage')} 
                            onMouseLeave={() => handleMouseLeave('cathedraleImage')}>
                            La Cathédrale Saint-Pierre
                        </Link>
                    </li>
                    <li>
                        <Link to="/musee" 
                            onMouseEnter={() => handleMouseEnter('museeImage')} 
                            onMouseLeave={() => handleMouseLeave('museeImage')}>
                            Le Musée départemental de l'Oise
                        </Link>
                    </li>
                    <li>
                        <Link to="/plan-eau" 
                            onMouseEnter={() => handleMouseEnter('planEauImage')} 
                            onMouseLeave={() => handleMouseLeave('planEauImage')}>
                            Le Plan d'eau du Canada
                        </Link>
                    </li>
                    <li>
                        <Link to="/maladrerie" 
                            onMouseEnter={() => handleMouseEnter('maladrerieImage')} 
                            onMouseLeave={() => handleMouseLeave('maladrerieImage')}>
                            La Maladrerie Saint-Lazare
                        </Link>
                    </li>
                </ul>
                <div id="cathedraleImage" style={{ display: 'none' }}><img className='image' src={img1} alt="Cathédrale Saint-Pierre" /></div>
                <div id="museeImage" style={{ display: 'none' }}><img className='image' src={img2} alt="Musée départemental de l'Oise" /></div>
                <div id="planEauImage" style={{ display: 'none' }}><img className='image' src={img3} alt="Plan d'eau du Canada" /></div>
                <div id="maladrerieImage" style={{ display: 'none' }}><img className='image' src={img4} alt="Maladrerie Saint-Lazare" /></div>
            </div>
        </div>
    );
};

export default Tourisme;
