import samuel from "../../assets/other/samuel.jpeg";
import juan from "../../assets/other/farelo.png";
import santiago from "../../assets/other/santiago.jpeg";
import lucas from "../../assets/other/lucas.jpeg";
import berdugo from "../../assets/other/berdugo.jpeg";
import AmbientVideo from "../media/AmbientVideo";

/* Franja duotono: los 5 ingenieros reales como material grafico del hero.
   Se presentan con nombre en la seccion Nosotros; aca son plumaje.
   Cuando existan los retratos vivos (public/videos/README.md) cada celda
   pasa de foto a video automaticamente. */
const team = [
    { src: samuel, video: "/videos/retrato-samuel.mp4", position: "50% 30%" },
    { src: juan, video: "/videos/retrato-juan.mp4", position: "50% 25%" },
    { src: santiago, video: "/videos/retrato-santiago.mp4", position: "50% 30%" },
    { src: lucas, video: "/videos/retrato-lucas.mp4", position: "50% 25%" },
    { src: berdugo, video: "/videos/retrato-berdugo.mp4", position: "50% 30%" },
];

export default function Hero() {
    return (
        <section id="inicio" className="relative w-full overflow-hidden scroll-mt-20 bg-plume-0">
            <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-[110rem] flex-col justify-between gap-10 px-gutter pb-12 pt-6 lg:min-h-[calc(100svh-6rem)] lg:pt-10">

                {/* ── Meta del estudio (entra al final de la coreografía) ── */}
                <div
                    className="enter-fade flex items-baseline justify-between gap-4 text-caption uppercase tracking-[0.18em] text-ink-mute"
                    style={{ "--stagger": "700ms" }}
                >
                    <span>Estudio de software</span>
                    <span className="hidden sm:inline">Cartagena — Colombia</span>
                    <span aria-label="Cinco ingenieros">5 ingenieros</span>
                </div>

                {/* ── Wordmark escalonado + franja: el hero se ARMA al cargar ──
                     RAVEN emerge de su máscara, los retratos barren alternando
                     arriba/abajo con stagger, MIND cierra la composición. ── */}
                <h1 aria-label="Ravenmind" className="flex w-full flex-col gap-2 sm:gap-3">
                    <span aria-hidden="true" className="block overflow-hidden">
                        <span
                            className="enter-rise type-display text-display block text-ink"
                            style={{ "--stagger": "60ms" }}
                        >
                            RAVEN
                        </span>
                    </span>

                    <span aria-hidden="true" className="grid grid-cols-5 gap-1 sm:gap-1.5">
                        {team.map(({ src, video, position }, i) => {
                            const sweep = i % 2 ? "enter-sweep-up" : "enter-sweep-down";
                            return (
                                <span
                                    key={i}
                                    className="tone-media block h-[clamp(4.5rem,15vw,11rem)]"
                                    style={{ "--stagger": `${240 + i * 90}ms` }}
                                >
                                    <img
                                        src={src}
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        className={sweep}
                                        style={{ objectPosition: position }}
                                    />
                                    <AmbientVideo
                                        src={video}
                                        className={`absolute inset-0 ${sweep}`}
                                    />
                                </span>
                            );
                        })}
                    </span>

                    <span aria-hidden="true" className="block self-end overflow-hidden">
                        <span
                            className="enter-rise type-display text-display block text-ink"
                            style={{ "--stagger": "420ms" }}
                        >
                            MIND
                        </span>
                    </span>
                </h1>

                {/* ── Copy + acciones ── */}
                <div
                    className="enter-fade flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end"
                    style={{ "--stagger": "800ms" }}
                >
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
