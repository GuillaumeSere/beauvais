import React from 'react';
import './country.css';
import img4 from '../../images/banner.png';
import { data } from '../../data/data.js';
import ScrollToTopButton from '../scrollToTopButton/ScollToTopButton';

const Country = () => {
    return (
        <>
            <div className='container'>
                <button className='btn'>
                    <a href="https://unitechdays.com" target="_blank" rel="noopener noreferrer">Pour plus d’infos</a>
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
