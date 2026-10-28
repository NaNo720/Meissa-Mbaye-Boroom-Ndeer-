import type { ImageMetadata } from 'astro';
import type { L10n } from '@/i18n';
import duoScene from '@/assets/photos/musicien/duo-scene.jpg';
import duoPortrait from '@/assets/photos/musicien/duo-portrait.jpg';
import conteur from '@/assets/photos/musicien/conteur.jpg';
import guitareMer from '@/assets/photos/musicien/guitare-mer.jpg';
import micro from '@/assets/photos/musicien/micro.jpg';
import visage from '@/assets/photos/musicien/visage.jpg';
import spectacleSalle from '@/assets/photos/pedagogue/spectacle-salle.jpg';
import spectacleDuo from '@/assets/photos/pedagogue/spectacle-duo.jpg';
import sceneBoubouJaune from '@/assets/photos/musicien/scene-boubou-jaune.jpg';
import geniesCouverture from '@/assets/photos/genies-couverture.jpg';
import institutFrancais1 from '@/assets/photos/pedagogue/Institut_Francaise1.jpg';
import institutFrancais2 from '@/assets/photos/pedagogue/Institut_Francaise2.jpg';
import institutFrancais3 from '@/assets/photos/pedagogue/Institut_Francaise3.jpg';
import institutFrancais4 from '@/assets/photos/pedagogue/Institut_Francaise4.jpg';
import duoGuitaresSalleRouge from '@/assets/photos/musicien/duo-guitares-salle-rouge.jpg';
// Image générée par IA (Figma, 28/10/2026), à afficher avec la mention « Illustration ».
import bokkBaatChorale from '@/assets/photos/illustrations/bokk-baat-chorale.jpg';

/**
 * Photos du site — future médiathèque Directus. Originaux : medias-sources/IMG_Meissa.
 * Photos avec des enfants : uniquement des plans larges, sans visage reconnaissable,
 * tant que les autorisations parentales ne sont pas confirmées.
 */
export type Photo = { src: ImageMetadata; alt: L10n };

export const photos = {
  duoScene: {
    src: duoScene,
    alt: { fr: 'Meïssa Mbaye au djembé et son guitariste sur scène', en: 'Meïssa Mbaye on djembe with his guitarist on stage' },
  },
  duoPortrait: {
    src: duoPortrait,
    alt: { fr: 'Meïssa Mbaye chante, son guitariste à ses côtés', en: 'Meïssa Mbaye singing, his guitarist beside him' },
  },
  conteur: {
    src: conteur,
    alt: { fr: 'Meïssa Mbaye raconte au micro, la main levée', en: 'Meïssa Mbaye telling a tale at the microphone, hand raised' },
  },
  guitareMer: {
    src: guitareMer,
    alt: { fr: 'Portrait de Meïssa Mbaye avec sa guitare, au bord de la mer', en: 'Portrait of Meïssa Mbaye with his guitar by the sea' },
  },
  micro: {
    src: micro,
    alt: { fr: 'Meïssa Mbaye chante au micro dans une lumière dorée', en: 'Meïssa Mbaye singing at the microphone in golden light' },
  },
  visage: {
    src: visage,
    alt: { fr: 'Gros plan sur le visage de Meïssa Mbaye pendant un concert', en: 'Close-up of Meïssa Mbaye’s face during a concert' },
  },
  spectacleSalle: {
    src: spectacleSalle,
    alt: { fr: 'Spectacle de Meïssa Mbaye devant un jeune public, vu du fond de la salle', en: 'Meïssa Mbaye performing for a young audience, seen from the back of the room' },
  },
  spectacleDuo: {
    src: spectacleDuo,
    alt: { fr: 'Meïssa Mbaye et un guitariste sur scène devant des élèves', en: 'Meïssa Mbaye and a guitarist on stage in front of pupils' },
  },
  sceneBoubouJaune: {
    src: sceneBoubouJaune,
    alt: { fr: 'Meïssa Mbaye en boubou jaune joue des percussions sur scène', en: 'Meïssa Mbaye in a yellow boubou playing percussion on stage' },
  },
  conteurInstitutFrancais: {
    src: institutFrancais1,
    alt: {
      fr: 'Meïssa Mbaye conte sur scène en boubou rouge, devant la bannière de l’Institut français du Sénégal',
      en: 'Meïssa Mbaye telling a tale on stage in a red boubou, in front of the Institut français du Sénégal banner',
    },
  },
  // Plan large : le public est vu de dos ou de loin, aucun visage d'enfant reconnaissable en gros plan.
  conteurPublic: {
    src: institutFrancais4,
    alt: {
      fr: 'Meïssa Mbaye en boubou rouge conte, livre à la main, devant un large public de familles et d’enfants, en plein air à l’Institut français du Sénégal',
      en: 'Meïssa Mbaye in a red boubou telling a tale, book in hand, to a large audience of families and children, outdoors at the Institut français du Sénégal',
    },
  },
  duoGuitaresSalleRouge: {
    src: duoGuitaresSalleRouge,
    alt: {
      fr: 'Meïssa Mbaye à la guitare avec un guitariste, en duo dans une salle aux murs rouges, une calebasse posée près de lui',
      en: 'Meïssa Mbaye playing guitar with a guitarist, as a duo in a room with red walls, a calabash beside him',
    },
  },
  bokkBaatChorale: {
    src: bokkBaatChorale,
    alt: {
      fr: 'Illustration : une chorale interculturelle chante sur scène, en wax et en tenues de tous les jours, sous la direction d’un chef de chœur, un djembé posé au sol',
      en: 'Illustration: an intercultural choir singing on stage, in wax prints and everyday clothes, led by a choir conductor, a djembe on the floor',
    },
  },
  conteurSalut: {
    src: institutFrancais2,
    alt: {
      fr: 'Meïssa Mbaye en boubou rouge sur scène, aux côtés d’un autre artiste qui lève le bras',
      en: 'Meïssa Mbaye in a red boubou on stage, beside another artist raising his arm',
    },
  },
  conteurSceneGenies: {
    src: institutFrancais3,
    alt: {
      fr: 'Meïssa Mbaye en boubou rouge raconte sur scène, accompagné d’un guitariste, d’un joueur de calebasse et d’un joueur de xalam, devant un décor de vanneries',
      en: 'Meïssa Mbaye in a red boubou telling a tale on stage, with a guitarist, a calabash player and a xalam player, in front of woven basket decorations',
    },
  },
  geniesCouverture: {
    src: geniesCouverture,
    alt: { fr: 'Couverture du livre Génies : créatures et mythologies du Sénégal', en: 'Cover of the book Génies : créatures et mythologies du Sénégal' },
  },
} satisfies Record<string, Photo>;
