import TeamComponent from "./TeamComponent";
import samuel from "../../assets/other/samuel.jpeg";
import juan from "../../assets/other/farelo.png";
import santiago from "../../assets/other/santiago.jpeg";
import lucas from "../../assets/other/lucas.jpeg";
import berdugo from "../../assets/other/berdugo.jpeg";
import ContactMethod from "../contact/ContactMethod.jsx";
import AmbientVideo from "../media/AmbientVideo";
import { useEffect, useRef, useState } from "react";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollReveal from "../../hooks/useScrollReveal";

const members = [
  { name: "Samuel Polo", role: "Ing. Frontend", photo: samuel, video: "/videos/retrato-samuel.mp4", description: "Entusiasta de aprender, me dedico al front end para demostrar mis habilidades en diseñar, crear e innovar páginas web. Otra de mis fortalezas es el trabajo en equipo ya que siempre busco tener dinámica con mi grupo de trabajo para mantener un ambiente laboral positivo y productivo.", instagram: 'https://www.instagram.com/saml_pol?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', git: 'https://github.com/Pololo06', linkedin: 'https://co.linkedin.com/in/samuel-polo-0382a9388' },
  { name: "Juan Farelo", role: "Ing. Backend", photo: juan, video: "/videos/retrato-juan.mp4", description: "Me llamo Farelo y me destaco por mi desarrollo en el entorno backend, manejo de lógica de negocio y compresión al cliente. Actualmente me encuentro puliendo mis habilidades en FastApi, Spring Boot y demás que me hacen más versátil.", instagram: 'https://www.instagram.com/et.___farelo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', git: 'https://github.com/jfmiyox', linkedin: '' },
  { name: "Santiago Torres", role: "Ing. Backend", photo: santiago, video: "/videos/retrato-santiago.mp4", description: "Apasionado por la programación de bajo nivel, el análisis de datos y la inteligencia artifical. He participado en diferentes hackatones para pulir mi conocimiento y conocer diversos perfiles técnicos. Me caracterizo por mi liderazgo, gestión del tiempo y productividad en entornos desafiantes. Me encuentro preparandome cada día para ser un programador destacado en el área de Machine Learning.", instagram: 'https://www.instagram.com/tfst_1e1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', git: 'https://github.com/sandredev', linkedin: 'https://www.linkedin.com/in/santiago-torres-7083b530a/' },
  { name: "Lucas Carvajal", role: "Ing. Frontend", photo: lucas, video: "/videos/retrato-lucas.mp4", description: "Soy Lucas Carvajal, ingeniero de sistemas y desarrollador frontend apasionado por crear soluciones web modernas, intuitivas y eficientes. Me caracterizo por mi liderazgo, responsabilidad y compromiso con cada proyecto. Disfruto trabajar en equipo, aprender constantemente y adaptarme rápidamente a nuevos retos, transformando ideas en experiencias digitales funcionales que generen valor para las personas y las empresas.", instagram: 'https://www.instagram.com/lucascc611?igsh=cDVxYWRtdDh2enBz&utm_source=qr', git: 'https://github.com/LucasCarvajalC', linkedin: 'https://www.linkedin.com/in/lucas-carvajal-contreras-6b28993ab' },
  { name: "Daniel Berdugo", role: "Ing. Full Stack", photo: berdugo, video: "/videos/retrato-berdugo.mp4", description: "Soy Full Stack Engineer apasionado por desarrollar soluciones innovadoras con inteligencia artificial y tecnologías modernas. Me considero un excelente líder, con alta capacidad de adaptación y un enfoque colaborativo para afrontar nuevos desafíos. Disfruto crear implementaciones creativas, escalables y centradas en el usuario, combinando aprendizaje continuo, innovación y excelencia técnica.", instagram: 'https://www.instagram.com/eldaniel._02?igsh=NzNkNGIyZ3huaGtu', git: 'https://github.com/DFBR2506', linkedin: 'https://co.linkedin.com/in/daniel-berdugo-bb0451339' },
];

export default function AboutUs() {
  const [selectedMember, setSelectedMember] = useState(null);
  const { ref, isVisible } = useScrollReveal();
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  /* Modal: focus-trap, Escape, scroll-lock y devolución de foco */
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
    <section id="nosotros" className="w-full py-section overflow-hidden scroll-mt-20 bg-plume-1">
      <div className="mx-auto max-w-[110rem] px-gutter">

        {/* ── Cabecera de sección ── */}
        <div
          ref={ref}
          className={`mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 transition-[opacity,transform] duration-[var(--motion-enter)] ease-[var(--ease-settle)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="type-headline text-headline text-ink">Nosotros</h2>
          <span className="text-caption uppercase tracking-[0.18em] text-ink-mute">
            Equipo — 05
          </span>
        </div>

        <p
          className={`mb-12 max-w-xl text-lead leading-snug text-ink-dim transition-[opacity,transform] delay-100 duration-[var(--motion-enter)] ease-[var(--ease-settle)] sm:mb-16 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Somos un equipo de ingenieros apasionados por construir soluciones
          digitales que hacen la diferencia.
        </p>

        {/* ── Franja del equipo: la idea del hero, a gran formato.
             Mobile: strip horizontal con snap. Desktop: fila de 5. ── */}
        <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-3 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:pb-0 lg:grid-cols-5 lg:gap-2">
          {members.map((member, i) => (
            <div key={member.name} className="min-w-[62vw] snap-center sm:min-w-0">
              <TeamComponent member={member} onClick={openMember(member)} index={i} />
            </div>
          ))}
        </div>

        {/* ── Misión ── */}
        <div className="mt-16 border-t border-white/10 pt-10 sm:mt-20 lg:grid lg:grid-cols-12 lg:gap-8">
          <h3 className="text-caption uppercase tracking-[0.18em] text-ink-mute lg:col-span-3">
            Nuestra misión
          </h3>
          <p className="mt-4 max-w-3xl text-lead leading-snug text-ink lg:col-span-9 lg:mt-0">
            Desarrollar soluciones web para empresas pequeñas, medianas o grandes
            que integran tecnologías vanguardistas, como modelos de inteligencia
            artificial, para permitir a nuestros clientes estar a la par del
            mercado y optimizar sus flujos de trabajo.
          </p>
        </div>

      </div>

      {/* ── Modal de ficha completa ── */}
      {selectedMember && (
        <div
          className="enter-fade fixed inset-0 z-50 flex items-center justify-center bg-plume-0/85 p-4"
          onClick={() => setSelectedMember(null)}
          role="presentation"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-name"
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[85vh] w-full max-w-3xl gap-6 overflow-y-auto rounded-soft bg-plume-3 p-6 sm:p-10 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-10"
          >
            <button
              ref={closeButtonRef}
              onClick={() => setSelectedMember(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center text-ink-mute transition-colors duration-[var(--motion-quick)] hover:text-ink"
              aria-label="Cerrar"
            >
              <FontAwesomeIcon icon={faXmark} style={{ fontSize: "1.4rem" }} />
            </button>

            <div className="tone-reveal flex flex-col items-start gap-4">
              <div className="tone-media aspect-[4/5] w-36 overflow-hidden rounded-sharp sm:w-44 md:w-full">
                <img
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                  width={240}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: "50% 25%" }}
                />
                {selectedMember.video && (
                  <AmbientVideo src={selectedMember.video} className="absolute inset-0" />
                )}
              </div>

              <div className="flex items-center gap-3">
                <ContactMethod icon={faInstagram} href={selectedMember.instagram} label={`Instagram de ${selectedMember.name}`} />
                <ContactMethod icon={faGithub} href={selectedMember.git} label={`GitHub de ${selectedMember.name}`} />
                {selectedMember.linkedin && (
                  <ContactMethod icon={faLinkedin} href={selectedMember.linkedin} label={`LinkedIn de ${selectedMember.name}`} />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <h3 id="team-modal-name" className="type-headline text-title-lg text-ink">
                  {selectedMember.name}
                </h3>
                <span className="text-caption uppercase tracking-[0.18em] text-ink-mute">
                  {selectedMember.role}
                </span>
              </div>
              <p className="text-copy leading-relaxed text-ink-dim">
                {selectedMember.description}
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
