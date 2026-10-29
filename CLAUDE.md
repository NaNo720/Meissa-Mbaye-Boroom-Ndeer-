# Brief IA — Plateforme Meïssa Mbaye

> À donner en premier à toute IA qui aide sur le projet.
> Dans le dépôt de code, renommer ce fichier `CLAUDE.md` (ou `AGENTS.md`) à la racine : les assistants de code le lisent automatiquement.
> Dernière mise à jour : 15 octobre 2026.

## 1. Le projet en 5 lignes

- Artiste : **Meïssa Mbaye**, griot, chanteur-poète, conteur, auteur du livre jeunesse *Génies : créatures et mythologies du Sénégal* (Saaraba Éditions, 2023).
- Objectif : convertir les programmateurs (France, Belgique, international) en réservations pour sa tournée 2026–2027.
- Deux offres : **Borom Ndeer** (concert de poésie chantée, solo / duo / sextet) et **Meïssa conteur** (conte musical *Génies*, seul en scène, enfants dès 6 ans et leurs parents — Nano, 26/10/2026 ; méthode d'atelier « l'Arbre à Palabre »).
- **Orthographe : « Boroom Ndeer »** (avec deux « o », confirmé par Nano le 21/10/2026) pour tout texte affiché ; l'URL et les identifiants techniques restent `borom-ndeer`. Le logo et les PDF écrivent encore « Borom ».
- **Nom de chanteur complet : « Meïssa Mbaye Boroom Ndeer »** (Nano, 22/10/2026) : à utiliser partout où le nom désigne l'artiste ou le concert (cartes, menus, listes, boutons). Exceptions : le titre de la page Biographie reste « Meïssa Mbaye (Boroom Ndeer) », la carte de l'accueil garde « Meïssa Mbaye, alias Boroom Ndeer », et « le Boroom Ndeer » reste quand il désigne le titre historique du griot gardien du Ndeer.
- **Boroom Ndeer est le nom d'artiste de Meïssa musicien** (confirmé par Nano, 20/10/2026) : la page `/borom-ndeer` présente le musicien (parcours, discographie, écoute) **et** le concert.
- Trois espaces : **site public** FR/EN, **administration** (Directus), **application mobile de Meïssa** (PWA).
- Équipe répartie : Nano, Awa et le dev/design à Dakar (UTC+0) ; Meïssa en tournée en France (UTC+2 jusqu'au 25/10/2026, puis UTC+1).

## 2. Équipe et rôles

| Personne | Rôle plateforme | Fait | Ne voit pas |
|---|---|---|---|
| Nano | Administrateur | Valide devis, dates, retours ; gère comptes | — |
| Awa | Community manager / prospection | Répond aux demandes (< 48 h), prospects, presse, réseaux | Utilisateurs |
| [Prénom] | Éditeur technique (dev/design) | Contenus, médias, SEO, maintenance | Coordonnées des programmateurs (RGPD) |
| Meïssa | Artiste | Agenda, contacts confiés en France, comptes rendus, validation des contenus | Base de prospection complète |

## 3. Périmètre et échéances

- **V1 — 19/10/2026** : site public FR/EN + formulaire relié à Directus + Demandes + Tournée + rôles + e-mails.
- **V2 — 31/10/2026** : prospection et relances, validation des contenus, espace Awa, PWA Meïssa (agenda, contacts, compte rendu vocal hors connexion, validation), retours de Meïssa, tableau de bord, statistiques.
- **Plus tard** : WhatsApp, boutique du livre (Wave, Orange Money, Stripe), publications réseaux automatiques.
- **Hors périmètre** : billetterie intégrée, application native.

## 4. Stack technique (décidée)

- Site + PWA : **Astro** + **Tailwind CSS**, TypeScript, hébergé chez **IONOS** (choix de Nano, 28/10/2026 ; redirections dans `public/.htaccess`). Les mentions « Netlify » ci-dessous datent du brief initial.
- Back-office / API : **Directus** (open source) + **PostgreSQL**, stockage des médias.
- Automatisations : **Directus Flows** (e-mails, alertes, récapitulatifs, webhook de rebuild Netlify, transcription vocale).
- E-mails : Brevo. Statistiques : Plausible. Vidéos : YouTube / Vimeo (jamais sur le serveur).

## 5. Arborescence

**Site public** (`/` en FR, `/en/` en EN, même structure)
- `/` Accueil — vidéo en arrière-plan + bouton pause, réseaux sociaux en icônes, « Ils en parlent », deux portes (Borom Ndeer / Conteur), présentation courte de Meïssa, prochaines dates
- `/borom-ndeer` — Meïssa musicien : concert, écoute, parcours (biographie de musicien), repères et distinctions, discographie, dates, « Réserver ce concert »
- `/conteur` — spectacle *Génies*, livre, écoles et médiathèques (avec « Transmettre la parole » : grand-mère, Werekaan, publics scolaires, Keur Meïssa), « Réserver ce spectacle ». L'enseignement du chant reste dans le parcours de Borom Ndeer.
- `/pedagogue` — Meïssa pédagogue, deux projets (Nano, 27/10/2026) : **Bokk Baat** (professeur de chant, technique vocale africaine) et **Kaay Wax** (professeur de conte : « Viens, ta parole t'attend », spectacle de paroles partagées mis en scène par Meïssa à la maison Werekaan de Ndiakhirate, école de la déclamation ; en milieu scolaire, méthode de l'Arbre à Palabre). Orthographes exactes : « Bokk Baat », « Kaay Wax » (et non « Kaay Wox », depuis le texte de présentation du 29/10/2026). Pages : `/pedagogue/bokk-baat`, `/pedagogue/kaay-wax` (ancienne adresse `kaay-wox` redirigée). Contenu actuel (26/10/2026) : approche de l'art oratoire, professeur de chant (technique vocale africaine), 4 formules (groupe, coaching individuel, coaching vocal, ateliers jeunesse), l'Arbre à Palabre, parcours de 10 h, expérience, publics, livre de méthode à paraître, « Organiser une formation » (formulaire avec `?offre=formation`)
- ~~`/artiste`~~ — supprimée, redirigée (301) vers `/borom-ndeer#parcours`
- `/tournee` — dates à venir, archives
- `/pro` — EPK, dossiers de presse, fiches techniques, aperçu de la galerie, revue de presse
- `/galerie` — galerie photos complète (filtres, lots de 24, ZIP par catégorie)
- `/contact` — formulaire (objet : offre pré-remplie), WhatsApp
- `/mentions-legales`, `/confidentialite`

**Administration (Directus)** : Tableau de bord · Demandes · Prospection · Retours de Meïssa · Tournée · Contenus et validation · Médiathèque · Presse · Publications réseaux · Statistiques · Utilisateurs et rôles · Paramètres

**PWA Meïssa** : Agenda (→ détail d'une date) · Contacts (→ compte rendu) · À valider · Chiffres

## 6. Modèle de données (collections Directus)

- `utilisateurs` : nom, email, role (admin | cm | editeur | artiste), fuseau, langue
- `structures` : nom, type (festival | mediatheque | ecole | centre_culturel | institut), ville, pays, site
- `contacts` → structure : nom, fonction, email, telephone, whatsapp, langue
- `prospects` → structure : statut (a_contacter | contacte | interesse | pas_interesse | chez_meissa), offre, prochaine_relance, assigne_a → utilisateur, fiche
- `comptes_rendus` → prospect, auteur : resultat (interesse | a_rappeler | pas_interesse | injoignable), note_vocale (fichier), transcription, photo, date_rappel, synchronise, valide_par
- `demandes` → structure, spectacle : statut (nouvelle | contactee | devis_envoye | confirmee | perdue), date_souhaitee, public, message, source (site | retour_meissa), assignee_a
- `devis` → demande : montant, devise, conditions, statut
- `spectacles` : titre, offre (borom_ndeer | conteur | atelier), duree, formation, fiche_technique, textes FR/EN
- `dates_tournee` → spectacle, demande (0..1) : date, heure, lieu, ville, pays, billetterie, logistique, statut (brouillon | publiee)
- `contenus` : page, langue, texte, statut (brouillon | a_valider | a_revoir | valide | publie), auteur, valide_par
- `commentaires`, `medias`, `articles_presse` (média, date, lien, pdf), `publications` (→ date_tournee : annonce | j_7 | apres), `notifications`

## 7. Circuits clés

1. **Demande** : formulaire → demande « nouvelle » → accusé de réception + alerte Awa → Awa qualifie → Nano devis puis « confirmée » → date créée en brouillon → Nano publie → webhook Netlify → site à jour + agenda Meïssa + tâches réseaux pour Awa. Alerte à Nano si « nouvelle » > 48 h.
2. **Prospection France** : Awa prépare la fiche → confie à Meïssa → récap 9 h (heure de Paris) → Meïssa appelle ou visite → compte rendu (vocal, hors connexion possible) → « Retours de Meïssa » → Nano valide : créer une demande, planifier une relance, ou archiver.
3. **Contenus** : dev/design rédige → « à valider » → Meïssa valide ou « à revoir » + commentaire → publié.

## 8. Design (charte)

- Direction : « le griot contemporain » — clair-obscur de scène, espace, grandes images, pas de wax plaqué.
- Polices : **Cormorant Garamond** (titres, 500/600) · **Work Sans** (texte, 400/500).
- Couleurs :
  - Noir chaud `#1C1612` (scène, en-têtes) · Crème `#F4EDE2` (fond) · Carte `#FBF7F0` · Sable `#EDE3D3`
  - Or `#D9A441` (accent, boutons principaux)
  - Terracotta `#A4461F` = **Borom Ndeer** · Indigo `#2E3A6E` = **Conteur**
  - Bordures `#DCCFBC` · Texte secondaire `#5A4D42`
  - Statuts : nouvelle `#F6E3C0/#6B4A0E` · contactée `#DCDDE6/#1D2650` · devis `#EBD5C8/#7A3215` · confirmée `#D5E5D3/#24502A` · perdue `#E4DED6/#4A4038`
- Boutons en pilule (`border-radius: 999px`), cartes `border-radius: 8px`, zones tactiles ≥ 44 px.
- **Thème vert = thème du site depuis le 29/10/2026** (Nano ; `data-theme="vert"` sur `<html>`, valeurs dans `src/styles/global.css` : noir `#0B3D30`, scène `#00503C`, fond `#F1F8F5`, sable `#DCEFE8`, accent `#6FCBB0`, Boroom Ndeer `#17785F`, Conteur `#2E5E3E`). Les couleurs ci-dessus restent la base d'origine. Pas de bleu, sauf **Kaay Wax** (carte de la page Pédagogue, page du projet) et les boutons du livre et du lecteur de la page Conteur, en bleu pétrole `#1D6A80` (fond `#DCEBEF`) pour la distinguer de Bokk Baat en vert (Nano, 28/10/2026).

## 9. Règles à respecter (pour l'IA)

- Mobile d'abord (Android, 4G) ; PageSpeed mobile > 90 ; images WebP ; vidéo de fond < 5 Mo.
- WCAG 2.1 AA : contrastes, clavier, textes alternatifs, pause sur la vidéo.
- Tout texte existe en FR et EN ; `hreflang` sur chaque page.
- RGPD : droits par rôle, mention de confidentialité, aucune coordonnée de programmateur côté éditeur.
- Ne jamais inventer de chiffres ni de faits sur Meïssa : marquer `[À CONFIRMER]`.
- Préférer la **configuration Directus** au code sur mesure ; documenter chaque Flow.
- Heures toujours affichées avec leur fuseau (Dakar / Paris).

## 10. Faits vérifiés sur l'artiste (sources : Wikipédia, BnF Takam Tikou)

Né en 1959 au Sénégal, famille de griots · surnommé « le Prince des poètes » · fondateur de Kunta Kinté (Montpellier, 1986) · Atlanta 1996 (chants polyphoniques) · albums : *Night in Casamance* (1999), *Entre Seine et Sine* (2005, Prix IFCIC de l'UNESCO), *Back to Africa* (2007), *Émotions blanches et nègres* · citoyen d'honneur de Sète · fondateur du Werekaan Institute (art oratoire) · *Génies* : 45 p., 34 × 23 cm, ISBN 978-2-494527-19-5, illustré par Sophie Le Hire.
Confirmés par Nano (oct. 2026) : création de Kunta Kinté en **1988** (et non 1986) ; *Entre Seine et Sine* : Prix IFCIC de l'UNESCO + **Prix Printemps des Poètes 2006** ; concert anniversaire (près de 40 ans de scène) à Dakar en mars 2027 ; biographie de référence dans `src/data/biographie.ts` ; albums Kunta Kinté *Sénégal* (1992) et *Occitan'Africa* (1998) ; *Émotions blanches et nègres* (2014, d'après les documents de l'équipe) ; durée du concert Borom Ndeer : 1 h 30 ; durée du conte musical *Génies* : 45 min.
À confirmer : chiffre de 6 000 exemplaires, tarifs des spectacles.

## 11. Documents de référence (joindre leurs exports PDF / Markdown)

- Cahier des charges (exigences F-01 à F-25, UML, architecture, recette)
- Plan de conception du portfolio
- Contenus du site (biographies FR/EN, discographie, *Génies*)
- Canevas UI/UX (site, admin, espaces par rôle, prospection France) — exporter les écrans en PDF ou images
- Formation équipe : prospection France / Belgique (PDF)

## 12. Comment me demander de l'aide (exemples)

- « Crée le schéma Directus de la collection `demandes` d'après la section 6. »
- « Code la page `/conteur` en Astro + Tailwind d'après la charte de la section 8 et l'écran du canevas. »
- « Écris le Flow Directus : alerte à Nano si une demande reste "nouvelle" plus de 48 h. »
- « Rédige les tests de recette du circuit 2 (prospection France). »
