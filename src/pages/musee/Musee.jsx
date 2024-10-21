import React from 'react';
import { Link } from 'react-router-dom';
import './musee.css';

const Musee = () => {
    return (
        <div className="musee">
            <h1>Le Musée départemental de l'Oise</h1>
            <p>
                Le Musée départemental de l'Oise, situé à Beauvais, est un trésor culturel qui abrite une collection impressionnante d'art et d'artefacts historiques.
                Installé dans l'ancien palais épiscopal, ce musée offre un voyage fascinant à travers l'histoire et l'art de la région.
            </p>
            <h2>Points d'intérêt :</h2>
            <ul>
                <li>Collections archéologiques</li>
                <li>Peintures et sculptures du Moyen Âge à nos jours</li>
                <li>Céramiques et tapisseries locales</li>
                <li>Expositions temporaires</li>
            </ul>
            <p>
                Le musée propose une expérience enrichissante pour les amateurs d'art et d'histoire, offrant un aperçu unique de la culture et du patrimoine de l'Oise.
            </p>
            <Link to="/tourisme" className="retour-link">Retour aux attractions touristiques</Link>
        </div>
    );
};

export default Musee;
