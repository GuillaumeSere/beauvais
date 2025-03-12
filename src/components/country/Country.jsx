import React from 'react';
import './country.css';
import img1 from '../../images/carrousel1.png';
import img2 from '../../images/carrousel17.png';
import img3 from '../../images/carrousel3.png';
import img4 from '../../images/banner.png';
import img5 from '../../images/place-jeanneHachette.png';
import img6 from '../../images/elispace.png';
import img7 from '../../images/plan-eau.png';
import ScrollToTopButton from '../scrollToTopButton/ScollToTopButton';

const Country = () => {
    return (
        <>
            <div className='container'>
                <img src={img4} alt="banière blues" />
                <button className='btn'>
                    <a href="https://www.zincblues.com/lagenda/" target="_blank" rel="noopener noreferrer">voir la programmation</a>
                </button>
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
                        <img src={img3} alt="rue piétonne de Beauvais" />
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
                    <div className="box">
                        <img src={img5} alt="La Place Jeanne Hachette de Beauvais" />
                        <p>
                            La Place Jeanne Hachette est l'une des places centrales
                            et emblématiques de Beauvais. Située en plein cœur de
                            la ville, elle porte le nom de Jeanne Hachette, héroïne
                            locale qui s’est illustrée en 1472 en défendant Beauvais
                            contre les assaillants bourguignons. Cette vaste place
                            est un lieu de rencontre et de rassemblement, bordée par
                            des bâtiments historiques et des commerces, offrant ainsi
                            un cadre animé et vivant. Elle accueille également de
                            nombreux événements tout au long de l'année, comme les marchés,
                            fêtes et manifestations culturelles, en faisant un véritable centre
                            névralgique de la vie beauvaisienne. Au centre de la place
                            trône une statue de Jeanne Hachette, rappelant son courage
                            et son importance dans l’histoire de la ville.
                        </p>
                    </div>
                    <div className="box">
                        <img src={img6} alt="L'elispace de Beauvais" />
                        <p>
                            Outil polyvalent, l’Elispace, c’est l’accueil des sports
                            collectifs de haut niveau (basket-ball, hand-ball, volley-ball, boxe, judo…).
                            C’est l’une des étapes incontournables des tournées des plus grands artistes
                            (concerts, one-man-show, théâtre, danse...). C’est un espace modulable et adaptable
                            à tous les besoins pour l’organisation de salons, conventions et repas d’entreprises
                        </p>
                    </div>
                    <div className="box">
                        <img src={img7} alt="Le Plan d'Eau du Canada de Beauvais" />
                        <p>
                            Le Plan d'Eau du Canada est un vaste espace naturel et de loisirs situé
                            à Beauvais, offrant une large gamme d'activités en plein air. Cet étang
                            artificiel, entouré de verdure, est un lieu prisé des habitants et des
                            visiteurs pour se détendre et profiter de la nature. Les activités
                            proposées incluent la baignade surveillée en été, la pêche,
                            le canoë-kayak, le pédalo, et des sentiers pour la marche et le vélo.
                            Avec ses aires de pique-nique, ses jeux pour enfants, et ses zones
                            de détente, le Plan d'Eau du Canada est idéal pour les familles,
                            les sportifs, ou ceux cherchant simplement un moment de calme au cœur
                            de la nature Beauvaisienne. Il représente un véritable poumon vert
                            pour la ville, combinant loisirs aquatiques et découvertes environnementales.
                        </p>
                    </div>
                </div>
                <ScrollToTopButton />
            </section>
        </>
    )
}

export default Country
