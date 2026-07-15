import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { property } from "@/data/property";
import BookingButton from "./BookingButton";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/camere", label: "Camere" },
  { to: "/dove-siamo", label: "Dove siamo" },
  { to: "/contatti", label: "Contatti" },
];

export default function Nav({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const solid = !transparent || scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
        solid ? "bg-background/95 border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container-editorial flex items-center justify-between h-20">
        <Link to="/" className={cn("flex items-center gap-3", solid ? "text-sea" : "text-background")}>
          <img src="/logo.png" alt="B&B Via del Mare" className="h-11 w-11 rounded-full object-cover" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-xl">Via del Mare</span>
            <span className="label opacity-70">Campomarino Lido</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "label transition-opacity",
                  solid ? "text-sea" : "text-background",
                  isActive ? "opacity-100" : "opacity-60 hover:opacity-100",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <BookingButton variant={solid ? "primary" : "light"}>Prenota</BookingButton>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className={cn("md:hidden p-2", solid ? "text-sea" : "text-background")}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.2" />
            ) : (
              <path d="M3 7h18M3 17h18" stroke="currentColor" strokeWidth="1.2" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container-editorial py-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className="font-serif text-2xl text-sea">
                {l.label}
              </NavLink>
            ))}
            <BookingButton>Prenota su Booking</BookingButton>
            <p className="label text-muted-foreground pt-4">{property.address}</p>
          </div>
        </div>
      )}
    </header>
  );
}
