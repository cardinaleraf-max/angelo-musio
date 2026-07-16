import { amenities } from "@/data/property";

export default function Amenities() {
  return (
    <section className="py-24 md:py-32 bg-sea text-background doghe">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="label opacity-60">Servizi</p>
            <h2 className="mt-5 font-display text-5xl leading-tight">
              L'essenziale, fatto bene.
            </h2>
            <p className="mt-6 text-sm opacity-80 max-w-xs leading-relaxed">
              Niente in più del necessario, niente in meno di quello che serve
              per sentirsi a casa dopo una giornata al mare.
            </p>
          </div>
          <ul className="md:col-span-8 grid sm:grid-cols-2 gap-x-10">
            {amenities.map((a, i) => (
              <li
                key={a.label}
                className={`py-5 flex items-baseline justify-between border-b border-background/15 ${
                  i < 2 ? "border-t" : ""
                }`}
              >
                <span className="font-display text-2xl">{a.label}</span>
                <span className="text-xs opacity-60 tracking-wider text-right">{a.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
