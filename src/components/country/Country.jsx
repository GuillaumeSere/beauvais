import React from 'react';
import './country.css';
import banner from "../../images/banner.png"
import tatoo1 from "../../images/tatoo1.png"
import tatoo2 from "../../images/tatoo2.png"
import tatoo3 from "../../images/tatoo3.png"
import tatoo4 from "../../images/tatoo4.png"
import tatoo5 from "../../images/tatoo5.png"
import tatoo6 from "../../images/tatoo6.png"
import tatoo7 from "../../images/tatoo7.png"
import tatoo8 from "../../images/tatoo8.png"
import tatoo9 from "../../images/tatoo9.png"
import tatoo10 from "../../images/tatoo10.png"
import tatoo11 from "../../images/tatoo11.png"
import tatoo12 from "../../images/tatoo12.png"
import tatoo13 from "../../images/tatoo13.png"
import tatoo14 from "../../images/tatoo14.png"
import tatoo15 from "../../images/tatoo15.png"
import tatoo16 from "../../images/tatoo16.png"
import { data } from '../../data/data.js';
import ScrollToTopButton from '../scrollToTopButton/ScollToTopButton';
import CountryCarousel from './CountryCarousel';
import { motion } from 'framer-motion';


const Country = () => {
    const images = [
        tatoo1,
        banner,
        tatoo2,
        tatoo3,
        tatoo4,
        tatoo5,
        tatoo6,
        tatoo7,
        tatoo8,
        tatoo9,
        tatoo10,
        tatoo11,
        tatoo12,
        tatoo13,
        tatoo14,
        tatoo15,
        tatoo16
    ];

    return (
        <>
            <div className='container'>
                <CountryCarousel images={images} />
                <button className='btn'>
                    <a href="https://elispace.fr/" target="_blank" rel="noopener noreferrer">Plus d'infos</a>
                </button>
            </div>
            <section className='country-section'>
                <div className='box-container'>
                    {data.map(item => (
                        <motion.div
                            className="box"
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <img src={item.image} alt={`Evènement bientôt sur Beauvais ${item.id}`} />
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
                <ScrollToTopButton />
            </section>
        </>
    )
}

export default Country
