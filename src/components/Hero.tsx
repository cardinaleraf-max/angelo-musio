import { useEffect, useState } from "react";
import { heroSlides, property } from "@/data/property";
import BookingButton from "./BookingButton";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const SLIDE_MS = 6500;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Preload: il resto delle slide viene caricato dopo la prima paint.
  useEffect(() => {
    heroSlides.slice(1).forEach((s) => {
      const img = new Image();
      img.src = s.src;
    });
  }, []);

  useEffect(() => {
    if (document.visibilityState !== "visible") return;
    const id = setInterval(() => {
      if (document.visibilityState === "visible") {
        setCurrent((c) => (c + 1) % heroSlides.length);
      }
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-sea">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== current}
          className={cn(
            "absolute inset-0 transition-opacity [transition-duration:1800ms] ease-in-out",
            i === current ? "opacity-100" : "opacity-0",
          )}
        >
          <img
            src={slide.src}
            alt={i === 0 ? "Camera Luxury del B&B Via del Mare con vasca idromassaggio a Campomarino" : slide.caption}
            loading={i === 0 ? "eager" : "lazy"}
            onLoad={i === 0 ? () => setLoaded(true) : undefined}
            onError={i === 0 ? () => setLoaded(true) : undefined}
            className={cn(
              "h-full w-full object-cover",
              i === current && "kenburns",
              i % 2 === 1 && "kenburns-alt",
            )}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-sea/50 via-sea/20 to-sea/75" />

      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-24 md:pb-28 text-background">
        <p className="label opacity-80 fade-in">{property.location}</p>
        <h1 className="mt-5 font-serif text-[13vw] md:text-[6.5rem] leading-[0.95] tracking-tight fade-in">
          Via del Mare
        </h1>
        <p className="mt-6 max-w-xl text-lg md:text-xl font-light leading-relaxed opacity-90 fade-in">
          Un Bed & Breakfast a trecento metri dalla spiaggia di Campomarino.
          Due camere curate, colazione italiana, e la sensazione di essere accolti in casa.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 fade-in">
          <BookingButton variant="primary">Prenota su Booking</BookingButton>
          <Link
            to="/camere"
            className="inline-flex items-center gap-3 px-7 py-3.5 text-[13px] tracking-[0.18em] uppercase border border-background/60 hover:bg-background hover:text-sea transition-colors"
          >
            Scopri le camere
          </Link>
        </div>

        {/* Controllo slide: didascalia + indice, stile didascalia editoriale */}
        <div className="mt-12 flex items-end justify-between gap-6 border-t border-background/25 pt-5 fade-in">
          <p key={current} className="font-serif italic text-sm md:text-base opacity-80 caption-in">
            {heroSlides[current].caption}
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <span className="label opacity-70 tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </span>
            <div className="hidden sm:flex gap-2">
              {heroSlides.map((s, i) => (
                <button
                  key={s.src}
                  onClick={() => setCurrent(i)}
                  aria-label={`Vai alla foto ${i + 1}: ${s.caption}`}
                  className="group py-2"
                >
                  <span
                    className={cn(
                      "block h-px w-8 transition-all duration-500",
                      i === current ? "bg-background" : "bg-background/35 group-hover:bg-background/70",
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Velo finché la prima foto non è pronta, evita flash del fondo */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-sea transition-opacity duration-700 pointer-events-none",
          loaded ? "opacity-0" : "opacity-100",
        )}
      />
    </section>
  );
}
