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
            <h3><a href="https://speedpark.fr/beauvais/" target="_blank" rel="noopener noreferrer">Speed Park</a></h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pYrhjuSrGCk?si=8KcbEV1rtDctkweX&amp;clip=UgkxjV253z_VbfzK1iaooE_taN9vE7Vl_3w0&amp;clipt=EOaFARj9-gE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="lieu">
            <h3><a href="https://culture.beauvais.fr/acteur-culturel/theatre-du-beauvaisis" target="_blank" rel="noopener noreferrer">Le Théâtre du Beauvaisis</a></h3>
            <img src={theatre} alt="Le Théâtre du Beauvaisis" />
          </div>
          <div className="lieu">
            <h3><a href="https://www.cgrcinemas.fr/beauvais/" target="_blank" rel="noopener noreferrer">Cinéma CGR</a></h3>
            <img src={cinema} alt="Cinéma CGR" />
          </div>
          <div className="lieu">
            <h3><a href="https://www.visitbeauvais.fr/fiche/parc-marcel-dassault/" target="_blank" rel="noopener noreferrer">Parc Marcel Dassault</a></h3>
            <img src={park} alt="Parc Marcel Dassault" />
          </div>
        </div>
      </section>
      <Restaurants />
    </div>
  );
};

export default Sorties;
