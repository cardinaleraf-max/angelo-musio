import { galleryStrip } from "@/data/property";
import Reveal from "./Reveal";

export default function GalleryStrip() {
  return (
    <section aria-label="Galleria fotografica" className="py-24 md:py-32 overflow-hidden">
      <div className="container-editorial">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="label text-muted-foreground">La casa</p>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-sea leading-tight">
                Uno sguardo dentro.
              </h2>
            </div>
            <p className="hidden md:block label text-muted-foreground pb-1">Scorri →</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="mt-12 flex gap-5 overflow-x-auto px-6 md:px-10 pb-4 snap-x snap-mandatory scrollbar-thin">
          {galleryStrip.map((photo, i) => (
            <figure
              key={photo.src}
              className={`shrink-0 snap-start ${i % 2 ? "mt-8" : ""}`}
            >
              <img
                src={photo.src}
                alt={`${photo.caption} — B&B Via del Mare`}
                loading="lazy"
                className="h-[300px] md:h-[380px] w-auto aspect-[3/4] object-cover"
              />
              <figcaption className="mt-3 font-serif italic text-sm text-muted-foreground">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
