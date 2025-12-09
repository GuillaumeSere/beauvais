import React, { useEffect } from 'react';
import './actualites.css';
import newsItems from '../../data/actualitesData';
import actu3 from '../../images/actu3.png';
import actu4 from '../../images/actu4.png';
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

                {newsItems.map(item => (
                    <motion.div className='container-img1' variants={fadeInUp} key={item.id}>
                        <div className='text-intro'>
                            <h1>{item.title}</h1>
                            <p dangerouslySetInnerHTML={{ __html: item.content }} />

                            {item.type === 'app' && (
                                <div className='box-app' style={{ marginTop: '0.5rem' }}>
                                    <div className='link-container' style={{ display: 'inline-flex', alignItems: 'center', marginRight: '1rem' }}>
                                        <img className='icon' src={item.appleIcon} alt="Apple" style={{ width: 20, height: 20, marginRight: 8 }} />
                                        <a className='link-actu' href={item.appStore} target="_blank" rel="noopener noreferrer">l'Appli sur Apple Store</a>
                                    </div>
                                    <div className='link-container' style={{ display: 'inline-flex', alignItems: 'center' }}>
                                        <img className='icon' src={item.googleIcon} alt="Google Play" style={{ width: 20, height: 20, marginRight: 8 }} />
                                        <a className='link-actu' href={item.playStore} target="_blank" rel="noopener noreferrer">l'Appli sur Google Play</a>
                                    </div>
                                </div>
                            )}
                        </div>

                        {item.type === 'app' ? (
                            <div className='app-container'>
                                <img className='app-img' src={item.appIcon} alt="" />
                                <motion.img className='actu-img' src={item.image} alt={item.alt} whileHover={{ scale: 1.03 }} />
                            </div>
                        ) : (
                            item.link ? (
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <motion.img className='actu-img' src={item.image} alt={item.alt} whileHover={{ scale: 1.03 }} />
                                </a>
                            ) : (
                                <motion.img className='actu-img' src={item.image} alt={item.alt} whileHover={{ scale: 1.03 }} />
                            )
                        )}
                    </motion.div>
                ))}
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
                            height="500"
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

