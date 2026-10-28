import type { L10n } from '@/i18n';

/**
 * Page Pédagogue — contenu repris du dossier de présentation « Meïssa Mbaye pédagogue »
 * (public/PDF/Dossier-Meissa-Mbaye-pedagogue.pdf, octobre 2026). Traduction anglaise à valider.
 */

export const reperesPedagogue: { valeur: L10n; detail: L10n }[] = [
  { valeur: { fr: 'Lignée de griots', en: 'Griot lineage' }, detail: { fr: 'Initié très jeune à la parole et au chant', en: 'Introduced early to the spoken word and song' } },
  { valeur: { fr: 'Depuis 1999', en: 'Since 1999' }, detail: { fr: 'Ateliers, chorales et formations', en: 'Workshops, choirs and training' } },
  { valeur: { fr: 'Werekaan', en: 'Werekaan' }, detail: { fr: 'Institut d’art oratoire africain', en: 'Institute of African oratory' } },
  { valeur: { fr: 'Voix et parole', en: 'Voice and speech' }, detail: { fr: 'Coach vocal et formateur', en: 'Vocal coach and trainer' } },
];

export const approche = {
  titre: { fr: 'L’art oratoire africain, une école de la parole vivante', en: 'African oratory, a school of the living word' } as L10n,
  texte: {
    fr: 'Chez les griots, on n’apprend pas à parler en lisant un manuel : on écoute, on répète, on raconte, on chante. Meïssa Mbaye s’appuie sur cette tradition pour aider chacun à trouver une parole claire, incarnée et singulière.',
    en: 'Among griots, you don’t learn to speak by reading a manual: you listen, repeat, tell and sing. Meïssa Mbaye draws on this tradition to help everyone find a voice that is clear, embodied and their own.',
  } as L10n,
  piliers: [
    { titre: { fr: 'La parole', en: 'Words' }, texte: { fr: 'Construire son message, raconter, trouver l’image et la formule qui restent.', en: 'Building your message, telling a story, finding the image and the phrase that stay with people.' } },
    { titre: { fr: 'La voix', en: 'Voice' }, texte: { fr: 'Respiration, placement, débit, silences : la prosodie qui porte le sens.', en: 'Breathing, placement, pace, silences: the prosody that carries meaning.' } },
    { titre: { fr: 'Le corps', en: 'Body' }, texte: { fr: 'Posture, regard, gestuelle, et la singularité de sa présentation.', en: 'Posture, gaze, gesture, and what makes your presence unique.' } },
    { titre: { fr: 'Le récit', en: 'Story' }, texte: { fr: 'Le conte comme outil pour capter l’attention et transmettre.', en: 'The tale as a tool to capture attention and pass things on.' } },
  ] as { titre: L10n; texte: L10n }[],
};

/** Projet Bokk Baat, professeur de chant (texte fourni par Nano le 27/10/2026). */
export const bokkBaat = {
  kicker: { fr: 'Professeur de chant · Le projet', en: 'Singing teacher · The project' } as L10n,
  nom: 'Bokk Baat',
  traduction: { fr: '« la voix partagée », en wolof', en: '“the shared voice”, in Wolof' } as L10n,
  accroche: {
    fr: 'Chaque participant, Sénégalais ou résident étranger, apporte en cadeau une chanson de sa culture et la transmet aux autres. Ces chants offerts et partagés forment le répertoire commun de l’ensemble, porté sur scène dans un grand concert polyphonique.',
    en: 'Each participant, Senegalese or foreign resident, brings a song from their culture as a gift and passes it on to the others. These songs, given and shared, form the ensemble’s common repertoire, brought to the stage in a large polyphonic concert.',
  } as L10n,
  activite: {
    fr: 'Bokk Baat est l’une des activités phares du Werekaan Institute au Sénégal.',
    en: 'Bokk Baat is one of the flagship activities of the Werekaan Institute in Senegal.',
  } as L10n,
  contexte: {
    titre: { fr: 'Contexte', en: 'Background' } as L10n,
    paragraphes: [
      {
        fr: 'Le Sénégal est une mosaïque de peuples, de langues et de traditions vocales : wolof, sérère, peul, diola, mandingue, soninké… Dakar accueille par ailleurs des communautés venues de presque tous les pays du monde. Cette diversité fait du Sénégal un lieu naturel de rencontre des voix.',
        en: 'Senegal is a mosaic of peoples, languages and vocal traditions: Wolof, Serer, Fula, Jola, Mandinka, Soninke… Dakar is also home to communities from almost every country in the world. This diversity makes Senegal a natural meeting place for voices.',
      },
      {
        fr: 'La polyphonie est plus qu’une technique musicale. C’est une image du vivre-ensemble : l’art de faire dialoguer des voix différentes pour construire une harmonie commune.',
        en: 'Polyphony is more than a musical technique. It is an image of living together: the art of bringing different voices into dialogue to build a shared harmony.',
      },
    ] as L10n[],
  },
  objectifs: {
    titre: { fr: 'Objectifs', en: 'Goals' } as L10n,
    items: [
      { fr: 'Constituer un ensemble vocal interculturel réunissant des voix de toutes origines.', en: 'Form an intercultural vocal ensemble bringing together voices of every origin.' },
      { fr: 'Organiser des ateliers réguliers de chant collectif, ouverts aux habitants, aux jeunes et aux communautés étrangères.', en: 'Run regular group singing workshops, open to residents, young people and foreign communities.' },
      { fr: 'Créer un spectacle annuel présentant ce répertoire partagé.', en: 'Create an annual show presenting this shared repertoire.' },
      { fr: 'Valoriser les traditions vocales sénégalaises en dialogue avec celles du monde.', en: 'Showcase Senegalese vocal traditions in dialogue with those of the world.' },
      { fr: 'Développer une citoyenneté culturelle fondée sur l’écoute, le partage et la co-création.', en: 'Develop a cultural citizenship founded on listening, sharing and co-creation.' },
    ] as L10n[],
  },
  impact: {
    titre: { fr: 'Impact attendu', en: 'Expected impact' } as L10n,
    items: [
      { fr: 'Faire de Dakar un carrefour de la polyphonie interculturelle, en dialogue avec Lille et d’autres capitales culturelles.', en: 'Make Dakar a crossroads of intercultural polyphony, in dialogue with Lille and other cultural capitals.' },
      { fr: 'Renforcer les liens entre Sénégalais et communautés étrangères par une pratique artistique commune.', en: 'Strengthen ties between Senegalese people and foreign communities through a shared artistic practice.' },
      { fr: 'Contribuer à l’éducation artistique et citoyenne des jeunes.', en: 'Contribute to young people’s artistic and civic education.' },
      { fr: 'Affirmer Werekaan Institute comme acteur majeur de la transmission orale et vocale.', en: 'Establish the Werekaan Institute as a major player in oral and vocal transmission.' },
    ] as L10n[],
  },
  direction: {
    titre: { fr: 'Direction artistique', en: 'Artistic direction' } as L10n,
    texte: {
      fr: 'La direction artistique est assurée par Meïssa Mbaye. Chef de chœur, chanteur-compositeur et héritier de l’art des griots, il fait dialoguer les voix de toutes origines grâce à une technique de chant africain qui les fait voyager à travers tous leurs registres.',
      en: 'Artistic direction is by Meïssa Mbaye. Choir leader, singer-songwriter and heir to the art of the griots, he brings voices of every origin into dialogue through an African singing technique that takes them across all their registers.',
    } as L10n,
  },
};

/**
 * Projet Kaay Wax, professeur de conte (texte de présentation fourni par Nano le 29/10/2026).
 * Orthographe « Kaay Wax », d'après ce document (auparavant « Kaay Wox » sur le site).
 */
export const kaayWax = {
  kicker: { fr: 'Professeur de conte · Le projet', en: 'Storytelling teacher · The project' } as L10n,
  nom: 'Kaay Wax',
  devise: { fr: 'Viens, ta parole t’attend', en: 'Come, your words are waiting' } as L10n,
  sousTitre: {
    fr: 'Un spectacle de paroles partagées, mis en scène par Meïssa Mbaye',
    en: 'A show of shared words, staged by Meïssa Mbaye',
  } as L10n,
  intro: {
    fr: 'Au Sénégal, la parole est un héritage. Elle se transmet à l’ombre de l’arbre à palabres, au fil des veillées et des cérémonies, et elle relie les générations. Depuis plus de trois décennies, Werekaan Institute fait vivre cet héritage, de Dakar à l’Europe. Aujourd’hui, il ouvre les portes de sa maison de Ndiakhirate pour une aventure collective : Kaay Wax.',
    en: 'In Senegal, the spoken word is a heritage. It is passed on in the shade of the palaver tree, through evening gatherings and ceremonies, and it links the generations. For more than three decades, the Werekaan Institute has kept this heritage alive, from Dakar to Europe. Today it opens the doors of its house in Ndiakhirate for a collective adventure: Kaay Wax.',
  } as L10n,
  texteVoix: {
    titre: { fr: 'Un texte, une voix', en: 'One text, one voice' } as L10n,
    texte: {
      fr: 'Chacun arrive avec un texte qui lui est cher : un poème, un conte, un extrait de roman, un discours, un chant, une lettre ou des mots de sa propre plume, en wolof, en français ou dans toute autre langue. Il l’offre au groupe et confie ce qui l’y attache. De ce partage naît une matière vivante, tissée de nos voix et de nos histoires.',
      en: 'Everyone arrives with a text they hold dear: a poem, a tale, an extract from a novel, a speech, a song, a letter or words of their own, in Wolof, French or any other language. They offer it to the group and share what binds them to it. From this sharing comes a living material, woven from our voices and our stories.',
    } as L10n,
  },
  spectacle: {
    titre: { fr: 'Des paroles au spectacle', en: 'From words to the stage' } as L10n,
    texte: {
      fr: 'Meïssa Mbaye, chanteur-poète, conteur et directeur artistique de Werekaan Institute, rassemble ces textes et les fait dialoguer. Il les met en scène dans un spectacle original, offert au public.',
      en: 'Meïssa Mbaye, singer-poet, storyteller and artistic director of the Werekaan Institute, gathers these texts and brings them into dialogue. He stages them in an original show, offered to the public.',
    } as L10n,
  },
  ecole: {
    titre: { fr: 'Une école de la déclamation', en: 'A school of declamation' } as L10n,
    intro: { fr: 'Tout au long du parcours, les participants apprennent à porter leur parole :', en: 'Throughout the programme, participants learn to carry their words:' } as L10n,
    items: [
      { fr: 'le souffle, la respiration et la voix ;', en: 'breath, breathing and voice;' },
      { fr: 'la diction, le rythme et l’intonation ;', en: 'diction, rhythm and intonation;' },
      { fr: 'la posture, le regard et la présence scénique ;', en: 'posture, gaze and stage presence;' },
      { fr: 'la mémorisation et l’interprétation d’un texte ;', en: 'memorising and interpreting a text;' },
      { fr: 'la maîtrise du trac et la confiance en soi.', en: 'managing stage fright and self-confidence.' },
    ] as L10n[],
  },
  pourQui: {
    titre: { fr: 'Pour qui ?', en: 'Who is it for?' } as L10n,
    texte: {
      fr: 'Kaay Wax s’adresse à tous, jeunes et adultes, débutants comme amoureux des mots. Aucune expérience n’est nécessaire. Il suffit d’avoir envie de dire et d’écouter.',
      en: 'Kaay Wax is open to everyone, young people and adults, beginners and lovers of words alike. No experience is needed. All it takes is the wish to speak and to listen.',
    } as L10n,
  },
  conclusion: { fr: 'Kaay Wax. Viens, ta parole t’attend.', en: 'Kaay Wax. Come, your words are waiting.' } as L10n,
};

/** Professeur de chant, technique vocale africaine (texte fourni par Nano le 26/10/2026). */
export const professeurChant = {
  kicker: { fr: 'Professeur de chant', en: 'Singing teacher' } as L10n,
  titre: { fr: 'Spécialiste de la technique vocale africaine', en: 'A specialist in African vocal technique' } as L10n,
  paragraphes: [
    {
      fr: 'Chanteur-compositeur, percussionniste et conteur, Meïssa Mbaye transmet depuis plus de 30 ans, en France, en Afrique et aux États-Unis, un art vocal hérité des griots, maîtres du chant et de la parole.',
      en: 'Singer-songwriter, percussionist and storyteller, Meïssa Mbaye has for more than 30 years taught, in France, Africa and the United States, a vocal art inherited from the griots, masters of song and the spoken word.',
    },
    {
      fr: 'Dans la tradition africaine, le chanteur ne se limite pas à un seul registre. Au sein d’un même chant, il convoque toute l’étendue de sa voix, des graves de poitrine aux aigus de tête, de la voix parlée à la voix chantée. Meïssa Mbaye a modélisé cette technique et l’enseigne aujourd’hui comme une méthode accessible à tous.',
      en: 'In the African tradition, a singer is not confined to a single register. Within the same song, he calls on the full range of his voice, from deep chest notes to high head notes, from speaking voice to singing voice. Meïssa Mbaye has modelled this technique and now teaches it as a method open to everyone.',
    },
    {
      fr: 'Cette approche s’applique à tous les styles : variété, blues, jazz, gospel ou chant traditionnel. Nourrie par sa formation en chant classique et en gospel (Atlanta), sa pédagogie aide chaque élève à libérer sa voix, à élargir sa tessiture et à trouver son expression unique.',
      en: 'This approach works for every style: pop, blues, jazz, gospel or traditional song. Shaped by his training in classical singing and gospel (Atlanta), his teaching helps each student free their voice, broaden their range and find their own expression.',
    },
  ] as L10n[],
};

export const formules: { type: L10n; titre: L10n; texte: L10n; publics: L10n }[] = [
  {
    type: { fr: 'Groupe', en: 'Group' },
    titre: { fr: 'Formation à l’art oratoire africain', en: 'Training in African oratory' },
    texte: { fr: 'Prendre la parole en public, convaincre, raconter. Exercices issus du conte et de la tradition orale.', en: 'Speaking in public, persuading, telling stories. Exercises drawn from tales and oral tradition.' },
    publics: { fr: 'Entreprises, associations, institutions, porteurs de projets', en: 'Companies, associations, institutions, project leaders' },
  },
  {
    type: { fr: 'Individuel', en: 'One-to-one' },
    titre: { fr: 'Coaching de prise de parole', en: 'Public speaking coaching' },
    texte: { fr: 'Un parcours sur mesure autour d’un enjeu réel : une conférence, un pitch, une émission, un podcast.', en: 'A tailor-made programme built around a real challenge: a talk, a pitch, a broadcast, a podcast.' },
    publics: { fr: 'Dirigeants, animateurs, créateurs de contenus, élus', en: 'Executives, presenters, content creators, elected officials' },
  },
  {
    type: { fr: 'Voix', en: 'Voice' },
    titre: { fr: 'Coaching vocal', en: 'Vocal coaching' },
    texte: { fr: 'Voix parlée et voix chantée : respiration, justesse, timbre, endurance, interprétation.', en: 'Speaking and singing voice: breathing, pitch, timbre, stamina, interpretation.' },
    publics: { fr: 'Chanteurs, comédiens, enseignants, orateurs', en: 'Singers, actors, teachers, speakers' },
  },
  {
    type: { fr: 'Jeunesse', en: 'Young people' },
    titre: { fr: 'Ateliers « L’art oratoire par le conte »', en: 'Workshops: “Oratory through storytelling”' },
    texte: { fr: 'À partir de son livre Génies, les élèves découvrent les légendes du Sénégal et apprennent à raconter à leur tour.', en: 'Starting from his book Génies, pupils discover the legends of Senegal and learn to tell stories in turn.' },
    publics: { fr: 'Écoles, collèges, lycées, médiathèques', en: 'Primary and secondary schools, libraries' },
  },
];

export const formats: L10n = {
  fr: 'Formats : de l’atelier de 2 h au parcours de plusieurs semaines, en présentiel ou à distance, en français.',
  en: 'Formats: from a 2-hour workshop to a programme of several weeks, in person or online, in French.',
};

export const parcours = {
  titre: { fr: 'Un parcours de prise de parole en 10 heures', en: 'A 10-hour public speaking programme' } as L10n,
  texte: {
    fr: 'Le parcours part toujours d’une prise de parole réelle du participant : on écrit d’abord ce que l’on dit, puis on travaille comment on le dit, enfin ce que le corps et l’image disent.',
    en: 'The programme always starts from a real speaking situation of the participant: first we write what is said, then we work on how it is said, and finally on what the body and the image say.',
  } as L10n,
  etapes: [
    { duree: '3 h 30', titre: { fr: 'Le verbal', en: 'Words' }, texte: { fr: 'Trouver son message et sa promesse ; écrire une présentation pour l’oral : accroche, structure, image forte, formule signature.', en: 'Finding your message and promise; writing a presentation for speaking: hook, structure, strong image, signature phrase.' } },
    { duree: '3 h', titre: { fr: 'La prosodie', en: 'Prosody' }, texte: { fr: 'Respiration, placement de la voix, débit, intonation et pauses ; présentation devant un public test.', en: 'Breathing, voice placement, pace, intonation and pauses; presenting to a test audience.' } },
    { duree: '3 h', titre: { fr: 'La gestuelle et la singularité', en: 'Gesture and individuality' }, texte: { fr: 'Posture, regard, gestes ; trouver un élément de présentation qui rend la personne reconnaissable.', en: 'Posture, gaze, gestures; finding a presentation element that makes the person recognisable.' } },
    { duree: '30 min', titre: { fr: 'Restitution', en: 'Final presentation' }, texte: { fr: 'Prise de parole finale filmée, comparée à la vidéo de départ, et plan de progression.', en: 'A filmed final talk, compared with the opening video, and a progress plan.' } },
  ] as { duree: string; titre: L10n; texte: L10n }[],
};

export const experience = {
  // « Plus de 30 ans » (texte de Nano du 26/10/2026) ; le dossier PDF disait « plus de vingt-cinq ans ».
  titre: { fr: 'Plus de trente ans de transmission', en: 'More than thirty years of teaching' } as L10n,
  etapes: [
    { annee: { fr: 'Années 1990', en: '1990s' }, texte: { fr: 'Apprend auprès des chorales gospel d’Atlanta ; crée des chorales polyphoniques africaines en Île-de-France.', en: 'Learns from gospel choirs in Atlanta; creates African polyphonic choirs in the Paris region.' } },
    { annee: { fr: '1999', en: '1999' }, texte: { fr: 'À Arles, interventions de formation auprès de jeunes rappeurs. Travaille pour Musique Tangente.', en: 'In Arles, runs training sessions with young rappers. Works for Musique Tangente.' } },
    { annee: { fr: '2000', en: '2000' }, texte: { fr: 'Prépare avec Ray Lema les ateliers de la Carnavalcade de Saint-Denis pour le festival Banlieues Bleues.', en: 'Prepares the Carnavalcade workshops in Saint-Denis with Ray Lema for the Banlieues Bleues festival.' } },
    { annee: { fr: 'Années 2000', en: '2000s' }, texte: { fr: 'Ateliers pédagogiques autour de Senghor avec des lycées sénégalais et français, résidences artistiques.', en: 'Teaching workshops on Senghor with Senegalese and French secondary schools, artist residencies.' } },
    { annee: { fr: '2008', en: '2008' }, texte: { fr: 'Ouvre Keur Meïssa à Dakar : cours de chant, séminaires, et projet de master en gestion de carrière artistique avec l’Université Lyon 2, Le Fil et l’Université Gaston Berger.', en: 'Opens Keur Meïssa in Dakar: singing classes, seminars, and a master’s project in artistic career management with Université Lyon 2, Le Fil and Université Gaston Berger.' } },
    { annee: { fr: '2014', en: '2014' }, texte: { fr: 'Ateliers pédagogiques pour les scolaires à la Maison de la Culture Douta Seck, autour du spectacle « Émotions blanches et nègres ».', en: 'Teaching workshops for schools at the Maison de la Culture Douta Seck, around the show “Émotions blanches et nègres”.' } },
    { annee: { fr: '2024', en: '2024' }, texte: { fr: 'Utilise Génies en classe : l’art oratoire par le conte.', en: 'Uses Génies in class: oratory through storytelling.' } },
    { annee: { fr: 'Aujourd’hui', en: 'Today' }, texte: { fr: 'Dirige le Werekaan Institute, qui forme à l’art oratoire africain, et accompagne des orateurs et créateurs de contenus.', en: 'Leads the Werekaan Institute, which trains people in African oratory, and coaches speakers and content creators.' } },
  ] as { annee: L10n; texte: L10n }[],
};

export const publicsPedagogue: L10n[] = [
  { fr: 'Entreprises et managers', en: 'Companies and managers' },
  { fr: 'Associations et institutions', en: 'Associations and institutions' },
  { fr: 'Écoles, collèges, lycées', en: 'Primary and secondary schools' },
  { fr: 'Médiathèques', en: 'Libraries' },
  { fr: 'Artistes et chanteurs', en: 'Artists and singers' },
  { fr: 'Animateurs, podcasteurs, créateurs de contenus', en: 'Presenters, podcasters, content creators' },
  { fr: 'Diaspora africaine', en: 'African diaspora' },
];

export const livreMethode = {
  kicker: { fr: 'À paraître · Livre de formation', en: 'Forthcoming · Training book' } as L10n,
  titre: 'L’éloquence africaine : le Werekaan',
  texte: {
    fr: 'Meïssa Mbaye y rassemble sa méthode d’art oratoire africain : exercices, principes et récits issus de la tradition des griots.',
    en: 'In it, Meïssa Mbaye gathers his method of African oratory: exercises, principles and stories from the griot tradition.',
  } as L10n,
};
