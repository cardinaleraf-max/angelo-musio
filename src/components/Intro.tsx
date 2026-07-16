import { photos, property } from "@/data/property";
import BookingButton from "./BookingButton";
import KineticTitle from "./fx/KineticTitle";
import ParallaxImg from "./fx/ParallaxImg";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="py-24 md:py-36 overflow-hidden">
      <div className="container-editorial grid gap-12 md:grid-cols-12 items-center">
        <div className="md:col-span-6 relative">
          <ParallaxImg
            src={photos.living}
            alt="Interni del B&B Via del Mare"
            className="w-full aspect-[4/5]"
          />
          <p className="mt-3 caption text-muted-foreground uppercase tracking-[0.1em]">
            Il soggiorno, dove serviamo la colazione
          </p>
          <span
            aria-hidden
            className="headline outline-text text-sea-soft absolute -top-8 -right-2 md:-right-10 text-[5rem] md:text-[7rem] pointer-events-none"
          >
            2023
          </span>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <p className="label text-muted-foreground">{property.hosts}, i vostri ospiti</p>
          <KineticTitle
            text="Vi accogliamo come amici di famiglia."
            className="mt-5 text-4xl md:text-6xl text-sea"
          />
          <Reveal delay={150}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
              <p>
                Ornella e Angelo hanno aperto il B&B Via del Mare nel 2023, in una via tranquilla
                di Campomarino Lido a pochi minuti dalla spiaggia. È una casa vera, non una catena:
                due camere curate una a una, colazione italiana la mattina, e consigli su dove andare
                a cena se ce lo chiedete.
              </p>
              <p>
                La struttura è pet-friendly senza costi aggiuntivi, e il lido convenzionato è a poca
                distanza. Preferiamo poche cose fatte bene: pulizia, comfort, e il tempo di rispondere a
                ogni ospite.
              </p>
            </div>
            <div className="mt-10">
              <BookingButton variant="ghost">Verifica disponibilità</BookingButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
