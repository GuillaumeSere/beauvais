import React, { useEffect, useState } from 'react';
import './restaurants.css';

const Restaurants = () => {
    const [shuffledRestaurants, setShuffledRestaurants] = useState([]);

    const restaurants = [
        { name: "Le Grill'Inn", href: "https://beauvais.grillinn.fr/", image: require("../../images/grille1.png") },
        { name: "L'Annexe De Chez Ludo", href: "https://lannexedechezludo.fr/", image: require("../../images/resto1.png") },
        { name: "Le Grill'Inn", href: "https://beauvais.grillinn.fr/", image: require("../../images/grille2.png") },
        { name: "Le Grill'Inn", href: "https://beauvais.grillinn.fr/", image: require("../../images/grille3.png") },
        { name: "Le Grill'Inn", href: "https://beauvais.grillinn.fr/", image: require("../../images/grille4.png") },
        { name: "L'Annexe De Chez Ludo", href: "https://lannexedechezludo.fr/", image: require("../../images/resto2.png") },
        { name: "L'Annexe De Chez Ludo", href: "https://lannexedechezludo.fr/", image: require("../../images/resto3.png") },
        { name: "L'Annexe De Chez Ludo", href: "https://lannexedechezludo.fr/", image: require("../../images/resto4.png") }
    ];

    useEffect(() => {
        const shuffleArray = (array) => {
            let shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        };

        setShuffledRestaurants(shuffleArray(restaurants));
    }, []);

    return (
        <section className="restaurants">
            <h2>Restaurants recommandés</h2>
            <div className="carousel">
                <div className="carousel-content" style={{ animation: 'slide 500s linear infinite', display: 'flex', width: `${shuffledRestaurants.length * 100}%` }}>
                    {[...shuffledRestaurants, ...shuffledRestaurants.slice(0, 1)].map((restaurant, index) => (
                        <div 
                            key={index}
                            className="slide"
                            style={{ flex: `0 0 ${100 / shuffledRestaurants.length}%` }}
                        >
                            <div className="image-container" style={{ width: '100%', height: '100%' }}>
                                <img src={restaurant.image} alt={restaurant.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <a 
                                    href={restaurant.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {restaurant.name}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Restaurants;
