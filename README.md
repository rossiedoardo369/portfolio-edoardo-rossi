# Portfolio — Edoardo Rossi

Sito portfolio personale di **Edoardo Rossi**, Performance Marketing & Digital Strategy
Specialist. Costruito con [Astro](https://astro.build) e pubblicato su GitHub Pages.

🔗 **Online:** https://rossiedoardo369.github.io/portfolio-edoardo-rossi/

## Stato del progetto

🟢 **Prima versione completa in italiano.**

| Sezione | Stato |
|---|---|
| Home | ✅ |
| Lavori selezionati (griglia) | ✅ |
| 5 case study | ✅ |
| Competenze | ✅ |
| Esperienza | ✅ |
| Chi sono | ✅ |
| Contatti | ✅ |
| Pagina 404 | ✅ |
| Progetti accademici | ⬜ da fare |
| Résumé scaricabile | ⬜ da fare |
| Versione in inglese | ⬜ da fare |

## Struttura

```
src/
├── layouts/
│   ├── BaseLayout.astro        header, footer, meta tag, font
│   └── CaseStudyLayout.astro   template dei case study
├── components/
│   ├── Header.astro
│   └── Footer.astro
├── pages/
│   ├── index.astro             home
│   ├── about.astro
│   ├── contact.astro
│   ├── expertise.astro
│   ├── experience.astro
│   ├── 404.astro
│   └── work/
│       ├── index.astro         griglia dei lavori
│       └── *.astro             un file per case study
└── styles/
    └── global.css              design token e stili condivisi
```

## Eseguire il progetto in locale

Serve [Node.js](https://nodejs.org) 18 o superiore.

```bash
npm install
npm run dev
```

Il sito è visibile su `http://localhost:4321/portfolio-edoardo-rossi/`.

Per verificare il risultato finale prima di pubblicare:

```bash
npm run build && npm run preview
```

## Pubblicazione

Il deploy è automatico: a ogni `push` sul branch `main`, il workflow in
`.github/workflows/deploy.yml` esegue la build e pubblica su GitHub Pages.

Configurazione già attiva (da non modificare salvo cambio di repository):

- `astro.config.mjs` → `site: 'https://rossiedoardo369.github.io'`,
  `base: '/portfolio-edoardo-rossi/'`
- Settings → Pages → Source: **GitHub Actions**

> ⚠️ Se carichi file dall'interfaccia web di GitHub, verifica sempre che finiscano nel
> percorso corretto: il trascinamento di cartelle può creare un livello di annidamento
> in più e impedire la build. Il metodo più sicuro è "Add file → Create new file"
> scrivendo a mano il percorso completo.

## Aggiungere un nuovo case study

1. Crea `src/pages/work/nome-del-caso.astro`
2. Usa un case study esistente come modello: importa `CaseStudyLayout` e compila
   `snapshot`, `results` e il corpo del testo
3. Aggiungi la card corrispondente nell'array `cases` di `src/pages/work/index.astro`

Nessuna modifica al codice del layout è necessaria.

## Design

Direzione visiva: minimale e analitica, dati in primo piano. Tutti i token (colore,
tipografia, spaziatura) sono in cima a `src/styles/global.css`.

- **Colori:** sfondo carta fredda, inchiostro quasi-nero, verde-petrolio per i dati
  confermati, ambra per i punti aperti e i limiti dichiarati
- **Font:** Space Grotesk (titoli), IBM Plex Sans (testo), IBM Plex Mono (numeri e metriche)

## Riservatezza dei contenuti

I case study riportano **dati reali con clienti anonimizzati**. Non devono mai comparire
nei contenuti pubblici:

- nomi di studi, aziende o professionisti
- città specifiche (l'area geografica ampia è accettabile)
- nomi propri di protocolli o iniziative ricercabili online
- dati identificativi: partite IVA, numeri di albo, indirizzi, recapiti
- qualsiasi dato relativo a singoli pazienti o contatti

Le metriche numeriche sono reali e verificate. Dove un dato proviene da stime condivise
dal cliente anziché da un tracciamento formalizzato, il case study lo dichiara
esplicitamente.
