# Meïssa Mbaye — site officiel

Site officiel de **Meïssa Mbaye**, griot, chanteur-poète et conteur sénégalais : biographie, discographie, spectacles, formations, tournée et espace pro. Bilingue français / anglais.

## Ce que présente le site

| Page | FR | EN |
|---|---|---|
| Accueil | `/` | `/en/` |
| Meïssa Mbaye Boroom Ndeer (musicien, concert, discographie) | `/borom-ndeer` | `/en/borom-ndeer` |
| Meïssa conteur (spectacle *Génies*, livre, écoles et médiathèques) | `/conteur` | `/en/conteur` |
| Meïssa pédagogue (Bokk Baat, Kaay Wax) | `/pedagogue` | `/en/pedagogue` |
| Tournée | `/tournee` | `/en/tournee` |
| Espace pro (EPK, dossiers de presse) | `/pro` | `/en/pro` |
| Galerie photos | `/galerie` | `/en/galerie` |
| Contact et réservation | `/contact` | `/en/contact` |
| Mentions légales, confidentialité | `/mentions-legales`, `/confidentialite` | `/en/…` |

## Technique

- [Astro](https://astro.build) (site statique) + [Tailwind CSS](https://tailwindcss.com) 4, TypeScript
- Hébergement prévu : Netlify (redirections dans `public/_redirects`)
- À venir : administration [Directus](https://directus.io) (demandes, tournée, contenus) et application mobile (PWA) pour l'artiste

## Lancer le site en local

Prérequis : Node.js 22 ou plus récent.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère le site dans dist/
npm run check    # vérifie les types
```

## Modifier les contenus

Les textes et réglages sont regroupés dans `src/data/` (en attendant Directus) :

- `site.ts` : e-mail de réservation, WhatsApp, réseaux sociaux, mentions légales
- `biographie.ts`, `artiste.ts` : biographie, repères, discographie
- `spectacles.ts` : concerts et spectacles, durées, documents
- `pedagogue.ts` : formations Bokk Baat et Kaay Wax
- `tournee.ts` : dates de tournée
- `photos.ts`, `galerie.ts` : photos du site et de la galerie
- `pro.ts` : espace pro

Les textes de l'interface (menus, boutons) sont dans `src/i18n/index.ts`. Tout texte existe en français et en anglais.
Les éléments à confirmer sont écrits entre crochets, par exemple `[À CONFIRMER]`, et apparaissent surlignés sur le site.

## Crédits

Conception et réalisation : **Nano Design**.
Textes, photos, enregistrements et visuels : © Meïssa Mbaye et leurs auteurs respectifs. Tous droits réservés.
