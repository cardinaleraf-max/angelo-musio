import { photos, property } from "@/data/property";
import BookingButton from "./BookingButton";
import KineticTitle from "./fx/KineticTitle";
import ParallaxImg from "./fx/ParallaxImg";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container-editorial grid gap-12 md:grid-cols-12 items-center">
        <div className="md:col-span-6">
          <ParallaxImg
            src={photos.living}
            alt="La veranda del B&B Via del Mare, dove viene servita la colazione"
            className="w-full aspect-[4/5]"
          />
          <p className="mt-3 caption text-muted-foreground uppercase tracking-[0.1em]">
            La veranda, dove serviamo la colazione
          </p>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <p className="label text-muted-foreground">{property.hosts}, i vostri ospiti</p>
          <KineticTitle
            text="Una storia di famiglia, a due passi dal mare."
            className="mt-5 text-3xl md:text-5xl text-sea"
          />
          <Reveal delay={150}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
              <p>
                Il B&B Via del Mare nasce dalla passione di Angelo, giovane imprenditore che ha
                seguito l'esempio di mamma Ornella, da anni protagonista della ristorazione locale.
                Insieme hanno creato un posto dove ogni ospite si sente speciale: due camere curate
                nei dettagli, la colazione italiana la mattina e un giardino dove godersi la
                tranquillità.
              </p>
              <p>
                La struttura è pet-friendly senza costi aggiuntivi, con parcheggio gratuito e il
                lido convenzionato a poca distanza. E se cercate un consiglio su dove cenare,
                Angelo è sempre a disposizione.
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
