# B&B Via del Mare — bbviadelmare.it

Sito vetrina del **B&B Via del Mare** di Campomarino Lido (CB), Molise.
Ogni CTA "Prenota" apre la pagina della struttura su Booking.com.

Costruito con Vite + React + TypeScript + Tailwind CSS.

## Sviluppo locale

```sh
npm install
npm run fetch-photos   # scarica le foto della struttura in public/photos/
npm run dev
```

Le foto ufficiali vengono scaricate dal CDN di Booking con `scripts/fetch-photos.mjs`
(eseguito anche in automatico prima di ogni build). **Consiglio:** dopo averle
scaricate in locale, committa la cartella `public/photos/` — così il sito non
dipende più dagli URL Booking, che potrebbero cambiare nel tempo.

## Deploy su GitHub Pages (bbviadelmare.it)

Il deploy è automatico: a ogni push su `main` la workflow
`.github/workflows/deploy.yml` builda il sito (scaricando le foto) e lo
pubblica su GitHub Pages.

### Configurazione una tantum

1. **GitHub → Settings → Pages** → in "Build and deployment" scegli
   **Source: GitHub Actions**.
2. Sempre in **Settings → Pages**, nel campo "Custom domain" inserisci
   `bbviadelmare.it` e spunta **Enforce HTTPS** (dopo la verifica DNS).
3. **DNS del dominio** (dal pannello del registrar di bbviadelmare.it):

   | Tipo  | Nome | Valore |
   |-------|------|--------|
   | A     | @    | 185.199.108.153 |
   | A     | @    | 185.199.109.153 |
   | A     | @    | 185.199.110.153 |
   | A     | @    | 185.199.111.153 |
   | CNAME | www  | cardinaleraf-max.github.io |

   La propagazione DNS può richiedere fino a qualche ora; poi GitHub emette
   automaticamente il certificato HTTPS.

Il file `public/CNAME` (contiene `bbviadelmare.it`) viene incluso nella build:
non rimuoverlo, serve a GitHub Pages per il dominio personalizzato.

### Note tecniche

- Routing client-side (React Router): la workflow copia `index.html` in
  `404.html`, così anche gli accessi diretti a `/camere`, `/dove-siamo`,
  `/contatti` funzionano su Pages.
- SEO: meta tag, Open Graph, dati strutturati schema.org (BedAndBreakfast),
  `sitemap.xml` e `robots.txt` puntano a `https://bbviadelmare.it`.

## Struttura contenuti

Tutti i dati della struttura (camere, servizi, recensioni, distanze, dati
legali, punteggi Booking) sono in un unico file: `src/data/property.ts`.
Per aggiornare un testo o un punteggio si modifica solo quello.
