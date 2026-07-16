import { motion, useReducedMotion } from "framer-motion";
import { property } from "@/data/property";
import Counter from "./fx/Counter";

export default function Rating() {
  const reduced = useReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-sand-dark/50 overflow-hidden">
      <div className="container-editorial grid gap-14 md:grid-cols-12 items-center">
        <div className="md:col-span-5">
          <p className="label text-muted-foreground">Recensioni Booking</p>
          <div className="mt-4 flex items-baseline gap-5">
            <span className="headline text-[7rem] md:text-[9rem] leading-none text-sea tabular-nums">
              <Counter value={property.rating.score} />
            </span>
            <div>
              <p className="headline text-2xl md:text-3xl text-clay">{property.rating.label}</p>
              <p className="caption mt-1 text-muted-foreground">
                {property.rating.reviews} recensioni verificate
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Ospiti reali, soggiorni reali. I punteggi arrivano direttamente da chi ha dormito qui.
          </p>
        </div>

        <div className="md:col-span-7 grid gap-y-7">
          {property.rating.categories.map((c, i) => (
            <motion.div
              key={c.label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            >
              <div className="flex justify-between items-baseline">
                <span className="label !text-[12px]">{c.label}</span>
                <span className="headline text-2xl text-sea tabular-nums">
                  <Counter value={c.value} />
                </span>
              </div>
              <div className="mt-2 h-[6px] bg-sea/10 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-sea-soft"
                  variants={{
                    hidden: { width: reduced ? `${(c.value / 10) * 100}%` : "0%" },
                    show: { width: `${(c.value / 10) * 100}%` },
                  }}
                  transition={{ duration: 1.3, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
