import React, { useEffect } from 'react';
import './actualites.css';
import actu2 from '../../images/chat.png';
import actu3 from '../../images/actu3.png';
import actu1 from '../../images/actu1.png';
import actu4 from '../../images/actu4.png';
import actu6 from '../../images/balavoine.png';
import tkr from '../../images/tkr.png';
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
    document.body.appendChild(script);

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
            <h1>BALAVOINE, MA BATAILLE</h1>
            <h2>🎤 Quarante ans après, sa voix résonne encore.</h2>
            <a href='https://elispace.fr/programmation/balavoinema-bataille' target="_blank" rel="noopener noreferrer">Billeterie</a>
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
            <h1>Frappadingue</h1>
            <p>
              C'est officiel ! La Frappadingue revient à Beauvais ! <br /><br />
              RDV le 14 septembre 2025 : Boue, obstacles et bonne humeur :
               tout ce qu’il faut pour une journée mémorable ! Prêt à relever le défi ?
                Forme ton équipe, sort ton déguisement le plus fou, et viens partager
                 une expérience unique avec nous. Inscris-toi dès maintenant !<br /><br />
              📍 Beauvais<br />
              ⏰ Toute la journée<br />
            </p>
            <a href='https://www.frappadingue.net/events/frappadingue-beauvais-2025-60/' target="_blank" rel="noopener noreferrer">Information</a>
          </div>
            <div style={{maxWidth: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/UvhP4IgpIMw?si=uJUyiIKMoVoH3BvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </motion.div>

        <motion.div className='container-img1' variants={fadeInUp}>
          <div className='text-intro'>
            <h1>Un nouveau site web pour l’emploi local</h1>
            <p>
              La CAB lance la plateforme <a href='https://emploi.beauvaisis.fr/' target="_blank" rel="noopener noreferrer">emploi.beauvaisis.fr</a><br /><br />
              Pour faciliter les liens entre entreprises et candidats : stages, apprentissages, emplois.<br />
              Les entreprises peuvent créer un compte, publier des offres et valoriser leur image.
            </p>
          </div>
          <motion.img className='actu-img' src={actu1} alt="Site emploi Beauvais" whileHover={{ scale: 1.03 }} />
        </motion.div>
      </motion.div>

      <motion.div className="actualites" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <h2 className='title-parc'>Réouverture du Parc Saint Paul – samedi 5 avril 2025</h2>
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

