export const BOOKING_URL =
  "https://www.booking.com/hotel/it/b-amp-b-via-del-mare-campomarino-lido.html";

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
    label: "Wonderful",
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

export const photos = {
  hero: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/876863019.jpg?k=c910e313e6f8d7700d175a27ac9fefed7b566a41de43e4f3e6b81cdec15ea996&o=",
  bedroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/877373273.jpg?k=f12cf9c007925584701727274556b684985491394737417e50f2dcd317197224&o=",
  jacuzziGreen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/877373284.jpg?k=267621d38708b1e4a22dacee65808a7eba2fc5b8e414469cc84ffaa169ffc2ee&o=",
  living: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/877373300.jpg?k=b6836deac848195a051d0e56a728f3bcc6b7d774d6410442325e13266fa132b5&o=",
  detail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/877373265.jpg?k=e8e68b5e8283a182fb7b18b43afa8c69db0b4e85fad071eef80cd45b0235364d&o=",
  console: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/877373298.jpg?k=0e194de5149a227b0402cf0acfa3f2ac41813c5f0f396251010973c53688756b&o=",
  bathroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/877373296.jpg?k=d94eceb25fdb0e1264870ce0a57e3d70da8361c34420979deb2e71b24c2a7ba3&o=",
  shower: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/877373278.jpg?k=38cc5bc88e43eb7ee18fe062a76933dde4642d793491a6e73971612a56df02b8&o=",
};

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
    features: ["Bagno privato", "Aria condizionata", "Balcone", "WiFi gratuito", "TV", "Set di cortesia"],
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
    features: ["Vasca idromassaggio", "Bagno privato", "Aria condizionata", "Balcone / Terrazzo", "WiFi gratuito", "Set di cortesia"],
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
