import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

type LightboxProps = {
  photos: string[];
  /** Indice della foto aperta; null = chiuso. */
  index: number | null;
  altPrefix: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

/**
 * Galleria a tutto schermo: frecce, tastiera (Esc, ←, →) e swipe su mobile.
 */
export default function Lightbox({ photos, index, altPrefix, onClose, onNavigate }: LightboxProps) {
  const open = index !== null && photos.length > 0;
  const touchX = useRef<number | null>(null);

  const prev = () => {
    if (index !== null) onNavigate((index + photos.length - 1) % photos.length);
  };
  const next = () => {
    if (index !== null) onNavigate((index + 1) % photos.length);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${altPrefix} — galleria a tutto schermo`}
          className="fixed inset-0 z-[100] bg-[#0b0e11] flex items-center justify-center"
          onClick={onClose}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (dx > 50) prev();
            else if (dx < -50) next();
            touchX.current = null;
          }}
        >
          <motion.img
            key={index}
            src={photos[index!]}
            alt={`${altPrefix}, foto ${index! + 1} di ${photos.length} — B&B Via del Mare`}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            draggable={false}
            className="max-h-[85svh] max-w-[92vw] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            aria-label="Chiudi"
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-8 h-12 w-12 flex items-center justify-center text-white/70 hover:text-white text-2xl transition-colors"
          >
            ✕
          </button>

          <button
            type="button"
            aria-label="Foto precedente"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-1 md:left-6 top-1/2 -translate-y-1/2 h-14 w-14 flex items-center justify-center text-white/70 hover:text-white text-4xl transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Foto successiva"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-1 md:right-6 top-1/2 -translate-y-1/2 h-14 w-14 flex items-center justify-center text-white/70 hover:text-white text-4xl transition-colors"
          >
            →
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 label text-white/70">
            {String(index! + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
