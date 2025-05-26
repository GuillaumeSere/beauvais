import React, { useEffect } from 'react';
import './actualites.css';
import actu2 from '../../images/chat.png';
import actu3 from '../../images/actu3.png';
import actu1 from '../../images/actu1.png';
import actu4 from '../../images/actu4.png';
import actu6 from '../../images/balavoine.png';
import tkr from '../../images/tkr.png';
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
                            <h1>La campagne de stérilisation des chats errants s’intensifie en 2025</h1><br></br>
                            Depuis 2019, la Ville de Beauvais s’est engagée dans une politique durable
                            de protection animale, en partenariat avec la Fondation 30 Millions d’Amis,
                            l’École du Chat de l’Oise et la Fondation Clara, via des campagnes de stérilisation des chats errants.🐈<br></br><br></br>
                            Les campagnes de stérilisation des chats errants répondent à un véritable enjeu de protection animale
                            en limitant la reproduction incontrôlée, les nuisances publiques (bruits, marquages urinaires)
                            et la propagation de maladies (FIV/FELV, typhus, coryza).<br></br>
                            <br></br>
                            Depuis le 1er janvier 2025, dans un souci d’augmenter le nombre de stérilisations,
                            la capture des chats errants a été confiée à la Fondation Clara, en partenariat avec la Police municipale.<br></br><br></br>
                            Pour signaler la présence de chats errants, appelez la Police municipale au<strong> 0 800 850 850</strong>🐈
                        </p>
                        <img className='actu-img' src={actu2} alt="La campagne de stérilisation des chats" />
                    </div>
                    <div className='container-img1'>
                        <p className='text-intro'>
                            <h1>BALAVOINE,MA BATAILLE</h1><br></br>
                            <h2>🎤 Quarante ans après, sa voix résonne encore.</h2>
                            <a href='https://elispace.fr/programmation/balavoinema-bataille' target="_blank">Billeterie</a>
                            40 ans après la disparition de Daniel Balavoine, BALAVOINE Ma Bataille prendra vie sur la scène du
                            Dôme de Paris – Palais des Sports le 22 janvier 2026, avant une grande tournée française dans les
                            Zénith ou équivalents.<br></br><br></br>
                            Ce spectacle-hommage unique célèbrera un artiste révolté, visionnaire et indomptable, en faisant renaître
                            l’énergie brute et l’émotion pure de Daniel Balavoine, porté par ses anciens musiciens :<br></br>
                            🎸 Christian Padovan<br></br>
                            🎸 Alain Pewzner<br></br>
                            🎸 Sébastien Chouard (fils d’Yves Chouard)<br></br>
                            💡 Sous la direction lumineuse de Jacques Rouveyrollis, son créateur lumière historique
                        </p>
                        <img className='actu-img' src={actu6} alt="BALAVOINE, MA BATAILLE" />
                    </div>
                </div>

                <div className="actualites">
                    <div className='container-img1'>
                        <p className='text-intro'>
                            <h1>Le 2e marché nocturne, une édition spéciale années 80</h1><br></br>
                            La Ville de Beauvais organise son deuxième marché artisanal nocturne de l’année,
                            samedi 14 juin, à partir de 17h, place Jeanne-Hachette. Un événement festif et convivial sur le thème des années 80.
                            <br></br><br></br>
                            Dans une ambiance rétro où se mêleront musique et souvenirs dansants, une vingtaine d’artisans
                            proposeront une diversité de produits locaux. Un accordéoniste jouera les classiques
                            de la chanson française, de 17h à 19h30. .<br></br><br></br>
                            Puis, à partir de 19h30, le groupe Come Back 80 Forever fera revivre
                            les tubes incontournables des années 80, de la variété française à la pop internationale.<br></br><br></br>
                            <strong> Liste des exposants : </strong><br></br>
                            Anelly I Perline Créations I Le Monde de K'tell I Salaisons St Just'Oise I Brasserie Pap's
                            Bière I Rituel Parfumé I Shaneia I Flo et l'atelier des fées I Le cocon de Jenny
                            I Talen Foods I Lamotte Noëlla I Le rucher d'aux Marais I Les confitures
                            de Martine I Cécile Coud I Libraire'the I Les chocolats d'Isa et Steph I
                            Les manies de Sophie I L'atelier Marjorie I Les délices d'Ansacq I
                            Le moulin de Mathilde I Les délices de Josette I Camelia I Mamma-bébé.
                            <a href='https://www.beauvais.fr/actualites/prochainement-a-beauvais/3750-le-2e-marche-nocturne-une-edition-speciale-annees-80.html' target="_blank">Information</a>
                        </p>
                        <img className='actu-img' src={tkr} alt="La Ville de Beauvais organise son deuxième marché artisanal nocturne de l’année, samedi 14 juin" />
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
                        <img className='actu-img' src={actu1} alt="" />
                    </div>

                </div>

                <div className="actualites">
                    <h2 className='title-parc'>Réouverture du Parc Saint Paul le samedi 5 avril 2025</h2>
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
                        <video controls autoPlay name="media">
                            <source src="https://www.parcsaintpaul.fr/wp-content/uploads/2017/02/Psp-aquasplash-320.mp4" type="video/mp4" />
                        </video>

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
