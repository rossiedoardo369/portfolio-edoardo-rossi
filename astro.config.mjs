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
  //
  // Le chiavi (URL sorgente) ricevono automaticamente il prefisso `base`,
  // ma le destinazioni no: vanno scritte per intero, `base` incluso,
  // altrimenti il redirect punta fuori dal repo (es. .github.io/it/
  // invece di .github.io/portfolio-edoardo-rossi/it/).
  redirects: {
    '/': '/portfolio-edoardo-rossi/it/',
    '/about/': '/portfolio-edoardo-rossi/it/about/',
    '/contact/': '/portfolio-edoardo-rossi/it/contact/',
    '/experience/': '/portfolio-edoardo-rossi/it/experience/',
    '/expertise/': '/portfolio-edoardo-rossi/it/expertise/',
    '/stack/': '/portfolio-edoardo-rossi/it/stack/',
    '/work/': '/portfolio-edoardo-rossi/it/work/',
    '/work/eventi-multisede/': '/portfolio-edoardo-rossi/it/work/eventi-multisede/',
    '/work/posizionamento-specialistico/': '/portfolio-edoardo-rossi/it/work/posizionamento-specialistico/',
    '/work/protocollo-crm/': '/portfolio-edoardo-rossi/it/work/protocollo-crm/',
    '/work/territorio-bilingue/': '/portfolio-edoardo-rossi/it/work/territorio-bilingue/',
    '/work/capacita-operativa/': '/portfolio-edoardo-rossi/it/work/capacita-operativa/',
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
