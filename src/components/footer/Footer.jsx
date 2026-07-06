import logo from "../../assets/logo/alternative-2-wb.png";

const links = [
    { href: "#inicio", text: "Inicio" },
    { href: "#servicios", text: "Servicios" },
    { href: "#experiencia", text: "Proceso" },
    { href: "#nosotros", text: "Nosotros" },
    { href: "#contacto", text: "Contacto" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-plume-2">
            <div className="mx-auto flex max-w-[110rem] flex-col gap-8 px-gutter py-14 md:flex-row md:items-center md:justify-between">
                {/* Logo */}
                <a
                    href="#inicio"
                    aria-label="Ravenmind — ir al inicio"
                    className="opacity-80 transition-opacity duration-[var(--motion-quick)] hover:opacity-100"
                >
                    <img src={logo} alt="" className="h-12 w-auto" />
                </a>

                {/* Mapa del sitio */}
                <nav aria-label="Mapa del sitio" className="flex flex-wrap items-center gap-x-8 gap-y-3 text-note">
                    {links.map(({ href, text }) => (
                        <a
                            key={href}
                            href={href}
                            className="text-ink-mute transition-colors duration-[var(--motion-quick)] hover:text-ink focus-visible:text-ink"
                        >
                            {text}
                        </a>
                    ))}
                </nav>

                {/* Copyright */}
                <p className="text-caption text-ink-mute">
                    &copy; {currentYear} Ravenmind. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
