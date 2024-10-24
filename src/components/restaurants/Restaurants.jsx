import React, { useEffect, useState } from 'react';
import './restaurants.css';

const Restaurants = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const restaurants = [
        { name: "Le Grill'Inn", href: "https://beauvais.grillinn.fr/", image: require("../../images/grille1.png") },
        { name: "Le Grill'Inn", href: "https://beauvais.grillinn.fr/", image: require("../../images/grille2.png") },
        { name: "Le Grill'Inn", href: "https://beauvais.grillinn.fr/", image: require("../../images/grille3.png") },
        { name: "Le Grill'Inn", href: "https://beauvais.grillinn.fr/", image: require("../../images/grille4.png") }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % restaurants.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="restaurants">
            <h2>Restaurants recommandés</h2>
            <div className="carousel">
                <div className="carousel-content" style={{ animation: 'slide 15s linear infinite' }}>
                    {restaurants.map((restaurant, index) => (
                        <div 
                            key={index}
                            className={`slide ${index === currentIndex ? 'active' : ''}`}
                        >
                            <div className="image-container">
                                <img src={restaurant.image} alt={restaurant.name} />
                            </div>
                            {index === currentIndex && (
                                <a 
                                    href={restaurant.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {restaurant.name}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Restaurants;
