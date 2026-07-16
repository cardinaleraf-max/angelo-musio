import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import CtaBanner from "@/components/CtaBanner";
import { rooms } from "@/data/property";

const Rooms = () => (
  <div className="overflow-x-clip">
    <Nav />
    <main className="pt-32">
      <section className="container-editorial pb-16 md:pb-24">
        <p className="label text-muted-foreground">Le camere</p>
        <h1 className="mt-5 headline text-5xl md:text-7xl text-sea max-w-3xl">
          Basic o Luxury. Entrambe con balcone.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80">
          Due tipologie di camera tripla, adatte a coppie che vogliono spazio o piccole famiglie.
          Prenotazione e prezzi aggiornati su Booking.
        </p>
      </section>

      {rooms.map((room, idx) => (
        <section
          key={room.id}
          className={`py-16 md:py-24 ${idx % 2 ? "bg-sand-dark/40" : ""}`}
        >
          <div className="container-editorial grid gap-12 md:grid-cols-12">
            <div className={`md:col-span-7 ${idx % 2 ? "md:order-2" : ""}`}>
              <div className="grid grid-cols-6 gap-3">
                <img src={room.photos[0]} alt="" className="col-span-6 aspect-[16/10] object-cover" />
                {room.photos.slice(1).map((p, i) => (
                  <img
                    key={i}
                    src={p}
                    alt=""
                    className="col-span-2 aspect-square object-cover"
                  />
                ))}
              </div>
            </div>
            <div className={`md:col-span-5 ${idx % 2 ? "md:order-1" : ""}`}>
              <p className="label text-muted-foreground">{room.guests}</p>
              <h2 className="mt-3 headline text-3xl md:text-5xl text-sea">{room.name}</h2>
              <p className="mt-2 caption text-clay uppercase tracking-[0.1em]">{room.subtitle}</p>
              <p className="mt-6 text-base leading-relaxed text-foreground/80">{room.description}</p>
              <p className="mt-6 text-sm text-muted-foreground">{room.beds}</p>

              <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3">
                {room.features.map((f) => (
                  <li key={f} className="text-sm border-b border-border/60 py-2">
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <BookingButton>Vedi disponibilità</BookingButton>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CtaBanner />
    </main>
    <Footer />
  </div>
);

export default Rooms;
