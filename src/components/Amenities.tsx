import { amenities } from "@/data/property";
import KineticTitle from "./fx/KineticTitle";

export default function Amenities() {
  return (
    <section className="py-24 md:py-32 bg-sea text-background">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="label text-sea-soft">Servizi</p>
            <KineticTitle text="L'essenziale, fatto bene." className="mt-5 text-3xl md:text-4xl" />
            <p className="mt-6 text-sm opacity-80 max-w-xs leading-relaxed">
              Niente in più del necessario, niente in meno di quello che serve
              per sentirsi a casa dopo una giornata al mare.
            </p>
          </div>
          <ul className="md:col-span-8 grid sm:grid-cols-2 gap-x-10">
            {amenities.map((a, i) => (
              <li
                key={a.label}
                className={`group py-5 flex items-baseline justify-between gap-4 border-b-2 border-background/15 hover:border-sea-soft transition-colors ${
                  i < 2 ? "border-t-2" : ""
                }`}
              >
                <span className="headline text-lg md:text-xl group-hover:text-sea-soft transition-colors">
                  {a.label}
                </span>
                <span className="caption opacity-60 text-right shrink-0">{a.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
