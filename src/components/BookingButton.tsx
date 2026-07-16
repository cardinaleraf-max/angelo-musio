import { BOOKING_URL } from "@/data/property";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  variant?: "primary" | "ghost" | "light" | "light-solid";
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
    "inline-flex items-center gap-3 px-7 py-3.5 text-[13px] tracking-[0.18em] uppercase transition-colors duration-300 border";
  const styles = {
    primary: "bg-sea text-background border-sea hover:bg-sea-soft hover:border-sea-soft hover:text-sea",
    ghost: "bg-transparent text-current border-current/40 hover:bg-current hover:text-background",
    light: "bg-transparent text-background border-background/60 hover:bg-background hover:text-sea",
    "light-solid": "bg-background text-sea border-background hover:bg-sea-soft hover:border-sea-soft",
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
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
      </svg>
    </a>
  );
}
