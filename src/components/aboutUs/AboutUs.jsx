import TeamComponent from "./TeamComponent";
import { team as members } from "../../data/team";
import ContactMethod from "../contact/ContactMethod.jsx";
import AmbientVideo from "../media/AmbientVideo";
import { useEffect, useRef, useState } from "react";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollReveal from "../../hooks/useScrollReveal";

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
          className={`mb-6 transition-[opacity,transform] duration-[var(--motion-enter)] ease-[var(--ease-settle)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="type-headline text-headline text-ink">Nosotros</h2>
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
              <TeamComponent
                member={member}
                onClick={openMember(member)}
                index={i}
              />
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
          className="enter-fade fixed inset-0 z-[70] flex items-center justify-center bg-plume-0/90 p-4 sm:p-6"
          onClick={() => setSelectedMember(null)}
          role="presentation"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-name"
            onClick={(e) => e.stopPropagation()}
            className="enter-modal relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-soft bg-plume-3 p-6 sm:p-10"
          >
            <button
              ref={closeButtonRef}
              onClick={() => setSelectedMember(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center text-ink-mute transition-colors duration-[var(--motion-quick)] hover:text-ink"
              aria-label="Cerrar"
            >
              <FontAwesomeIcon icon={faXmark} style={{ fontSize: "1.4rem" }} />
            </button>

            <div className="grid gap-8 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-12">

              {/* Columna del retrato — centrada en mobile, alineada en desktop */}
              <div
                className="enter-fade flex flex-col items-center gap-6 md:items-start"
                style={{ "--stagger": "140ms" }}
              >
                {/* En la ficha el retrato ya está "girado hacia la luz":
                    color original fijo desde que se abre (tone-on) */}
                <div className="tone-media tone-on aspect-[4/5] w-48 overflow-hidden rounded-soft sm:w-56 md:w-full">
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

              {/* Columna de texto */}
              <div
                className="enter-fade flex flex-col"
                style={{ "--stagger": "200ms" }}
              >
                <h3 id="team-modal-name" className="type-headline text-headline text-ink">
                  {selectedMember.name}
                </h3>
                <span className="mt-2 text-caption uppercase tracking-[0.2em] text-ink-mute">
                  {selectedMember.role}
                </span>
                <span aria-hidden="true" className="my-6 h-px w-full bg-white/10" />
                <p className="text-copy leading-relaxed text-ink-dim">
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
