import type { L10n } from '@/i18n';
import { dossierPedagogue, epkComplet, spectacles } from './spectacles';

/**
 * Documents de l'espace pro — collection Directus `medias`.
 * Un document sans fichier s'affiche « Bientôt disponible », ou « Sur demande » s'il est marqué ainsi.
 */
export type DocumentPro = {
  titre: L10n;
  detail: L10n;
  fichier: string;
  surDemande?: boolean;
  /** Lien vers une section de la page plutôt qu'un fichier à télécharger. */
  ancre?: string;
};

export const documentsPro: { groupe: L10n; documents: DocumentPro[] }[] = [
  {
    groupe: { fr: "L'artiste", en: 'The artist' },
    documents: [
      {
        titre: { fr: 'EPK complet', en: 'Full EPK' },
        detail: { fr: 'PDF · présentation, spectacles, parcours, presse, contacts', en: 'PDF · overview, shows, career, press, contacts' },
        fichier: epkComplet,
      },
      {
        titre: { fr: 'Galerie photos', en: 'Photo gallery' },
        detail: { fr: 'Scène, portraits, ateliers · HD sur demande', en: 'Stage, portraits, workshops · HD on request' },
        fichier: '',
        ancre: '#galerie',
      },
      {
        titre: { fr: 'Extraits vidéo', en: 'Video excerpts' },
        detail: { fr: 'Captations de concerts et de contes', en: 'Concert and storytelling footage' },
        fichier: '',
        surDemande: true,
      },
    ],
  },
  {
    groupe: { fr: 'Meïssa Mbaye Boroom Ndeer — concert', en: 'Meïssa Mbaye Boroom Ndeer — concert' },
    documents: [
      { titre: { fr: 'Dossier de presse', en: 'Press kit' }, detail: { fr: 'PDF · spectacle, parcours, discographie, presse', en: 'PDF · show, career, discography, press' }, fichier: spectacles['borom-ndeer'].dossierPresse },
      { titre: { fr: 'Fiche technique', en: 'Technical rider' }, detail: { fr: 'PDF · solo, duo, sextet : plateau, son, lumière', en: 'PDF · solo, duo, sextet: stage, sound, lighting' }, fichier: spectacles['borom-ndeer'].ficheTechnique },
    ],
  },
  {
    groupe: { fr: 'Génies — conte musical', en: 'Génies — musical tale' },
    documents: [
      { titre: { fr: 'Dossier de presse', en: 'Press kit' }, detail: { fr: 'PDF · conte, livre, dates, presse', en: 'PDF · tale, book, dates, press' }, fichier: spectacles.conteur.dossierPresse },
      { titre: { fr: 'Fiche technique', en: 'Technical rider' }, detail: { fr: 'PDF · version légère en classe et version scène', en: 'PDF · light classroom version and stage version' }, fichier: spectacles.conteur.ficheTechnique },
      {
        titre: { fr: 'Dossier pédagogue', en: 'Teaching and training pack' },
        detail: { fr: 'PDF · ateliers scolaires, formations, coaching', en: 'PDF · school workshops, training, coaching (in French)' },
        fichier: dossierPedagogue,
      },
    ],
  },
];
