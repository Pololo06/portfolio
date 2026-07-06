import { useId, useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const myServices = [
  { title: "Desarrollo Web a Medida", description: "Creamos aplicaciones web y plataformas inteligentes que transforman ideas en soluciones de alto rendimiento.", bigDescription: "Convertimos tus necesidades en soluciones digitales potentes. Desarrollamos aplicaciones web y plataformas personalizadas con interfaces intuitivas, lógica sólida y tecnologías modernas. Desde paneles administrativos hasta sistemas de gestión complejos, construimos herramientas rápidas, seguras y escalables que optimizan procesos y potencian el crecimiento de tu empresa." },
  { title: "Diseño de Interfaces UI/UX", description: "Diseñamos experiencias digitales intuitivas que enamoran a tus usuarios.", bigDescription: "Una gran plataforma no solo debe funcionar; también debe enamorar a quien la utiliza. Diseñamos interfaces modernas, limpias y visualmente impactantes, pensadas para ofrecer una experiencia fluida en cualquier dispositivo. Analizamos el comportamiento de los usuarios para crear productos intuitivos, accesibles y memorables que refuercen la identidad de tu marca y conviertan cada interacción en una experiencia excepcional." },
  { title: "Sitios Web Corporativos y Landing Pages", description: "Impulsamos tu presencia digital con sitios que convierten visitantes en clientes.", bigDescription: "Tu presencia digital es la primera impresión de tu marca, y nos encargamos de que sea inolvidable. Diseñamos y desarrollamos landing pages y sitios corporativos de alto impacto, enfocados en captar la atención, transmitir confianza y convertir visitantes en clientes. Cada proyecto combina un diseño moderno, tiempos de carga rápidos y optimización para buscadores (SEO), creando una experiencia que impulsa el crecimiento de tu negocio y fortalece tu presencia en línea." },
  { title: "Mantenimiento y Soporte Continuo", description: "Optimizamos y modernizamos tu plataforma para que siempre rinda al máximo.", bigDescription: "La tecnología evoluciona constantemente, y tu plataforma debe hacerlo con ella. Optimizamos el rendimiento de sitios y aplicaciones existentes, corregimos problemas técnicos y modernizamos sistemas para garantizar mayor velocidad, estabilidad y seguridad. Desde mejoras en tiempos de carga hasta migraciones a tecnologías más avanzadas, nos aseguramos de que tu solución esté preparada para crecer y ofrecer una experiencia confiable las 24 horas del día." },
];

/* Fila del índice de servicios — acordeón accesible (botón real dentro
   del h3, patrón ARIA de disclosure). Cada fila mantiene su estado
   independiente, igual que las cards anteriores. */
function ServiceRow({ index, title, description, bigDescription }) {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isVisible } = useScrollReveal({ delay: index * 100 });
  const panelId = useId();
  const buttonId = useId();
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      className={`border-t border-white/10 transition-[opacity,transform] duration-[var(--motion-enter)] ease-[var(--ease-settle)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="group grid w-full cursor-pointer grid-cols-[2.5rem_1fr_auto] items-center gap-4 px-2 py-6 text-left transition-colors duration-[var(--motion-quick)] hover:bg-plume-2 focus-visible:bg-plume-2 focus-visible:outline-none sm:grid-cols-[4rem_1fr_auto] sm:px-4 sm:py-8"
        >
          <span
            aria-hidden="true"
            className={`text-caption font-medium tabular-nums transition-colors duration-[var(--motion-quick)] ${
              isOpen ? "text-iris" : "text-ink-mute group-hover:text-iris group-focus-visible:text-iris"
            }`}
          >
            {number}
          </span>

          <span className="type-headline text-title-lg text-ink">
            {title}
          </span>

          <span
            aria-hidden="true"
            className={`justify-self-end text-title-lg font-light leading-none transition-[transform,color] duration-[var(--motion-base)] ease-[var(--ease-hold)] ${
              isOpen ? "rotate-45 text-iris" : "text-ink-mute group-hover:text-ink"
            }`}
          >
            +
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows] duration-[var(--motion-base)] ease-[var(--ease-hold)] ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-[2.5rem_1fr] gap-4 px-2 pb-8 sm:grid-cols-[4rem_1fr] sm:px-4 sm:pb-10">
            <span aria-hidden="true" />
            <div className="grid gap-5 lg:grid-cols-[1fr_2fr] lg:gap-12">
              <p className="text-lead leading-snug text-ink">
                {description}
              </p>
              <p className="max-w-3xl text-copy leading-relaxed text-ink-dim">
                {bigDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="w-full relative overflow-hidden scroll-mt-20 py-section bg-plume-1" id="servicios">
      <div className="mx-auto max-w-[110rem] px-gutter">

        {/* ── Cabecera de sección: asimétrica, alineada al margen ── */}
        <div
          ref={ref}
          className={`mb-12 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 transition-[opacity,transform] duration-[var(--motion-enter)] ease-[var(--ease-settle)] sm:mb-16 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="type-headline text-headline text-ink">
            ¿Qué ofrecemos?
          </h2>
        </div>

        {/* ── Índice de servicios ── */}
        <div className="border-b border-white/10">
          {myServices.map((service, index) => (
            <ServiceRow
              key={service.title}
              index={index}
              title={service.title}
              description={service.description}
              bigDescription={service.bigDescription}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
