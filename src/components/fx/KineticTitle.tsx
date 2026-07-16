import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Titolo che entra parola per parola, ogni parola sale da una maschera.
 * L'osservazione dello scroll avviene sul contenitore: le singole parole
 * partono clippate e non verrebbero mai "viste" dall'IntersectionObserver.
 */
export default function KineticTitle({
  text,
  className,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };
  const word: Variants = reduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }
    : {
        hidden: { y: "110%" },
        show: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <Tag className={cn("headline", className)}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      >
        {words.map((w, i) => (
          <span key={i}>
            <span className="inline-block overflow-hidden pb-[0.09em] -mb-[0.09em] align-bottom">
              <motion.span className="inline-block" variants={word}>
                {w}
              </motion.span>
            </span>{" "}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
