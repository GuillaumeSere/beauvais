import React, { useState } from 'react';
import './header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <img className='logo' src={logo} alt="logo" />
            <nav className="desktop-nav">
                <Link to="/">Accueil</Link>
                <Link to="/tourisme">Tourisme</Link>
                <Link to="/actualites">Actualites</Link>
                <Link to="/sorties">Sorties</Link>
            </nav>
            <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="burger-icon" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <button className="close-menu" onClick={toggleMenu}>X</button>
                    <Link to="/" onClick={toggleMenu}>Accueil</Link>
                    <Link to="/tourisme" onClick={toggleMenu}>Tourisme</Link>
                    <Link to="/actualites" onClick={toggleMenu}>Actualites</Link>
                    <Link to="/sorties" onClick={toggleMenu}>Sorties</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
