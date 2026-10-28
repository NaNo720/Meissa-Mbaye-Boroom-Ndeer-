import type { L10n } from '@/i18n';
import { site } from './site';

/** Collection Directus `spectacles`. Textes EN : traduction à valider par Meïssa. */
export type OffreId = 'borom-ndeer' | 'conteur';

export type Spectacle = {
  id: OffreId;
  titre: L10n;
  slug: string;
  duree: L10n | null;
  formation: L10n;
  ficheTechnique: string;
  dossierPresse: string;
  /** Vidéo YouTube ; `debut` = seconde de départ (paramètre t= du lien). */
  captation: { youtubeId: string; libelle: L10n; debut?: number };
};

const pdf = (fichier: string) => (site.epk.pdfPublies ? `/PDF/${fichier}` : '');
const fiche = (fichier: string) => (site.epk.fichesTechniquesPretes ? pdf(fichier) : '');

export const spectacles: Record<OffreId, Spectacle> = {
  'borom-ndeer': {
    id: 'borom-ndeer',
    titre: { fr: 'Meïssa Mbaye Boroom Ndeer', en: 'Meïssa Mbaye Boroom Ndeer' },
    slug: 'borom-ndeer',
    // Confirmée par Nano le 20/10/2026 (la fiche technique PDF indique encore 1 h 15).
    duree: { fr: '1 h 30', en: '1 hr 30 min' },
    formation: { fr: 'Solo, duo ou avec sa tribu (sextet)', en: 'Solo, duo or with his band (sextet)' },
    // Fiche technique du concert pas encore disponible (Nano, 26/10/2026) : bouton masqué.
    // Pour la réactiver : fiche('Fiche-technique-Meissa-Mbaye-concert.pdf')
    ficheTechnique: '',
    // Press book (fourni par Nano le 26/10/2026), remplace Dossier-de-presse-Meissa-Mbaye-chanteur.pdf.
    // Contient en dernière page les contacts de l'ancienne agence Dérapage Prod (signalé à Nano).
    dossierPresse: pdf('Press-book-Meissa-Mbaye.pdf'),
    captation: {
      // https://www.youtube.com/watch?v=WlEC90pfHcI&t=4s (choisie par Nano le 21/10/2026)
      youtubeId: 'WlEC90pfHcI',
      debut: 4,
      libelle: { fr: 'Meïssa à Berlin, en concert', en: 'Meïssa in Berlin, in concert' },
    },
  },
  conteur: {
    id: 'conteur',
    titre: { fr: 'Meïssa conteur', en: 'Meïssa the storyteller' },
    slug: 'conteur',
    // Confirmée par Nano le 20/10/2026 (la fiche technique PDF indique encore 50 min / 1 h).
    duree: { fr: '45 min', en: '45 min' },
    formation: { fr: 'Solo, version légère en classe', en: 'Solo, light version for classrooms' },
    // Fiche technique de Génies masquée (Nano, 27/10/2026). Pour la réactiver : fiche('Fiche-technique-Meissa-Mbaye-Genies.pdf')
    ficheTechnique: '',
    // Même press book que la page Biographie (Nano, 27/10/2026), remplace Dossier-de-presse-Meissa-Mbaye-conteur.pdf.
    dossierPresse: pdf('Press-book-Meissa-Mbaye.pdf'),
    captation: {
      youtubeId: '',
      libelle: { fr: '[Captation live du conte, 2 à 3 min]', en: '[Live recording of the tale, 2 to 3 min]' },
    },
  },
};

/** EPK complet (PDF), proposé dans l'Espace pro. */
export const epkComplet = pdf('EPK-Meissa-Mbaye.pdf');

/** Dossier pédagogue (PDF) : formations, coaching, ateliers jeunesse autour de Génies. */
export const dossierPedagogue = pdf('Dossier-Meissa-Mbaye-pedagogue.pdf');

/** Couleur d'identité de chaque offre (charte : terracotta = Boroom Ndeer, indigo = Conteur). */
export const accent: Record<OffreId, { texte: string; fond: string; pastille: string }> = {
  'borom-ndeer': { texte: 'text-terracotta', fond: 'bg-terracotta', pastille: 'bg-[#EBD5C8] text-[#7A3215]' },
  conteur: { texte: 'text-indigo', fond: 'bg-indigo', pastille: 'bg-[#DCDDE6] text-[#1D2650]' },
};
