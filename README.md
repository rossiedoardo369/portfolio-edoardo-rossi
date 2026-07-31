# Edoardo Rossi — Performance Marketing & Digital Strategy

Portfolio personale di **Edoardo Rossi**, specialista in performance marketing su Google Ads
e Meta Ads. Il sito raccoglie case study reali, con dati verificati e clienti anonimizzati,
di campagne seguite dal primo contatto pubblicitario fino al risultato di business.

🔗 **Sito online:** https://rossiedoardo369.github.io/portfolio-edoardo-rossi/ — disponibile in italiano e inglese

## Cosa trovi nel sito

**5 case study**, ognuno con un problema di business reale e un risultato misurato:

| Case study | Risultato |
|---|---|
| Trasformare un format di eventi ricorrenti in un canale di acquisizione misurabile | 13,55× ROAS (2024) |
| Costruire un posizionamento specialistico, dalla discovery alla chiusura del preventivo | 8,53× ROAS sulla spesa pubblicitaria |
| Da diagnosi complessa a fatturato misurabile: posizionamento e automazione nella stessa strategia | +600% fatturato su una linea di servizio |
| Local marketing in un territorio bilingue: tre sedi, due lingue, un solo sistema | −53% costo per lead |
| Quando l'advertising supera la capacità dell'azienda | 37 pazienti acquisiti in quattro mesi |

I casi appartengono in prevalenza al settore odontoiatrico: è una specializzazione verticale
scelta, non un limite — il metodo (discovery diretta, misurazione end-to-end, integrazione con
CRM) si applica allo stesso modo ad altri settori regolamentati o ad alto valore per lead.

Oltre ai case study, il sito include:

- **Competenze** — piattaforme e strumenti usati (Google Ads, Meta Ads, GA4/GTM, CRM e
  automazione, CRO)
- **Esperienza** — percorso professionale e certificazioni verificabili (Google Ads Search,
  Google Ads Display, Meta Media Buying)
- **Chi sono** e **Contatti**, con le domande più frequenti su come e con chi lavoro

## Il metodo

1. **Strategia** — discovery diretta con il cliente per individuare l'obiettivo di business
   reale, non solo quello pubblicitario
2. **Esecuzione** — creatività, struttura della campagna, automazioni, integrazione con CRM
   e team commerciale
3. **Misurazione** — reportistica che risale fino al risultato di business, non si ferma al click

## Contatti

- **Email:** rossi.edoardo369@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/rossiedoardo369

## Sotto il cofano

Il sito è costruito con [Astro](https://astro.build) e pubblicato su GitHub Pages tramite
GitHub Actions (deploy automatico a ogni push su `main`). Bilingue IT/EN con routing e
switch di lingua nativi, accessibile da tastiera, con Consent Mode per Google Analytics/GTM
attivo solo dopo consenso esplicito dell'utente.

```
src/
├── layouts/       BaseLayout (header, footer, meta tag) e CaseStudyLayout
├── components/    Header, Footer, CookieConsent, ClosingCTA, KeyFacts, RevealH1
├── i18n/          traduzioni e utility per il routing bilingue
├── data/          contenuti dei case study (IT/EN)
├── pages/         home, lavori selezionati, competenze, esperienza, chi sono, contatti
│   └── en/        versione inglese, stessa struttura
└── styles/        design token e stili condivisi
```

Per eseguirlo in locale serve [Node.js](https://nodejs.org) 18+:

```bash
npm install
npm run dev
```

## Riservatezza dei contenuti

I case study riportano **dati reali con clienti anonimizzati**. Non compaiono mai nomi di
studi, aziende o professionisti, città specifiche, dati identificativi o informazioni relative
a singoli pazienti o contatti. Le metriche numeriche sono reali e verificate; dove un dato
proviene da una stima condivisa dal cliente anziché da un tracciamento formalizzato, il case
study lo dichiara esplicitamente.
