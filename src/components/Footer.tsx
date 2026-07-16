import { Link } from "react-router-dom";
import { property } from "@/data/property";

export default function Footer() {
  return (
    <footer className="bg-sea text-background border-t-2 border-background/10">
      <div className="container-editorial py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-12 w-12 rounded-full bg-background/10 object-cover" />
            <div>
              <p className="headline text-xl">Via del Mare</p>
              <p className="label opacity-70">Campomarino · Molise</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm opacity-80 leading-relaxed">
            Un piccolo Bed & Breakfast a pochi passi dall'Adriatico. Curato ogni giorno dai proprietari, Ornella e Angelo.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="label text-sea-soft mb-4">Contatti</p>
          <p className="text-sm opacity-90">{property.address}</p>
          <a href={`mailto:${property.email}`} className="mt-2 block text-sm opacity-90 hover:text-sea-soft">
            {property.email}
          </a>
          <p className="mt-4 caption opacity-70">
            Check-in {property.checkIn}<br />
            Check-out {property.checkOut}
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="label text-sea-soft mb-4">Sito</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/camere" className="opacity-90 hover:text-sea-soft">Camere</Link></li>
            <li><Link to="/dove-siamo" className="opacity-90 hover:text-sea-soft">Dove siamo</Link></li>
            <li><Link to="/contatti" className="opacity-90 hover:text-sea-soft">Contatti</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="label text-sea-soft mb-4">Legale</p>
          <p className="caption !text-[11px] opacity-70 leading-relaxed">
            {property.legal.business}<br />
            P.IVA {property.legal.vat}<br />
            REA {property.legal.rea}<br />
            CIN {property.cin}<br />
            Lic. {property.license}
          </p>
        </div>
      </div>

      {/* Wordmark gigante a chiusura */}
      <div className="container-editorial overflow-hidden" aria-hidden>
        <p className="headline text-[11.5vw] leading-[0.85] text-background/10 whitespace-nowrap -mb-[2vw] select-none">
          Via del Mare
        </p>
      </div>

      <div className="border-t-2 border-background/10">
        <div className="container-editorial py-5 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between caption !text-[11px] opacity-60">
          <p>© {new Date().getFullYear()} B & B Via del Mare di Musio Angelo e C. S.a.s.</p>
          <p>Campomarino Lido, Molise — Italia</p>
        </div>
      </div>
    </footer>
  );
}
