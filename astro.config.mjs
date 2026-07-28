import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ATTENZIONE: aggiorna questi due valori prima del deploy su GitHub Pages.
// Se il repo si chiama "portfolio-edoardo-rossi" e lo username GitHub è "rossiedoardo":
//   site: 'https://rossiedoardo.github.io'
//   base: '/portfolio-edoardo-rossi'
// Se invece pubblichi come user/organization page (repo <username>.github.io),
// lascia base: '/' e site con l'URL della user page.
export default defineConfig({
  site: 'https://rossiedoardo369.github.io',
  base: '/portfolio-edoardo-rossi/',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'it',
        locales: {
          it: 'it-IT',
          en: 'en-US',
        },
      },
    }),
  ],
});
