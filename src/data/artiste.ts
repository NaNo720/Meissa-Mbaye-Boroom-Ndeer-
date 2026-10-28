import type { ImageMetadata } from 'astro';
import type { L10n } from '@/i18n';
import pochetteBackToAfrica from '@/assets/photos/albums/back-to-africa.jpg';
import pochetteEmotions from '@/assets/photos/albums/emotions-blanches-et-negres.jpg';
import pochetteEntreSeineEtSine from '@/assets/photos/albums/entre-seine-et-sine.jpg';
import pochetteNightInCasamance from '@/assets/photos/albums/night-in-casamance.jpg';
import pochetteSenegal from '@/assets/photos/albums/kunta-kinte-senegal.jpg';
import pochetteOccitanAfrica from '@/assets/photos/albums/kunta-kinte-occitan-africa.jpg';

/**
 * Presse, références et discographie — collections Directus `articles_presse`, `medias`, `contenus`.
 * Règle : aucun fait inventé. Sources fiables : faits vérifiés (CLAUDE.md, section 10) et documents
 * de l'équipe (medias-sources/IMG_Meissa/capture_infos_meissa, medias-sources/EPK). Le reste porte [À CONFIRMER].
 */

const lienRfi2024 =
  'https://www.rfi.fr/fr/podcasts/litt%C3%A9rature-sans-fronti%C3%A8res/20240308-sp%C3%A9ciale-sc%C3%A8ne-africaine-au-salon-du-livre-de-gen%C3%A8ve';
const lienSenePlus = 'https://www.seneplus.com/article/senghor-et-paul-valery-en-do-re-mi';
const lienTakamTikou = 'https://takamtikou.bnf.fr/print/pdf/node/3856';

/** Bandeau « Ils en parlent » — médias cités dans l'EPK (octobre 2026). */
export const ilsEnParlent: { media: string; lien: string }[] = [
  { media: 'RFI', lien: lienRfi2024 },
  { media: 'Marianne', lien: '' },
  { media: 'La Marseillaise', lien: '' },
  { media: 'Der Bund', lien: '' },
  { media: 'Sud Quotidien', lien: lienSenePlus },
  { media: 'Le Dauphiné Libéré', lien: '' },
  { media: 'BnF · Takam Tikou', lien: lienTakamTikou },
];

/** Citations de presse (EPK). Les titres restent dans leur langue d'origine. */
export const citations: { texte: string; media: string; lang?: string }[] = [
  { texte: 'Meïssa, prince des poètes', media: 'La Marseillaise' },
  { texte: 'Un griot sénégalais fait résonner le verbe africain', media: 'La Marseillaise' },
  { texte: 'Prince des poètes du Sénégal', media: 'Der Bund, Suisse' },
  { texte: 'Meïssa : voz de la africanía universal', media: 'Correo Semanal', lang: 'es' },
  { texte: 'Prélude à l’année Senghor', media: 'L’Espace' },
  { texte: 'Senghor et Paul Valéry en do ré mi', media: 'Sud Quotidien · SenePlus, novembre 2014' },
  { texte: 'Des poèmes de Senghor et Paul Valéry mis en musique', media: 'Enquête, Dakar, 2014' },
  { texte: 'Magie noire ? Non ! L’authenticité au secours du mythe. Bravo !', media: 'Radio Cité Vauban' },
  { texte: 'Sept contes traditionnels richement illustrés, avec un QR code pour écouter le livre entier', media: 'Takam Tikou, Bibliothèque nationale de France' },
  { texte: 'Un poète-musicien itinérant', media: 'Sud Quotidien' },
  { texte: 'La Nuit des Griots', media: 'Le Dauphiné Libéré' },
];

/**
 * Lieux où Meïssa s'est produit (medias-sources/Word/Listes des festivals.docx).
 * Orthographes confirmées par Nano le 23/10/2026.
 */
export const scenes: { groupe: L10n; lieux: string[] }[] = [
  {
    groupe: { fr: 'Instituts français', en: 'Instituts français' },
    lieux: ['Dakar', 'Alexandrie', 'Johannesburg', 'Port-au-Prince', 'Asunción', 'Londres'],
  },
  {
    groupe: { fr: 'Festivals', en: 'Festivals' },
    lieux: ['Voix Vives, Sète', 'Fête des 5 continents, Tombouctou', 'Afro-Pfingsten, Zurich'],
  },
  {
    groupe: { fr: 'Salles', en: 'Venues' },
    lieux: ['New Morning, Paris', 'Just 4 U, Dakar', 'Café Cuba, Duisburg'],
  },
  {
    groupe: { fr: 'Alliances françaises en Allemagne', en: 'Alliances françaises in Germany' },
    lieux: ['Berlin', 'Munich'],
  },
];

/** Trois citations mises en avant sur la page Boroom Ndeer (indices dans `citations`). */
export const citationsBoromNdeer = [1, 2, 5].map((i) => citations[i]);

export const egalementDans =
  'RFI (2005, 2006, 2024), Marianne (n° 447, novembre 2005), Le Soleil, Le Quotidien, Le Témoin, Midi Libre, Mondomix, Balafon, So What, Africultures, Au Sénégal, Printemps des Poètes, Francofonies.';

/** Section « En ligne » de l'EPK. */
export const enLigne: { titre: string; detail: L10n; lien: string }[] = [
  { titre: 'Femme noire', detail: { fr: 'Vidéo · poème de Senghor chanté', en: 'Video · Senghor poem, sung' }, lien: 'https://youtu.be/0lUZdctvOFM' },
  { titre: 'Meïssa à Berlin', detail: { fr: 'Vidéo · concert', en: 'Video · concert' }, lien: 'https://www.youtube.com/watch?v=WlEC90pfHcI' },
  { titre: 'Senghor et Paul Valéry en do ré mi', detail: { fr: 'SenePlus · 11 novembre 2014', en: 'SenePlus · 11 November 2014' }, lien: lienSenePlus },
  { titre: 'Back to Africa', detail: { fr: 'Afrisson · fiche de l’album', en: 'Afrisson · album page' }, lien: 'https://www.afrisson.com/back-to-africa-6339/' },
  { titre: 'Fiche artiste', detail: { fr: 'Conseil francophone de la chanson', en: 'Conseil francophone de la chanson' }, lien: 'https://www.conseilfrancophone.org/mbaye-meissa-artiste-conseil-francophone-de-la-chanson/' },
  { titre: 'Écouter les contes de Génies', detail: { fr: 'Audio · le livre en entier', en: 'Audio · the whole book' }, lien: 'https://l.ead.me/beLeeS' },
  { titre: 'Spéciale scène africaine, Salon du livre de Genève', detail: { fr: 'RFI · 8 mars 2024', en: 'RFI · 8 March 2024' }, lien: lienRfi2024 },
  { titre: 'Génies, le nouveau livre de Meïssa Mbaye', detail: { fr: 'Au Sénégal · 18 janvier 2024', en: 'Au Sénégal · 18 January 2024' }, lien: 'https://au-senegal.com/genies-le-nouveau-livre-de-meissa-mbaye,16703.html' },
  { titre: 'Critique de Génies', detail: { fr: 'Takam Tikou · BnF', en: 'Takam Tikou · BnF' }, lien: lienTakamTikou },
  { titre: 'Sélection 2026', detail: { fr: 'Opalivres', en: 'Opalivres' }, lien: 'https://www.opalivres.fr/la-collection/selections-du-mois/genies-creatures-mythologies-du-senegal/' },
  { titre: 'Fiche auteur', detail: { fr: 'Ricochet, littérature jeunesse', en: 'Ricochet, children’s literature' }, lien: 'https://ricochet-jeunes.org/node/455563' },
  { titre: 'Fiche du livre', detail: { fr: 'Livres Hebdo · ISBN 978-2-494527-19-5', en: 'Livres Hebdo · ISBN 978-2-494527-19-5' }, lien: 'https://www.livreshebdo.fr/livres/genies-creatures-mythologies-du-senegal-saaraba-editions-9782494527195' },
  { titre: 'Fiche auteur', detail: { fr: 'Saaraba Éditions', en: 'Saaraba Éditions' }, lien: 'https://www.saaraba-editions.com/fiche-argumentaire-1-2-2-1-1-1-1-1-1-1-1-1' },
  { titre: 'Biographie', detail: { fr: 'Lisez.com · Editis', en: 'Lisez.com · Editis' }, lien: 'https://www.lisez.com/auteurs/meissa-mbaye' },
];

export const distinctions: L10n[] = [
  { fr: "Prix IFCIC de l'UNESCO", en: 'UNESCO IFCIC Prize' },
  { fr: 'Prix Printemps des Poètes, 2006', en: 'Printemps des Poètes Prize, 2006' },
  { fr: "Citoyen d'honneur de Sète", en: 'Honorary citizen of Sète' },
  { fr: 'Livre Génies, recensé par la BnF', en: 'Book Génies, reviewed by the BnF' },
];

export type Album = {
  annee: string;
  distinction?: L10n;
  titre: string;
  texte: L10n;
  ecouter: string;
  pochette: ImageMetadata | null;
  avecKuntaKinte?: boolean;
};

export const discographie: Album[] = [
  {
    annee: '2014',
    titre: 'Émotions blanches et nègres',
    texte: {
      fr: 'Paul Valéry et Senghor en musique, pour les Journées Paul Valéry à Sète et à Dakar.',
      en: 'Paul Valéry and Senghor set to music, for the Paul Valéry Days in Sète and Dakar.',
    },
    ecouter: '',
    pochette: pochetteEmotions,
  },
  {
    annee: '2007',
    titre: 'Back to Africa',
    texte: {
      fr: 'Hommage aux poètes nègres, enregistré à Dakar avec les slameurs Mike Ladd, Allonymous et Jayhem.',
      en: 'A tribute to the poets of Négritude, recorded in Dakar with slam poets Mike Ladd, Allonymous and Jayhem.',
    },
    ecouter: '',
    pochette: pochetteBackToAfrica,
  },
  {
    annee: '2005',
    distinction: { fr: "Prix IFCIC de l'UNESCO", en: 'UNESCO IFCIC Prize' },
    titre: 'Entre Seine et Sine',
    texte: {
      fr: 'Hommage à Senghor, où se mêlent kora, xalam, accordéon et violon.',
      en: 'A tribute to Senghor, blending kora, xalam, accordion and violin.',
    },
    ecouter: '',
    pochette: pochetteEntreSeineEtSine,
  },
  {
    annee: '1999',
    titre: 'Night in Casamance',
    texte: {
      fr: 'Premier album solo, paru chez Frémeaux & Associés.',
      en: 'First solo album, released by Frémeaux & Associés.',
    },
    ecouter: '',
    pochette: pochetteNightInCasamance,
  },
  {
    annee: '1998',
    titre: "Occitan'Africa",
    texte: { fr: 'Album du groupe afro-pop Kunta Kinté.', en: 'Album by the Afro-pop band Kunta Kinté.' },
    ecouter: '',
    pochette: pochetteOccitanAfrica,
    avecKuntaKinte: true,
  },
  {
    annee: '1992',
    titre: 'Sénégal',
    texte: {
      fr: 'Avec le groupe fondé en 1988, en tournée en France et en Europe.',
      en: 'With the band founded in 1988, touring France and Europe.',
    },
    ecouter: '',
    pochette: pochetteSenegal,
    avecKuntaKinte: true,
  },
];

export const discographieResume: L10n = {
  fr: 'Quatre albums solo et deux avec Kunta Kinté',
  en: 'Four solo albums and two with Kunta Kinté',
};
