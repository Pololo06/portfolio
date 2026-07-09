import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollReveal from "../../hooks/useScrollReveal";
import { getMemberSocials } from "./memberSocials";

/* Retrato del equipo: entra/sale con un barrido dentro de la máscara;
   hover/focus (o táctil) revela nombre, rol y redes; click abre la ficha. */
export default function TeamComponent({ member, onClick, index = 0 }) {
  const { ref, isVisible, hasRevealed } = useScrollReveal();

  /* Pares por arriba, impares por abajo: estático antes de entrar,
     barrido al entrar, barrido inverso al salir. */
  const sweep = isVisible
    ? index % 2
      ? "enter-sweep-up"
      : "enter-sweep-down"
    : hasRevealed
      ? index % 2
        ? "exit-sweep-down"
        : "exit-sweep-up"
      : index % 2
        ? "translate-y-[104%]"
        : "-translate-y-[104%]";

  const socials = getMemberSocials(member);

  return (
    <div
      ref={ref}
      className="group relative aspect-[4/5] xs:aspect-[3/4] w-full overflow-hidden"
      style={{ "--stagger": `${index * 90}ms` }}
    >
      <div className="tone-media absolute inset-0">
        <img
          src={member.photo}
          alt=""
          width={144}
          height={144}
          loading="lazy"
          decoding="async"
          className={`${sweep} object-portrait`}
        />
      </div>

      {/* Botón overlay: abre la ficha */}
      <button
        type="button"
        onClick={onClick}
        aria-label={`Ver más sobre ${member.name}, ${member.role}`}
        className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-none"
      />

      {/* Info: siempre visible en táctil; hover/focus en desktop */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col gap-1 bg-gradient-to-t from-black/95 via-black/55 to-transparent p-4 pt-12 transition-[opacity,transform] duration-[var(--motion-base)] ease-[var(--ease-hold)] xs:translate-y-3 xs:group-hover:translate-y-0 xs:group-hover:opacity-100 xs:group-focus-within:translate-y-0 xs:group-focus-within:opacity-100 ${
          isVisible ? "xs:opacity-0" : "opacity-0"
        }`}
      >
        <h3 className="type-headline text-title-lg text-white-soft">{member.name}</h3>
        <span className="text-caption uppercase tracking-[0.18em] text-text-muted">
          {member.role}
        </span>
        <div className="pointer-events-auto mt-2 flex gap-4">
          {socials.map(({ key, icon, href, label }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-text-muted transition-colors duration-[var(--motion-quick)] hover:text-blue-electric focus-visible:text-blue-electric"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
