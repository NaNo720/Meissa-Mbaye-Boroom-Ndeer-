import type { OffreId } from './spectacles';

/** Collection Directus `dates_tournee` (seules les dates « publiee » arrivent sur le site). */
export type DateTournee = {
  /** Date ISO (AAAA-MM-JJ). `null` = emplacement réservé de la maquette. */
  date: string | null;
  /** Heure locale du lieu, ex. « 20:30 ». */
  heure: string | null;
  lieu: string;
  ville: string;
  pays: string;
  spectacle: OffreId;
  billetterie: string;
  statut: 'brouillon' | 'publiee';
};

// Aucune date à venir annoncée pour l'instant (Nano, 23/10/2026) : les sections « Prochaines dates »
// sont masquées et réapparaissent automatiquement dès qu'une date future publiée est ajoutée ici.
// Exemple : { date: '2027-03-14', heure: '20:30', lieu: '…', ville: '…', pays: '…', spectacle: 'borom-ndeer', billetterie: '', statut: 'publiee' },
export const datesTournee: DateTournee[] = [

  // Dates déjà jouées (EPK, section « Dates », et dates données par Nano le 22/10/2026).
  { date: '2025-03-24', heure: null, lieu: 'Institut français du Sénégal, Génies', ville: 'Dakar [À CONFIRMER]', pays: 'Sénégal', spectacle: 'conteur', billetterie: '', statut: 'publiee' },
  { date: '2014-11-29', heure: null, lieu: 'Sommet de la Francophonie (29 et 30 novembre), avec l’Orchestre national du Sénégal', ville: 'Dakar', pays: 'Sénégal', spectacle: 'borom-ndeer', billetterie: '', statut: 'publiee' },
  { date: '2014-09-19', heure: null, lieu: 'Journées Paul Valéry, Émotions blanches et nègres', ville: 'Sète et Dakar', pays: 'France · Sénégal', spectacle: 'borom-ndeer', billetterie: '', statut: 'publiee' },
  { date: '2006-02-24', heure: null, lieu: 'UNESCO, centenaire de la naissance de Senghor', ville: 'Paris [À CONFIRMER]', pays: 'France', spectacle: 'borom-ndeer', billetterie: '', statut: 'publiee' },
  { date: '2024-03-06', heure: null, lieu: 'Salon international du livre, scène africaine', ville: 'Genève', pays: 'Suisse', spectacle: 'conteur', billetterie: '', statut: 'publiee' },
  { date: '2024-03-19', heure: null, lieu: 'Association Bureaux Invisibles', ville: 'Aubervilliers', pays: 'France', spectacle: 'conteur', billetterie: '', statut: 'publiee' },
];

const aujourdhui = () => new Date().toISOString().slice(0, 10);

export function datesAVenir(offre?: OffreId) {
  return datesTournee
    .filter((d) => d.statut === 'publiee')
    .filter((d) => !offre || d.spectacle === offre)
    .filter((d) => d.date === null || d.date >= aujourdhui())
    .sort((a, b) => (a.date ?? '9999').localeCompare(b.date ?? '9999'));
}

export function datesPassees() {
  return datesTournee
    .filter((d) => d.statut === 'publiee' && d.date !== null && d.date < aujourdhui())
    .sort((a, b) => b.date!.localeCompare(a.date!));
}
