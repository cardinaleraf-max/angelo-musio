import { rooms } from "@/data/property";
import BookingButton from "./BookingButton";
import KineticTitle from "./fx/KineticTitle";
import ParallaxImg from "./fx/ParallaxImg";
import Reveal from "./Reveal";

export default function RoomCards() {
  return (
    <section id="camere" className="py-24 md:py-36 overflow-hidden">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <p className="label text-muted-foreground">Le camere</p>
          <KineticTitle
            text="Due camere. Zero compromessi."
            className="mt-5 text-3xl md:text-5xl text-sea"
          />
        </div>

        <div className="mt-16 grid gap-14 md:gap-10 md:grid-cols-2">
          {rooms.map((room, i) => (
            <article key={room.id} className={i % 2 ? "md:mt-28" : ""}>
              <div className="relative">
                <ParallaxImg
                  src={room.photos[0]}
                  alt={`${room.name} — B&B Via del Mare`}
                  className="aspect-[4/5]"
                />
                <span
                  aria-hidden
                  className="headline outline-text text-background absolute bottom-3 right-4 text-[2.5rem] md:text-[3.5rem] leading-none pointer-events-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <Reveal delay={i * 100}>
                <p className="mt-6 label text-muted-foreground">{room.guests}</p>
                <h3 className="mt-2 headline text-2xl md:text-3xl text-sea">{room.name}</h3>
                <p className="mt-2 caption text-clay uppercase tracking-[0.1em]">{room.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80 max-w-lg">
                  {room.description}
                </p>
                <div className="mt-6">
                  <BookingButton variant="ghost">Vedi disponibilità</BookingButton>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
