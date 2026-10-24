import { PHONE_DISPLAY, PHONE_URL } from "@/data/property";
import Marquee from "./fx/Marquee";

export default function CtaBanner() {
  return (
    <section className="bg-sea text-background overflow-hidden">
      <Marquee
        items={["Il mare aspetta", "La camera anche", "Prenota ora"]}
        className="border-b-2 border-background/15 py-3 headline text-xl md:text-2xl text-sea-soft"
      />
      <div className="container-editorial py-20 md:py-28">
        <a
          href={PHONE_URL}
          aria-label={`Chiama il ${PHONE_DISPLAY} per prenotare`}
          className="group block"
        >
          <span className="label text-sea-soft">Il tuo prossimo weekend</span>
          <span className="mt-4 block headline text-[10vw] md:text-[6rem] leading-[0.92] outline-text group-hover:text-clay transition-colors duration-500 [-webkit-text-stroke-color:hsl(var(--background))] group-hover:[-webkit-text-stroke-color:hsl(var(--clay))]">
            Prenota
            <br />
            ora →
          </span>
        </a>
        <p className="mt-8 caption opacity-60">{`Chiama il ${PHONE_DISPLAY} per disponibilità e prezzi`}</p>
      </div>
    </section>
  );
}
