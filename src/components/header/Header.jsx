import React, { useState } from 'react';
import './header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import WeatherHeader from '../WeatherHeader/WeatherHeader';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className="header">
      <img className='logo' src={logo} alt="logo" />

      {/* ✅ Affiche WeatherHeader uniquement sur desktop */}
      {!isMenuOpen && (
        <div className="desktop-weather">
          <WeatherHeader />
        </div>
      )}

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

          {/* ✅ WeatherHeader uniquement dans le menu burger quand ouvert */}
          {isMenuOpen && <WeatherHeader />}

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
