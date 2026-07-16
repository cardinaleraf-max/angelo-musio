import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Foto che si svela dal basso e scorre in parallasse mentre la pagina scrolla.
 */
export default function ParallaxImg({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      initial={reduced ? { opacity: 0 } : { clipPath: "inset(100% 0 0 0)" }}
      whileInView={reduced ? { opacity: 1 } : { clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1, ease: [0.65, 0, 0.15, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={reduced ? undefined : { y, scale: 1.16 }}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </motion.div>
  );
}
