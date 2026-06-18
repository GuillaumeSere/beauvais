import './sorties.css';
import theatre from '../../images/theatre.png';
import cinema from '../../images/cinema.png';
import park from '../../images/parc.png';
import patinoire from '../../images/patinoire.png';
import piscine from '../../images/piscine.png';
import resto from '../../images/resto1.png';
import Restaurants from '../restaurants/Restaurants';
import ScrollToTopButton from '../scrollToTopButton/ScollToTopButton';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clapperboard, ExternalLink, MapPin, Sparkles, Utensils } from 'lucide-react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const activitySlides = [
    {
        title: 'Speed Park',
        href: 'https://speedpark.fr/beauvais/',
        type: 'video',
        media: 'https://www.youtube.com/embed/pYrhjuSrGCk?si=8KcbEV1rtDctkweX&amp;clip=UgkxjV253z_VbfzK1iaooE_taN9vE7Vl_3w0&amp;clipt=EOaFARj9-gE',
        alt: 'Speed Park Beauvais',
        tag: 'Loisirs'
    },
    {
        title: 'Le Théâtre du Beauvaisis',
        href: 'https://www.theatredubeauvaisis.com/',
        type: 'image',
        media: theatre,
        alt: 'Le Théâtre du Beauvaisis',
        tag: 'Culture'
    },
    {
        title: 'La Patinoire de Beauvais',
        href: 'https://www.lespatinoiresmodernes.com/',
        type: 'image',
        media: patinoire,
        alt: 'La patinoire de Beauvais',
        tag: 'Sport'
    },
    {
        title: 'La Piscine de Beauvais',
        href: 'https://lespiscines.beauvaisis.fr/',
        type: 'image',
        media: piscine,
        alt: 'La piscine de Beauvais',
        tag: 'Famille'
    },
    {
        title: 'Cinéma CGR',
        href: 'https://www.cgrcinemas.fr/beauvais/',
        type: 'image',
        media: cinema,
        alt: 'Cinéma CGR Beauvais',
        tag: 'Cinéma'
    },
    {
        title: 'Parc Marcel Dassault',
        href: 'https://www.visitbeauvais.fr/fiche/parc-marcel-dassault/',
        type: 'image',
        media: park,
        alt: 'Parc Marcel Dassault',
        tag: 'Nature'
    }
];

const Sorties = () => {
    return (
        <main className="sorties-page">
            <section className="sorties-hero">
                <motion.div
                    className="sorties-hero-content"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <span className="sorties-kicker">
                        <MapPin size={18} />
                        Loisirs à Beauvais
                    </span>
                    <h1>Sorties à Beauvais</h1>
                    <p>
                        Découvrez les meilleures activités, les lieux culturels, les loisirs en famille
                        et les restaurants pour profiter de la ville.
                    </p>
                    <div className="sorties-actions">
                        <a href="#lieux-populaires" className="sorties-primary-link">
                            <CalendarDays size={20} />
                            Voir le carrousel
                        </a>
                        <a href="#restaurants" className="sorties-secondary-link">
                            <Utensils size={18} />
                            Restaurants
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="sorties-hero-visual"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                >
                    <img src={resto} alt="Restaurant à Beauvais" />
                    <div className="sorties-hero-caption">
                        <Sparkles size={18} />
                        <span>Activités, restaurants et bons plans</span>
                    </div>
                </motion.div>
            </section>

            <section id="lieux-populaires" className="lieux-populaires">
                <div className="sorties-section-heading">
                    <span className="sorties-kicker">
                        <Clapperboard size={18} />
                        À faire
                    </span>
                    <h2>Lieux populaires</h2>
                    <p>
                        Faites défiler le carrousel pour découvrir quelques adresses à tester à Beauvais.
                    </p>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    className="lieux-swiper"
                >
                    {activitySlides.map((activity) => (
                        <SwiperSlide key={activity.title}>
                            <article className="lieu">
                                <div className="lieu-media">
                                    {activity.type === 'video' ? (
                                        <iframe
                                            src={activity.media}
                                            title={activity.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <img src={activity.media} alt={activity.alt} />
                                    )}
                                    <span>{activity.tag}</span>
                                </div>
                                <div className="lieu-content">
                                    <h3>{activity.title}</h3>
                                    <a href={activity.href} target="_blank" rel="noopener noreferrer">
                                        En savoir plus
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section id="restaurants" className="sorties-food-intro">
                <div>
                    <span className="sorties-kicker">
                        <Utensils size={18} />
                        Saveurs locales
                    </span>
                    <h2>Découvrez les saveurs de Beauvais</h2>
                    <p>
                        Plongez dans l’univers culinaire de Beauvais grâce à notre guide des restaurants.
                        Cuisine traditionnelle, gastronomie française, plats exotiques ou adresses conviviales :
                        trouvez facilement une table pour votre prochaine sortie.
                    </p>
                </div>
                <a href="#restaurants-carousel" className="sorties-secondary-link">
                    Voir les adresses
                    <ArrowRight size={18} />
                </a>
            </section>

            <div id="restaurants-carousel" className="sorties-restaurants-wrap">
                <Restaurants />
            </div>

            <ScrollToTopButton />
        </main>
    );
};

export default Sorties;
