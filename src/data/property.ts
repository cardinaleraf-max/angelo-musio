export const BOOKING_URL =
  "https://www.booking.com/hotel/it/b-amp-b-via-del-mare-campomarino-lido.html";

export const SITE_URL = "https://bbviadelmare.it";

export const property = {
  name: "B&B Via del Mare",
  tagline: "Bed & Breakfast a Campomarino Lido",
  location: "Campomarino Lido · Molise",
  address: "Via Don Luigi Sturzo 87, 86042 Campomarino (CB)",
  email: "viadelmare2023@gmail.com",
  pec: "viadelmare2023@pec.it",
  checkIn: "15:00 – 21:00",
  checkOut: "08:00 – 10:00",
  license: "070010-BBI-00001",
  cin: "IT070010B49ZZ523NS",
  hosts: "Angelo & Ornella",
  legal: {
    business: "B & B Via del Mare di Musio Angelo e C. S.a.s.",
    vat: "01898520703",
    rea: "CB - 214806",
  },
  rating: {
    score: 9.0,
    label: "Eccellente",
    reviews: 3,
    categories: [
      { label: "Personale", value: 10 },
      { label: "Pulizia", value: 10 },
      { label: "Comfort", value: 10 },
      { label: "Servizi", value: 10 },
      { label: "Posizione", value: 9.2 },
      { label: "Rapporto qualità/prezzo", value: 8.3 },
    ],
  },
};

// Foto ufficiali della struttura (scheda Booking), servite dal progetto.
// Scaricate dal CDN con `node scripts/fetch-photos.mjs` (automatico in build);
// i nomi file sono gli id foto di Booking.
const p = (id: number) => `/photos/${id}.jpg`;

export const photos = {
  hero: p(876863019), // vasca idromassaggio della Luxury
  bedroom: p(877373273), // camera Family, letti
  jacuzziGreen: p(877373284), // vasca con cromoterapia verde
  living: p(877373300), // soggiorno / veranda
  detail: p(877373265),
  console: p(877373298), // consolle barocca
  bathroom: p(877373296),
  shower: p(877373278),
};

export const heroSlides = [
  { src: photos.hero, caption: "La Luxury Room, con vasca idromassaggio" },
  { src: photos.bedroom, caption: "Letti freschi di bucato, ogni giorno" },
  { src: photos.living, caption: "La veranda, per la colazione italiana" },
  { src: photos.jacuzziGreen, caption: "Cromoterapia a bordo vasca" },
];

// Tutte le foto della struttura, alternando gli ambienti.
export const galleryStrip = [
  { src: p(877373273), caption: "La Family Room" },
  { src: p(876863019), caption: "La vasca idromassaggio" },
  { src: p(877373300), caption: "La veranda" },
  { src: p(877373282), caption: "La Luxury Room" },
  { src: p(877373277), caption: "La doccia in marmo" },
  { src: p(877373279), caption: "Il balcone" },
  { src: p(877373284), caption: "Cromoterapia verde" },
  { src: p(877373293), caption: "I letti della Family" },
  { src: p(877373298), caption: "La consolle" },
  { src: p(877373283), caption: "Il bagno" },
  { src: p(877373285), caption: "La Luxury Room" },
  { src: p(877373268), caption: "Il benvenuto" },
  { src: p(877373290), caption: "Cromoterapia blu" },
  { src: p(877373269), caption: "La Family Room" },
  { src: p(877373265), caption: "L'ingresso" },
  { src: p(877373280), caption: "La veranda" },
  { src: p(877373276), caption: "Il matrimoniale" },
  { src: p(877373278), caption: "Il bagno" },
  { src: p(877373295), caption: "L'idromassaggio" },
  { src: p(877373292), caption: "La Family Room" },
  { src: p(877373301), caption: "Il salottino esterno" },
  { src: p(877373281), caption: "Vasca a bordo camera" },
  { src: p(877373296), caption: "Il bagno della Family" },
  { src: p(877373274), caption: "Spazio per tre" },
  { src: p(877373297), caption: "La vasca, dall'alto" },
  { src: p(877373262), caption: "I dettagli" },
  { src: p(877375422), caption: "Il bagno" },
  { src: p(877373299), caption: "Il lavabo" },
  { src: p(877375420), caption: "I dettagli del bagno" },
  { src: p(877375423), caption: "La doccia" },
];

// Foto per camera, nell'ordine esatto della scheda Booking.
export const rooms = [
  {
    id: "family",
    name: "Family Room",
    bookingName: "Camera Tripla Basic",
    subtitle: "Camera tripla · 30 m² · piano terra",
    beds: "1 letto matrimoniale + 1 letto singolo",
    guests: "Fino a 3 ospiti",
    description:
      "La camera spaziosa, pensata per le famiglie: piano terra, balcone con zona pranzo all'aperto e una vista tranquilla sulla via. Arredi curati, bagno privato e tutto quello che serve per stare vicini al mare senza rinunciare al comfort.",
    photos: [
      877373273, 877373296, 877373274, 877373293, 877373301,
      877373283, 877373277, 877373269, 877373279, 877373292,
    ].map(p),
    features: [
      "Bagno privato con bidet",
      "Set di cortesia e asciugacapelli",
      "Aria condizionata e riscaldamento",
      "TV a schermo piatto",
      "Frigobar",
      "Macchina da caffè e bollitore",
      "Balcone con zona pranzo esterna",
      "WiFi gratuito",
      "Cassaforte",
      "Zanzariera",
    ],
  },
  {
    id: "luxury",
    name: "Luxury Room",
    bookingName: "Camera Tripla Luxury",
    subtitle: "Camera tripla · 30 m² · vasca idromassaggio",
    beds: "1 letto matrimoniale + 1 divano letto",
    guests: "Fino a 3 ospiti",
    description:
      "La camera più richiesta, dedicata alle coppie: pareti in doghe di legno, luci morbide e una vasca idromassaggio con cromoterapia a bordo camera. Servizio in camera e pacchetti romantici su richiesta, per un anniversario o una fuga a due.",
    photos: [
      877373268, 877373265, 877373262, 877373285, 877373284,
      877373295, 877373278, 877373280, 877373281, 877373300,
      877373282, 877373299, 877375420, 877373298, 877375422,
      877375423, 877373290, 877373297,
    ].map(p),
    features: [
      "Vasca idromassaggio con cromoterapia",
      "Servizio in camera",
      "Pacchetti romantici su richiesta",
      "Bagno privato con doccia",
      "Aria condizionata e riscaldamento",
      "TV a schermo piatto",
      "Frigobar",
      "Macchina da caffè e bollitore",
      "Terrazzo",
      "WiFi gratuito",
    ],
  },
];

export const amenities = [
  { label: "Colazione italiana", note: "servita ogni mattina" },
  { label: "Parcheggio gratuito", note: "comodo, in zona" },
  { label: "Giardino", note: "per rilassarsi all'ombra" },
  { label: "Vasca idromassaggio", note: "con cromoterapia, nella Luxury" },
  { label: "WiFi gratuito", note: "in tutta la struttura" },
  { label: "Aria condizionata", note: "individuale in camera" },
  { label: "Pet-friendly", note: "senza costi aggiuntivi" },
  { label: "Lavanderia", note: "su richiesta" },
];

export const nearby = {
  beaches: [
    { name: "Il mare e la spiaggia libera", distance: "200 m" },
    { name: "Spiaggia di Rio Vivo", distance: "6 km" },
    { name: "Spiaggia di Sant'Antonio", distance: "8 km" },
  ],
  places: [
    { name: "Murales del borgo arbëreshë", distance: "10 min d'auto" },
    { name: "Termoli e il Castello Svevo", distance: "15 min d'auto" },
    { name: "Traghetti per le Isole Tremiti", distance: "da Termoli" },
  ],
  food: [
    { name: "Trattoria Santa Monica", distance: "60 m" },
    { name: "Ristorante Orchidea", distance: "230 m" },
    { name: "Cornetteria 152", distance: "320 m" },
  ],
  transport: [
    { name: "Stazione di Campomarino", distance: "1,1 km" },
    { name: "Stazione di Termoli", distance: "12 km" },
    { name: "Aeroporto Foggia \"Gino Lisa\"", distance: "85 km" },
  ],
};

// Recensioni verificate, riportate parola per parola dalla scheda Booking.
export const reviews = [
  {
    author: "Belio",
    country: "Italia",
    score: 10,
    text: "Arredamento molto curato, bellissimo, pulito, molto confortevole. La posizione del luogo è ottima: a due passi dalla spiaggia e dal centro. La signora Ornella è super professionale, gentilissima, premurosa e pronta a soddisfare ogni tua esigenza. Consiglio a tutti questo B&B.",
  },
  {
    author: "Donatella",
    country: "Italia",
    score: 8,
    text: "Struttura pulita, dotata di ogni confort. Convenzione con il lido.",
  },
  {
    author: "Gerryzuz",
    country: "Italia",
    score: 9,
    text: "La pulizia, l'arredamento, la posizione, la colazione inclusa.",
  },
];
