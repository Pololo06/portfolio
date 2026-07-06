import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import useScrollReveal from "../../hooks/useScrollReveal";
import AmbientVideo from "../media/AmbientVideo";

/* Retrato del equipo — misma idea que la franja del hero, a gran formato.
   En reposo: duotono anonimo. Hover/focus (o siempre, en tactil): el
   retrato recupera su color original y revela nombre, rol y redes.
   El click abre la ficha completa (bio) en el modal de AboutUs. */
export default function TeamComponent({ member, onClick, index = 0 }) {
  const { ref, isVisible } = useScrollReveal({ delay: index * 100 });

  const socials = [
    { icon: faGithub, href: member.git, label: `GitHub de ${member.name}` },
    { icon: faInstagram, href: member.instagram, label: `Instagram de ${member.name}` },
    { icon: faLinkedin, href: member.linkedin, label: `LinkedIn de ${member.name}` },
  ].filter((s) => s.href);

  return (
    <div
      ref={ref}
      className={`tone-reveal group relative aspect-[3/4] w-full overflow-hidden transition-[opacity,transform] duration-[var(--motion-enter)] ease-[var(--ease-settle)] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : `${index % 2 ? "translate-y-10" : "-translate-y-10"} opacity-0`
      }`}
    >
      <div className="tone-media absolute inset-0">
        <img
          src={member.photo}
          alt=""
          width={144}
          height={144}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: "50% 25%" }}
        />
        {member.video && <AmbientVideo src={member.video} className="absolute inset-0" />}
      </div>

      {/* Click principal — abre la ficha completa en el modal */}
      <button
        type="button"
        onClick={onClick}
        aria-label={`Ver más sobre ${member.name}, ${member.role}`}
        className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-none"
      />

      {/* Info revelada: en táctil siempre visible; en desktop aparece con
          hover / focus junto con el color original del retrato */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col gap-1 bg-gradient-to-t from-plume-0/95 via-plume-0/55 to-transparent p-4 pt-12 transition-[opacity,transform] duration-[var(--motion-base)] ease-[var(--ease-hold)] lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100">
        <h3 className="type-headline text-title-lg text-ink">{member.name}</h3>
        <span className="text-caption uppercase tracking-[0.18em] text-ink-mute">
          {member.role}
        </span>
        <div className="pointer-events-auto mt-2 flex gap-4">
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-ink-mute transition-colors duration-[var(--motion-quick)] hover:text-iris focus-visible:text-iris"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
