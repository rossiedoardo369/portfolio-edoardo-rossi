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
      prefixDefaultLocale: true,
    },
  },
  // Ogni pagina italiana è stata spostata sotto /it/ per essere simmetrica
  // a /en/. Questi redirect (generati come pagine statiche con meta-refresh)
  // mantengono validi i vecchi URL senza prefisso — indicizzati da Google e
  // potenzialmente già condivisi altrove.
  redirects: {
    '/': '/it/',
    '/about/': '/it/about/',
    '/contact/': '/it/contact/',
    '/experience/': '/it/experience/',
    '/expertise/': '/it/expertise/',
    '/stack/': '/it/stack/',
    '/work/': '/it/work/',
    '/work/eventi-multisede/': '/it/work/eventi-multisede/',
    '/work/posizionamento-specialistico/': '/it/work/posizionamento-specialistico/',
    '/work/protocollo-crm/': '/it/work/protocollo-crm/',
    '/work/territorio-bilingue/': '/it/work/territorio-bilingue/',
    '/work/capacita-operativa/': '/it/work/capacita-operativa/',
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
