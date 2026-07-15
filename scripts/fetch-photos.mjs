/**
 * Scarica le foto ufficiali della struttura (CDN Booking) in public/photos/,
 * così il sito pubblicato le serve dal proprio dominio e non dipende da Booking.
 *
 * Uso:  node scripts/fetch-photos.mjs
 * Viene eseguito automaticamente prima di ogni build (`prebuild`).
 * Se un file esiste già non viene riscaricato; se la rete non è disponibile
 * lo script avvisa ma non fa fallire la build.
 */
import { createWriteStream, existsSync, mkdirSync, renameSync, statSync, unlinkSync } from "node:fs";
import { get } from "node:https";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "photos");

const CDN = "https://cf.bstatic.com/xdata/images/hotel/max1024x768";

const PHOTOS = {
  "camera-luxury.jpg": `${CDN}/876863019.jpg?k=c910e313e6f8d7700d175a27ac9fefed7b566a41de43e4f3e6b81cdec15ea996&o=`,
  "camera-letto.jpg": `${CDN}/877373273.jpg?k=f12cf9c007925584701727274556b684985491394737417e50f2dcd317197224&o=`,
  "vasca-idromassaggio.jpg": `${CDN}/877373284.jpg?k=267621d38708b1e4a22dacee65808a7eba2fc5b8e414469cc84ffaa169ffc2ee&o=`,
  "soggiorno.jpg": `${CDN}/877373300.jpg?k=b6836deac848195a051d0e56a728f3bcc6b7d774d6410442325e13266fa132b5&o=`,
  "dettaglio.jpg": `${CDN}/877373265.jpg?k=e8e68b5e8283a182fb7b18b43afa8c69db0b4e85fad071eef80cd45b0235364d&o=`,
  "consolle.jpg": `${CDN}/877373298.jpg?k=0e194de5149a227b0402cf0acfa3f2ac41813c5f0f396251010973c53688756b&o=`,
  "bagno.jpg": `${CDN}/877373296.jpg?k=d94eceb25fdb0e1264870ce0a57e3d70da8361c34420979deb2e71b24c2a7ba3&o=`,
  "doccia.jpg": `${CDN}/877373278.jpg?k=38cc5bc88e43eb7ee18fe062a76933dde4642d793491a6e73971612a56df02b8&o=`,
};

function download(url, dest, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 5) return reject(new Error("troppi redirect"));
    get(url, { headers: { "User-Agent": "Mozilla/5.0 (bbviadelmare.it photo sync)" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        return resolve(download(res.headers.location, dest, redirects + 1));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const file = createWriteStream(dest);
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
      file.on("error", reject);
    }).on("error", reject);
  });
}

mkdirSync(outDir, { recursive: true });

let ok = 0;
let failed = 0;

for (const [name, url] of Object.entries(PHOTOS)) {
  const dest = join(outDir, name);
  if (existsSync(dest) && statSync(dest).size > 5_000) {
    ok += 1;
    continue;
  }
  // Scarica su file temporaneo: un download fallito non tocca mai file esistenti.
  const tmp = `${dest}.download`;
  try {
    await download(url, tmp);
    if (statSync(tmp).size < 5_000) throw new Error("file troppo piccolo, probabile errore");
    renameSync(tmp, dest);
    console.log(`✓ ${name}`);
    ok += 1;
  } catch (err) {
    failed += 1;
    if (existsSync(tmp)) unlinkSync(tmp);
    console.warn(`✗ ${name}: ${err.message}`);
  }
}

console.log(`Foto pronte: ${ok}/${Object.keys(PHOTOS).length}${failed ? ` (${failed} non scaricate)` : ""}`);
