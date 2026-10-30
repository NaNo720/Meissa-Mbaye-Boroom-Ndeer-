export const langs = ['fr', 'en'] as const;
export type Lang = (typeof langs)[number];

/** Texte disponible dans les deux langues (règle : tout texte existe en FR et EN). */
export type L10n = { fr: string; en: string };

export const tr = (text: L10n, lang: Lang) => text[lang];

/** Chemin d'une page dans une langue : `/` en FR, `/en/` en EN, même structure. */
export function href(lang: Lang, slug = '') {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  if (lang === 'fr') return clean ? `/${clean}` : '/';
  return clean ? `/en/${clean}` : '/en/';
}

/** Slug d'une page à partir de son URL, sans le préfixe de langue. */
export function slugOf(pathname: string) {
  const slug = pathname.replace(/^\/en(\/|$)/, '/').replace(/^\/+|\/+$/g, '');
  // La page 404 n'a pas d'équivalent dans l'autre langue : le sélecteur renvoie vers l'accueil.
  return slug === '404' ? '' : slug;
}

export const ui = {
  nav: {
    borom: { fr: 'Meïssa Mbaye Boroom Ndeer', en: 'Meïssa Mbaye Boroom Ndeer' },
    /** Libellé du menu pour la page /borom-ndeer. */
    biographie: { fr: 'Biographie', en: 'Biography' },
    conteur: { fr: 'Conteur', en: 'Storyteller' },
    pedagogue: { fr: 'Pédagogue', en: 'Teacher' },
    tournee: { fr: 'Tournée', en: 'Tour' },
    pro: { fr: 'Espace pro', en: 'Press & pro' },
    reserver: { fr: 'Réserver', en: 'Book' },
    menu: { fr: 'Menu', en: 'Menu' },
    fermer: { fr: 'Fermer le menu', en: 'Close menu' },
    principal: { fr: 'Navigation principale', en: 'Main navigation' },
    accueil: { fr: 'Meïssa Mbaye, accueil', en: 'Meïssa Mbaye, home' },
    langue: { fr: 'Langue', en: 'Language' },
    evitement: { fr: 'Aller au contenu', en: 'Skip to content' },
  },
  social: {
    suivre: { fr: 'Suivre Meïssa', en: 'Follow Meïssa' },
  },
  footer: {
    accroche: {
      fr: 'Griot, poète et conteur. Booking France, Belgique et international.',
      en: 'Griot, poet and storyteller. Booking in France, Belgium and worldwide.',
    },
    spectacles: { fr: 'Spectacles', en: 'Shows' },
    boromLong: { fr: 'Meïssa Mbaye Boroom Ndeer — chanteur-poète', en: 'Meïssa Mbaye Boroom Ndeer — singer-poet' },
    conteurLong: { fr: 'Meïssa conteur', en: 'Meïssa the storyteller' },
    ateliers: { fr: 'Formations et cours de chant', en: 'Training and singing lessons' },
    decouvrir: { fr: 'Découvrir', en: 'Discover' },
    livre: { fr: 'Le livre Génies', en: 'The book Génies' },
    parcours: { fr: 'Biographie et discographie', en: 'Biography and discography' },
    galerie: { fr: 'Galerie photos', en: 'Photo gallery' },
    contact: { fr: 'Contact', en: 'Contact' },
    reserverSpectacle: { fr: 'Réserver un spectacle', en: 'Book a show' },
    mentions: { fr: 'Mentions légales', en: 'Legal notice' },
    confidentialite: { fr: 'Confidentialité', en: 'Privacy' },
    realisation: { fr: 'Site réalisé par', en: 'Website by' },
    france: { fr: 'En France', en: 'In France' },
  },
  dates: {
    titre: { fr: 'Prochaines dates', en: 'Upcoming dates' },
    toutAgenda: { fr: "Tout l'agenda", en: 'Full calendar' },
    billetterie: { fr: 'Billetterie', en: 'Tickets' },
    aucune: {
      fr: 'Les prochaines dates seront annoncées bientôt.',
      en: 'Upcoming dates will be announced soon.',
    },
    heureLocale: { fr: 'heure locale', en: 'local time' },
  },
  commun: {
    decouvrir: { fr: 'Découvrir', en: 'Discover' },
    ecouter: { fr: 'Écouter', en: 'Listen' },
    bientot: { fr: 'Bientôt disponible', en: 'Coming soon' },
    lireVideo: { fr: 'Lire la vidéo', en: 'Play video' },
    pause: { fr: 'Pause', en: 'Pause' },
    lecture: { fr: 'Lecture', en: 'Play' },
    reponse48: {
      fr: 'Dossier de presse à télécharger. Réponse sous 48 h.',
      en: 'Press kit to download. Reply within 48 hours.',
    },
    dossierPresse: { fr: 'Dossier de presse (PDF)', en: 'Press kit (PDF)' },
    ficheTechnique: { fr: 'Fiche technique', en: 'Technical rider' },
    programmateursTitre: { fr: 'Programmateurs, tout est ici.', en: 'Programmers, everything is here.' },
    programmateursTexte: {
      fr: 'Dossiers de presse, fiches techniques, photos HD et dossier pédagogique, prêts à télécharger.',
      en: 'Press kits, technical riders, HD photos and teaching pack, ready to download.',
    },
    ouvrirPro: { fr: "Ouvrir l'espace pro", en: 'Open the pro area' },
    whatsapp: { fr: 'WhatsApp', en: 'WhatsApp' },
  },
} satisfies Record<string, Record<string, L10n>>;
