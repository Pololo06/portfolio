import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

/* Redes del miembro (filtradas); fuente única para tarjeta y ficha. */
export function getMemberSocials(member) {
  return [
    { key: "instagram", icon: faInstagram, href: member.instagram, label: `Instagram de ${member.name}` },
    { key: "github", icon: faGithub, href: member.git, label: `GitHub de ${member.name}` },
    { key: "linkedin", icon: faLinkedin, href: member.linkedin, label: `LinkedIn de ${member.name}` },
  ].filter((s) => s.href);
}
