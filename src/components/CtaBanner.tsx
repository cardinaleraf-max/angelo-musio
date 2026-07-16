import BookingButton from "./BookingButton";

export default function CtaBanner() {
  return (
    <section className="bg-sea text-background doghe">
      <div className="container-editorial py-24 md:py-32 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <p className="label opacity-60">Il tuo prossimo weekend</p>
          <h2 className="mt-5 font-display text-5xl md:text-6xl leading-[1.02]">
            Il mare aspetta. La camera anche.
          </h2>
        </div>
        <div className="md:col-span-4 md:text-right">
          <BookingButton variant="light">Prenota su Booking</BookingButton>
          <p className="mt-4 text-xs opacity-60">Prenotazione sicura e prezzi aggiornati su Booking.com</p>
        </div>
      </div>
    </section>
  );
}
