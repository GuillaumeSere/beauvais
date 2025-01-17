import React, { useEffect } from 'react';
import './actualites.css';
import actu2 from '../../images/voeux.png';
import actu3 from '../../images/actu3.png';
import actu1 from '../../images/actu1.png';
import actu4 from '../../images/actu4.png';
import actu6 from '../../images/escrime.png';
import ecole from '../../images/ecole.png';
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
                            <h1>🎉 Bonne année 2025 ! 🎉</h1><br></br>
                            Que cette nouvelle année vous apporte une santé de fer, des moments remplis de joie et des succès dans tous vos projets.
                            Profitons de chaque instant et avançons avec enthousiasme vers nos rêves. ✨
                            Pleine de nouveautés, de découvertes et de belles surprises, qu’elle soit à la hauteur de toutes vos espérances ! 🥂🎆<br></br>
                            Bonne et heureuse année à vous et à vos proches ! 🎊
                        </p>
                        <img className='actu-img' src={actu2} alt="bienvenue dans la féeries de Noël" />
                    </div>
                    <div className='container-img1'>
                        <p className='text-intro'>
                            <h1>L’escrime mondiale, c’est dès maintenant à Beauvais</h1><br></br>
                            📣Après deux premières éditions qui ont connu de beaux succès, Beauvais
                            accueillera une nouvelle Coupe du monde d’épée féminine
                            des moins de 20 ans les samedi 15 et dimanche 16 février 2025, à l’Elispace.
                            📣<br></br>
                            Forte d’un 2e titre en Coupe d’Europe de clubs champions
                            remporté en 2024, l’Académie beauvaisienne d’escrime (ABE)
                            va encore affirmer sa dimension internationale en organisant,
                            en partenariat avec la Ville de Beauvais et le Département
                            de l’Oise, et avec le soutien de la Région Hauts-de-France,
                            une compétition qui réunira les meilleurs jeunes talents
                            féminins d’une vingtaine des plus grandes nations d’escrime.
                            Plus de 150 tireuses, dont sans doute des Beauvaisiennes
                            sélectionnées en équipe de France, s’affronteront dans
                            la compétition individuelle le samedi, puis dans la
                            compétition par équipe le dimanche. Venez encourager nos jeunes épéistes françaises !
                        </p>
                        <img className='actu-img' src={actu6} alt="coupe du monde d'escrime à Beauvais" />
                    </div>
                </div>

                <div className="actualites">
                    <div className='container-img1'>
                        <p className='text-intro'>
                            <h1>Inscriptions scolaires pour l’année 2025/2026 - du 3 février au 25 avril 2025</h1><br></br>
                            La campagne officielle des inscriptions aux écoles publiques de la ville de Beauvais,
                            pour la prochaine rentrée scolaire 2025/2026, aura lieu du 3 février et au 25 avril 2024.
                            Elle concerne les enfants nés à partir du 1er janvier 2022 ou nouvellement arrivés à Beauvais.<br></br><br></br>
                            <strong>La campagne des inscriptions pour l’année 2025/2026 concerne :</strong>
                            - les inscriptions en Petite Section (maternelle) et en CP (élémentaire)<br></br>
                            -  les inscriptions pour les nouveaux arrivants<br></br>
                            - les inscriptions en Toute Petite Section (TPS)*<br></br>
                            - les demandes de dérogation à la carte scolaire*
                        </p>
                        <img className='actu-img' src={ecole} alt="bienvenue dans la féeries de Noël" />
                    </div>

                    <div className='container-img1'>
                        <p className='text-intro'>
                            <h1>Un nouveau site web pour dynamiser l'emploi local</h1><br></br>
                            Pour mettre en relation les entreprises locales et les demandeurs d'emploi, la Communauté d’Agglomération du Beauvaisis
                            (CAB) lance la plateforme S.A.F.E. (Stage / Apprentissage / Formation / Emploi) sur le nouveau site
                            <a href='https://emploi.beauvaisis.fr/' target="_blank">emploi.beauvaisis.fr</a>
                            La plateforme S.A.F.E. vise à valoriser le dynamisme du tissu économique local et à faciliter le recrutement en proximité.<br></br>
                            <br></br> <strong>Une vitrine numérique pour les entreprises</strong>
                            Le site offre aux entreprises du Beauvaisis l’opportunité de se faire connaître
                            auprès des talents locaux. En créant gratuitement leur compte, elles pourront :
                            - Présenter leur activité, leurs valeurs et leur culture d'entreprise,
                            - Mettre en avant leurs atouts pour attirer les candidats,
                            - Publier leurs offres d'emploi gratuitement.
                        </p>
                        <img className='actu-img' src={actu1} alt="bienvenue dans la féeries de Noël" />
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
