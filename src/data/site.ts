/**
 * Paramètres du site — future collection Directus « Paramètres ».
 * Les champs vides seront complétés par Nano depuis l'administration.
 */
export const site = {
  nom: 'Meïssa Mbaye',
  bookingEmail: 'contact@meissambaye.com', // Boîte IONOS (29/10/2026), transférée vers meissambaye28@gmail.com
  whatsapp: { affichage: '+221 77 706 06 97', numero: '221777060697' },
  /** Contact de Meïssa en France (Nano, 30/10/2026) : page Contact et mentions légales. */
  france: {
    adresse: ['104 ter rue du Faubourg de Roubaix', 'B11', '59800 Lille', 'France'],
    telephone: { affichage: '+33 6 65 91 15 60', numero: '+33665911560' },
  },

  /** Réseaux sociaux : une icône n'apparaît que si son lien est renseigné. */
  reseaux: {
    instagram: 'https://www.instagram.com/meissa.mbaye.58/',
    facebook: 'https://www.facebook.com/Meissamb',
    youtube: 'https://www.youtube.com/@mbayemeissa95',
    tiktok: 'https://www.tiktok.com/@mbaye.meissa',
    x: 'https://x.com/MbayeMeiss18991',
    linkedin: 'https://www.linkedin.com/in/meissa-mbaye-a414b4113/',
    spotify: '', // Page artiste Spotify : à confirmer
  },

  /** Vidéo de fond de l'accueil (fichiers < 5 Mo, sans son) et version complète avec le son. */
  // Boucle de 18 s (0:14 → 0:32) extraite de medias-sources/1015.mp4, sans son.
  videoFond: {
    horizontale: '/video/accueil-1280.mp4',
    verticale: '/video/accueil-vertical.mp4',
    affiche: '/video/accueil-affiche.webp',
  },
  videoAvecSon: 'https://www.youtube.com/watch?v=WlEC90pfHcI', // « Meïssa à Berlin », concert (EPK)

  /**
   * Documents PDF déposés dans public/PDF/ (publiés avec l'accord de Nano, 16/10/2026,
   * y compris les coordonnées de Lille, le +33 et le SIRET qu'ils contiennent).
   */
  epk: {
    pdfPublies: true,
    /** Fiches techniques publiées telles quelles ; certaines valeurs restent « [à confirmer] ». */
    fichesTechniquesPretes: true,
  },

  /**
   * Mentions légales (Nano, 28/10/2026) : la structure de Meïssa est l'éditeur du site,
   * Nano Design en est le concepteur et réalisateur. Les champs vides de la réalisation ne s'affichent pas.
   */
  mentions: {
    editeur: {
      nom: 'Werekaan Institute',
      adresse: 'Villa N°174, Sn City, Ndiakhirate, Dakar 10200, Sénégal', // Nano, 30/10/2026
      site: 'werekaan.com',
      ninea: '006443915', // Confirmé par Nano (29/10/2026)
    },
    directeurPublication: 'Meïssa Mbaye',
    realisation: {
      nom: 'Nano Design',
      rccm: '', // À compléter
      ninea: '013427358', // Nano, 30/10/2026
      ville: '', // À compléter
      contact: '', // E-mail ou site à afficher, à compléter
    },
    // Hébergeur choisi par Nano (28/10/2026). Raison sociale et adresse à vérifier sur la facture IONOS.
    hebergeur: 'IONOS SARL — 7 place de la Gare, BP 70109, 57204 Sarreguemines Cedex, France — www.ionos.fr',
  },
};

export const whatsappUrl = `https://wa.me/${site.whatsapp.numero}`;
export const mailtoUrl = `mailto:${site.bookingEmail}`;
