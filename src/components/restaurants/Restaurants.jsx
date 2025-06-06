import React, { useEffect, useState } from 'react';
import './restaurants.css';

const Restaurants = () => {
    const [shuffledRestaurants, setShuffledRestaurants] = useState([]);
    const MAX_RESTAURANTS = 8; // Nombre maximum de restaurants à afficher

    const restaurants = [
        {
            name: "Le Grill'Inn",
            href: "https://beauvais.grillinn.fr/",
            images: [
                require("../../images/grille2.png"),
                require("../../images/grille3.png"),
                require("../../images/grille4.png")
            ]
        },
        {
            name: "L'Annexe De Chez Ludo",
            href: "https://lannexedechezludo.fr/",
            images: [
                require("../../images/resto1.png"),
                require("../../images/resto4.png")
            ]
        },
        {
            name: "Le Carthage",
            href: "https://restaurantcarthage.fr/",
            images: [
                require("../../images/carthage1.png"),
                require("../../images/carthage4.png")
            ]
        },
        {
            name: "Le Senseo",
            href: "https://www.sensobeauvais.fr/",
            images: [require("../../images/senseo.png")]
        },
        {
            name: "Autrement",
            href: "https://www.autrement-restaurant.fr/",
            images: [require("../../images/autrement.png")]
        },
        {
            name: "Mediterraneo",
            href: "https://www.restaurantmediterraneo.fr/",
            images: [
                require("../../images/mediterraneo.png"),
                require("../../images/mediterraneo2.png")
            ]
        },
        {
            name: "La Gargouille",
            href: "https://restaurant-beauvais.fr/",
            images: [
                require("../../images/gargouille.png"),
                require("../../images/gargouille2.png")
            ]
        },
        {
            name: "Les Vins Par Faim",
            href: "https://www.lesvinsparfaim.fr/",
            images: [
                require("../../images/les-vins-par-faim1.png"),
                require("../../images/les-vins-par-faim2.png")
            ]
        }
    ];

    useEffect(() => {
        const getRandomImage = (images) => {
            return images[Math.floor(Math.random() * images.length)];
        };

        const shuffleArray = (array) => {
            let shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        };

        // Sélectionner aléatoirement MAX_RESTAURANTS restaurants
        const selectedRestaurants = shuffleArray(restaurants)
            .slice(0, MAX_RESTAURANTS)
            .map(restaurant => ({
                name: restaurant.name,
                href: restaurant.href,
                image: getRandomImage(restaurant.images)
            }));

        // Mélanger les restaurants sélectionnés
        setShuffledRestaurants(shuffleArray(selectedRestaurants));
    }, []);

    return (
        <section className="restaurants">
            <h2>Restaurants recommandés</h2>
            <div className="carousel">
                <div 
                    className="carousel-content" 
                    style={{ 
                        animation: 'slide 200s linear infinite', 
                        display: 'flex', 
                        width: `${shuffledRestaurants.length * 50}%` 
                    }}
                >
                    {[...shuffledRestaurants, ...shuffledRestaurants.slice(0, 1)].map((restaurant, index) => (
                        <div 
                            key={`${restaurant.name}-${index}`}
                            className="slide"
                            style={{ flex: `0 0 ${100 / shuffledRestaurants.length}%` }}
                        >
                            <div 
                                className="image-container" 
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    position: 'relative', 
                                    backgroundColor: '#000000', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    justifyContent: 'space-between' 
                                }}
                            >
                                <img 
                                    src={restaurant.image} 
                                    alt={restaurant.name} 
                                    style={{ 
                                        width: '100%', 
                                        height: 'calc(100% - 60px)', 
                                        objectFit: 'contain' 
                                    }} 
                                />
                                <a 
                                    href={restaurant.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ 
                                        position: 'absolute', 
                                        bottom: '90px', 
                                        left: '50%', 
                                        transform: 'translateX(-50%)',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        padding: '8px 16px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        borderRadius: '4px'
                                    }}
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
