import type { ImageMetadata } from 'astro';
import type { L10n } from '@/i18n';

/**
 * Galerie photos de l'Espace pro — future médiathèque Directus.
 * Fichiers préparés depuis medias-sources/IMG_Meissa (orientation corrigée, métadonnées retirées) :
 * miniatures optimisées depuis src/assets/galerie, téléchargements depuis public/galerie (mêmes noms).
 * Photos d'ateliers : uniquement des plans larges, sans visage d'enfant reconnaissable.
 */
export type CategorieGalerie = 'scene' | 'conteur' | 'portrait' | 'ateliers';

export const categoriesGalerie: { id: CategorieGalerie; label: L10n }[] = [
  { id: 'scene', label: { fr: 'Scène', en: 'On stage' } },
  { id: 'conteur', label: { fr: 'Conteur · Génies', en: 'Storyteller · Génies' } },
  { id: 'portrait', label: { fr: 'Portraits', en: 'Portraits' } },
  { id: 'ateliers', label: { fr: 'Ateliers et transmission', en: 'Workshops and teaching' } },
];

export const creditGalerie: L10n = { fr: '© Meïssa Mbaye, droits réservés', en: '© Meïssa Mbaye, all rights reserved' };

/** Une archive par catégorie (une archive unique deviendrait trop lourde quand la galerie grandira). */
export const zipsGalerie: Record<CategorieGalerie, string> = {
  scene: '/galerie/meissa-mbaye-photos-scene.zip',
  conteur: '/galerie/meissa-mbaye-photos-conteur.zip',
  portrait: '/galerie/meissa-mbaye-photos-portrait.zip',
  ateliers: '/galerie/meissa-mbaye-photos-ateliers.zip',
};

/** Aperçu de l'Espace pro : 8 photos variées, dans cet ordre. */
export const selectionApercu = ['scene-01', 'portrait-02', 'scene-03', 'portrait-10', 'scene-05', 'portrait-01', 'scene-08', 'ateliers-01'];

/** Nombre de photos affichées d'un coup sur la page Galerie (puis « Afficher plus »). */
export const parLot = 24;

const alts: Record<string, L10n> = {
  'scene-01': { fr: 'Meïssa Mbaye chante au micro dans une lumière dorée, un musicien derrière lui', en: 'Meïssa Mbaye singing at the microphone in golden light, a musician behind him' },
  'scene-02': { fr: 'Meïssa Mbaye chante en jouant du djembé, lumière chaude', en: 'Meïssa Mbaye singing while playing the djembe, warm light' },
  'scene-03': { fr: 'Meïssa Mbaye au djembé et son guitariste sur scène, en noir et blanc', en: 'Meïssa Mbaye on djembe with his guitarist on stage, black and white' },
  'scene-04': { fr: 'Meïssa Mbaye chante les yeux fermés, son guitariste à ses côtés, en noir et blanc', en: 'Meïssa Mbaye singing with eyes closed, his guitarist beside him, black and white' },
  'scene-05': { fr: 'Meïssa Mbaye raconte au micro, la main levée près du visage', en: 'Meïssa Mbaye telling a tale at the microphone, hand raised near his face' },
  'scene-06': { fr: 'Meïssa Mbaye chante au micro derrière un djembé, en boubou bleu', en: 'Meïssa Mbaye singing at the microphone behind a djembe, in a blue boubou' },
  'scene-07': { fr: 'Meïssa Mbaye chante au micro, en noir et blanc', en: 'Meïssa Mbaye singing at the microphone, black and white' },
  'scene-08': { fr: 'Gros plan sur le visage de Meïssa Mbaye pendant un concert, en noir et blanc', en: 'Close-up of Meïssa Mbaye’s face during a concert, black and white' },
  'scene-09': { fr: 'Meïssa Mbaye sur scène, les yeux fermés, la main tendue, lumière chaude', en: 'Meïssa Mbaye on stage, eyes closed, hand outstretched, warm light' },
  'scene-10': { fr: 'Meïssa Mbaye chante à la guitare, en boubou bleu, accompagné d’un guitariste', en: 'Meïssa Mbaye singing with his guitar, in a blue boubou, with a guitarist' },
  'scene-11': { fr: 'Meïssa Mbaye chante au micro, en boubou bleu, devant les musiciens', en: 'Meïssa Mbaye singing at the microphone, in a blue boubou, in front of the musicians' },
  // Institut français du Sénégal, conte musical Génies (photos haute définition, 2048 px).
  'conteur-01': { fr: 'Meïssa Mbaye en boubou rouge conte, livre à la main, devant un large public de familles et d’enfants, en plein air à l’Institut français du Sénégal', en: 'Meïssa Mbaye in a red boubou telling a tale, book in hand, to a large audience of families and children, outdoors at the Institut français du Sénégal' },
  'conteur-02': { fr: 'Meïssa Mbaye en boubou rouge conte sur scène devant la bannière de l’Institut français du Sénégal', en: 'Meïssa Mbaye in a red boubou telling a tale on stage in front of the Institut français du Sénégal banner' },
  'conteur-03': { fr: 'Meïssa Mbaye raconte sur scène, accompagné d’un guitariste, d’un joueur de calebasse et d’un joueur de xalam', en: 'Meïssa Mbaye telling a tale on stage with a guitarist, a calabash player and a xalam player' },
  'conteur-04': { fr: 'Meïssa Mbaye en boubou rouge sur scène, aux côtés d’un autre artiste qui lève le bras', en: 'Meïssa Mbaye in a red boubou on stage, beside another artist raising his arm' },
  'portrait-01': { fr: 'Meïssa Mbaye avec sa guitare, au bord de la mer', en: 'Meïssa Mbaye with his guitar by the sea' },
  'portrait-02': { fr: 'Meïssa Mbaye debout sur les rochers face à la mer, sa guitare sur l’épaule', en: 'Meïssa Mbaye standing on the rocks by the sea, guitar over his shoulder' },
  'portrait-03': { fr: 'Meïssa Mbaye joue de la guitare, debout, sur fond de ciel clair', en: 'Meïssa Mbaye playing guitar, standing, against a pale sky' },
  'portrait-04': { fr: 'Meïssa Mbaye accoudé sur une pierre blanche, sa guitare à la main', en: 'Meïssa Mbaye leaning on a white stone, guitar in hand' },
  'portrait-05': { fr: 'Meïssa Mbaye accoudé sur une pierre blanche avec sa guitare, plan large', en: 'Meïssa Mbaye leaning on a white stone with his guitar, wide shot' },
  'portrait-06': { fr: 'Meïssa Mbaye joue de la guitare parmi des tombes blanches, au soleil', en: 'Meïssa Mbaye playing guitar among white tombs, in the sun' },
  'portrait-07': { fr: 'Meïssa Mbaye assis avec sa guitare, au-dessus d’un cimetière marin', en: 'Meïssa Mbaye seated with his guitar above a seaside cemetery' },
  'portrait-08': { fr: 'Meïssa Mbaye de profil, la main ouverte, comme en train de raconter', en: 'Meïssa Mbaye in profile, hand open, as if telling a story' },
  'portrait-09': { fr: 'Meïssa Mbaye debout dans un cimetière marin, face à la mer', en: 'Meïssa Mbaye standing in a seaside cemetery, facing the sea' },
  'portrait-10': { fr: 'Meïssa Mbaye en boubou bleu, souriant, au milieu des herbes hautes', en: 'Meïssa Mbaye in a blue boubou, smiling, among tall grass' },
  'ateliers-01': { fr: 'Spectacle de Meïssa Mbaye devant un jeune public, vu du fond de la salle', en: 'Meïssa Mbaye performing for a young audience, seen from the back of the room' },
  'ateliers-02': { fr: 'Meïssa Mbaye et un guitariste sur scène devant des élèves', en: 'Meïssa Mbaye and a guitarist on stage in front of pupils' },
  'ateliers-03': { fr: 'Table ronde des ateliers pédagogiques, Francophonie Dakar 2014', en: 'Teaching workshops panel, Francophonie Dakar 2014' },
};

export type PhotoGalerie = {
  id: string;
  categorie: CategorieGalerie;
  src: ImageMetadata;
  telechargement: string;
  alt: L10n;
};

const fichiers = import.meta.glob<{ default: ImageMetadata }>('/src/assets/galerie/*.jpg', { eager: true });

export const photosGalerie: PhotoGalerie[] = Object.entries(fichiers)
  .map(([chemin, module]) => {
    const nom = chemin.split('/').pop()!;
    const id = nom.replace(/^meissa-mbaye-|\.jpg$/g, '');
    return {
      id,
      categorie: id.split('-')[0] as CategorieGalerie,
      src: module.default,
      telechargement: `/galerie/${nom}`,
      alt: alts[id] ?? { fr: 'Photo de Meïssa Mbaye', en: 'Photo of Meïssa Mbaye' },
    };
  })
  .sort((a, b) => categoriesGalerie.findIndex((c) => c.id === a.categorie) - categoriesGalerie.findIndex((c) => c.id === b.categorie) || a.id.localeCompare(b.id));
