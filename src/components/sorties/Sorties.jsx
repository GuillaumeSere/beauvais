import React from 'react';
import './sorties.css';
import theatre from '../../images/theatre.png';
import cinema from '../../images/cinema.png';
import park from '../../images/parc.png';
import Restaurants from '../restaurants/Restaurants';

const Sorties = () => {
  return (
    <div className="sorties">
      <h1>Sorties à Beauvais</h1>
      <p>Découvrez les meilleures activités et événements à Beauvais</p>
      
      <section className="lieux-populaires">
        <div className="lieux-grid">
        <div className="lieu">
            <h3>Speed Park</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pYrhjuSrGCk?si=8KcbEV1rtDctkweX&amp;clip=UgkxjV253z_VbfzK1iaooE_taN9vE7Vl_3w0&amp;clipt=EOaFARj9-gE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="lieu">
            <h3>Le Théâtre du Beauvaisis</h3>
            <img src={theatre} alt="Le Théâtre du Beauvaisis" />
          </div>
          <div className="lieu">
            <h3>Cinéma CGR</h3>
            <img src={cinema} alt="Cinéma CGR" />
          </div>
          <div className="lieu">
            <h3>Parc Marcel Dassault</h3>
            <img src={park} alt="Parc Marcel Dassault" />
          </div>
        </div>
      </section>
      <Restaurants />
    </div>
  );
};

export default Sorties;
