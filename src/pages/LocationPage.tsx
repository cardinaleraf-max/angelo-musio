import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LocationMap from "@/components/LocationMap";
import CtaBanner from "@/components/CtaBanner";

const LocationPage = () => (
  <div className="overflow-x-hidden">
    <Nav />
    <main className="pt-32">
      <section className="container-editorial pb-12">
        <p className="label text-muted-foreground">Dove siamo</p>
        <h1 className="mt-5 font-display text-6xl md:text-7xl text-sea leading-[1.02] max-w-3xl">
          Trecento metri dall'Adriatico.
        </h1>
      </section>
      <LocationMap />
      <section className="pb-24">
        <div className="container-editorial grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-sea">Come arrivare</h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-foreground/80">
              <p>
                <span className="label block text-muted-foreground mb-1">In auto</span>
                Uscita autostradale A14 "Termoli", poi SS16 direzione sud per 15 minuti.
                Parcheggio libero in zona.
              </p>
              <p>
                <span className="label block text-muted-foreground mb-1">In treno</span>
                Stazione di Campomarino a 1,1 km — 15 minuti a piedi, oppure taxi.
              </p>
              <p>
                <span className="label block text-muted-foreground mb-1">In aereo</span>
                Aeroporto di Foggia "Gino Lisa" (85 km) e Bari-Palese (170 km).
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl text-sea">Sul territorio</h2>
            <p className="mt-6 text-sm leading-relaxed text-foreground/80">
              Campomarino è il punto di partenza ideale per esplorare la costa molisana e il vicino Gargano.
              A un'ora di macchina trovate Termoli, le Isole Tremiti (via traghetto), i trabucchi
              di Vieste e la Riserva Naturale del Lago di Guardialfiera. Sotto casa: chilometri di
              spiaggia libera e stabilimenti, e la trattoria Santa Monica a due passi.
            </p>
          </div>
        </div>
      </section>
      <CtaBanner />
    </main>
    <Footer />
  </div>
);

export default LocationPage;
