import Card from "./card";
import {
  faCode,
  faPalette,
  faRocket,
  faScrewdriverWrench
} from "@fortawesome/free-solid-svg-icons";
import useScrollReveal from "../../hooks/useScrollReveal";

const myServices = [
  { title: "Desarrollo Web a Medida", description: "Creamos aplicaciones web y plataformas inteligentes que transforman ideas en soluciones de alto rendimiento.", bigDescription: "Convertimos tus necesidades en soluciones digitales potentes. Desarrollamos aplicaciones web y plataformas personalizadas con interfaces intuitivas, lógica sólida y tecnologías modernas. Desde paneles administrativos hasta sistemas de gestión complejos, construimos herramientas rápidas, seguras y escalables que optimizan procesos y potencian el crecimiento de tu empresa.", icon: faCode },
  { title: "Diseño de Interfaces UI/UX", description: "Diseñamos experiencias digitales intuitivas que enamoran a tus usuarios.", bigDescription: "Una gran plataforma no solo debe funcionar; también debe enamorar a quien la utiliza. Diseñamos interfaces modernas, limpias y visualmente impactantes, pensadas para ofrecer una experiencia fluida en cualquier dispositivo. Analizamos el comportamiento de los usuarios para crear productos intuitivos, accesibles y memorables que refuercen la identidad de tu marca y conviertan cada interacción en una experiencia excepcional.", icon: faPalette },
  { title: "Sitios Web Corporativos y Landing Pages", description: "Impulsamos tu presencia digital con sitios que convierten visitantes en clientes.", bigDescription: "Tu presencia digital es la primera impresión de tu marca, y nos encargamos de que sea inolvidable. Diseñamos y desarrollamos landing pages y sitios corporativos de alto impacto, enfocados en captar la atención, transmitir confianza y convertir visitantes en clientes. Cada proyecto combina un diseño moderno, tiempos de carga rápidos y optimización para buscadores (SEO), creando una experiencia que impulsa el crecimiento de tu negocio y fortalece tu presencia en línea.", icon: faRocket },
  { title: "Mantenimiento y Soporte Continuo", description: "Optimizamos y modernizamos tu plataforma para que siempre rinda al máximo.", bigDescription: "La tecnología evoluciona constantemente, y tu plataforma debe hacerlo con ella. Optimizamos el rendimiento de sitios y aplicaciones existentes, corregimos problemas técnicos y modernizamos sistemas para garantizar mayor velocidad, estabilidad y seguridad. Desde mejoras en tiempos de carga hasta migraciones a tecnologías más avanzadas, nos aseguramos de que tu solución esté preparada para crecer y ofrecer una experiencia confiable las 24 horas del día.", icon: faScrewdriverWrench },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-fullscreen w-full relative" id="servicios">

      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-125 h-125 rounded-full opacity-[0.07] blur-3xl bg-blue-raven" />
        <div className="absolute bottom-0 left-0 w-100 h-100 rounded-full opacity-[0.06] blur-3xl bg-blue-electric" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-6 flex flex-col items-center gap-3">

        {/* Eyebrow */}
        <div className={`flex items-center gap-3 transition-[opacity,transform] duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="h-px w-12 bg-blue-electric opacity-50" />
          <span className="text-small font-semibold tracking-widest uppercase text-blue-electric">
            Lo que hacemos
          </span>
          <div className="h-px w-12 bg-blue-electric opacity-50" />
        </div>

        {/* Título */}
        <h2 className={`font-bold font-title tracking-wide text-white text-title-mobile lg:text-title text-center mb-4 transition-[opacity,transform] duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          ¿Qué ofrecemos?
        </h2>

        {/* Cards */}
        <div className="w-full flex flex-col gap-vfit-2xs mt-vfit-xs">
          {myServices.map((service, key) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              bigDescription={service.bigDescription}
              icon={service.icon}
              index={key}
            />
          ))}
        </div>

      </div>
    </section>
  );
}