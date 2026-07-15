export const BOOKING_URL =
  "https://www.booking.com/hotel/it/b-amp-b-via-del-mare-campomarino-lido.html";

export const SITE_URL = "https://bbviadelmare.it";

export const property = {
  name: "B&B Via del Mare",
  tagline: "Bed & Breakfast a Campomarino Lido",
  location: "Campomarino Lido · Molise",
  address: "Via Don Luigi Sturzo 87, 86042 Campomarino (CB)",
  email: "viadelmare2023@pec.it",
  checkIn: "15:00 – 21:00",
  checkOut: "08:00 – 10:00",
  license: "070010-BBI-00001",
  cin: "IT070010B49ZZ523NS",
  hosts: "Ornella & Angelo",
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

// Foto ufficiali della struttura, servite dal progetto (public/photos/).
// Vengono scaricate dal CDN Booking con `node scripts/fetch-photos.mjs`
// (eseguito in automatico prima di ogni build).
export const photos = {
  hero: "/photos/camera-luxury.jpg",
  bedroom: "/photos/camera-letto.jpg",
  jacuzziGreen: "/photos/vasca-idromassaggio.jpg",
  living: "/photos/soggiorno.jpg",
  detail: "/photos/dettaglio.jpg",
  console: "/photos/consolle.jpg",
  bathroom: "/photos/bagno.jpg",
  shower: "/photos/doccia.jpg",
};

export const heroSlides = [
  { src: photos.hero, caption: "La camera Luxury, con vasca idromassaggio" },
  { src: photos.bedroom, caption: "Letti freschi di bucato, ogni giorno" },
  { src: photos.living, caption: "Il soggiorno, per la colazione italiana" },
  { src: photos.jacuzziGreen, caption: "La vasca idromassaggio a bordo camera" },
];

export const galleryStrip = [
  { src: photos.bedroom, caption: "La camera" },
  { src: photos.jacuzziGreen, caption: "L'idromassaggio" },
  { src: photos.living, caption: "Il soggiorno" },
  { src: photos.console, caption: "I dettagli" },
  { src: photos.bathroom, caption: "Il bagno" },
  { src: photos.detail, caption: "Gli arredi" },
];

export const rooms = [
  {
    id: "basic-triple",
    name: "Basic Triple Room",
    subtitle: "Camera Tripla Essenziale",
    beds: "1 letto singolo + 1 letto matrimoniale",
    guests: "Fino a 3 ospiti",
    description:
      "Una camera luminosa con arredi curati, bagno privato, aria condizionata e balcone. Pensata per famiglie o piccoli gruppi che vogliono restare vicini al mare senza rinunciare al comfort.",
    photos: [photos.bedroom, photos.living, photos.detail, photos.bathroom],
    features: [
      "Bagno privato con bidet",
      "Aria condizionata",
      "Balcone",
      "WiFi gratuito",
      "TV a schermo piatto",
      "Frigorifero",
      "Macchina del caffè",
      "Cassaforte",
    ],
  },
  {
    id: "luxury-triple",
    name: "Luxury Triple Room",
    subtitle: "Camera Tripla Luxury con Vasca Idromassaggio",
    beds: "1 divano letto + 1 letto matrimoniale",
    guests: "Fino a 3 ospiti",
    description:
      "La camera più richiesta: pareti in doghe di legno, illuminazione morbida e una vasca idromassaggio a bordo camera. Per un weekend a due, un anniversario, o una fuga senza compromessi.",
    photos: [photos.hero, photos.jacuzziGreen, photos.console, photos.shower],
    features: [
      "Vasca idromassaggio",
      "Bagno privato con bidet",
      "Aria condizionata",
      "Balcone / Terrazzo",
      "WiFi gratuito",
      "TV a schermo piatto",
      "Macchina del caffè",
      "Set di cortesia",
    ],
  },
];

export const amenities = [
  { label: "Colazione italiana", note: "servita ogni mattina" },
  { label: "Vasca idromassaggio", note: "nella camera Luxury" },
  { label: "WiFi gratuito", note: "in tutta la struttura" },
  { label: "Balcone o terrazzo", note: "in ogni camera" },
  { label: "Pet-friendly", note: "senza costi aggiuntivi" },
  { label: "Aria condizionata", note: "individuale in camera" },
  { label: "Camere familiari", note: "fino a 3 ospiti" },
  { label: "Non fumatori", note: "tutti gli ambienti" },
];

export const nearby = {
  beaches: [
    { name: "Spiaggia di Campomarino", distance: "300 m" },
    { name: "Rio Vivo Beach", distance: "6,9 km" },
    { name: "Sant'Antonio Beach", distance: "8 km" },
  ],
  places: [
    { name: "Chiesa S. Anna", distance: "4 min a piedi" },
    { name: "Belvedere della Torretta", distance: "8 km" },
    { name: "Parco Nazionale del Gargano", distance: "16 km" },
  ],
  food: [
    { name: "Trattoria Santa Monica", distance: "60 m" },
    { name: "Ristorante Orchidea", distance: "230 m" },
    { name: "Cornetteria 152", distance: "320 m" },
  ],
  transport: [
    { name: "Stazione di Campomarino", distance: "1,1 km" },
    { name: "Stazione di Guglionesi", distance: "8 km" },
    { name: "Aeroporto Foggia \"Gino Lisa\"", distance: "85 km" },
  ],
};

export const reviews = [
  {
    author: "Belio",
    country: "Italia",
    text: "Arredamento molto curato, bellissimo, pulito, molto confortevole. La posizione del luogo è ottima: a due passi dalla spiaggia e dal centro. La signora Ornella è super professionale, gentilissima, premurosa.",
  },
  {
    author: "Donatella",
    country: "Italia",
    text: "Struttura pulita, dotata di ogni confort. Convenzione con il lido.",
  },
  {
    author: "Gerryzuz",
    country: "Italia",
    text: "La pulizia, l'arredamento, la posizione, la colazione inclusa.",
  },
];
