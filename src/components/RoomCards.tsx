import { rooms } from "@/data/property";
import BookingButton from "./BookingButton";
import Reveal from "./Reveal";

export default function RoomCards() {
  return (
    <section id="camere" className="py-24 md:py-32">
      <div className="container-editorial">
        <Reveal className="max-w-2xl">
          <p className="label text-muted-foreground">Le camere</p>
          <h2 className="mt-5 font-serif text-5xl md:text-6xl text-sea leading-[1.05]">
            Due camere, entrambe pensate per riposare bene.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 md:gap-20 md:grid-cols-2">
          {rooms.map((room, i) => (
            <Reveal key={room.id} delay={i * 120} className={i % 2 ? "md:mt-24" : ""}>
            <article>
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={room.photos[0]}
                  alt={`${room.name} — B&B Via del Mare`}
                  className="h-full w-full object-cover transition-transform [transition-duration:1400ms] hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-6">
                <div>
                  <p className="label text-muted-foreground">{room.guests}</p>
                  <h3 className="mt-2 font-serif text-3xl text-sea">{room.name}</h3>
                  <p className="mt-1 font-serif italic text-muted-foreground">{room.subtitle}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80 max-w-lg">
                {room.description}
              </p>
              <div className="mt-6">
                <BookingButton variant="ghost">Vedi disponibilità</BookingButton>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
