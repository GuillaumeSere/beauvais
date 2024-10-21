import React from 'react';
import { Link } from 'react-router-dom';
import './tourisme.css';

const Tourisme = () => {
    return (
        <div className="tourisme">
            <h2>Tourisme à Beauvais</h2>
            <p>Découvrez les attractions touristiques de notre belle ville.</p>
            <div className="glass-card">
                <ul>
                    <li><Link to="/cathedrale">La Cathédrale Saint-Pierre</Link></li>
                    <li><Link to="/musee">Le Musée départemental de l'Oise</Link></li>
                    <li><Link to="/plan-eau">Le Plan d'eau du Canada</Link></li>
                    <li><Link to="/maladrerie">La Maladrerie Saint-Lazare</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Tourisme;
