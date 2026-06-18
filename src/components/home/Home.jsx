import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Camera, Compass, MapPin, Newspaper, Utensils } from 'lucide-react';
import './home.css';
import Country from '../country/Country';
import cathedrale from '../../images/cathedrale.png';
import placeJeanneHachette from '../../images/place-jeanneHachette.png';
import planEau from '../../images/plan-eau.png';
import gastronomie from '../../images/gastronomie.png';

const WEBCAM_URLS = [
    process.env.REACT_APP_WEBCAM_URL_1 || 'https://www.skaping.com/beauvais/cathedrale-saint-pierre/video',
    process.env.REACT_APP_WEBCAM_URL_2 || 'https://www.skaping.com/beauvais/place-jeanne-hachette/live',
    process.env.REACT_APP_WEBCAM_URL_3 || 'https://www.skaping.com/beauvais/plan-d-eau-du-canada/live/',
];

const ROTATION_TIME = 30000;

const featuredLinks = [
    {
        title: 'Tourisme',
        text: 'Cathédrale, musée, plan d’eau et lieux historiques à découvrir.',
        to: '/tourisme',
        image: cathedrale,
        icon: Compass,
        label: 'Explorer'
    },
    {
        title: 'Actualités',
        text: 'Les infos locales, événements et nouveautés autour de Beauvais.',
        to: '/actualites',
        image: placeJeanneHachette,
        icon: Newspaper,
        label: 'Lire'
    },
    {
        title: 'Sorties',
        text: 'Idées de loisirs, activités et moments à partager en ville.',
        to: '/sorties',
        image: planEau,
        icon: CalendarDays,
        label: 'Sortir'
    },
    {
        title: 'Restaurants',
        text: 'Une sélection d’adresses pour manger et profiter du Beauvaisis.',
        to: '/sorties',
        image: gastronomie,
        icon: Utensils,
        label: 'Découvrir'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    const startRotation = () => {
        intervalRef.current = setInterval(() => {
            setActiveIndex(i => (i + 1) % WEBCAM_URLS.length);
        }, ROTATION_TIME);
    };

    const resetRotation = () => {
        clearInterval(intervalRef.current);
        startRotation();
    };

    const changeWebcam = (index) => {
        setActiveIndex(index);
        resetRotation();
    };

    useEffect(() => {
        startRotation();
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <main className="home-page">
            <section className="home-hero">
                <motion.div
                    className="home-hero-content"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <span className="home-kicker">
                        <MapPin size={18} />
                        Guide local de Beauvais
                    </span>
                    <h1>Beauvais en direct, à visiter et à vivre</h1>
                    <p>
                        Retrouvez les webcams, les lieux incontournables, les sorties,
                        les restaurants et les actualités locales au même endroit.
                    </p>
                    <div className="home-actions">
                        <a href="#webcams" className="home-primary-link">
                            <Camera size={20} />
                            Voir les webcams
                        </a>
                        <Link to="/tourisme" className="home-secondary-link">
                            Explorer la ville
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className="home-hero-visual"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                >
                    <img src={cathedrale} alt="Cathédrale Saint-Pierre de Beauvais" />
                    <div className="home-hero-caption">
                        <Camera size={18} />
                        <span>Webcams, patrimoine et idées de sortie</span>
                    </div>
                </motion.div>
            </section>

            <motion.section
                className="home-feature-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {featuredLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                        <motion.article className="home-feature-card" variants={itemVariants} key={item.title}>
                            <Link to={item.to}>
                                <div className="home-feature-image">
                                    <img src={item.image} alt="" />
                                    <span>
                                        <Icon size={16} />
                                        {item.label}
                                    </span>
                                </div>
                                <div className="home-feature-content">
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                    <div className="home-feature-link">
                                        Ouvrir
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    );
                })}
            </motion.section>

            <section id="webcams" className="home-webcam-section">
                <div className="home-section-heading">
                    <span className="home-kicker">
                        <Camera size={18} />
                        En direct
                    </span>
                    <h2>Webcams de Beauvais</h2>
                    <p>
                        Passez de la cathédrale à la place Jeanne Hachette ou au Plan d’eau du Canada
                        avec les boutons sous la vidéo.
                    </p>
                </div>

                <div className="video-section">
                    <div className="webcam-container">
                        <iframe
                            key={activeIndex}
                            title={`Webcam ${activeIndex + 1}`}
                            src={WEBCAM_URLS[activeIndex]}
                            allow="camera; microphone; fullscreen; autoplay; encrypted-media"
                            loading="lazy"
                        />
                    </div>

                    <div className="webcam-controls">
                        {WEBCAM_URLS.map((_, index) => (
                            <button
                                key={index}
                                className={index === activeIndex ? 'active' : ''}
                                onClick={() => changeWebcam(index)}
                                aria-label={`Afficher la webcam ${index + 1}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="seo-container">
                <div className="seo-content">
                    <h2>Guide complet de Beauvais</h2>
                    <p>
                        Découvrez Beauvais, une ville historique située dans l’Oise en
                        Hauts-de-France. Retrouvez les meilleurs lieux à visiter,
                        restaurants, bars, sorties, événements et actualités locales
                        pour profiter pleinement de la ville.
                    </p>

                    <h2>Que faire à Beauvais ?</h2>
                    <p>
                        Explorez les incontournables comme la cathédrale Saint-Pierre,
                        le plan d’eau du Canada, la place Jeanne Hachette et les nombreux
                        lieux culturels de Beauvais.
                    </p>

                    <h2>Les meilleurs lieux à visiter à Beauvais</h2>
                    <p>
                        Que vous soyez habitant ou touriste, trouvez facilement les
                        meilleures activités, les restaurants, les bars et les endroits
                        à découvrir à Beauvais.
                    </p>
                </div>
            </section>

            <Country />
        </main>
    );
};

export default Home;
