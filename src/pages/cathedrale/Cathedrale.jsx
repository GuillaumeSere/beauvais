import React from 'react';
import { Link } from 'react-router-dom';
import './cathedrale.css';

const Cathedrale = () => {
    return (
        <div className="cathedrale">
            <h1>La Cathédrale Saint-Pierre de Beauvais</h1>
            <img src="/images/cathedrale.jpg" alt="Cathédrale Saint-Pierre de Beauvais" className="cathedrale-img" />
            <p>
                La Cathédrale Saint-Pierre de Beauvais est un chef-d'œuvre de l'architecture gothique. 
                Commencée en 1225, elle est célèbre pour son chœur gothique, le plus haut du monde avec une voûte culminant à 48,50 mètres.
            </p>
            <p>
                Bien que jamais achevée, la cathédrale reste un témoignage impressionnant de l'ambition architecturale médiévale.
            </p>
            <h2>Points d'intérêt :</h2>
            <ul>
                <li>Le chœur gothique</li>
                <li>L'horloge astronomique</li>
                <li>Les vitraux du XIIIe siècle</li>
            </ul>
            <Link to="/tourisme" className="retour-link">Retour aux attractions touristiques</Link>
        </div>
    );
};

export default Cathedrale;
