import React from 'react';
import { Link } from 'react-router-dom';
import './tourisme.css';
import img1 from "../../images/cathedrale.png";
import img2 from "../../images/musee.png";
import img3 from "../../images/tour1.png";
import img4 from "../../images/maladrerie.png";

const Tourisme = () => {
    return (
        <div className="tourisme">
            <h2>Tourisme à Beauvais</h2>
            <p>Découvrez les attractions touristiques de notre belle ville.</p>
            <div className="glass-card">
                <ul>
                    <li><Link to="/cathedrale" onMouseEnter={() => document.getElementById('cathedraleImage').style.display = 'block'} onMouseLeave={() => document.getElementById('cathedraleImage').style.display = 'none'}>La Cathédrale Saint-Pierre</Link></li>
                    <li><Link to="/musee" onMouseEnter={() => document.getElementById('museeImage').style.display = 'block'} onMouseLeave={() => document.getElementById('museeImage').style.display = 'none'}>Le Musée départemental de l'Oise</Link></li>
                    <li><Link to="/plan-eau" onMouseEnter={() => document.getElementById('planEauImage').style.display = 'block'} onMouseLeave={() => document.getElementById('planEauImage').style.display = 'none'}>Le Plan d'eau du Canada</Link></li>
                    <li><Link to="/maladrerie" onMouseEnter={() => document.getElementById('maladrerieImage').style.display = 'block'} onMouseLeave={() => document.getElementById('maladrerieImage').style.display = 'none'}>La Maladrerie Saint-Lazare</Link></li>
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
