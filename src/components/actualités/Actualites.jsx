import React, { useEffect } from 'react';
import './actualites.css';
import actu1 from '../../images/actu1.png';
import actu2 from '../../images/actu2.png';
import actu3 from '../../images/actu3.png';
import actu4 from '../../images/actu4.png';
import actu5 from '../../images/actu5.png';
import ScrollToTopButton from '../scrollToTopButton/ScollToTopButton';

const Actualites = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <>
            <div className="actualites">
                <h2>Actualités de Beauvais</h2>
                <p>Restez informé des dernières nouvelles et événements de notre ville.</p>
                <div className='container-img1'>
                    <p className='text-intro'>📣 Défi de Ligue VG de Beauvais - &quot;Fête des Petites Chandelles&quot; 📣<br>
                    </br>📌 La Baraka Jeux, 6 Rue Ricard, Beauvais (60)<br>
                        </br>📅 Samedi 07 Décembre 2024<br>
                        </br>⏰ 14h00<br>
                        </br>🎟️ Frais d&#39;inscription : MASTER 10€ - JUNIOR / SENIOR 5€ - préinscription obligatoire<br>
                        </br>🏆 Points de Championnats (CP)… <br>
                        </br>  Pokémon VGC France (@Pokemon_VGC_FR)<br></br>
                        <a href="https://t.co/9I0DySrxtt">pic.twitter.com/9I0DySrxtt</a> </p>
                    <img className='actu-img' src={actu5} alt="tournois pokemon le 7 decembre 2024" />
                </div>
                <ul>
                    <li>Concert de musique ce week-end au centre-ville</li>
                </ul>
                <div className="instagram-embed">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/p/DBZYuMYiTy3/?utm_source=ig_embed&amp;utm_campaign=loading"
                        data-instgrm-version="14"
                    >
                        <div>
                            <a href="https://www.instagram.com/p/DBZYuMYiTy3/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" rel="noopener noreferrer">
                                Voir cette publication sur Instagram
                            </a>
                        </div>
                    </blockquote>
                </div>
                <div className="container-img1">
                    <img className='actu-img' src={actu1} alt="concert d'Herifara du 19 octobre 2024" />
                    <img className='actu-img' src={actu2} alt="bar l'overlook" />
                </div>
                <p className='actu-text'>
                    Situé au 37 Rue de la Tapisserie, ce bar animé est le lieu idéal pour vos sorties
                    entre amis ou vos soirées détente. Chaque semaine, venez profiter de concerts live
                    qui mettent en lumière des artistes locaux et des groupes émergents, dans une
                    ambiance chaleureuse et conviviale. En plus de la musique, vous pourrez vous amuser
                    avec une sélection de jeux d'arcade rétro et un baby-foot, parfaits pour pimenter vos soirées.

                </p>
                <div className="instagram-embed">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/reel/DBWptsDu9RO/?utm_source=ig_embed&amp;utm_campaign=loading"
                        data-instgrm-version="14"
                    >
                        <div>
                            <a href="https://www.instagram.com/reel/DBWptsDu9RO/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" rel="noopener noreferrer">
                                Voir cette publication sur Instagram
                            </a>
                        </div>
                    </blockquote>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d12420.914126793412!2d2.0751426648857447!3d49.42759775644159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47e7014e8c4229ad%3A0x3c0714ca3caf620f!2s37%20Rue%20de%20la%20Tapisserie%2C%2060000%20Beauvais!3m2!1d49.4276912!2d2.0832411!5e1!3m2!1sfr!2sfr!4v1729498803495!5m2!1sfr!2sfr"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="actualites">
                <h2>Réouverture du Parc Saint Paul le samedi 5 avril 2025</h2>
                <div className="container-img2">
                    <img className='actu-img2' src={actu3} alt="4 sorcières déguisé pour halloween" />
                    <img className='actu-img2' src={actu4} alt="4 sorcières déguisé pour halloween" />
                </div>
                <p className='actu-text'>
                    Il est temps pour le Parc de fermer ses portes, mais nous serons de retour en 2025
                    pour vous accueillir à nouveau et vous faire vivre des aventures sensationnelles. ☺️

                    En plein cœur de l'Oise, à St-Paul, proche de Beauvais, le <strong>Parc Saint Paul</strong>
                    est un parc d'attractions entouré de nature et conçu pour que tous les membres de la famille, de tous âges, puissent s'amuser.
                    <strong>45 attractions</strong> dont 6 roller-coasters, des toboggans aquatiques, des manèges, des autos tamponneuses… mais tout cela dans
                    <strong>un parc à taille humaine</strong>. Des spectacles vivants, des stands de maquillage et de photo ajoutent
                    <strong>une touche chaleureuse</strong> au Parc Saint Paul.
                    Venez passer une journée dans la bonne humeur pour tous !
                </p>
                <div className="instagram-embed">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ps6RGvcpk3o?si=RkxWIrMSLp71ja6S" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d99379.75454135577!2d1.9004166419013513!3d49.421454725968474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47e70367264b24ab%3A0xccf4998214efae21!2s47%20Rue%20de%20l&#39;Avelon%2C%2060650%20Saint-Paul!3m2!1d49.421484!2d1.9828169999999998!5e1!3m2!1sfr!2sfr!4v1729503988114!5m2!1sfr!2sfr"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

            </div>
            <ScrollToTopButton />
        </>
    );
};

export default Actualites;
