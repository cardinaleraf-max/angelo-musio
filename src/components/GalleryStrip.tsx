import { useState } from "react";
import { galleryStrip } from "@/data/property";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

const PREVIEW = 9;

/**
 * Gallery a mosaico stile Pinterest: parte con 9 foto,
 * "Mostra di più" apre l'intera galleria. Click per il tutto schermo.
 */
export default function GalleryStrip() {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const shown = expanded ? galleryStrip : galleryStrip.slice(0, PREVIEW);

  return (
    <section aria-label="Galleria fotografica" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="label text-muted-foreground">La casa</p>
              <h2 className="mt-4 headline text-4xl md:text-6xl text-sea">Uno sguardo all'interno.</h2>
            </div>
            <p className="hidden md:block label text-muted-foreground pb-2">
              {String(galleryStrip.length).padStart(2, "0")} foto
            </p>
          </div>
        </Reveal>

        <div className="mt-12 columns-2 md:columns-3 gap-5 md:gap-6">
          {shown.map((photo, i) => (
            <figure key={photo.src} className="mb-5 md:mb-6 break-inside-avoid fade-in">
              <button
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`Apri "${photo.caption}" a tutto schermo`}
                className="group block w-full overflow-hidden"
              >
                <img
                  src={photo.src}
                  alt={`${photo.caption} — B&B Via del Mare`}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
              <figcaption className="mt-3 flex items-baseline gap-3">
                <span className="label text-sea-soft">{String(i + 1).padStart(2, "0")}</span>
                <span className="caption text-muted-foreground uppercase tracking-[0.08em]">{photo.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {!expanded && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="group inline-flex items-center gap-3 px-7 py-4 label !text-[13px] !font-bold border-2 border-sea text-sea transition-all duration-300 hover:bg-sea-soft hover:border-sea-soft"
            >
              <span>Mostra di più</span>
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </button>
          </div>
        )}
      </div>

      <Lightbox
        photos={galleryStrip.map((photo) => photo.src)}
        index={lightbox}
        altPrefix="La casa"
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </section>
  );
}
