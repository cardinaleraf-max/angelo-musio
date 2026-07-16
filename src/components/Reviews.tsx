import { reviews } from "@/data/property";
import Reveal from "./Reveal";

export default function Reviews() {
  return (
    <section className="py-24 md:py-32 bg-sand-dark/40">
      <div className="container-editorial">
        <Reveal className="max-w-2xl">
          <p className="label text-muted-foreground">Cosa dicono gli ospiti</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-sea leading-tight">
            Tre voci vere, prese da Booking. Nessuna scritta da noi.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.author} delay={i * 130}>
            <figure className="border-t border-sea/30 pt-8">
              <blockquote className="font-serif text-2xl leading-snug text-sea italic">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 label text-muted-foreground">
                — {r.author} · {r.country}
              </figcaption>
            </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
