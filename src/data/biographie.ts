import type { L10n } from '@/i18n';

/**
 * Biographie de Meïssa Mbaye, découpée par facette :
 * - biographie du musicien (Boroom Ndeer, son nom d'artiste musicien) → page /borom-ndeer ;
 * - transmission auprès du jeune public → page /conteur.
 * Texte de la biographie fourni par Nano le 21/10/2026 (traduction anglaise à valider).
 */
export type SectionBio = { titre: L10n; paragraphes: L10n[] };

/** Biographie complète affichée à côté du portrait sur /borom-ndeer. */
export const biographie: SectionBio[] = [
  {
    titre: { fr: 'Boroom Ndeer, la voix du tambour', en: 'Boroom Ndeer, the voice of the drum' },
    paragraphes: [
      {
        fr: 'Dans les royaumes wolofs, le Ndeer était le tambour des grands moments : il annonçait la guerre, portait les messages de paix et accompagnait les actes qui engageaient le destin du peuple. Sa voix n’était confiée qu’à un seul griot, le Boroom Ndeer, gardien de cette charge prestigieuse. Meïssa Mbaye est l’héritier de cette lignée. Si le Ndeer a perdu une part de son caractère sacré, son histoire continue de résonner à travers lui.',
        en: 'In the Wolof kingdoms, the Ndeer was the drum of great moments: it announced war, carried messages of peace and accompanied the acts that shaped the people’s destiny. Its voice was entrusted to a single griot, the Boroom Ndeer, keeper of this prestigious charge. Meïssa Mbaye is the heir to that lineage. Though the Ndeer has lost part of its sacred character, its story still resonates through him.',
      },
    ],
  },
  {
    titre: { fr: 'Une voix de griot', en: 'A griot’s voice' },
    paragraphes: [
      {
        fr: 'Né à Dakar en 1959 dans une famille à la fois royale et de griots, Meïssa Mbaye est chanteur, poète et conteur. Les siens l’ont surnommé « Prince des poètes ». Depuis près de quarante ans, il porte la parole africaine en chanson comme en conte, de Dakar à Atlanta, de Tombouctou à Munich.',
        en: 'Born in Dakar in 1959 into a family both royal and of griots, Meïssa Mbaye is a singer, poet and storyteller. His people nicknamed him “Prince of Poets”. For nearly forty years he has carried the African spoken word in song as in storytelling, from Dakar to Atlanta, from Timbuktu to Munich.',
      },
      {
        fr: 'Il se forme aux chants sacrés et profanes auprès du grand maître du chant griot Cheikh Mbaye Baka, aux polyphonies africaines avec Farid Payet au Théâtre du Lierre à Paris, au gospel à Atlanta avec la chorale de l’Ebenezer Church, et au chant classique au conservatoire d’Île-de-France.',
        en: 'He trained in sacred and secular song with the great griot master Cheikh Mbaye Baka, in African polyphony with Farid Payet at the Théâtre du Lierre in Paris, in gospel in Atlanta with the Ebenezer Church choir, and in classical singing at the Île-de-France conservatoire.',
      },
    ],
  },
  {
    titre: { fr: 'Kunta Kinté, l’afro-pop', en: 'Kunta Kinté, Afro-pop' },
    paragraphes: [
      {
        fr: 'En 1988, il participe à la création du groupe Kunta Kinté, du nom du héros de la série « Racines ». « Il s’agissait de revendiquer le lien musical avec la diaspora afro-américaine. On était bercé autant par Wilson Pickett que par Nougaro ou les Touré Kunda, c’était de l’afro-pop ! », se souvient-il. Avec le groupe, il enregistre Sénégal et tourne en France et en Europe.',
        en: 'In 1988 he co-founded the band Kunta Kinté, named after the hero of the TV series “Roots”. “We wanted to claim our musical bond with the African-American diaspora. We grew up on Wilson Pickett as much as on Nougaro or Touré Kunda — it was Afro-pop!” he recalls. With the band he recorded Sénégal and toured France and Europe.',
      },
    ],
  },
  {
    titre: { fr: 'Senghor en musique', en: 'Senghor set to music' },
    paragraphes: [
      {
        fr: 'Après plusieurs années aux États-Unis, où il approfondit le gospel, il sort son premier album solo, Night in Casamance (1999, Frémeaux & Associés). C’est le début d’un long chemin dans l’œuvre de Léopold Sédar Senghor.',
        en: 'After several years in the United States, where he deepened his gospel singing, he released his first solo album, Night in Casamance (1999, Frémeaux & Associés). It was the start of a long journey through the work of Léopold Sédar Senghor.',
      },
      {
        fr: 'Entre Seine et Sine (Nocturne, 2005) est un voyage dans l’imaginaire du poète, où se mêlent kora, xalam, accordéon et violon. L’album reçoit le Prix IFCIC de l’UNESCO et le Prix Printemps des Poètes 2006.',
        en: 'Entre Seine et Sine (Nocturne, 2005) is a journey into the poet’s imagination, blending kora, xalam, accordion and violin. The album won the UNESCO IFCIC Prize and the 2006 Printemps des Poètes Prize.',
      },
      {
        fr: 'Back to Africa (2007), enregistré à Dakar avec les slameurs Mike Ladd, Allonymous et Jayhem, rend hommage aux poètes de la Négritude.',
        en: 'Back to Africa (2007), recorded in Dakar with slam poets Mike Ladd, Allonymous and Jayhem, pays tribute to the poets of Négritude.',
      },
      {
        fr: 'En 2006, l’UNESCO le sollicite pour le centenaire de la naissance de Senghor.',
        en: 'In 2006 UNESCO invited him to take part in the centenary of Senghor’s birth.',
      },
      {
        fr: 'En 2014, Émotions blanches et nègres met en musique Paul Valéry et Senghor pour les Journées Paul Valéry, à Sète et à Dakar. Le spectacle, avec l’Orchestre national du Sénégal, est retenu pour le Sommet de la Francophonie à Dakar.',
        en: 'In 2014, Émotions blanches et nègres set Paul Valéry and Senghor to music for the Paul Valéry Days in Sète and Dakar. The show, with the Orchestre national du Sénégal, was selected for the Francophonie Summit in Dakar.',
      },
      {
        fr: 'Il signe aussi la musique du film La Rose Noire de Jean Sagos, diffusé sur TF1. Ses concerts l’ont mené aux États-Unis, au Royaume-Uni, en Allemagne, en Italie, en Égypte, en Haïti, en Afrique du Sud, au Mali jusqu’à Tombouctou, en France et au Sénégal.',
        en: 'He also composed the score for Jean Sagos’s film La Rose Noire, broadcast on TF1. His concerts have taken him to the United States, the United Kingdom, Germany, Italy, Egypt, Haiti, South Africa, Mali as far as Timbuktu, France and Senegal.',
      },
    ],
  },
  {
    titre: { fr: 'Transmettre la voix', en: 'Passing on the voice' },
    paragraphes: [
      {
        fr: 'Meïssa Mbaye transmet aussi son art. Il a enseigné la technique du chant africain aux États-Unis avec Ajile, du groupe Arrested Development, initié les chanteurs de l’Opéra de Munich lors d’une master class, et formé de jeunes talents aux chants de la diversité culturelle sénégalaise dans un programme financé par l’Union européenne.',
        en: 'Meïssa Mbaye also passes on his art. He has taught African singing technique in the United States with Ajile of Arrested Development, introduced the singers of the Munich Opera to it in a master class, and trained young talent in the songs of Senegal’s cultural diversity in a programme funded by the European Union.',
      },
    ],
  },
  {
    titre: { fr: 'Aujourd’hui', en: 'Today' },
    paragraphes: [
      {
        fr: 'Il dirige le Werekaan Institute, consacré à l’art oratoire africain, et prépare un livre de formation, L’éloquence africaine : le Werekaan. Auteur de Génies, il se produit en deux formules : chanteur-poète en duo avec guitare, et conteur en solo.',
        en: 'He leads the Werekaan Institute, dedicated to African oratory, and is preparing a training book, L’éloquence africaine : le Werekaan. Author of Génies, he performs in two formats: singer-poet in a duo with guitar, and storyteller solo.',
      },
      {
        fr: 'En mars 2027, il célébrera près de quarante ans de scène lors d’un concert anniversaire à Dakar.',
        en: 'In March 2027 he will celebrate nearly forty years on stage with an anniversary concert in Dakar.',
      },
    ],
  },
];

/** Bandeau de repères sous la biographie de Boroom Ndeer : la crédibilité en un coup d'œil. */
export const bandeauReperes: { valeur: L10n; detail: L10n }[] = [
  { valeur: { fr: 'Prix IFCIC · UNESCO', en: 'IFCIC Prize · UNESCO' }, detail: { fr: '2005 · Entre Seine et Sine', en: '2005 · Entre Seine et Sine' } },
  { valeur: { fr: 'Sommet de la Francophonie', en: 'Francophonie Summit' }, detail: { fr: 'Dakar 2014 · Orchestre national du Sénégal', en: 'Dakar 2014 · Orchestre national du Sénégal' } },
  { valeur: { fr: 'UNESCO', en: 'UNESCO' }, detail: { fr: '2006 · Centenaire de Senghor', en: '2006 · Senghor centenary' } },
  { valeur: { fr: 'Près de 40 ans', en: 'Nearly 40 years' }, detail: { fr: 'De scène, en Afrique, en Europe et aux Amériques', en: 'On stage in Africa, Europe and the Americas' } },
];

/**
 * Présentation de Meïssa conteur (texte fourni par Nano le 26/10/2026) → page Conteur, après l'en-tête.
 */
export const presentationConteur: SectionBio = {
  titre: { fr: 'Meïssa conteur', en: 'Meïssa the storyteller' },
  paragraphes: [
    {
      fr: 'Meïssa Mbaye est conteur. Les contes, il les tient de sa grand-mère, Fatou Dieure, qui les lui racontait le soir quand il était enfant au Sénégal. Il a grandi avec ces histoires, et il les raconte aujourd’hui comme elle le faisait, avec la voix, le chant et le corps. Chez nous, un conte ne se dit pas assis et immobile : on chante, on danse, et le public répond.',
      en: 'Meïssa Mbaye is a storyteller. He learned his tales from his grandmother, Fatou Dieure, who told them to him in the evenings when he was a child in Senegal. He grew up with these stories, and today he tells them the way she did, with voice, song and body. Where we come from, a tale is not told sitting still: we sing, we dance, and the audience answers back.',
    },
    {
      fr: 'À sa grand-mère, il a dédié un livre, Génies, paru aux éditions Editis et Saaraba. C’est aussi le titre de son nouveau spectacle, qu’il joue seul en scène.',
      en: 'He dedicated a book to his grandmother, Génies, published by Editis and Saaraba. It is also the title of his new show, which he performs alone on stage.',
    },
    {
      fr: 'Le spectacle s’adresse aux enfants à partir de 6 ans et à leurs parents. Il peut être suivi d’un atelier dans les écoles, les médiathèques ou les centres culturels.',
      en: 'The show is for children aged 6 and up and their parents. It can be followed by a workshop in schools, libraries or cultural centres.',
    },
  ],
};

/**
 * Le pédagogue : interventions dans les écoles et méthode de l'Arbre à Palabre
 * (texte fourni par Nano le 26/10/2026) → page Conteur, section « Écoles et médiathèques ».
 * L'enseignement du chant (Arrested Development, Opéra de Munich…) est dans la biographie du musicien.
 */
export const transmettreLaParole: SectionBio = {
  titre: { fr: 'L’Arbre à Palabre', en: 'The Palaver Tree' },
  paragraphes: [
    {
      fr: 'Depuis des années, Meïssa intervient dans les écoles, en France comme au Sénégal. Il a raconté au lycée Jean-Mermoz, à l’école David Diop et à l’Institut français de Dakar, ou encore à l’école Françoise-Dolto de Courbevoie.',
      en: 'For years Meïssa has worked in schools, in France as in Senegal. He has told his tales at the Lycée Jean-Mermoz, the David Diop school and the Institut français in Dakar, and at the Françoise-Dolto school in Courbevoie.',
    },
    {
      fr: 'Avec les élèves, il a mis au point une façon de travailler qu’il appelle l’Arbre à Palabre. Il raconte d’abord un conte. Puis la classe se partage les personnages, et chaque groupe doit inventer une nouvelle histoire où reviennent les autres. Les enfants qui écoutaient se retrouvent à raconter, et souvent ce sont les plus timides qui surprennent tout le monde.',
      en: 'With pupils, he has developed a way of working he calls the Palaver Tree. He first tells a tale. Then the class shares out the characters, and each group must invent a new story in which the others reappear. The children who were listening find themselves telling the story, and it is often the shyest who surprise everyone.',
    },
    {
      fr: 'L’atelier s’adresse aux enfants à partir de 6 ans. Il se tient dans les écoles, les médiathèques ou les centres culturels, seul ou à la suite du spectacle Génies.',
      en: 'The workshop is for children aged 6 and up. It takes place in schools, libraries or cultural centres, on its own or following the show Génies.',
    },
  ],
};

export const noteValidation: L10n = { fr: '[Texte à valider par Meïssa]', en: '[Text to be approved by Meïssa]' };
