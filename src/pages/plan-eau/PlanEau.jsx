import React from 'react';
import { Link } from 'react-router-dom';
import './plan-eau.css';

const PlanEau = () => {
    return (
        <div className="plan-eau">
            <h1>Le Plan d'eau du Canada</h1>
            <img src="/images/plan-eau.jpg" alt="Plan d'eau du Canada" className="plan-eau-img" />
            <p>
                Le Plan d'eau du Canada, situé à Beauvais, est un espace de loisirs et de détente apprécié des habitants et des visiteurs. 
                Ce lac artificiel offre de nombreuses activités nautiques et de plein air dans un cadre naturel magnifique.
            </p>
            <h2>Points d'intérêt :</h2>
            <ul>
                <li>Plage de sable fin</li>
                <li>Location de pédalos et de canoës</li>
                <li>Parcours de santé</li>
                <li>Aires de pique-nique</li>
                <li>Pêche (avec permis)</li>
            </ul>
            <p>
                Que vous soyez amateur de sports nautiques, de promenades en pleine nature ou simplement à la recherche d'un endroit paisible pour vous détendre, 
                le Plan d'eau du Canada a quelque chose à offrir à chacun.
            </p>
            <Link to="/tourisme" className="retour-link">Retour aux attractions touristiques</Link>
        </div>
    );
};

export default PlanEau;
