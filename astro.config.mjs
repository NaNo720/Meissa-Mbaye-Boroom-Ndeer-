// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Domaine définitif, enregistré chez IONOS (28/10/2026). Peut être surchargé par la variable SITE_URL.
const SITE_URL = process.env.SITE_URL || 'https://meissambaye.com';

export default defineConfig({
  site: SITE_URL,
  // Barre d'outils Astro masquée en développement (elle n'existe jamais en production).
  devToolbar: { enabled: false },
  // L'ancienne page « L'artiste » est fusionnée dans Borom Ndeer (nom d'artiste de Meïssa musicien).
  // Doublé par public/.htaccess pour une vraie redirection 301 chez IONOS.
  redirects: {
    '/artiste': '/borom-ndeer#parcours',
    '/en/artiste': '/en/borom-ndeer#parcours',
    // Kaay Wox renommé Kaay Wax (Nano, 29/10/2026).
    '/pedagogue/kaay-wox': '/pedagogue/kaay-wax',
    '/en/pedagogue/kaay-wox': '/en/pedagogue/kaay-wax',
  },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
