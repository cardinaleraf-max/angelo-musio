import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_URL } from "@/data/property";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
  label?: string;
};

export default function BookingButton({
  children = "Prenota ora",
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
      href={PHONE_URL}
      aria-label={label ?? `Chiama il ${PHONE_DISPLAY} per prenotare`}
      className={cn(base, styles[variant], className)}
    >
      <span>{children}</span>
      <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" aria-hidden />
    </a>
  );
}
