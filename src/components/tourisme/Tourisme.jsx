import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tourisme.css';
import img1 from "../../images/cathedrale.png";
import img2 from "../../images/musee.png";
import img3 from "../../images/tour1.png";
import img4 from "../../images/maladrerie.png";
import { motion, AnimatePresence } from 'framer-motion';

const images = {
  cathedrale: { src: img1, alt: "Cathédrale Saint-Pierre" },
  musee: { src: img2, alt: "Musée départemental de l'Oise" },
  planEau: { src: img3, alt: "Plan d'eau du Canada" },
  maladrerie: { src: img4, alt: "Maladrerie Saint-Lazare" },
};

const Tourisme = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="tourisme">
      <h2>Tourisme à Beauvais</h2>
      <p>Découvrez les attractions touristiques de notre belle ville.</p>
      <div className="glass-card">
        <ul>
          <li>
            <Link to="/cathedrale"
              onMouseEnter={() => setHovered('cathedrale')}
              onMouseLeave={() => setHovered(null)}>
              La Cathédrale Saint-Pierre
            </Link>
          </li>
          <li>
            <Link to="/musee"
              onMouseEnter={() => setHovered('musee')}
              onMouseLeave={() => setHovered(null)}>
              Le Musée départemental de l'Oise
            </Link>
          </li>
          <li>
            <Link to="/plan-eau"
              onMouseEnter={() => setHovered('planEau')}
              onMouseLeave={() => setHovered(null)}>
              Le Plan d'eau du Canada
            </Link>
          </li>
          <li>
            <Link to="/maladrerie"
              onMouseEnter={() => setHovered('maladrerie')}
              onMouseLeave={() => setHovered(null)}>
              La Maladrerie Saint-Lazare
            </Link>
          </li>
        </ul>

        <div className="image-container">
          <AnimatePresence mode="wait">
            {hovered && (
              <motion.img
                key={hovered}
                src={images[hovered].src}
                alt={images[hovered].alt}
                className="image"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Tourisme;
