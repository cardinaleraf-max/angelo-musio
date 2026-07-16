import { nearby, property } from "@/data/property";
import KineticTitle from "./fx/KineticTitle";

const MAPS_QUERY = encodeURIComponent("B&B Via del mare, Via Don Luigi Sturzo 87, 86042 Campomarino CB");
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&z=16&hl=it&output=embed`;
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;

const groups = [
  { title: "Spiagge", items: nearby.beaches },
  { title: "Da vedere", items: nearby.places },
  { title: "Ristoranti", items: nearby.food },
  { title: "Trasporti", items: nearby.transport },
];

export default function LocationMap({ compact = false }: { compact?: boolean }) {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="label text-muted-foreground">{compact ? "Dove siamo" : "La posizione"}</p>
          <KineticTitle text="Campomarino Lido, Molise." className="mt-5 text-3xl md:text-5xl text-sea" />
          <p className="mt-6 text-base leading-relaxed text-foreground/80 max-w-md">
            Una zona tranquilla e ben servita: ristoranti, gelaterie e stabilimenti si raggiungono
            a piedi, il mare è in fondo alla via. E per le gite: i murales del borgo arbëreshë,
            Termoli con il Castello Svevo, e i traghetti per le Isole Tremiti.
          </p>

          {!compact && (
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8">
              {groups.map((g) => (
                <div key={g.title}>
                  <p className="label text-sea-soft mb-3">{g.title}</p>
                  <ul className="space-y-2">
                    {g.items.map((it) => (
                      <li key={it.name} className="flex justify-between gap-3 text-sm border-b border-border/60 py-2">
                        <span>{it.name}</span>
                        <span className="text-muted-foreground shrink-0">{it.distance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="md:col-span-7">
          <div className="relative border-2 border-sea">
            <iframe
              title="Mappa Google del B&B Via del Mare"
              src={MAPS_EMBED}
              className="block w-full aspect-[4/3] md:aspect-[5/4] grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-px -right-px bg-sea text-background label !text-[12px] !font-bold px-5 py-4 hover:bg-clay hover:text-cta-foreground transition-colors"
            >
              Indicazioni stradali →
            </a>
          </div>
          <p className="mt-4 caption text-muted-foreground">{property.address}</p>
        </div>
      </div>
    </section>
  );
}
