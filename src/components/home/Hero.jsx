import samuel from "../../assets/other/samuel.jpeg";
import juan from "../../assets/other/farelo.png";
import santiago from "../../assets/other/santiago.jpeg";
import lucas from "../../assets/other/lucas.jpeg";
import berdugo from "../../assets/other/berdugo.jpeg";

/* Franja duotono: los 5 ingenieros reales como material grafico del hero.
   Se presentan con nombre en la seccion Nosotros; aca son plumaje. */
const team = [
    { src: samuel, position: "50% 30%" },
    { src: juan, position: "50% 25%" },
    { src: santiago, position: "50% 30%" },
    { src: lucas, position: "50% 25%" },
    { src: berdugo, position: "50% 30%" },
];

export default function Hero() {
    return (
        <section id="inicio" className="relative w-full overflow-hidden scroll-mt-20 bg-plume-0">
            <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-[110rem] flex-col justify-between gap-10 px-gutter pb-12 pt-6 animate-fade-in lg:min-h-[calc(100svh-6rem)] lg:pt-10">

                {/* ── Meta del estudio ── */}
                <div className="flex items-baseline justify-between gap-4 text-caption uppercase tracking-[0.18em] text-ink-mute">
                    <span>Estudio de software</span>
                    <span className="hidden sm:inline">Cartagena — Colombia</span>
                    <span aria-label="Cinco ingenieros">5 ingenieros</span>
                </div>

                {/* ── Wordmark escalonado + franja duotono ── */}
                <h1 aria-label="Ravenmind" className="flex w-full flex-col gap-2 sm:gap-3">
                    <span aria-hidden="true" className="type-display text-display text-ink">
                        RAVEN
                    </span>

                    <span aria-hidden="true" className="grid grid-cols-5 gap-1 sm:gap-1.5">
                        {team.map(({ src, position }, i) => (
                            <span key={i} className="tone-media block h-[clamp(4.5rem,15vw,11rem)]">
                                <img
                                    src={src}
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    style={{ objectPosition: position }}
                                />
                            </span>
                        ))}
                    </span>

                    <span aria-hidden="true" className="type-display self-end text-display text-ink">
                        MIND
                    </span>
                </h1>

                {/* ── Copy + acciones ── */}
                <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
                    <p className="max-w-md text-lead leading-snug text-ink-dim">
                        Software a medida para empresas que no pueden permitirse
                        improvisar: plataformas web, interfaces y sitios corporativos
                        construidos con precisión de ingeniería.
                    </p>

                    <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
                        <a
                            href="#contacto"
                            className="group inline-flex items-center gap-2 text-copy font-semibold text-ink transition-colors duration-[var(--motion-quick)] hover:text-iris focus-visible:text-iris"
                        >
                            Hablemos de tu proyecto
                            <span aria-hidden="true" className="transition-transform duration-[var(--motion-quick)] group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                        <a
                            href="#servicios"
                            className="text-note text-ink-mute underline decoration-transparent underline-offset-4 transition-colors duration-[var(--motion-quick)] hover:text-ink hover:decoration-iris"
                        >
                            Ver servicios
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
