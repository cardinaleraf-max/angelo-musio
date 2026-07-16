import { cn } from "@/lib/utils";

/**
 * Nastro di testo che scorre in loop, da insegna di lido.
 * Il contenuto è duplicato per rendere il loop invisibile.
 */
export default function Marquee({
  items,
  className,
  separator = "✦",
}: {
  items: string[];
  className?: string;
  separator?: string;
}) {
  const line = items.map((t) => `${t}  ${separator}  `).join("");
  return (
    <div className={cn("overflow-hidden whitespace-nowrap select-none", className)} aria-hidden>
      <div className="marquee-track">
        <span className="pr-2">{line}</span>
        <span className="pr-2">{line}</span>
      </div>
    </div>
  );
}
