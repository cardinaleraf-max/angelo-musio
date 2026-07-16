import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides, property } from "@/data/property";
import BookingButton from "./BookingButton";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const SLIDE_MS = 6500;
const SLATS = 6;
const SLAT_STAGGER_MS = 90;
const SLAT_ANIM_MS = 1000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const settleTimer = useRef<number>();

  // Preload: il resto delle slide viene caricato dopo la prima paint.
  useEffect(() => {
    heroSlides.slice(1).forEach((s) => {
      const img = new Image();
      img.src = s.src;
    });
  }, []);

  const goTo = useCallback(
    (next: number) => {
      if (next === current || incoming !== null) return;
      setIncoming(next);
      window.clearTimeout(settleTimer.current);
      settleTimer.current = window.setTimeout(() => {
        setCurrent(next);
        setIncoming(null);
      }, SLAT_ANIM_MS + SLAT_STAGGER_MS * SLATS + 80);
    },
    [current, incoming],
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        goTo((current + 1) % heroSlides.length);
      }
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [current, goTo]);

  useEffect(() => () => window.clearTimeout(settleTimer.current), []);

  const shown = incoming ?? current;

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-sea">
      {/* Slide corrente, a tutta pagina */}
      <img
        key={heroSlides[current].src}
        src={heroSlides[current].src}
        alt={`${heroSlides[current].caption} — B&B Via del Mare, Campomarino Lido`}
        loading="eager"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={cn("absolute inset-0 h-full w-full object-cover", incoming === null && "kenburns")}
      />

      {/* Slide in arrivo: entra come doghe verticali sfalsate */}
      {incoming !== null && (
        <div className="absolute inset-0" aria-hidden>
          {Array.from({ length: SLATS }, (_, i) => (
            <div
              key={i}
              className="absolute inset-y-0 overflow-hidden"
              style={{ left: `${(i * 100) / SLATS}%`, width: `${100 / SLATS + 0.1}%` }}
            >
              <div className="slat-in h-full" style={{ animationDelay: `${i * SLAT_STAGGER_MS}ms` }}>
                <img
                  src={heroSlides[incoming].src}
                  alt=""
                  className="h-full max-w-none object-cover"
                  style={{ width: `${SLATS * 100}%`, transform: `translateX(-${(i * 100) / SLATS}%)` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-sea/45 via-sea/10 to-sea/80" />

      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-20 md:pb-24 text-background">
        <p className="label opacity-85 fade-in">B&amp;B · {property.location}</p>
        <h1 className="mt-4 font-display text-[15vw] md:text-[7.5rem] leading-[0.95] fade-in">
          Via del Mare
        </h1>
        <p className="mt-6 max-w-xl text-lg md:text-xl font-light leading-relaxed opacity-90 fade-in">
          Un Bed &amp; Breakfast a trecento metri dalla spiaggia di Campomarino.
          Due camere curate, colazione italiana, e la sensazione di essere accolti in casa.
        </p>

        <div className="mt-9 flex flex-wrap gap-4 fade-in">
          <BookingButton variant="light-solid">Prenota su Booking</BookingButton>
          <Link
            to="/camere"
            className="inline-flex items-center gap-3 px-7 py-3.5 text-[13px] tracking-[0.18em] uppercase border border-background/60 hover:bg-background hover:text-sea transition-colors"
          >
            Scopri le camere
          </Link>
        </div>

        {/* Didascalia + indice + doghe di navigazione */}
        <div className="mt-11 flex items-end justify-between gap-6 border-t border-background/25 pt-5 fade-in">
          <p key={shown} className="font-serif italic text-base md:text-lg opacity-85 caption-in">
            {heroSlides[shown].caption}
          </p>
          <div className="flex items-center gap-5 shrink-0">
            <span className="label opacity-70 tabular-nums">
              {String(shown + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </span>
            <div className="hidden sm:flex items-end gap-[7px]" role="tablist" aria-label="Foto della struttura">
              {heroSlides.map((s, i) => (
                <button
                  key={s.src}
                  onClick={() => goTo(i)}
                  role="tab"
                  aria-selected={i === shown}
                  aria-label={`Vai alla foto ${i + 1}: ${s.caption}`}
                  className="group px-[3px] py-1"
                >
                  <span
                    className={cn(
                      "block w-[3px] transition-all duration-500",
                      i === shown
                        ? "h-7 bg-sea-soft"
                        : "h-4 bg-background/40 group-hover:bg-background/80",
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
