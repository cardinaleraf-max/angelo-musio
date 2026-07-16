import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { heroSlides, property } from "@/data/property";
import BookingButton from "./BookingButton";
import Marquee from "./fx/Marquee";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const SLIDE_MS = 5500;
const SLATS = 6;
const SLAT_STAGGER_MS = 65;
const SLAT_ANIM_MS = 800;

const marqueeItems = [
  "B&B Via del Mare",
  "Campomarino Lido",
  "300 m dalla spiaggia",
  "Colazione italiana",
  "Vasca idromassaggio",
  "Pet friendly",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const settleTimer = useRef<number>();
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

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
      }, SLAT_ANIM_MS + SLAT_STAGGER_MS * SLATS + 60);
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
    <>
      <section ref={sectionRef} className="relative h-[100svh] min-h-[660px] w-full overflow-hidden bg-sea">
        <motion.div style={reduced ? undefined : { scale: imgScale }} className="absolute inset-0">
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
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-sea/55 via-sea/15 to-sea/85" />

        {/* Numero slide gigante, solo contorno */}
        <div
          aria-hidden
          className="absolute right-4 md:right-10 top-24 md:top-auto md:bottom-40 z-10 text-background/90 pointer-events-none"
        >
          <span key={shown} className="headline outline-text block text-[6rem] md:text-[11rem] leading-none caption-in">
            {String(shown + 1).padStart(2, "0")}
          </span>
        </div>

        <motion.div
          style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
          className="relative z-10 h-full container-editorial flex flex-col justify-end pb-16 md:pb-20 text-background"
        >
          <p className="label opacity-90 fade-in">B&amp;B · {property.location}</p>
          <h1 className="mt-4 headline text-[13.5vw] md:text-[7.6rem] fade-in">
            Dormi
            <br />
            a 300 m<br />
            dal mare<span className="text-sea-soft">.</span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4 fade-in">
            <BookingButton variant="primary">Prenota su Booking</BookingButton>
            <Link
              to="/camere"
              className="inline-flex items-center gap-3 px-7 py-4 label !text-[13px] border-2 border-background/70 hover:bg-background hover:text-sea transition-colors"
            >
              Scopri le camere
            </Link>
          </div>

          <div className="mt-10 flex items-end justify-between gap-6 border-t-2 border-background/25 pt-4 fade-in">
            <p key={shown} className="caption uppercase tracking-[0.1em] opacity-85 caption-in">
              {heroSlides[shown].caption}
            </p>
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
                      "block w-[4px] transition-all duration-500",
                      i === shown ? "h-8 bg-sea-soft" : "h-4 bg-background/40 group-hover:bg-background/80",
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Velo finché la prima foto non è pronta, evita flash del fondo */}
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 bg-sea transition-opacity duration-700 pointer-events-none",
            loaded ? "opacity-0" : "opacity-100",
          )}
        />
      </section>

      {/* Nastro da lido sotto la hero */}
      <Marquee
        items={marqueeItems}
        className="bg-sea-soft text-sea border-y-2 border-sea py-3 headline text-xl md:text-2xl"
      />
    </>
  );
}
