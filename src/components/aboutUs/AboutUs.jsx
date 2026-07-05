import TeamComponent from "./TeamComponent";
import samuel from "../../assets/other/samuel.jpeg";
import juan from "../../assets/other/farelo.png";
import santiago from "../../assets/other/santiago.jpeg";
import lucas from "../../assets/other/lucas.jpeg";
import berdugo from "../../assets/other/berdugo.jpeg"
import ContactMethod from "../contact/ContactMethod.jsx";
import { useEffect, useRef, useState } from "react";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollReveal from "../../hooks/useScrollReveal";

const members = [
  { name: "Samuel Polo", role: "Ing. Frontend", photo: samuel, description: "Entusiasta de aprender, me dedico al front end para demostrar mis habilidades en diseñar, crear e innovar páginas web. Otra de mis fortalezas es el trabajo en equipo ya que siempre busco tener dinámica con mi grupo de trabajo para mantener un ambiente laboral positivo y productivo.", instagram: 'https://www.instagram.com/saml_pol?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', git: 'https://github.com/Pololo06', linkedin: 'https://co.linkedin.com/in/samuel-polo-0382a9388' },
  { name: "Juan Farelo", role: "Ing. Backend", photo: juan, description: "Me llamo Farelo y me destaco por mi desarrollo en el entorno backend, manejo de lógica de negocio y compresión al cliente. Actualmente me encuentro puliendo mis habilidades en FastApi, Spring Boot y demás que me hacen más versátil.", instagram: 'https://www.instagram.com/et.___farelo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', git: 'https://github.com/jfmiyox', linkedin: '' },
  { name: "Santiago Torres", role: "Ing. Backend", photo: santiago, description: "Apasionado por la programación de bajo nivel, el análisis de datos y la inteligencia artifical. He participado en diferentes hackatones para pulir mi conocimiento y conocer diversos perfiles técnicos. Me caracterizo por mi liderazgo, gestión del tiempo y productividad en entornos desafiantes. Me encuentro preparandome cada día para ser un programador destacado en el área de Machine Learning.", instagram: 'https://www.instagram.com/tfst_1e1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', git: 'https://github.com/sandredev', linkedin: 'https://www.linkedin.com/in/santiago-torres-7083b530a/' },
  { name: "Lucas Carvajal", role: "Ing. Frontend", photo: lucas, description: "Soy Lucas Carvajal, ingeniero de sistemas y desarrollador frontend apasionado por crear soluciones web modernas, intuitivas y eficientes. Me caracterizo por mi liderazgo, responsabilidad y compromiso con cada proyecto. Disfruto trabajar en equipo, aprender constantemente y adaptarme rápidamente a nuevos retos, transformando ideas en experiencias digitales funcionales que generen valor para las personas y las empresas.", instagram: 'https://www.instagram.com/lucascc611?igsh=cDVxYWRtdDh2enBz&utm_source=qr', git: 'https://github.com/LucasCarvajalC', linkedin: 'https://www.linkedin.com/in/lucas-carvajal-contreras-6b28993ab' },
  { name: "Daniel Berdugo", role: "Ing. Full Stack", photo: berdugo, description: "Soy Full Stack Engineer apasionado por desarrollar soluciones innovadoras con inteligencia artificial y tecnologías modernas. Me considero un excelente líder, con alta capacidad de adaptación y un enfoque colaborativo para afrontar nuevos desafíos. Disfruto crear implementaciones creativas, escalables y centradas en el usuario, combinando aprendizaje continuo, innovación y excelencia técnica.", instagram: 'https://www.instagram.com/eldaniel._02?igsh=NzNkNGIyZ3huaGtu', git: 'https://github.com/DFBR2506', linkedin: 'https://co.linkedin.com/in/daniel-berdugo-bb0451339' },
];

export default function AboutUs() {
  const [selectedMember, setSelectedMember] = useState(null);
  const { ref, isVisible } = useScrollReveal();
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!selectedMember) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedMember(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedMember]);

  return (
    <section id="nosotros" className="w-full py-24 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-6xl px-6 flex flex-col items-center">

        {/* ── Eyebrow ── */}
        <div className={`flex items-center gap-3 mb-6 transition-[opacity,transform] duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="h-px w-12 bg-blue-electric opacity-50" />
          <span className="text-small font-semibold tracking-widest uppercase text-blue-electric">
            El equipo
          </span>
          <div className="h-px w-12 bg-blue-electric opacity-50" />
        </div>

        {/* ── Título ── */}
        <h2 className={`text-title font-bold font-title tracking-wide text-white-soft text-center mb-4 transition-[opacity,transform] duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Nosotros
        </h2>

        <p className={`text-body text-text-muted text-center max-w-xl mb-16 transition-[opacity,transform] duration-900 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Somos un equipo de ingenieros apasionados por construir soluciones digitales que hacen la diferencia.
        </p>

        {/* ── Grid de miembros ── */}
        <div className="flex flex-col gap-10 mb-20">
          {/* Primera fila */}
          <div className="flex flex-wrap justify-center gap-20">
            {members.slice(0, 3).map((member, i) => (
              <TeamComponent
                key={member.name}
                name={member.name}
                role={member.role}
                photo={member.photo}
                onClick={() => setSelectedMember(member)}
                index={i}
              />
            ))}
          </div>

          {/* Segunda fila */}
          <div className="flex flex-wrap justify-center gap-16">
            {members.slice(3).map((member, i) => (
              <TeamComponent
                key={member.name}
                name={member.name}
                role={member.role}
                photo={member.photo}
                onClick={() => setSelectedMember(member)}
                index={i + 3}
              />
            ))}
          </div>
        </div>

        {/* ── Card misión ── */}
        <div className={`relative w-full rounded-card bg-black-soft border-2 border-transparent hover:border-blue-raven px-8 py-10 md:px-16 md:py-12 transition-[opacity,transform,border-color] duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Línea acento izquierda */}
          <div className="pl-8 border-l-4 border-blue-raven md:pl-12">
            <h3 className="mb-3 text-page-title font-bold text-white-soft">
              Nuestra misión
            </h3>
            <p className="text-body text-white-soft max-w-3xl">
              Desarrollar soluciones web para empresas pequeñas, medianas o grandes que integran
              tecnologías vanguardistas, como modelos de inteligencia artificial, para permitir a
              nuestros clientes estar a la par del mercado y optimizar sus flujos de trabajo.
            </p>
          </div>
        </div>

      </div>



      {/* ── Modal ── */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedMember(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-name"
            className="relative flex flex-col md:flex-row items-center gap-4 sm:gap-10 bg-black-soft/90 border border-muted/30 rounded-card p-4 sm:p-10 md:p-14 w-full max-w-3xl mx-4 sm:mx-6 max-h-[85vh] overflow-y-auto animate-reveal-card"
            style={{ boxShadow: "0 0 60px rgba(0,52,158,0.25), inset 0 1px 0 rgba(255,255,255,0.04)" }}
            onClick={(e) => e.stopPropagation()}
          >

            <div
              className="absolute top-0 left-10 right-10 h-px"
              style={{ background: "linear-gradient(to right, transparent, #00349E, #00A3FF, #00349E, transparent)" }}
            />

            <button
              ref={closeButtonRef}
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-5 text-text-muted hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-electric rounded-full"
              aria-label="Cerrar"
            >
              <FontAwesomeIcon icon={faXmark} style={{ fontSize: "1.4rem" }} />
            </button>

            <div className="shrink-0 flex flex-col items-center gap-4">
              <img
                src={selectedMember?.photo}
                alt={selectedMember?.name}
                width={128}
                height={128}
                loading="lazy"
                decoding="async"
                className="size-40 rounded-full border-4 border-blue-raven object-cover animate-floating shadow-[0_0_30px_6px_rgba(0,52,158,0.5)]"
              />

              <div className="flex items-center gap-3">
                <ContactMethod icon={faInstagram} href={selectedMember?.instagram} />
                <ContactMethod icon={faGithub} href={selectedMember?.git} />
                {selectedMember?.linkedin && (
                  <ContactMethod icon={faLinkedin} href={selectedMember?.linkedin} />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3 text-white">
              <div>
                <h3 id="team-modal-name" className="text-body sm:text-page-title font-bold">
                  {selectedMember?.name}
                </h3>
                <span className="text-small sm:text-subtitle text-blue-electric font-medium">
                  {selectedMember?.role}
                </span>
              </div>
              <p className="text-small sm:text-body text-text-muted leading-relaxed text-justify">
                {selectedMember?.description}
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}