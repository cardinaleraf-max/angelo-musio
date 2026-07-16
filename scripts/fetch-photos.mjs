/**
 * Scarica TUTTE le foto ufficiali della struttura (CDN Booking, max1024x768)
 * in public/photos/, nominate per id: <id>.jpg
 *
 * Uso:  node scripts/fetch-photos.mjs
 * Eseguito automaticamente prima di ogni build (`prebuild`).
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

// id foto → hash k del CDN (estratti dalla scheda Booking della struttura)
const PHOTOS = {
  876863019: "c910e313e6f8d7700d175a27ac9fefed7b566a41de43e4f3e6b81cdec15ea996",
  877373262: "df55423f501152892a6729e03daa29d16edf9de3d3fe245429082ef948ed645a",
  877373265: "e8e68b5e8283a182fb7b18b43afa8c69db0b4e85fad071eef80cd45b0235364d",
  877373268: "fa2b9f1b0c46d251364452e8477d5723b8b98b5859e43a960df6d2e5588e0c9c",
  877373269: "6d6c6a7937b5e1b80ae7306b2c4a5035f1fedc11be9c32c39988a69cd5d7a575",
  877373273: "f12cf9c007925584701727274556b684985491394737417e50f2dcd317197224",
  877373274: "027f95cfd4721d72c856f1580940501c491bef06b40ca052d1b099ab019be9a1",
  877373276: "aeae603008805b699b7b3c25466e8e75a5bc8ae9b24a8635460a9438ca67c963",
  877373277: "e98018664262636343176cb6327e127c002e1e41effdf29eec7b94d18c218c3f",
  877373278: "38cc5bc88e43eb7ee18fe062a76933dde4642d793491a6e73971612a56df02b8",
  877373279: "97fd0fdaf01cb5eb76cdfef86d79ad062d5221fe77b8306e789686b007ea49a1",
  877373280: "5baf9ac322653f0b7405684236f922e9d1b0d40fa72796a42dc94239995c68a3",
  877373281: "e74d7659e679284ab465d13375137cf744e96880e2a6d278877d2d141cbb5899",
  877373282: "5ace81a1d1d8df366340d00f9c5ac42cac7107f06f408a8834d6794f3fc1ed97",
  877373283: "59164b667008943338696914aaddf79cf2cb1fe8585761e17eb71c8e59f17831",
  877373284: "267621d38708b1e4a22dacee65808a7eba2fc5b8e414469cc84ffaa169ffc2ee",
  877373285: "ffd0e3c32f73c7ba528e3ddc3cf41424a3b621f84d4be7a3ffb73fa994cb1aba",
  877373290: "472145e9c4966e85d2ddad1c0908e7b9f24a49644577b3a15499877e7d8b785e",
  877373292: "4116af69f0dba5dc612a42dabf7281cfc903f6abc1de1e6209e102675f13e0e7",
  877373293: "f38fc1c62c5c21a8d2bb94a2349969f338aefd1b591b05f97b287b0d7b0b751d",
  877373295: "159793bd361da7da4623deaddcfe5ee7c0bb05326b860657aad57ddd918d2a64",
  877373296: "d94eceb25fdb0e1264870ce0a57e3d70da8361c34420979deb2e71b24c2a7ba3",
  877373297: "eb13bcc52fe0f5b47fcb015220294f93af37ffdfa2fe7e8f8662d3113c9facc0",
  877373298: "0e194de5149a227b0402cf0acfa3f2ac41813c5f0f396251010973c53688756b",
  877373299: "b76d20405e9a93422ef7ce2b061c53747232aef83699d5e6b6af73d2ac168c2f",
  877373300: "b6836deac848195a051d0e56a728f3bcc6b7d774d6410442325e13266fa132b5",
  877373301: "f3514aa8e389be1c07cc0a8da68c7a7b3ea7531afc3e10bc80e237557e83e0d1",
  877375420: "813b99720cca3c623911c4f9f35180e0d8fe45beb0e251544b76d49bcf771339",
  877375422: "f222f5a94c2a3953cfd36479eadd1b654385f32389b7fa40adeb1d702398d63a",
  877375423: "e13d436c4b3f4e1ece97a515b683a396dcc675e745f675650fa974aff5853293",
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

for (const [id, k] of Object.entries(PHOTOS)) {
  const dest = join(outDir, `${id}.jpg`);
  if (existsSync(dest) && statSync(dest).size > 5_000) {
    ok += 1;
    continue;
  }
  // Scarica su file temporaneo: un download fallito non tocca mai file esistenti.
  const tmp = `${dest}.download`;
  try {
    await download(`${CDN}/${id}.jpg?k=${k}&o=`, tmp);
    if (statSync(tmp).size < 5_000) throw new Error("file troppo piccolo, probabile errore");
    renameSync(tmp, dest);
    console.log(`✓ ${id}.jpg`);
    ok += 1;
  } catch (err) {
    failed += 1;
    if (existsSync(tmp)) unlinkSync(tmp);
    console.warn(`✗ ${id}.jpg: ${err.message}`);
  }
}

console.log(`Foto pronte: ${ok}/${Object.keys(PHOTOS).length}${failed ? ` (${failed} non scaricate)` : ""}`);
