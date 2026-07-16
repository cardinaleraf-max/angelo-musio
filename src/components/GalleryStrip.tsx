import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { galleryStrip } from "@/data/property";

/**
 * La sezione si "blocca" e le foto scorrono in orizzontale
 * guidate dallo scroll verticale.
 */
export default function GalleryStrip() {
  const trackRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });

  // Distanza da percorrere: larghezza reale della striscia meno il viewport.
  const [maxX, setMaxX] = useState(0);
  useLayoutEffect(() => {
    const measure = () => {
      const el = stripRef.current;
      if (el) setMaxX(Math.max(0, el.scrollWidth - window.innerWidth + 24));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  if (reduced) {
    return (
      <section aria-label="Galleria fotografica" className="py-24 bg-secondary/40">
        <div className="container-editorial">
          <p className="label text-muted-foreground">La casa</p>
          <h2 className="mt-4 headline text-4xl text-sea">Uno sguardo all'interno.</h2>
        </div>
        <div className="mt-10 flex gap-5 overflow-x-auto px-6 md:px-10 pb-4 scrollbar-none">
          {galleryStrip.map((photo) => (
            <figure key={photo.src} className="shrink-0">
              <img
                src={photo.src}
                alt={`${photo.caption} — B&B Via del Mare`}
                loading="lazy"
                className="h-[320px] w-auto aspect-[3/4] object-cover"
              />
              <figcaption className="mt-3 caption text-muted-foreground uppercase">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={trackRef}
      aria-label="Galleria fotografica"
      className="relative bg-secondary/40"
      style={{ height: `${100 + galleryStrip.length * 18}vh` }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden flex flex-col justify-center">
        <div className="container-editorial flex items-end justify-between gap-6 pb-10">
          <div>
            <p className="label text-muted-foreground">La casa</p>
            <h2 className="mt-4 headline text-4xl md:text-6xl text-sea">Uno sguardo all'interno.</h2>
          </div>
          <p className="hidden md:block label text-muted-foreground pb-2">Continua a scorrere ↓</p>
        </div>

        <motion.div ref={stripRef} style={{ x }} className="flex gap-6 pl-6 md:pl-10 w-max">
          {galleryStrip.map((photo, i) => (
            <figure key={photo.src} className={`shrink-0 ${i % 2 ? "mt-10" : ""}`}>
              <div className="overflow-hidden">
                <img
                  src={photo.src}
                  alt={`${photo.caption} — B&B Via del Mare`}
                  loading="lazy"
                  className="h-[300px] md:h-[420px] w-auto aspect-[3/4] object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline gap-3">
                <span className="label text-sea-soft">{String(i + 1).padStart(2, "0")}</span>
                <span className="caption text-muted-foreground uppercase tracking-[0.08em]">{photo.caption}</span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
