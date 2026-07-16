import { reviews } from "@/data/property";
import KineticTitle from "./fx/KineticTitle";
import Reveal from "./Reveal";

export default function Reviews() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <p className="label text-muted-foreground">Cosa dicono gli ospiti</p>
          <KineticTitle
            text="Voci vere, prese da Booking."
            className="mt-5 text-3xl md:text-5xl text-sea"
          />
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.author} delay={i * 130}>
              <figure className="border-t-2 border-sea pt-6 h-full">
                <div className="flex items-start justify-between gap-4">
                  <span aria-hidden className="headline text-5xl text-sea-soft leading-none block">
                    “
                  </span>
                  <span className="headline text-lg bg-sea text-background px-2.5 py-1.5 leading-none">
                    {r.score.toFixed(0)}
                  </span>
                </div>
                <blockquote className="mt-2 text-base md:text-lg font-medium leading-snug text-sea">
                  {r.text}
                </blockquote>
                <figcaption className="mt-6 label text-muted-foreground">
                  {r.author} · {r.country}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
