import { photos, property } from "@/data/property";
import BookingButton from "./BookingButton";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={photos.hero}
        alt="Camera Luxury del B&B Via del Mare con vasca idromassaggio a Campomarino"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sea/50 via-sea/20 to-sea/70" />

      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-20 md:pb-28 text-background">
        <p className="label opacity-80 fade-in">{property.location}</p>
        <h1 className="mt-5 font-serif text-[13vw] md:text-[6.5rem] leading-[0.95] tracking-tight fade-in">
          Via del Mare
        </h1>
        <p className="mt-6 max-w-xl text-lg md:text-xl font-light leading-relaxed opacity-90 fade-in">
          Un Bed & Breakfast a trecento metri dalla spiaggia di Campomarino.
          Due camere curate, colazione italiana, e la sensazione di essere accolti in casa.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 fade-in">
          <BookingButton variant="primary">Prenota su Booking</BookingButton>
          <Link
            to="/camere"
            className="inline-flex items-center gap-3 px-7 py-3.5 text-[13px] tracking-[0.18em] uppercase border border-background/60 hover:bg-background hover:text-sea transition-colors"
          >
            Scopri le camere
          </Link>
        </div>
      </div>
    </section>
  );
}
