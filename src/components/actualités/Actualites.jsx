import './actualites.css';
import newsItems from '../../data/actualitesData';
import actu3 from '../../images/actu3.png';
import actu4 from '../../images/actu4.png';
import mairie from '../../images/mairie.png';
import ScrollToTopButton from '../scrollToTopButton/ScollToTopButton';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, ExternalLink, MapPin, Newspaper } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Actualites = () => {
    return (
        <main className="actualites-page">
            <section className="actualites-hero">
                <motion.div
                    className="actualites-hero-content"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <span className="actualites-kicker">
                        <Newspaper size={18} />
                        Vie locale
                    </span>
                    <h1>Actualités de Beauvais</h1>
                    <p>
                        Retrouvez les dernières infos, les événements à venir, les initiatives locales
                        et les idées de sortie autour de Beauvais.
                    </p>
                    <div className="actualites-actions">
                        <a href="#liste-actualites" className="actualites-primary-link">
                            <CalendarDays size={20} />
                            Voir les actualités
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="actualites-hero-visual"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                >
                    <img src={mairie} alt="Mairie de Beauvais" />
                    <div className="actualites-hero-caption">
                        <MapPin size={18} />
                        <span>Infos locales, sorties et nouveautés</span>
                    </div>
                </motion.div>
            </section>

            <motion.section
                id="liste-actualites"
                className="actualites-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
            >
                {newsItems.map((item) => (
                    <motion.article className="actualites-card" variants={itemVariants} key={item.id}>
                        <div className="actualites-card-image">
                            {item.link ? (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir ${item.title}`}>
                                    <img src={item.image} alt={item.alt} />
                                </a>
                            ) : (
                                <img src={item.image} alt={item.alt} />
                            )}
                            <span>Actu</span>
                        </div>

                        <div className="actualites-card-content">
                            <h2>{item.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: item.content }} />

                            {item.type === 'app' && (
                                <div className="actualites-app-links">
                                    <a href={item.appStore} target="_blank" rel="noopener noreferrer">
                                        <img src={item.appleIcon} alt="" />
                                        Apple Store
                                    </a>
                                    <a href={item.playStore} target="_blank" rel="noopener noreferrer">
                                        <img src={item.googleIcon} alt="" />
                                        Google Play
                                    </a>
                                </div>
                            )}

                            {item.link && (
                                <a className="actualites-card-link" href={item.link} target="_blank" rel="noopener noreferrer">
                                    En savoir plus
                                    <ExternalLink size={18} />
                                </a>
                            )}
                        </div>
                    </motion.article>
                ))}
            </motion.section>

            <motion.section
                className="parc-feature"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="parc-feature-heading">
                    <span className="actualites-kicker">
                        <CalendarDays size={18} />
                        Sortie famille
                    </span>
                    <h2>Ouverture du Parc Saint Paul - samedi 4 avril 2026</h2>
                    <p>
                        Le Parc Saint Paul revient avec 38 attractions, des spectacles et une ambiance familiale.
                        À proximité de Beauvais, vivez une journée pleine de bonne humeur.
                    </p>
                </div>

                <div className="parc-gallery">
                    <img src={actu3} alt="Parc Saint Paul attraction" />
                    <img src={actu4} alt="Parc Saint Paul animation" />
                </div>

                <div className="parc-media-grid">
                    <video controls autoPlay muted>
                        <source src="https://www.parcsaintpaul.fr/wp-content/uploads/2017/02/Psp-aquasplash-320.mp4" type="video/mp4" />
                    </video>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d99379.75454135577!2d1.9004166419013513!3d49.421454725968474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47e70367264b24ab%3A0xccf4998214efae21!2s47%20Rue%20de%20l&#39;Avelon%2C%2060650%20Saint-Paul!3m2!1d49.421484!2d1.9828169999999998!5e1!3m2!1sfr!2sfr!4v1729503988114!5m2!1sfr!2sfr"
                            title="Carte Parc Saint Paul"
                            width="100%"
                            height="420"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <a className="actualites-secondary-link" href="https://www.parcsaintpaul.fr/" target="_blank" rel="noopener noreferrer">
                    Site du parc
                    <ArrowRight size={18} />
                </a>
            </motion.section>

            <ScrollToTopButton />
        </main>
    );
};

export default Actualites;
