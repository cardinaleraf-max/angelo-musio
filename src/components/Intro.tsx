import { photos, property } from "@/data/property";
import BookingButton from "./BookingButton";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial grid gap-12 md:grid-cols-12 items-center">
        <Reveal className="md:col-span-6">
          <img
            src={photos.living}
            alt="Interni del B&B Via del Mare"
            className="w-full aspect-[4/5] object-cover"
          />
          <p className="mt-3 font-serif italic text-sm text-muted-foreground">Il soggiorno, dove serviamo la colazione.</p>
        </Reveal>
        <Reveal delay={120} className="md:col-span-5 md:col-start-8">
          <p className="label text-muted-foreground">{property.hosts}, i vostri ospiti</p>
          <h2 className="mt-5 font-display text-5xl md:text-6xl leading-[1.02] text-sea">
            Vi accogliamo come un amico di famiglia.
          </h2>
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
    </section>
  );
}
