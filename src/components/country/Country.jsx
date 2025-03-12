import React from 'react';
import './country.css';
import img1 from '../../images/carrousel1.png';
import img2 from '../../images/carrousel17.png';
import img3 from '../../images/carrousel3.png';
import img4 from '../../images/banner.png';

const Country = () => {
    return (
        <>
            <div className='container'>
                <img src={img4} alt="banière blues" />
            </div>
            <section className='country-section'>
                <div className='box-container'>
                    <div className="box">
                        <img src={img1} alt="horloge de la cathédrale de Beauvais" />
                        <p>
                            Beauvais est une commune française, ville-préfecture du département
                            de l'Oise au sein de la région culturelle et historique de Picardie,
                            et administrative Hauts-de-France.Elle se situe sur le plateau picard,
                            au nord du Bassin parisien et sur les rives du Thérain, affluent de l'Oise.
                            Ses habitants sont appelés les Beauvaisiens.Elle a donné son nom au pays
                            traditionnel du Beauvaisis, qui est historiquement un pays de Picardie dont
                            elle est la ville principale.Sous l'Ancien Régime, l'évêque-comte
                            de Beauvais figurait parmi les Douze pairs primitifs de France.
                        </p>
                    </div>
                    <div className="box">
                        <img src={img2} alt="mairie de Beauvais" />
                        <p>
                            La fusion de communes menée à la fin de la Seconde Guerre mondiale,
                            qui a permis une reconstruction et une urbanisation des plateaux,
                            a conforté Beauvais dans sa dynamique démographique positive.
                            Ainsi, au dernier recensement de population, en 2021, Beauvais
                            était la commune la plus peuplée du département de l'Oise -
                            et la huitième au niveau régional, comptant 55 906 habitants.
                            L'unité urbaine dont elle est la ville-centre, l'unité urbaine
                            de Beauvais, est la troisième du département en nombre
                            d'habitants, après celles de Creil et de Compiègne.
                        </p>
                    </div>
                    <div className="box">
                        <img src={img3} alt="horloge de la cathédrale de Beauvais" />
                        <p>
                            Beauvais est célèbre pour sa cathédrale d'architecture gothique,
                            encore inachevée à ce jour puisqu'elle ne possède pas de nef,
                            mais au chœur gothique (ou art français) le plus haut du monde,
                            typique de l'apogée de cet art en France. La plupart des œuvres
                            de la cathédrale datent du XVIIe siècle.
                            Depuis 2001, les exécutifs qui se sont succédé à
                            la tête de la ville de Beauvais ont fait de la dynamisation
                            du centre-ville une priorité via plusieurs projets d'envergure.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Country
