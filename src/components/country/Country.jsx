import React from 'react';
import './country.css';
import banner from "../../images/banner.png"
import tatoo1 from "../../images/tattoo.1.png"
import tatoo2 from "../../images/tattoo.2.png"
import { data } from '../../data/data.js';
import ScrollToTopButton from '../scrollToTopButton/ScollToTopButton';

const Country = () => {
    return (
        <>
            <div className='container'>
                <img src={tatoo1} alt="tatoueurs" className='responsive-banner' />
                <img src={banner} alt="Bannière" className="responsive-banner" />
                <button className='btn'>
                    <a href="https://elispace.fr/programmation/bo-way-ink-tattoo-festival" target="_blank" rel="noopener noreferrer">Pour plus d’infos</a>
                </button>
                <img src={tatoo2} alt="tatoueurs" className='responsive-banner' />
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
