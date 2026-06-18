import { Link } from 'react-router-dom';
import './tourisme.css';
import img1 from "../../images/cathedrale.png";
import img2 from "../../images/musee.png";
import img3 from "../../images/tour1.png";
import img4 from "../../images/maladrerie.png";
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Clock, MapPin, Sparkles } from 'lucide-react';

const places = [
  {
    id: 'cathedrale',
    title: 'Cathédrale Saint-Pierre',
    description: "Un monument gothique impressionnant, célèbre pour son choeur vertigineux et son horloge astronomique.",
    image: img1,
    alt: 'Cathédrale Saint-Pierre de Beauvais',
    to: '/cathedrale',
    tag: 'Patrimoine',
    meta: 'Centre-ville'
  },
  {
    id: 'musee',
    title: "Musée départemental de l'Oise",
    description: "Un parcours culturel installé dans l'ancien palais épiscopal, au pied de la cathédrale.",
    image: img2,
    alt: "Musée départemental de l'Oise",
    to: '/musee',
    tag: 'Culture',
    meta: 'Art et histoire'
  },
  {
    id: 'plan-eau',
    title: "Plan d'eau du Canada",
    description: "Le grand bol d'air de Beauvais pour marcher, courir, pique-niquer ou profiter des activités nautiques.",
    image: img3,
    alt: "Plan d'eau du Canada",
    to: '/plan-eau',
    tag: 'Nature',
    meta: 'Loisirs'
  },
  {
    id: 'maladrerie',
    title: 'Maladrerie Saint-Lazare',
    description: "Un site médiéval remarquable, entre jardins, architecture ancienne et programmation culturelle.",
    image: img4,
    alt: 'Maladrerie Saint-Lazare',
    to: '/maladrerie',
    tag: 'Visite',
    meta: 'Lieu historique'
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

const Tourisme = () => {
  return (
    <main className="tourisme">
      <section className="tourisme-hero">
        <motion.div
          className="tourisme-hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="tourisme-kicker">
            <MapPin size={18} />
            Beauvais, ville d'art et de balades
          </span>
          <h1>Tourisme à Beauvais</h1>
          <p>
            Explorez les lieux emblématiques de la ville, entre patrimoine gothique,
            musées, espaces verts et sites chargés d'histoire.
          </p>
          <div className="tourisme-actions">
            <a href="#lieux-touristiques" className="tourisme-primary-link">
              <Camera size={20} />
              Voir les lieux
            </a>
          </div>
        </motion.div>

        <motion.div
          className="tourisme-highlight"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <img src={img1} alt="Vue de la cathédrale Saint-Pierre de Beauvais" />
          <div className="tourisme-highlight-caption">
            <Sparkles size={18} />
            <span>Incontournable : la cathédrale Saint-Pierre</span>
          </div>
        </motion.div>
      </section>

      <section className="tourisme-stats" aria-label="Repères touristiques">
        <div>
          <strong>4</strong>
          <span>lieux à découvrir</span>
        </div>
        <div>
          <strong>1 journée</strong>
          <span>pour un premier parcours</span>
        </div>
        <div>
          <strong>Centre + nature</strong>
          <span>un itinéraire varié</span>
        </div>
      </section>

      <motion.section
        id="lieux-touristiques"
        className="tourisme-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {places.map((place) => (
          <motion.article className="tourisme-card" variants={itemVariants} key={place.id}>
            <Link to={place.to} aria-label={`Découvrir ${place.title}`}>
              <div className="tourisme-card-image">
                <img src={place.image} alt={place.alt} />
                <span>{place.tag}</span>
              </div>
              <div className="tourisme-card-content">
                <div className="tourisme-card-meta">
                  <Clock size={16} />
                  {place.meta}
                </div>
                <h2>{place.title}</h2>
                <p>{place.description}</p>
                <div className="tourisme-card-link">
                  Découvrir
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.section>

      <section className="tourisme-itinerary">
        <div>
          <h2>Un parcours simple pour commencer</h2>
          <p>
            Démarrez au centre-ville avec la cathédrale et le musée, puis prenez
            l'air au Plan d'eau du Canada avant de finir par la Maladrerie Saint-Lazare.
          </p>
        </div>
        <Link to="/actualites" className="tourisme-secondary-link">
          Actualités locales
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
};

export default Tourisme;
