import { useState } from "react";
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
    /* Click/tap sobre un retrato: fija su color original (tone-on).
       Otro click lo devuelve al duotono. */
    const [litCells, setLitCells] = useState(() => new Set());
    const toggleCell = (i) =>
        setLitCells((prev) => {
            const next = new Set(prev);
            if (next.has(i)) next.delete(i);
            else next.add(i);
            return next;
        });

    return (
        <section id="inicio" className="relative w-full overflow-hidden scroll-mt-20 bg-plume-0">
            <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-[110rem] flex-col justify-between gap-10 px-gutter pb-12 pt-6 lg:min-h-[calc(100svh-6rem)] lg:pt-10">

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
                                    onClick={() => toggleCell(i)}
                                    className={`tone-media tone-reveal block h-[clamp(4.5rem,15vw,11rem)] cursor-pointer ${
                                        litCells.has(i) ? "tone-on" : ""
                                    }`}
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
                    </div>
                </div>

            </div>
        </section>
    );
}
