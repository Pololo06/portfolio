import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Experience() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="experiencia" className="w-full py-section relative overflow-hidden scroll-mt-20 bg-plume-2">

            {/* Fondo decorativo */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full opacity-[0.06] blur-3xl bg-blue-raven" />
            </div>

            <div
                ref={ref}
                className={`relative z-10 max-w-md mx-auto px-6 flex flex-col items-center text-center gap-5 transition-[opacity,transform] duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                    <div className="h-px w-12 bg-blue-electric opacity-50" />
                    <span className="text-small font-semibold tracking-widest uppercase text-blue-electric">
                        Experiencia
                    </span>
                    <div className="h-px w-12 bg-blue-electric opacity-50" />
                </div>

                {/* Ícono animado */}
                <div className="flex items-center justify-center size-16 sm:size-20 lg:size-24 rounded-3xl bg-black-soft border-2 border-muted/30 shadow-[0_0_40px_rgba(0,52,158,0.2)]">
                    <FontAwesomeIcon
                        icon={faHammer}
                        className="text-blue-electric animate-bounce text-[1.8rem] sm:text-[2.3rem] lg:text-[2.8rem]"
                    />
                </div>

                {/* Título */}
                <h2 className={`text-title-mobile lg:text-title font-bold font-title tracking-wide text-white-soft text-center mb-4 transition-[opacity,transform] duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    Sección en construcción
                </h2>

                <p className="text-body text-text-muted leading-relaxed max-w-sm">
                    Estamos trabajando en esta sección para mostrarte nuestra experiencia y proyectos.
                    Vuelve pronto, va a valer la pena.
                </p>

            </div>
        </section>
    );
}