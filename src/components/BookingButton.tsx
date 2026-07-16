import { BOOKING_URL } from "@/data/property";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
  label?: string;
};

export default function BookingButton({
  children = "Prenota su Booking",
  variant = "primary",
  className,
  label,
}: Props) {
  const base =
    "group inline-flex items-center gap-3 px-7 py-4 label !text-[13px] !font-bold transition-all duration-300 border-2";
  const styles = {
    primary: "bg-clay text-cta-foreground border-clay hover:bg-sea hover:text-background hover:border-sea",
    ghost: "bg-transparent text-current border-current hover:bg-clay hover:text-cta-foreground hover:border-clay",
    light: "bg-transparent text-background border-background/70 hover:bg-clay hover:text-cta-foreground hover:border-clay",
  } as const;

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ?? "Apri Booking.com in una nuova scheda"}
      className={cn(base, styles[variant], className)}
    >
      <span>{children}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      </svg>
    </a>
  );
}
