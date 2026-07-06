import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* Link de contacto/red con ícono. Si no hay `title` visible, pasar
   `label` para el nombre accesible (links de solo ícono). */
export default function ContactMethod({ title, icon, href, label }) {
    const isExternal = href?.startsWith("http");

    return (
        <a
            href={href}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noreferrer" : undefined}
            aria-label={title ? undefined : label}
            className="inline-flex items-center gap-2 text-ink-dim transition-colors duration-[var(--motion-quick)] hover:text-iris focus-visible:text-iris"
        >
            <FontAwesomeIcon icon={icon} className="text-2xl" />
            {title && <span className="text-copy font-medium">{title}</span>}
        </a>
    );
}
