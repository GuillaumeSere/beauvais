import React, { useEffect } from 'react';
import './actualites.css';
import actu2 from '../../images/chat.png';
import actu3 from '../../images/actu3.png';
import actu1 from '../../images/actu1.png';
import actu4 from '../../images/actu4.png';
import actu6 from '../../images/balavoine.png';
import rubik from '../../images/rubik.png';
import dames from '../../images/dames.png';
import oiseRando from '../../images/oise-rando.png';
import appli from '../../images/appli.png';
import apple from '../../images/logo-apple.png';
import google from '../../images/logo-google.png';
import live from '../../images/live-radio.png';
import gare from '../../images/gare.png';
import jardinage from '../../images/jardinage.png';
import sudoku from '../../images/sudoku.png';
import framboisier from '../../images/framboisier.png';
import avion from '../../images/avion.png';
import ScrollToTopButton from '../scrollToTopButton/ScollToTopButton';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } }
};

const Actualites = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script)

        return () => {
            const instagramScript = document.querySelector('script[src*="instagram.com"]');
            if (instagramScript) document.body.removeChild(instagramScript);
        };
    }, []);

    return (
        <div className="background">
            <motion.div className="actualites" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
                <h2>Actualités de Beauvais</h2>
                <p>Restez informé des dernières nouvelles et événements de notre ville.</p>

                <motion.div className='container-img1' variants={fadeInUp}>
                    <div className='text-intro'>
                        <h1>✈️ Devenir pilote le temps d’un vol : l’expérience unique de l’Aéroclub de Beauvais-Tillé</h1>
                        <p>
                            L’Aéroclub de Beauvais-Tillé invite petits et grands à vivre une expérience
                            inoubliable : prendre les commandes d’un avion, accompagné d’un instructeur.
                            Sous l’impulsion de son président, Bruno Maillard lui-même passionné depuis
                            son plus jeune âge grâce à son père, fondateur du club.
                            <br /><br />
                            L’établissement propose une formule séduisante : 15 minutes de briefing puis
                            30 minutes de vol réel aux commandes. Un cadeau original, un rêve pour beaucoup,
                            et une occasion unique de toucher du doigt la magie du pilotage, la tête dans les nuages.<br></br><br></br>
                                   👉 Pour plus d'informations cliquez sur l'image.
                        </p>
                    </div>
                    <a href="https://aeroclubeauvaistille.wixsite.com/acbt60" target="_blank" rel="noopener noreferrer">
                        <motion.img className='actu-img' src={avion} alt="aéroclub de Beauvais" whileHover={{ scale: 1.03 }} />
                    </a>
                </motion.div>

                <motion.div className='container-img1' variants={fadeInUp}>
                    <div className='text-intro'>
                        <h1>La campagne de stérilisation des chats errants s’intensifie en 2025</h1>
                        <p>
                            Depuis 2019, la Ville de Beauvais s’engage pour la protection animale via des campagnes de stérilisation des chats errants 🐈.<br /><br />
                            Ces campagnes permettent de limiter la reproduction incontrôlée, les nuisances et la propagation de maladies.<br /><br />
                            Depuis le 1er janvier 2025, la Fondation Clara, avec la Police municipale, est chargée de capturer les chats errants.<br /><br />
                            Pour signaler leur présence : <strong>0 800 850 850</strong>
                        </p>
                    </div>
                    <motion.img className='actu-img' src={actu2} alt="Stérilisation des chats" whileHover={{ scale: 1.03 }} />
                </motion.div>

                <motion.div className='container-img1' variants={fadeInUp}>
                    <div className='text-intro'>
                        <h1>🕒 Horaires des trains SNCF en direct</h1>
                        <p>
                            Consulter les horaires des trains SNCF en temps réel, avec un affichage
                            identique à celui des panneaux présents dans les gares. ✨. <br /><br />
                        </p>
                    </div>
                    <a href="https://train-sncf.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <motion.img className='actu-img' src={gare} alt="horaires des trains sncf" whileHover={{ scale: 1.03 }} />
                    </a>
                </motion.div>

                <motion.div className='container-img1' variants={fadeInUp}>
                    <div className='text-intro'>
                        <h1>BALAVOINE, MA BATAILLE</h1>
                        <h2>🎤 Quarante ans après, sa voix résonne encore.</h2>
                        <a className='btn-billeterie' href='https://elispace.fr/programmation/balavoinema-bataille' target="_blank" rel="noopener noreferrer">Billeterie</a>
                        <p>
                            Un spectacle-hommage à Daniel Balavoine aura lieu au Dôme de Paris le 22 janvier 2026, suivi d’une tournée française.<br /><br />
                            🎸 Christian Padovan, Alain Pewzner, Sébastien Chouard<br />
                            💡 Direction lumière : Jacques Rouveyrollis
                        </p>
                    </div>
                    <motion.img className='actu-img' src={actu6} alt="Balavoine Ma Bataille" whileHover={{ scale: 1.03 }} />
                </motion.div>
            </motion.div>

            <motion.div className="actualites" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
                <motion.div className='container-img1' variants={fadeInUp}>
                    <div className='text-intro'>
                        <h1>🎮 Jouez au Rubik’s Cube en 3D directement dans votre navigateur !</h1>
                        <p>
                            Plongez dans l’univers du célèbre Rubik’s Cube, mais cette fois en version numérique ✨. <br /><br />
                            🧩<strong>Fonctionnalités principales :</strong> <br /><br />
                            Cube en 3D réaliste rendu avec Three.js<br></br>
                            Contrôles interactifs pour tourner et manipuler les faces<br></br>
                            Expérience fluide et intuitive directement depuis votre navigateur, sans installation
                        </p>
                    </div>
                    <a href="https://ruby-cube60.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <motion.img className='actu-img' src={rubik} alt="jeux rubik cube" whileHover={{ scale: 1.03 }} />
                    </a>
                </motion.div>

                <motion.div className='container-img1' variants={fadeInUp}>
                    <div className='text-intro'>
                        <h1>L'Application Oise Rando</h1>
                        <p>
                            Vous aimez les balades en plein air ? Alors, cette nouvelle va vous plaire…
                            L’arrivée de l’application Oise Rando !<br></br> Cette nouvelle appli vous aide
                            à explorer les plus beaux coins de l’Oise, que ce soit dans
                            le Pays de Bray, vers Compiègne ou dans le Beauvaisis. <br></br>
                            Avec plus de 350 parcours accessibles à pied,
                            à vélo ou même en VTT, il y en a pour tous les goûts !<br></br>
                            <div className="box-app">
                                <div className='link-container'>
                                    <img className='icon' src={apple} alt="" />
                                    <a className='link-actu' href='https://apps.apple.com/fr/app/oise-rando-gps-randonn%C3%A9e/id6670748249' target="_blank" rel="noopener noreferrer">l'Appli sur Apple Store</a>
                                </div>
                                <div className='link-container'>
                                    <img className='icon' src={google} alt="" />
                                    <a className='link-actu' href='https://play.google.com/store/apps/details?id=com.oisetourisme.oiserando&pli=1' target="_blank" rel="noopener noreferrer"> l'Appli sur Google Play</a>
                                </div>
                            </div>
                        </p>
                    </div>
                    <div className='app-container'>
                        <img className='app-img' src={appli} alt="" />
                        <motion.img className='actu-img' src={oiseRando} alt="info oise rando" whileHover={{ scale: 1.03 }} />
                    </div>
                </motion.div>
            </motion.div>

            <motion.div className="actualites" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
                <motion.div className='container-img1' variants={fadeInUp}>
                    <div className='text-intro'>
                        <h1>🎮 Jouez aux Dames en ligne !</h1>
                        <p>
                            Plongez dans l’univers du jeu de dames, mais cette fois en version numérique et en 3D ✨ <br /><br />
                            ♟️<strong>Fonctionnalités principales :</strong> <br /><br />
                            Plateau de dames en 3D réaliste rendu avec Three.js<br></br>
                            Pions interactifs avec mouvements et captures animés<br></br>
                            Mode joueur contre ordinateur grâce à une IA intégrée<br></br>
                            Expérience fluide et intuitive directement depuis votre navigateur, sans installation
                        </p>
                    </div>
                    <a href="https://dames-3d.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <motion.img className='actu-img' src={dames} alt="jeux de dames en ligne" whileHover={{ scale: 1.03 }} />
                    </a>
                </motion.div>

                <motion.div className='container-img1' variants={fadeInUp}>
                    <div className='text-intro'>
                        <h1>Un nouveau site web pour l’emploi local</h1>
                        <p>
                            La CAB lance la plateforme
                            Pour faciliter les liens entre entreprises et candidats : stages, apprentissages, emplois.<br />
                            Les entreprises peuvent créer un compte, publier des offres et valoriser leur image.
                        </p>
                        <a className='btn-billeterie' href='https://emploi.beauvaisis.fr/' target="_blank" rel="noopener noreferrer">emploi.beauvaisis.fr</a>
                    </div>
                    <motion.img className='actu-img' src={actu1} alt="Site emploi Beauvais" whileHover={{ scale: 1.03 }} />
                </motion.div>

                <motion.div className='container-img1' variants={fadeInUp}>
                    <div className='text-intro'>
                        <h1>🎧 Live-Radio — Écoutez la musique qui vous accompagne</h1>
                        <p>
                            Découvrez Live-Radio, une plateforme de radio en ligne offrant des styles
                            musicaux variés : du classique au rock, en passant par la country et bien plus encore.
                            <br />
                            Écoutez en direct, sans inscription, depuis n’importe où. Ambiance détente,
                            travail, soirée ou voyage : il y a toujours une station faite pour vous !<br></br><br></br>
                            👉 Accédez à la radio en cliquant sur l'image.
                        </p>
                    </div>
                    <a href='https://live-radios.vercel.app/' target="_blank" rel="noopener noreferrer">
                        <motion.img className='actu-img' src={live} alt="Live radio, la radio en ligne" whileHover={{ scale: 1.03 }} />
                    </a>
                </motion.div>

                <motion.div className='container-img1' variants={fadeInUp}>
                    <div className='text-intro'>
                        <h1>🌱 Vergers urbains 🌱</h1>
                        <p>
                            Depuis 2022, Beauvais développe des vergers urbains partagés dans chaque quartier.
                            Ces espaces de proximité favorisent la convivialité, la biodiversité
                            et l’accès à des fruits en libre cueillette pour tous les habitants.<br></br>
                            <br />
                            <img className='verger-img' src={framboisier} alt="framboise" />
                            Écoutez en direct, sans inscription, depuis n’importe où. Ambiance détente,
                            travail, soirée ou voyage : il y a toujours une station faite pour vous !<br></br><br></br>
                            👉 Pour plus d'informations cliquez sur l'image.
                        </p>
                    </div>
                    <a href='https://www.beauvaisis.fr/vie-pratique/espaces-publics/parcs-et-jardins/vergers-urbains/' target="_blank" rel="noopener noreferrer">
                        <motion.img className='actu-img' src={jardinage} alt="verger urbains" whileHover={{ scale: 1.03 }} />
                    </a>
                </motion.div>

                <motion.div className='container-img1' variants={fadeInUp}>
                    <div className='text-intro'>
                        <h1>🧩 Sudoku en ligne – Jouez directement dans votre navigateur !</h1>
                        <p>
                            Découvrez une version moderne du célèbre jeu de réflexion Sudoku,
                            entièrement jouable sans téléchargement et sans inscription.<br></br>
                            <br />
                            Que vous soyez débutant ou expert, ce Sudoku s’adapte à votre niveau
                            avec plusieurs grilles de difficulté et une interface simple à utiliser.<br></br><br></br>
                            👉 Pour jouer cliquez sur l'image.
                        </p>
                    </div>
                    <a href='https://sudoku-60.vercel.app/' target="_blank" rel="noopener noreferrer">
                        <motion.img className='actu-img' src={sudoku} alt="Jeux Sudoku en ligne" whileHover={{ scale: 1.03 }} />
                    </a>
                </motion.div>
            </motion.div>

            <motion.div className="actualites" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
                <h2 className='title-parc'>Fermeture du Parc Saint Paul – lundi 3 novembre 2025</h2>
                <motion.div className="container-img2" variants={fadeInUp}>
                    <motion.img className='actu-img2' src={actu3} alt="Parc Saint Paul 1" whileHover={{ scale: 1.03 }} />
                    <motion.img className='actu-img2' src={actu4} alt="Parc Saint Paul 2" whileHover={{ scale: 1.03 }} />
                </motion.div>
                <motion.p className='actu-text' variants={fadeInUp}>
                    Le Parc Saint Paul revient avec 45 attractions 🎢, des spectacles et une ambiance familiale !<br />
                    À proximité de Beauvais, vivez une journée pleine de bonne humeur.
                </motion.p>

                <div className="instagram-embed">
                    <video controls autoPlay muted>
                        <source src="https://www.parcsaintpaul.fr/wp-content/uploads/2017/02/Psp-aquasplash-320.mp4" type="video/mp4" />
                    </video>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d99379.75454135577!2d1.9004166419013513!3d49.421454725968474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47e70367264b24ab%3A0xccf4998214efae21!2s47%20Rue%20de%20l&#39;Avelon%2C%2060650%20Saint-Paul!3m2!1d49.421484!2d1.9828169999999998!5e1!3m2!1sfr!2sfr!4v1729503988114!5m2!1sfr!2sfr"
                            title="Carte Parc Saint Paul"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </motion.div>

            <ScrollToTopButton />
        </div>
    );
};

export default Actualites;

