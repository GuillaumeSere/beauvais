import avion from '../images/avion.png';
import chat from '../images/chat.png';
import gare from '../images/gare.png';
import actu6 from '../images/tatoo15.png';
import rubik from '../images/rubik.png';
import tv from '../images/tv.png';
import oiseRando from '../images/oise-rando.png';
import appli from '../images/appli.png';
import apple from '../images/logo-apple.png';
import google from '../images/logo-google.png';
import dames from '../images/dames.png';
import zone from '../images/zone.png';
import actu1 from '../images/actu1.png';
import live from '../images/live-radio.png';
import carotte from '../images/carotte.png';
import photaumnales from '../images/photaumnales.png';
import sudoku from '../images/sudoku.png';
import gastronomie from '../images/gastronomie.png';
import beauvaisiennes from '../images/beauvaisiennes.png';
import actu2 from '../images/actu2.png';
import theatre from '../images/theatre.png';
import elispace from '../images/elispace.png';
import livres from '../images/livres.png';
import musee from '../images/musee.png';
import festivals from '../images/festivals.png';
import musée from '../images/musée.png';

export const newsItems = [
    {
        id: 'Visite guidée',
        title: "Visite guidée des collections permanentes du MUDO-Musée de l'Oise",
        content: `Profitez de l'œil expert d'un membre de l'équipe scientifique du musée pour (re)découvrir autrement les collections. L'occasion de voir les œuvres sous un autre jour, entre anecdotes et coups de cœur, et de lever le voile sur les coulisses du musée.`,
        image: musée,
        alt: "Visite guidée des collections permanentes du MUDO-Musée de l'Oise",
        link: 'https://www.visitbeauvais.fr/fiche/visite-guidee-des-collections-permanentes-du-mudo-musee-de-l-oise-QCOl2J4BMEJK_xwFzJk-/'
    },
    {
        id: 'fete-carottes-brocante-beauvais-2026',
        title: 'Fête à Carottes & Brocante à Beauvais',
        content: `Du 5 au 7 septembre 2026, le quartier de Voisinlieu accueille la traditionnelle Fête à la Carotte. Au programme : repas partagé, concert, feu d'artifice, grande brocante, spectacles de rue, animations associatives et activités pour les enfants.<br /><br />Cette fête populaire, héritière d'une tradition ancienne, rassemble chaque année de nombreux habitants dans une ambiance conviviale et familiale.<br /><br /><strong>👉 Découvrez le programme complet et les horaires de l'événement.</strong>`,
        image: carotte,
        alt: 'Fête à Carottes et brocante à Beauvais',
        link: 'https://www.visitbeauvais.fr/fiche/fete-a-carottes-brocante/'
    },
    {
        id: 'photaumnales-beauvais-2026',
        title: 'Les Photaumnales 2026',
        content: `À partir du 19 septembre 2026, Beauvais accueille la 23e édition des Photaumnales. Le festival de photographie revient notamment au Quadrilatère avec une programmation consacrée aux transformations de l'image à l'ère de la post-photographie.<br /><br />Cette nouvelle édition explore les nouvelles pratiques artistiques : archives, procédés photographiques historiques, installations immersives, intelligence artificielle et art contemporain.<br /><br /><strong>👉 Découvrez le programme des Photaumnales 2026.</strong>`,
        image: photaumnales,
        alt: 'Les Photaumnales 2026 à Beauvais',
        link: 'https://www.visitbeauvais.fr/decouvrir/les-temps-forts/les-photomnales/'
    },
    {
        id: 'brocante-livre-beauvais-2026',
        title: '8e édition de la Brocante du Livre',
        content: `Le samedi 12 septembre 2026, la Place Jeanne Hachette accueille la 8e édition de la Brocante du Livre. Les amateurs de littérature et de beaux livres pourront partir à la recherche de romans, bandes dessinées, ouvrages anciens et autres trésors.<br /><br />Un rendez-vous convivial au cœur de Beauvais pour les amoureux du papier et de la lecture.<br /><br /><strong>👉 Retrouvez les informations pratiques et les horaires de la brocante.</strong>`,
        image: livres,
        alt: 'Brocante du Livre à Beauvais',
        link: 'https://sortir.beauvais.fr/lieu/place-jeanne-hachette'
    },
    {
        id: 'beauvenitiennes-beauvais-2026',
        title: 'Les Beauvénitiennes 2026',
        content: `Les samedi 26 et dimanche 27 septembre 2026, Beauvais se transforme en véritable décor de carnaval vénitien à l'occasion de la 7e édition des Beauvénitiennes.<br /><br />Plus de 70 personnages costumés, masques, costumes spectaculaires et déambulations poétiques investiront le centre-ville, la Place Jeanne Hachette et le parc Marcel-Dassault.<br /><br />Le grand défilé aura lieu samedi à 15h sur la Place Jeanne Hachette, tandis que les déambulations se poursuivront dimanche au parc Marcel-Dassault.<br /><br /><strong>👉 Découvrez le programme complet des Beauvénitiennes 2026.</strong>`,
        image: beauvaisiennes,
        alt: 'Les Beauvénitiennes 2026 à Beauvais',
        link: 'https://www.visitbeauvais.fr/fiche/les-beauvenitiennes-2026/'
    },
    {
        id: 'fete-saison-theatre-beauvais-2026',
        title: 'Fête de saison du Théâtre du Beauvaisis',
        content: `Le samedi 26 septembre 2026, le Théâtre du Beauvaisis donne le coup d'envoi de sa nouvelle saison culturelle avec une grande fête ouverte au public.<br /><br />Du parvis aux salles du théâtre, la musique classique, le hip-hop et le rock accompagneront cette journée festive consacrée à la création et au spectacle vivant.<br /><br /><strong>👉 Découvrez la programmation et les horaires de la Fête de saison.</strong>`,
        image: theatre,
        alt: 'Fête de saison du Théâtre du Beauvaisis',
        link: 'https://www.visitbeauvais.fr/fiche/fete-de-saison/'
    },
    {
        id: 'agenda-festivals-beauvais-2026',
        title: 'Agenda Festivals France : les festivals autour de Beauvais',
        content: `Agenda Festivals France permet de repérer rapidement les festivals par ville, discipline ou période. Le lien est déjà préfiltré sur Beauvais pour retrouver les sorties musicales et culturelles proches de la ville.<br /><br /><strong>Consultez la carte et la liste des festivals en cliquant sur l'image.</strong>`,
        image: festivals,
        alt: 'Agenda Festivals France autour de Beauvais',
        link: 'https://agenda-festivals.netlify.app/?q=beauvais'
    },
    {
        id: 'vie-culturelle-beauvais-2026',
        title: 'Les grands rendez-vous culturels à suivre à Beauvais',
        content: `Beauvais continue d'être animée par plusieurs rendez-vous culturels réguliers : Blues autour du Zinc, Festival du Film, Pianoscope, Malices et Merveilles, Les Photaumnales ou encore les Féeries de Noël.<br /><br />Ces événements font vivre le centre-ville, les équipements culturels et les quartiers tout au long de l'année.<br /><br /><strong>👉 Retrouvez les prochaines sorties dans l'agenda.</strong>`,
        image: elispace,
        alt: 'Agenda culturel de Beauvais',
        link: 'https://www.visitbeauvais.fr/sejourner/agenda/'
    },
    {
        id: 'exposition-enterrer-le-soleil-2026',
        title: 'Le Quadrilatère : exposition Enterrer le soleil',
        content: `Le Quadrilatère - Centre d'art de Beauvais accueille l'exposition collective Enterrer le soleil du 4 avril au 30 août 2026.<br /><br />Le parcours propose une plongée dans les mondes souterrains, entre crypte archéologique, centre d'interprétation et galeries d'art contemporain.<br /><br /><strong>Horaires, tarifs et informations pratiques : cliquez sur l'image.</strong>`,
        image: musee,
        alt: 'Exposition Enterrer le soleil au Quadrilatère de Beauvais',
        link: 'https://www.beauvaisis.fr/evenements/exposition-enterrer-le-soleil-au-quadrilatere/'
    },

    {
        id: 'Ma Zone 60',
        title: '🔥 Ma Zone 60 – Trouvez les meilleurs événements près de vous 🎉',
        content: `MaZone est une plateforme intuitive qui vous permet de découvrir en quelques secondes les événements autour de vous : concerts, festivals, spectacles et bien plus encore. Grâce à une interface moderne et une carte interactive, vous accédez rapidement aux sorties disponibles dans votre zone.<br /><br /><strong>🔍 Une recherche simple et efficace.</strong><br></br> Même en cas de problème de localisation, MaZone continue d’afficher les événements disponibles pour ne rien manquer.<br></br><strong>🗺️ Une carte interactive</strong><br></br>Visualisez instantanément les événements autour de vous grâce à une carte dynamique avec des marqueurs. Cela permet de repérer facilement les lieux et d’organiser vos sorties en un coup d’œil.`,
        image: zone,
        alt: 'Ma Zone 60',
        link: 'https://ma-zone-evenement.netlify.app/'
    },
    {
        id: 'World-radio-60',
        title: '🌍 World Radio 60 🎧',
        content: `Je suis ravi de vous présenter World Radio 60, mon tout nouveau site web qui vous permet d’explorer et d’écouter des radios du monde entier.<br /><br />Vous pouvez parcourir les radios par pays avec drapeaux et informations détaillées.Rechercher rapidement par nom de radio, ville ou pays.Sélection et lecture directe des flux audio depuis le site.`,
        image: actu2,
        alt: 'World radio 60',
        link: 'https://world-radio-60.netlify.app/'
    },
    {
        id: 'gastronomie',
        title: 'Une carte pour mieux manger… et mieux explorer la gastronomie beauvaisienne ! 🍽️',
        content: `Du centre-ville historique aux zones commerciales, des petites pépites confidentielles aux tables incontournables, cette carte regroupe plus de 100 adresses classées par type :<br><br>🍴 Restaurants<br>☕ Cafés et salons de thé<br>🍔 Fast-foods et snacks<br>🍣 Spécialités du monde<br>🥐 Boulangeries et pâtisseries<br>🍺 Brasseries, crêperies, friteries<br>Chaque adresse est accompagnée d’informations pratiques : horaires, jours d’ouverture, coordonnées et liens vers les sites web ou réseaux sociaux.<br /><br /><strong>👉 Pour plus d'informations cliquez sur l'image.</strong>`,
        image: gastronomie,
        alt: 'Une carte pour mieux manger… et mieux explorer la gastronomie beauvaisienne',
        link: 'https://www.visitbeauvais.fr/content/uploads/2026/02/Carte_restaurants_Beauvais_2025-2026.pdf'
    },
    {
        id: 'aeroclub',
        title: "✈️ Devenir pilote le temps d’un vol : l’expérience unique de l’Aéroclub de Beauvais-Tillé",
        content: `L’Aéroclub de Beauvais-Tillé invite petits et grands à vivre une expérience inoubliable : prendre les commandes d’un avion, accompagné d’un instructeur. Sous l’impulsion de son président, Bruno Maillard lui-même passionné depuis son plus jeune âge grâce à son père, fondateur du club.<br /><br />L’établissement propose une formule séduisante : 15 minutes de briefing puis 30 minutes de vol réel aux commandes. Un cadeau original, un rêve pour beaucoup, et une occasion unique de toucher du doigt la magie du pilotage, la tête dans les nuages.<br /><br /><strong>👉 Pour plus d'informations cliquez sur l'image.</strong>`,
        image: avion,
        alt: 'aéroclub de Beauvais',
        link: 'https://aeroclubeauvaistille.wixsite.com/acbt60'
    },
    {
        id: 'iptv',
        title: '📺 Découvrez IPTV 60 ✨',
        content: `Votre nouveau hub IPTV gratuit et ultra-rapide !<br /><br />🔥 Ce que vous pouvez faire sur IPTV 60 :<br /><br />✅ Consulter des milliers de chaînes du monde entier<br />✅ Filtrer par pays grâce aux drapeaux (🇫🇷 🇹🇭 🇺🇸…)<br />✅ Voir le drapeau + le nom du pays sur chaque chaîne pour une navigation stylée et intuitive<br />✅ Accéder aux logos officiels des chaînes<br />✅ Voir la qualité, le flux, les infos…<br />✅ Lire les chaînes en un clic directement dans le lecteur intégré<br />✅ Ajouter vos chaînes préférées en favoris<br />✅ Interface optimisée pour mobile, tablette et PC<br /><br /><strong>👉 Pour plus d'informations cliquez sur l'image.</strong>`,
        image: tv,
        alt: 'IPTV 60',
        link: 'https://iptv-60.onrender.com/'
    },
    {
        id: 'sterilisation-chats',
        title: "La campagne de stérilisation des chats errants s’intensifie en 2025",
        content: `Depuis 2019, la Ville de Beauvais s’engage pour la protection animale via des campagnes de stérilisation des chats errants 🐈.<br /><br />Ces campagnes permettent de limiter la reproduction incontrôlée, les nuisances et la propagation de maladies.<br /><br />Depuis le 1er janvier 2025, la Fondation Clara, avec la Police municipale, est chargée de capturer les chats errants.<br /><br />Pour signaler leur présence : <strong>0 800 850 850</strong>`,
        image: chat,
        alt: 'Stérilisation des chats'
    },
    {
        id: 'sncf',
        title: '🕒 Horaires des trains SNCF en direct',
        content: `Consulter les horaires des trains SNCF en temps réel, avec un affichage identique à celui des panneaux présents dans les gares.<br /><br /> Planifier un trajet, détails complets : durées, correspondances, quais  ✨.`,
        image: gare,
        alt: 'horaires des trains sncf',
        link: 'https://horaires-sncf.netlify.app/'
    },
    {
        id: 'Goldman',
        title: 'GOLDMEN de GOLDMAN à FREDERICKS GOLDMAN JONES 🎤',
        content: `Actuellement en tournée événement, rassemblant des centaines de milliers de fans à travers la France, les GOLDMEN seront de retour en 2026 pour un nouveau show 100% tubes, de l’univers de Jean-Jacques GOLDMAN à celui du trio FREDERICKS GOLDMAN JONES.<br /><br /><a class="btn-billeterie" href="https://www.ginger.fr/manifestation/goldmen-de-goldman-a-fredericks-goldman-jones-33/" target="_blank" rel="noopener noreferrer">Billeterie</a><br /><br /> Porté par Alain Stevez, véritable miroir vocal du chanteur iconique et avec Sabrina, la voix de Carole Frédéricks, les GOLDMEN vont continuer à écumer les scènes pour le 35èmeanniversaire de la tournée Frédéricks Goldman Jones. `,
        image: actu6,
        alt: 'Goldman'
    },
    {
        id: 'rubik',
        title: '🎮 Jouez au Rubik’s Cube en 3D directement dans votre navigateur !',
        content: `Plongez dans l’univers du célèbre Rubik’s Cube, mais cette fois en version numérique ✨. <br /><br />🧩<strong>Fonctionnalités principales :</strong> <br /><br />Cube en 3D réaliste rendu avec Three.js<br>Contrôles interactifs pour tourner et manipuler les faces<br>Expérience fluide et intuitive directement depuis votre navigateur, sans installation`,
        image: rubik,
        alt: 'jeux rubik cube',
        link: 'https://rubicube.netlify.app/'
    },
    {
        id: 'oise-rando',
        title: "L'Application Oise Rando",
        content: `Vous aimez les balades en plein air ? Alors, cette nouvelle va vous plaire… L’arrivée de l’application Oise Rando ! Cette nouvelle appli vous aide à explorer les plus beaux coins de l’Oise, que ce soit dans le Pays de Bray, vers Compiègne ou dans le Beauvaisis. Avec plus de 350 parcours accessibles à pied, à vélo ou même en VTT, il y en a pour tous les goûts !`,
        image: oiseRando,
        alt: 'info oise rando',
        type: 'app',
        appIcon: appli,
        appStore: 'https://apps.apple.com/fr/app/oise-rando-gps-randonn%C3%A9e/id6670748249',
        playStore: 'https://play.google.com/store/apps/details?id=com.oisetourisme.oiserando&pli=1',
        appleIcon: apple,
        googleIcon: google
    },
    {
        id: 'dames',
        title: '🎮 Jouez aux Dames en ligne !',
        content: `Plongez dans l’univers du jeu de dames, mais cette fois en version numérique et en 3D ✨ <br /><br />♟️<strong>Fonctionnalités principales :</strong> <br /><br />Plateau de dames en 3D réaliste rendu avec Three.js<br> Pions interactifs avec mouvements et captures animés<br> Mode joueur contre ordinateur grâce à une IA intégrée`,
        image: dames,
        alt: 'jeux de dames en ligne',
        link: 'https://dames-3d.netlify.app/'
    },
    {
        id: 'emploi',
        title: 'Un nouveau site web pour l’emploi local',
        content: `La CAB lance la plateforme. Pour faciliter les liens entre entreprises et candidats : stages, apprentissages, emplois. Les entreprises peuvent créer un compte, publier des offres et valoriser leur image.`,
        image: actu1,
        alt: 'Site emploi Beauvais',
        link: 'https://emploi.beauvaisis.fr/'
    },
    {
        id: 'Online-radio',
        title: '🎧 Online-radio-60 — Écoutez la musique qui vous accompagne',
        content: `Découvrez Online-radio-60, une plateforme de radio en ligne offrant des styles musicaux variés : du classique au rock, en passant par la country et bien plus encore.`,
        image: live,
        alt: 'Online radio, la radio en ligne',
        link: 'https://online-radio-60.netlify.app/'
    },
    {
        id: 'sudoku',
        title: '🧩 Sudoku en ligne – Jouez directement dans votre navigateur !',
        content: `Découvrez une version moderne du célèbre jeu de réflexion Sudoku, entièrement jouable sans téléchargement et sans inscription.`,
        image: sudoku,
        alt: 'Jeux Sudoku en ligne',
        link: 'https://sudoku-gratuit.netlify.app/'
    }
];

export default newsItems;
