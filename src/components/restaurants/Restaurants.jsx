import React, { useEffect, useState } from 'react';
import './restaurants.css';
import { motion } from 'framer-motion';

const MAX_RESTAURANTS = 8;

const restaurants = [
  {
    name: "Le Grill'Inn",
    href: "https://beauvais.grillinn.fr/",
    images: [require("../../images/grille2.png"), require("../../images/grille3.png"), require("../../images/grille4.png")]
  },
  {
    name: "L'Annexe De Chez Ludo",
    href: "https://lannexedechezludo.fr/",
    images: [require("../../images/resto1.png"), require("../../images/resto4.png")]
  },
  {
    name: "Le Carthage",
    href: "https://restaurantcarthage.fr/",
    images: [require("../../images/carthage1.png"), require("../../images/carthage4.png")]
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
    images: [require("../../images/mediterraneo.png"), require("../../images/mediterraneo2.png")]
  },
  {
    name: "La Gargouille",
    href: "https://restaurant-beauvais.fr/",
    images: [require("../../images/gargouille.png"), require("../../images/gargouille2.png")]
  },
  {
    name: "Les Vins Par Faim",
    href: "https://www.lesvinsparfaim.fr/",
    images: [require("../../images/les-vins-par-faim1.png"), require("../../images/les-vins-par-faim2.png")]
  }
];

const Restaurants = () => {
  const [shuffledRestaurants, setShuffledRestaurants] = useState([]);

  useEffect(() => {
    const getRandomImage = (images) => images[Math.floor(Math.random() * images.length)];

    const shuffleArray = (array) => {
      let shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const selectedRestaurants = shuffleArray(restaurants)
      .slice(0, MAX_RESTAURANTS)
      .map(r => ({
        name: r.name,
        href: r.href,
        image: getRandomImage(r.images)
      }));

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
            <motion.div
              className="slide"
              key={`${restaurant.name}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ flex: `0 0 ${100 / shuffledRestaurants.length}%` }}
            >
              <div className="image-container">
                <img src={restaurant.image} alt={restaurant.name} className="restaurant-img" />
                <motion.a
                  href={restaurant.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="restaurant-link"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {restaurant.name}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Restaurants;

