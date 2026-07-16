import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import CtaBanner from "@/components/CtaBanner";
import KineticTitle from "@/components/fx/KineticTitle";
import Lightbox from "@/components/Lightbox";
import ParallaxImg from "@/components/fx/ParallaxImg";
import { rooms } from "@/data/property";

const Rooms = () => {
  const [lightbox, setLightbox] = useState<{ room: string; index: number } | null>(null);
  const activeRoom = lightbox ? rooms.find((r) => r.id === lightbox.room) : undefined;

  return (
  <div className="overflow-x-clip">
    <Nav />
    <main className="pt-32">
      <section className="container-editorial pb-16 md:pb-20">
        <p className="label text-muted-foreground">Le camere</p>
        <KineticTitle
          as="h1"
          text="Family o Luxury. Scegli il tuo mare."
          className="mt-5 text-4xl md:text-6xl text-sea max-w-4xl"
        />
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80">
          Due camere triple da 30 m², una pensata per le famiglie e una per le coppie.
          Tutte le foto e le informazioni arrivano dalla nostra scheda Booking:
          quello che vedi è quello che trovi.
        </p>
      </section>

      {rooms.map((room, idx) => (
        <section
          key={room.id}
          className={`py-16 md:py-24 overflow-hidden ${idx % 2 ? "bg-sand-dark/50" : ""}`}
        >
          <div className="container-editorial">
            <div className="grid gap-10 md:grid-cols-12 items-end">
              <div className="md:col-span-7">
                <ParallaxImg
                  src={room.photos[0]}
                  alt={`${room.name} — B&B Via del Mare`}
                  className="aspect-[16/10]"
                />
              </div>
              <div className="md:col-span-5">
                <p className="label text-muted-foreground">{room.guests} · {room.beds}</p>
                <h2 className="mt-3 headline text-3xl md:text-4xl text-sea">{room.name}</h2>
                <p className="mt-2 caption text-clay uppercase tracking-[0.1em]">{room.subtitle}</p>
                <p className="mt-5 text-base leading-relaxed text-foreground/80">{room.description}</p>
                <div className="mt-8">
                  <BookingButton>Vedi disponibilità</BookingButton>
                </div>
              </div>
            </div>

            {/* Tutte le foto della camera, come su Booking */}
            <div className="mt-10">
              <p className="label text-muted-foreground mb-4">
                La camera in {room.photos.length} foto
              </p>
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x scrollbar-none -mx-6 px-6 md:-mx-10 md:px-10">
                {room.photos.map((src, i) => (
                  <figure key={src} className="shrink-0 snap-start">
                    <button
                      type="button"
                      onClick={() => setLightbox({ room: room.id, index: i })}
                      className="block cursor-zoom-in"
                      aria-label={`Apri la foto ${i + 1} di ${room.photos.length} a tutto schermo`}
                    >
                      <img
                        src={src}
                        alt={`${room.name}, foto ${i + 1} di ${room.photos.length} — B&B Via del Mare`}
                        loading="lazy"
                        className="h-[200px] md:h-[260px] w-auto object-cover"
                      />
                    </button>
                    <figcaption className="mt-2 label !text-[10px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")} / {String(room.photos.length).padStart(2, "0")}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="mt-8 max-w-4xl">
              <p className="label text-muted-foreground mb-3">Dotazioni ({room.bookingName})</p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8">
                {room.features.map((f) => (
                  <li key={f} className="text-sm border-b border-border/60 py-2.5">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <CtaBanner />
    </main>
    <Footer />

    <Lightbox
      photos={activeRoom?.photos ?? []}
      index={lightbox?.index ?? null}
      altPrefix={activeRoom?.name ?? ""}
      onClose={() => setLightbox(null)}
      onNavigate={(i) => setLightbox((lb) => lb && { ...lb, index: i })}
    />
  </div>
  );
};

export default Rooms;
