
## Obiettivo

Adattare il template esistente in un sito vetrina bilingue-friendly (italiano) per **B&B Via del Mare** a Campomarino Lido (CB). Nessuna prenotazione on-site: ogni CTA "Prenota" apre il link diretto Booking in nuova scheda. Look editoriale, artigianale, non-AI: rimuovo tutti gli stilemi generici (gradienti viola, wording da template, sezioni fittizie tipo "admin", "auth", "esperienze finte", "location multiple").

## Contenuti reali che uso

**Struttura**
- Nome: B&B Via del Mare
- Indirizzo: Via Don Luigi Sturzo 87, 86042 Campomarino (CB), Italia
- Rating Booking: 9.0 · 3 recensioni · "Wonderful"
- Punteggi: Staff 10, Pulizia 10, Comfort 10, Servizi 10, Rapporto qualità/prezzo 8.3, Posizione 9.2
- Check-in 15:00–21:00 · Check-out 08:00–10:00
- Camere: Basic Triple Room · Luxury Triple Room
- Highlights: colazione italiana, balcone/terrazzo, pet-friendly, Jacuzzi/vasca idromassaggio, WiFi gratis, camere non fumatori, camere familiari
- Distanze: 300 m da Spiaggia di Campomarino, 4 min a piedi da Chiesa S. Anna, ristoranti a 60–300 m
- Licenza: 070010-BBI-00001 · CIN IT070010B49ZZ523NS
- Foto: 8 immagini reali prese direttamente dal CDN Booking (bstatic.com) — nessuna immagine AI-generata

**Dati legali (footer / pagina Info)**
- B & B Via del Mare di Musio Angelo e C. S.a.s.
- P.IVA / C.F. 01898520703 · REA CB-214806
- PEC: viadelmare2023@pec.it
- Socio accomandatario: Angelo Musio · Socia accomandante: Ornella Senape

**Recensioni reali (dai guest Booking)**
- Belio, Donatella, Gerryzuz — testi in italiano già estratti

**Link Booking (unico CTA di prenotazione)**
`https://www.booking.com/Share-ek3tbVo`

## Struttura sito (nuova, minimale, 3 pagine)

Rimuovo dal template: Locations (multi-struttura), LocationDetail, Booking form multi-step, Experience cards con hover video, Admin, Auth. Il B&B è una struttura sola: niente cataloghi.

**Rotte finali**
- `/` — Home
- `/rooms` — Le camere (dettaglio delle 2 tipologie)
- `/location` — Dove siamo (mappa, spiaggia, dintorni, come arrivare)
- `/contatti` — Contatti + dati legali

### Home (`/`)
1. Hero pieno schermo con foto reale della camera + logo tondo del B&B in alto a sinistra, headline "Via del Mare · Campomarino", sottotitolo "Bed & Breakfast a 300 metri dall'Adriatico". CTA primaria "Prenota su Booking" (apre link), secondaria "Scopri le camere".
2. Intro editoriale (2 colonne): breve testo caldo scritto a mano dai proprietari (Ornella & Angelo) + immagine soggiorno.
3. Rating strip: 9.0 / 10 · Wonderful su Booking · barrette punteggi (Staff 10, Pulizia 10, Comfort 10, Posizione 9.2).
4. Le camere (2 card grandi): Basic Triple, Luxury Triple, con foto e "Vedi disponibilità → Booking".
5. Cosa offriamo: griglia icone essenziali (Colazione italiana, Jacuzzi, WiFi, Balcone/Terrazzo, Pet-friendly, Aria condizionata, Camere familiari, Non fumatori).
6. Dove siamo: mini-blocco con mappa OpenStreetMap embed + distanze reali (spiaggia 300 m, chiesa S. Anna 4 min, ristoranti 60-300 m).
7. Recensioni: 3 testimonianze reali con nome ospite e bandierina IT.
8. CTA finale: banda scura con "Il tuo prossimo weekend al mare" + bottone Booking.

### `/rooms`
Due sezioni lunghe, una per camera, con galleria foto reali, letti disponibili, servizi in camera, CTA Booking. Nessun prezzo hard-coded (varia).

### `/location`
- Mappa embed (OpenStreetMap iframe, no API key)
- Lista "Nel quartiere" con distanze reali: spiaggia, chiesa, stazione Campomarino 1.1 km, ristoranti nominati
- "Come arrivare": auto, treno (stazione Campomarino), aeroporti (Foggia 85 km)

### `/contatti`
- Indirizzo, telefono (chiedo al cliente in follow-up se lo ha, per ora metto solo email PEC + form mailto)
- Dati fiscali completi (visura)
- Orari check-in/out
- CTA Booking

## Design

**Palette** — mare + sabbia, non generica:
- Sabbia crema `#F5EFE6` (bg)
- Blu profondo Adriatico `#0E3B4E` (testo, accenti)
- Azzurro logo `#5FC4D0` (accento leggero, usato con parsimonia — solo underline e dettagli)
- Terracotta `#C97B5A` (CTA prenota, per non sembrare "startup blu")
- Off-white `#FBF9F5`

**Tipografia**:
- Display: **Cormorant Garamond** (serif elegante, editoriale — no Playfair generico)
- Body: **Inter Tight** medium/regular, tracking largo
- Piccoli caps per etichette

**Composizione**: griglie asimmetriche, whitespace importante (py-24 a py-32), foto grandi con didascalie piccole in serif italic. Nessun gradiente viola, nessuna glassmorphism, nessun blur. Bottoni: rettangoli con bordo sottile, no ombre morbide.

**Motion**: solo fade-in leggeri allo scroll, nessuna animazione "wow".

## Cambiamenti tecnici

- Riscrivo `src/index.css` (tokens palette + font Cormorant/Inter Tight via Google Fonts import).
- Riscrivo `src/App.tsx`: 4 rotte finali, rimozione Admin/Auth/Locations/LocationDetail.
- Cancello: `src/pages/Admin.tsx`, `Auth.tsx`, `Locations.tsx`, `LocationDetail.tsx`, `src/components/Booking.tsx`, `Experience.tsx`, `Locations.tsx`, `src/data/bookings.ts`, `src/data/locations.ts`.
- Nuovi componenti: `Nav.tsx`, `Hero.tsx`, `Rating.tsx`, `RoomCards.tsx`, `Amenities.tsx`, `LocationMap.tsx`, `Reviews.tsx`, `Footer.tsx`, `BookingCTA.tsx`.
- Nuovi dati: `src/data/property.ts` (rooms, amenities, reviews, distances, legal) — un singolo file typed.
- Salvo il logo in `public/logo.png` + favicon derivata.
- Titolo/meta in `index.html`: "B&B Via del Mare · Campomarino Lido (Molise)" + descrizione reale.
- Rimuovo eventuali tabelle Supabase legate a booking/admin (non uso backend: è solo vetrina).

## Cose che chiedo dopo il piano (non bloccanti)

1. Hai un **numero di telefono / WhatsApp** da mostrare pubblicamente? (Se sì lo metto, altrimenti solo PEC + form)
2. Vuoi anche versione **inglese** (toggle IT/EN) o **solo italiano**?
3. Confermi che uso le **8 foto direttamente dal CDN Booking** (bstatic.com) o preferisci caricarle tu in locale in seguito?

Posso procedere anche senza risposta a queste tre: default = solo italiano, solo PEC + form, foto Booking hot-linked (le sostituiamo dopo se preferisci).
