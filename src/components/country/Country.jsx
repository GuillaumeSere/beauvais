import React from 'react';
import './country.css';
import banner from "../../images/banner.png"
import tatoo1 from "../../images/tattoo.1.png"
import tatoo2 from "../../images/tattoo.2.png"
import tatoo3 from "../../images/tattoo.3.png"
import tatoo4 from "../../images/tattoo.4.png"
import { data } from '../../data/data.js';
import ScrollToTopButton from '../scrollToTopButton/ScollToTopButton';
import CountryCarousel from './CountryCarousel';

const Country = () => {
    const images = [
        tatoo1,
        banner,
        tatoo2,
        tatoo3,
        tatoo4
    ];

    return (
        <>
            <div className='container'>
                <CountryCarousel images={images} />
                <button className='btn'>
                    <a href="https://elispace.fr/programmation/bo-way-ink-tattoo-festival" target="_blank" rel="noopener noreferrer">Pour plus d'infos</a>
                </button>
            </div>
            <section className='country-section'>
                <div className='box-container'>
                    {data.map(item => (
                        <div className="box" key={item.id}>
                            <img src={item.image} alt={`Image de Beauvais ${item.id}`} />
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                <ScrollToTopButton />
            </section>
        </>
    )
}

export default Country
