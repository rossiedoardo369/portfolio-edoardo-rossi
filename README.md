# Portfolio — Edoardo Rossi

Sito portfolio personale in **HTML, CSS e JavaScript puri**. Nessun framework,
nessun passaggio di build, nessun `npm install`: i file sono esattamente quelli
che vedi, pronti per essere pubblicati.

## Stato del progetto

🟡 **In costruzione — solo la Home è pronta.**

- [x] Home page
- [x] Pagina 404
- [ ] Lavori selezionati (`work/`)
- [ ] Dettaglio case study (`work/nome-caso.html`)
- [ ] Competenze (`expertise/`)
- [ ] Esperienza (`experience/`)
- [ ] Chi sono (`about/`)
- [ ] Contatti (`contact/`)
- [ ] Résumé scaricabile

## Struttura del progetto

```
├── index.html          ← Home
├── 404.html             ← pagina di errore
├── css/style.css        ← tutto lo stile del sito, con i design token in cima
├── js/main.js           ← piccoli script (es. anno nel footer)
└── images/favicon.svg
```

Ogni nuova pagina (es. `work/index.html`) avrà la stessa struttura di intestazione
e piè di pagina copiata da `index.html` — non essendoci un motore di
templating, header e footer si copiano manualmente in ogni file HTML. A questa
scala (poche pagine) è più semplice e affidabile che introdurre uno strumento in più.

## Come vedere il sito in locale

Basta aprire `index.html` con doppio click nel browser. Se vuoi provare con un
piccolo server locale (consigliato quando aggiungeremo più pagine, per testare
i link relativi):

```bash
# Python (di solito già installato su Mac/Linux)
python3 -m http.server 8000
# poi apri http://localhost:8000
```

## Pubblicare su GitHub Pages

Molto più semplice rispetto a un progetto con build:

1. Carica tutti questi file nella **radice** del repository (va bene anche
   trascinandoli dalla pagina di GitHub, purché li trascini *singolarmente o
   dentro le loro cartelle*, non l'intera cartella del progetto — altrimenti
   si crea un livello in più come è successo con la versione precedente)
2. Vai su **Settings → Pages**
3. In "Build and deployment" → "Source", scegli **Deploy from a branch**
4. Branch: **main**, cartella: **/ (root)**
5. Salva: dopo un minuto o due il sito sarà live all'indirizzo indicato

Nessun workflow, nessuna cartella nascosta necessaria: questo è il motivo
principale per cui questa versione è più semplice da mantenere della precedente.

## Note su design e contenuti

- Direzione visiva: minimale, analitica, dati in primo piano — vedi
  `css/style.css` per i design token (colore, tipografia, spaziatura)
- Font: Space Grotesk (titoli), IBM Plex Sans (corpo), IBM Plex Mono (numeri)
- Tutti i dati dei case study sono anonimizzati alla fonte: nessun nome di
  cliente, indirizzo o dato identificativo va mai aggiunto ai contenuti pubblici
