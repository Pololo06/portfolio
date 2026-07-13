import TeamComponent from "./TeamComponent";
import samuel from "../../assets/other/samuel.jpeg";
import juan from "../../assets/other/farelo.png";
import santiago from "../../assets/other/santiago.jpeg";
import lucas from "../../assets/other/lucas.jpeg";
import berdugo from "../../assets/other/berdugo.jpeg";
import ContactMethod from "../contact/ContactMethod.jsx";
import { useEffect, useRef, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollReveal from "../../hooks/useScrollReveal";
import { getMemberSocials } from "./memberSocials";

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
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  /* Modal accesible: focus-trap, Escape, scroll-lock y devolución de foco. */
  useEffect(() => {
    if (!selectedMember) return;

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedMember(null);
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    };
  }, [selectedMember]);

  const openMember = (member) => (e) => {
    triggerRef.current = e.currentTarget;
    setSelectedMember(member);
  };

  return (
    <section id="nosotros" className="section-fullscreen w-full">
      <div className="mx-auto max-w-[90rem] px-6 w-full">

        {/* ── Cabecera ── */}
        <div ref={ref} className="flex flex-col items-center">

          {/* Eyebrow */}
          <div className={`flex items-center gap-3 mb-2 transition-[opacity,transform] duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="h-px w-12 bg-blue-electric opacity-50" />
            <span className="text-small font-semibold tracking-widest uppercase text-blue-electric">
              El equipo
            </span>
            <div className="h-px w-12 bg-blue-electric opacity-50" />
          </div>

          {/* Título */}
          <h2 className={`font-bold font-title tracking-wide text-white text-title-mobile lg:text-title text-center mb-4 transition-[opacity,transform] duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Nosotros
          </h2>

          <p className={`text-lead leading-snug text-text-muted text-center max-w-xl mb-vfit-lg transition-[opacity,transform] duration-[900ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Somos un equipo de ingenieros apasionados por construir soluciones
            digitales que hacen la diferencia.
          </p>
        </div>

        {/* ── Franja del equipo: strip con snap en móvil, fila de 5 desde xs (≥576px) ── */}
        <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-3 xs:grid xs:grid-cols-5 xs:gap-2 xs:overflow-visible xs:pb-0">
          {members.map((member, i) => (
            <div key={member.name} className="min-w-[56vw] snap-center xs:min-w-0">
              <TeamComponent
                member={member}
                onClick={openMember(member)}
                index={i}
                total={members.length}
              />
            </div>
          ))}
        </div>

        {/* ── Misión ── */}
        <div className="mt-vfit-xl border-t border-white/10 pt-vfit-md lg:grid lg:grid-cols-12 lg:gap-8">
          <h3 className="text-caption uppercase tracking-[0.18em] text-text-muted lg:col-span-3">
            Nuestra misión
          </h3>
          <p className="mt-6 max-w-3xl text-lead leading-snug text-white-soft lg:col-span-9 lg:mt-0">
            Creamos soluciones web con tecnologías vanguardistas, como la IA,
            para que nuestros clientes optimicen sus procesos y lideren su mercado.
          </p>
        </div>

      </div>

      {/* ── Modal de ficha completa ── */}
      {selectedMember && (
        <div
          className="enter-fade fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 sm:p-6"
          onClick={() => setSelectedMember(null)}
          role="presentation"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-name"
            onClick={(e) => e.stopPropagation()}
            className="enter-modal relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-soft bg-surface p-6 sm:p-10"
          >
            <button
              ref={closeButtonRef}
              onClick={() => setSelectedMember(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center text-text-muted transition-colors duration-[var(--motion-quick)] hover:text-white"
              aria-label="Cerrar"
            >
              <FontAwesomeIcon icon={faXmark} style={{ fontSize: "1.4rem" }} />
            </button>

            <div className="grid gap-8 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-12">

              {/* Columna del retrato */}
              <div
                className="enter-fade flex flex-col items-center gap-6 md:items-start"
                style={{ "--stagger": "140ms" }}
              >
                <div className="tone-media aspect-[4/5] w-48 overflow-hidden rounded-soft sm:w-56 md:w-full">
                  <img
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    width={240}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    className="object-portrait"
                  />
                </div>

                <div className="flex items-center gap-3">
                  {getMemberSocials(selectedMember).map(({ key, icon, href }) => (
                    <ContactMethod key={key} icon={icon} href={href} />
                  ))}
                </div>
              </div>

              {/* Columna de texto */}
              <div
                className="enter-fade flex flex-col"
                style={{ "--stagger": "200ms" }}
              >
                <h3 id="team-modal-name" className="type-headline text-title-lg text-white-soft">
                  {selectedMember.name}
                </h3>
                <span className="mt-2 text-caption uppercase tracking-[0.2em] text-text-muted">
                  {selectedMember.role}
                </span>
                <span aria-hidden="true" className="my-6 h-px w-full bg-white/10" />
                <p className="text-copy leading-relaxed text-text-muted">
                  {selectedMember.description}
                </p>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
