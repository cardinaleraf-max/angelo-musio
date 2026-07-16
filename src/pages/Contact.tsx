import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import { property } from "@/data/property";

const Contact = () => (
  <div className="overflow-x-clip">
    <Nav />
    <main className="pt-32">
      <section className="container-editorial pb-24">
        <p className="label text-muted-foreground">Contatti</p>
        <h1 className="mt-5 headline text-4xl sm:text-5xl md:text-7xl text-sea max-w-3xl">
          Scriveteci, rispondiamo sempre.
        </h1>

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5 space-y-10">
            <div>
              <p className="label text-muted-foreground mb-3">Indirizzo</p>
              <p className="text-xl font-medium text-sea leading-snug">{property.address}</p>
            </div>
            <div>
              <p className="label text-muted-foreground mb-3">Email</p>
              <a href={`mailto:${property.email}`} className="text-xl font-medium text-sea underline-offset-4 hover:underline">
                {property.email}
              </a>
            </div>
            <div>
              <p className="label text-muted-foreground mb-3">Orari</p>
              <p className="text-base text-foreground/80">
                Check-in {property.checkIn}<br />
                Check-out {property.checkOut}
              </p>
            </div>
            <div className="pt-4">
              <BookingButton>Prenota su Booking</BookingButton>
            </div>
          </div>

          <aside className="md:col-span-6 md:col-start-7 border-t border-border pt-10">
            <p className="label text-muted-foreground mb-6">Informazioni legali</p>
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-border/60 py-2">
                <dt className="text-muted-foreground">Ragione sociale</dt>
                <dd className="text-right max-w-[70%]">{property.legal.business}</dd>
              </div>
              <div className="flex justify-between border-b border-border/60 py-2">
                <dt className="text-muted-foreground">P.IVA / C.F.</dt>
                <dd>{property.legal.vat}</dd>
              </div>
              <div className="flex justify-between border-b border-border/60 py-2">
                <dt className="text-muted-foreground">REA</dt>
                <dd>{property.legal.rea}</dd>
              </div>
              <div className="flex justify-between border-b border-border/60 py-2">
                <dt className="text-muted-foreground">CIN</dt>
                <dd>{property.cin}</dd>
              </div>
              <div className="flex justify-between border-b border-border/60 py-2">
                <dt className="text-muted-foreground">Licenza</dt>
                <dd>{property.license}</dd>
              </div>
              <div className="flex justify-between border-b border-border/60 py-2">
                <dt className="text-muted-foreground">PEC</dt>
                <dd>{property.email}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Contact;
