import React from 'react';
import './sorties.css';
import theatre from '../../images/theatre.png';
import cinema from '../../images/cinema.png';
import park from '../../images/parc.png';
import patinoire from '../../images/patinoire.png';
import piscine from '../../images/piscine.png';
import Restaurants from '../restaurants/Restaurants';
import ScrollToTopButton from '../scrollToTopButton/ScollToTopButton';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Sorties = () => {
    return (
        <div className="sorties">
            <h1>Sorties à Beauvais</h1>
            <p>Découvrez les meilleures activités et événements à Beauvais</p>

            <section className="lieux-populaires">

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
                    <SwiperSlide>
                        <div className="lieu">
                            <h3>
                                <a
                                    href="https://speedpark.fr/beauvais/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Speed Park
                                </a>
                            </h3>
                            <iframe
                                className="video w-full h-80"
                                src="https://www.youtube.com/embed/pYrhjuSrGCk?si=8KcbEV1rtDctkweX&amp;clip=UgkxjV253z_VbfzK1iaooE_taN9vE7Vl_3w0&amp;clipt=EOaFARj9-gE"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="lieu">
                            <h3>
                                <a
                                    href="https://culture.beauvais.fr/acteur-culturel/theatre-du-beauvaisis"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Le Théâtre du Beauvaisis
                                </a>
                            </h3>
                            <img src={theatre} alt="Le Théâtre du Beauvaisis" className="w-full h-64 object-cover rounded-xl" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="lieu">
                            <h3>
                                <a
                                    href="https://www.lespatinoiresmodernes.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    La Patinoire de Beauvais
                                </a>
                            </h3>
                            <img src={patinoire} alt="La patinoire de Beauvais" className="w-full h-64 object-cover rounded-xl" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="lieu">
                            <h3>
                                <a
                                    href="https://lespiscines.beauvaisis.fr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    La Piscine de Beauvais
                                </a>
                            </h3>
                            <img src={piscine} alt="La piscine de Beauvais" className="w-full h-64 object-cover rounded-xl" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="lieu">
                            <h3>
                                <a
                                    href="https://www.cgrcinemas.fr/beauvais/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Cinéma CGR
                                </a>
                            </h3>
                            <img src={cinema} alt="Cinéma CGR" className="w-full h-64 object-cover rounded-xl" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="lieu">
                            <h3>
                                <a
                                    href="https://www.visitbeauvais.fr/fiche/parc-marcel-dassault/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Parc Marcel Dassault
                                </a>
                            </h3>
                            <img src={park} alt="Parc Marcel Dassault" className="w-full h-64 object-cover rounded-xl" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className='description'>
                <h2 className='description-title'>Découvrez les saveurs de Beauvais</h2>
                <p>Plongez dans l’univers culinaire de Beauvais
                    grâce à notre guide complet des restaurants de la ville.
                    Que vous soyez amateur de cuisine traditionnelle,
                    de gastronomie française, de plats exotiques ou
                    de petites adresses conviviales,
                    notre site vous aide à trouver l’endroit idéal pour vos repas.
                    Retrouvez adresses, menus, avis et photos
                    pour savourer le meilleur de Beauvais
                    et profiter pleinement de votre expérience gourmande dans l’Oise.</p>
            </section>
            <Restaurants />
            <ScrollToTopButton />
        </div>
    );
};


export default Sorties;
