# Portfolio — Edoardo Rossi

Sito portfolio personale, costruito con [Astro](https://astro.build), pensato per essere
ospitato gratuitamente su GitHub Pages.

## Stato del progetto

🟡 **In costruzione — solo la Home è pronta per una prima revisione.**

- [x] Impalcatura del progetto (layout, header, footer, design token)
- [x] Home page
- [ ] Selected Work (griglia dei case study)
- [ ] Case Study Detail (template riutilizzabile)
- [ ] Expertise
- [ ] Experience
- [ ] About
- [ ] Contact
- [ ] Résumé scaricabile

## Eseguire il progetto in locale

Serve [Node.js](https://nodejs.org) (versione 18 o superiore).

```bash
npm install
npm run dev
```

Il sito sarà visibile su `http://localhost:4321`.

## Pubblicare su GitHub Pages

1. **Aggiorna `astro.config.mjs`** con il tuo username GitHub e il nome del repository:
   ```js
   export default defineConfig({
     site: 'https://TUO-USERNAME.github.io',
     base: '/NOME-DEL-REPO',
   });
   ```
   Se il repository si chiama `TUO-USERNAME.github.io` (una "user page"), imposta invece
   `base: '/'`.

2. **Carica il progetto su GitHub** (repository pubblico o privato, entrambi funzionano
   con GitHub Pages su piani gratuiti per i repository pubblici):
   ```bash
   git init
   git add .
   git commit -m "Prima versione del portfolio"
   git branch -M main
   git remote add origin https://github.com/TUO-USERNAME/NOME-DEL-REPO.git
   git push -u origin main
   ```

3. **Attiva GitHub Pages con sorgente "GitHub Actions":**
   - Vai su Settings → Pages nel repository
   - In "Build and deployment" → "Source", seleziona **GitHub Actions**
   - Il workflow incluso (`.github/workflows/deploy.yml`) farà build e deploy
     automaticamente a ogni push su `main`

4. Dopo qualche minuto il sito sarà live all'indirizzo indicato in Settings → Pages.

## Come aggiungere un nuovo case study (quando saranno pronti)

I case study vivranno come contenuti separati dal codice — quando costruiamo la pagina
"Selected Work" e il template di dettaglio, aggiungere un nuovo progetto sarà questione di
creare un nuovo file di contenuto, senza toccare il codice del sito.

## Note su design e contenuti

- Direzione visiva: minimale, analitica, dati in primo piano — vedi `src/styles/global.css`
  per i design token (colore, tipografia, spaziatura)
- Font: Space Grotesk (titoli), IBM Plex Sans (corpo), IBM Plex Mono (numeri e metriche)
- Tutti i dati dei case study sono già anonimizzati alla fonte: nessun nome di cliente,
  indirizzo o dato identificativo deve mai essere aggiunto ai contenuti pubblici
