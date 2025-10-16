import React from 'react';
import { Link } from 'react-router-dom';
import './maladrerie.css';

const Maladrerie = () => {
    return (
        <div className="maladrerie">
            <div className="maladrerie-container">
                <h1>La Maladrerie Saint-Lazare</h1>
                <p>
                    La Maladrerie Saint-Lazare est un ancien hôpital médiéval situé à Beauvais.
                    Ce site historique remarquable offre aux visiteurs un aperçu fascinant de l'architecture
                    et de la vie au Moyen Âge.
                </p>
                <h2>Points d'intérêt :</h2>
                <ul>
                    <li>Architecture médiévale préservée</li>
                    <li>Jardins médiévaux reconstitués</li>
                    <li>Expositions temporaires</li>
                    <li>Visites guidées</li>
                    <li>Événements culturels</li>
                </ul>
                <p>
                    La Maladrerie Saint-Lazare est un témoignage unique de l'histoire médicale et sociale
                    du Moyen Âge. Sa visite offre une expérience enrichissante pour les amateurs d'histoire
                    et d'architecture.
                </p>
                <Link to="/tourisme" className="retour-link">Retour aux attractions touristiques</Link>
            </div>
        </div>
    );
};

export default Maladrerie;
