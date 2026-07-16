import { nearby } from "@/data/property";

const groups = [
  { title: "Spiagge", items: nearby.beaches },
  { title: "Luoghi", items: nearby.places },
  { title: "Ristoranti", items: nearby.food },
  { title: "Trasporti", items: nearby.transport },
];

export default function LocationMap({ compact = false }: { compact?: boolean }) {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="label text-muted-foreground">{compact ? "Dove siamo" : "La posizione"}</p>
          <h2 className="mt-5 headline text-4xl md:text-6xl text-sea">
            Campomarino Lido, Molise.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80 max-w-md">
            La costa molisana è una delle meno battute d'Italia — spiagge lunghe di sabbia dorata,
            trattorie di pesce, e la Puglia a un'ora di macchina. Dal B&B alla battigia sono
            trecento metri di passeggiata.
          </p>

          {!compact && (
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8">
              {groups.map((g) => (
                <div key={g.title}>
                  <p className="label text-muted-foreground mb-3">{g.title}</p>
                  <ul className="space-y-2">
                    {g.items.map((it) => (
                      <li key={it.name} className="flex justify-between text-sm border-b border-border/60 py-2">
                        <span>{it.name}</span>
                        <span className="text-muted-foreground">{it.distance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="md:col-span-7">
          <div className="aspect-[4/5] md:aspect-[5/6] w-full border border-border overflow-hidden">
            <iframe
              title="Mappa B&B Via del Mare"
              src="https://www.openstreetmap.org/export/embed.html?bbox=15.0400%2C41.9490%2C15.0610%2C41.9645&layer=mapnik&marker=41.9565%2C15.0501"
              className="h-full w-full grayscale-[20%]"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Via Don Luigi Sturzo 87 · 86042 Campomarino (CB) ·{" "}
            <a
              href="https://www.openstreetmap.org/?mlat=41.9565&mlon=15.0501#map=17/41.9565/15.0501"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Apri in mappa
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
