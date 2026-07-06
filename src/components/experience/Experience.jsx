import useScrollReveal from "../../hooks/useScrollReveal";
import AmbientVideo from "../media/AmbientVideo";

const steps = [
    {
        title: "Descubrimiento",
        copy: "Entendemos tu negocio, el problema y el presupuesto antes de proponer nada: una llamada, preguntas concretas y objetivos medibles.",
        deliverable: "propuesta con alcance, plan y costo cerrado",
    },
    {
        title: "Diseño",
        copy: "Prototipamos la interfaz navegable antes de escribir una línea de código, para que decidas sobre pantallas reales y no sobre promesas.",
        deliverable: "prototipo navegable aprobado por ti",
    },
    {
        title: "Construcción",
        copy: "Sprints cortos con avances visibles en un entorno de prueba desde la primera semana. Sin cajas negras: ves lo que construimos mientras lo construimos.",
        deliverable: "tu plataforma funcionando en producción",
    },
    {
        title: "Evolución",
        copy: "Monitoreamos, corregimos y hacemos crecer la plataforma contigo: rendimiento, seguridad y nuevas funciones cuando el negocio las pide.",
        deliverable: "soporte continuo y mejoras medibles",
    },
];

function ProcessStep({ index, title, copy, deliverable }) {
    const { ref, isVisible } = useScrollReveal({ delay: index * 100 });
    const number = String(index + 1).padStart(2, "0");

    return (
        <div
            ref={ref}
            className={`grid grid-cols-[2.5rem_1fr] gap-4 py-7 first:pt-0 last:pb-0 transition-[opacity,transform] duration-[var(--motion-enter)] ease-[var(--ease-settle)] sm:grid-cols-[4rem_1fr] sm:py-9 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
            <span aria-hidden="true" className="pt-1.5 text-caption font-medium tabular-nums text-ink-mute">
                {number}
            </span>
            <div className="flex flex-col gap-3">
                <h3 className="type-headline text-title-lg text-ink">{title}</h3>
                <p className="max-w-xl text-copy leading-relaxed text-ink-dim">{copy}</p>
                <p className="text-caption uppercase tracking-[0.18em] text-ink-mute">
                    Recibes{" — "}
                    <span className="normal-case tracking-normal text-ink-dim">{deliverable}</span>
                </p>
            </div>
        </div>
    );
}

export default function Experience() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="experiencia" className="w-full py-section relative overflow-hidden scroll-mt-20 bg-plume-2">
            <div className="mx-auto max-w-[110rem] px-gutter">

                {/* ── Cabecera de sección ── */}
                <div
                    ref={ref}
                    className={`mb-12 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 transition-[opacity,transform] duration-[var(--motion-enter)] ease-[var(--ease-settle)] sm:mb-16 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                    <h2 className="type-headline text-headline text-ink">¿Cómo trabajamos?</h2>
                </div>

                {/* ── Intro + video de proceso | pasos ── */}
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

                    <div className="flex flex-col gap-8 lg:col-span-5">
                        <p className="max-w-md text-lead leading-snug text-ink-dim">
                            El mismo proceso para un sitio corporativo o una plataforma
                            compleja: fases cortas, entregables concretos y decisiones
                            sobre cosas que puedes ver.
                        </p>

                        {/* Loop ambiente de trabajo real. Aparece solo cuando exista
                            public/videos/proceso.mp4 (specs en public/videos/README.md). */}
                        <div className="tone-media aspect-video w-full">
                            <AmbientVideo
                                src="/videos/proceso.mp4"
                                poster="/videos/proceso-poster.jpg"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="divide-y divide-white/10">
                            {steps.map((step, index) => (
                                <ProcessStep key={step.title} index={index} {...step} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
