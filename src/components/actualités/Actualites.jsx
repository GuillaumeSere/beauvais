import React, { useEffect } from 'react';
import './actualites.css';
import actu1 from '../../images/actu1.png';
import actu2 from '../../images/actu2.png';
import actu3 from '../../images/actu3.png';
import actu4 from '../../images/actu4.png';
import actu5 from '../../images/actu5.png';
import actu6 from '../../images/actu6.png';
import actu7 from '../../images/actu7.png';
import actu8 from '../../images/actu8.png';
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
            <div className="background">
                <div className="actualites">
                    <h2>Actualités de Beauvais</h2>
                    <p>Restez informé des dernières nouvelles et événements de notre ville.</p>
                    <div className='container-img1'>
                        <p className='text-intro'>
                       <h1>Bienvenue dans les Féeries de Noël</h1> 
                       Du 6 au 31 décembre, la Ville de Beauvais vous convie à plonger dans l’atmosphère festive et chaleureuse de ses <strong>🎄Féeries de Noël.🎄 </strong>
                           <br></br>Pendant trois semaines, venez partager des moments inoubliables en famille ou entre amis à travers une multitude d’animations,
                            de spectacles de rue et d’activités variées, pour savourer pleinement la magie des fêtes de fin d’année.🎅
                            <br></br>
                            Les Féeries mettront une nouvelle fois à l’honneur l’artisanat et la gastronomie, avec des exposants soigneusement sélectionnés,
                             artisans et producteurs locaux, qui vous feront découvrir la richesse de leurs talents.<br></br>
                             Offrez à vos proches des cadeaux uniques et authentiques ! Je vous donne donc rendez-vous le vendredi 6 décembre
                              à 18h pour le lancement officiel de ces festivités au coeur de notre ville.
                              Et je vous souhaite, par avance, d’excellentes fêtes de fin d’année.⭐

                        </p>
                        <img className='actu-img' src={actu1} alt="bienvenue dans la féeries de Noël" />
                    </div>
                    <div className='container-img1'>
                        <p className='text-intro'>
                            <h1>Horaires des féeries artisanales 2024 :</h1>
                          <img src={actu8} alt="" />
                        </p>
                        <img className='actu-img' src={actu6} alt="tournoi de jeux vidéos au bar l'overlook tout les mardis" />
                    </div>
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
                   
                    
                    <div className="container-img1">
                        <img className='actu-img' src={actu7} alt="les féeries gourmandes" />
                        <img className='actu-img' src={actu2} alt="les animations" />
                    </div>
                    <p className='actu-text'>
                    Les associations et établissements scolaires beauvaisiens vous attendent
                     pour vous faire connaître leurs actions. Ils vous ont aussi concocté de jolis cadeaux de Noël à offrir !
                    </p>
                   
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

                        En plein cœur de l'Oise, à St-Paul, proche de Beauvais, le <strong>Parc Saint Paul</strong> est
                        un parc d'attractions entouré de nature et conçu pour que tous les membres de la famille, de tous âges, puissent s'amuser.
                        <strong>45 attractions</strong> dont 6 roller-coasters, des toboggans aquatiques, des manèges, des autos tamponneuses… mais tout cela
                        dans <strong>un parc à taille humaine</strong>. Des spectacles vivants, des stands de maquillage et de photo ajoutent <strong>une touche
                            chaleureuse</strong> au Parc Saint Paul.
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
            </div>
        </>
    );
};

export default Actualites;
