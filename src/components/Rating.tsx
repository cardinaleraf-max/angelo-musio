import { property } from "@/data/property";

export default function Rating() {
  return (
    <section className="py-24 md:py-32 bg-sand-dark/40">
      <div className="container-editorial grid gap-12 md:grid-cols-12 items-center">
        <div className="md:col-span-4">
          <p className="label text-muted-foreground">Recensioni Booking</p>
          <div className="mt-4 flex items-baseline gap-4">
            <span className="font-display text-7xl leading-none text-sea">{property.rating.score.toFixed(1)}</span>
            <div>
              <p className="font-serif text-2xl italic text-sea">{property.rating.label}</p>
              <p className="text-sm text-muted-foreground">{property.rating.reviews} recensioni verificate</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Ospiti reali, soggiorni reali. I punteggi arrivano direttamente da chi ha dormito qui.
          </p>
        </div>

        <div className="md:col-span-8 grid grid-cols-2 gap-x-10 gap-y-6">
          {property.rating.categories.map((c) => (
            <div key={c.label} className="border-b border-border/60 pb-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm">{c.label}</span>
                <span className="font-display text-2xl text-sea">{c.value.toFixed(1)}</span>
              </div>
              <div className="mt-3 h-px bg-border relative">
                <div
                  className="absolute inset-y-0 left-0 bg-sea-soft"
                  style={{ width: `${(c.value / 10) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
