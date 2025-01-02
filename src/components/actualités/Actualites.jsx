import React, { useEffect } from 'react';
import './actualites.css';
import actu2 from '../../images/voeux.png';
import actu3 from '../../images/actu3.png';
import actu1 from '../../images/actu1.png';
import actu4 from '../../images/actu4.png';
import actu6 from '../../images/sapin.png';
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
                            <h1>Collecte des sapins 2025</h1><br></br>
                            📣 Pour la 13e année, l’Agglomération du Beauvaisis organise
                            une collecte de sapins de Noël. En janvier 2024, 37,44 tonnes
                            de sapins ont été collectées et valorisées. 📣<br></br>
                            <strong>JEUDI 9 JANVIER</strong>
                            Zones pavillonnaires :  Quartiers Argentine, Marissel, Notre-Dame-du-Thil,
                            Saint-Jean, Saint-Just-des-Marais, Saint-Lucien, Voisinlieu, Saint Quentin, Centre-Ville et Hyper Centre-Ville.
                            Déposez les sapins le mercredi 8 janvier après 20h sur la voie publique, devant votre habitation.<br></br><br></br>

                            Habitat collectif : Quartiers Argentine, Saint-Jean, Saint-Lucien (Beauvais)
                            Déposez les sapins le jeudi 9 janvier avant 12h au lieu de collecte habituel.
                        </p>
                        <img className='actu-img' src={actu6} alt="collecte de spain pour l'année 2025" />
                    </div>
                </div>

                <div className="actualites">
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
