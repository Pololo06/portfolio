import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo/alternative-2-wb.png";

export default function NavBar() {
    const [activeSection, setActiveSection] = useState("inicio");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const menuRef = useRef(null);

    const links = [
        { id: "inicio", text: "Inicio" },
        { id: "servicios", text: "Servicios" },
        { id: "experiencia", text: "Experiencia" },
        { id: "nosotros", text: "Nosotros" },
        { id: "contacto", text: "Contacto" },
    ];

    /* ── Detectar sección activa ── */
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.4 }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    /* ── Detectar scroll para el fondo ── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* ── Bloquear scroll del body cuando el menú mobile está abierto ── */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const scrollToSection = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleLinkClick = (e, sectionId) => {
        setMenuOpen(false);
        if (sectionId && window.innerWidth < 768) {
            e.preventDefault();
            const menuEl = menuRef.current;
            if (menuEl) {
                const onTransitionEnd = () => {
                    scrollToSection(sectionId);
                    menuEl.removeEventListener("transitionend", onTransitionEnd);
                };
                menuEl.addEventListener("transitionend", onTransitionEnd);
            }
        }
    };

    return (
        <nav
            ref={navRef}
            className={`sticky top-0 z-50 w-full text-ink transition-colors duration-[var(--motion-base)] ${
                scrolled || menuOpen ? "bg-plume-0" : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex h-20 max-w-[110rem] items-center justify-between px-gutter lg:h-24">

                {/* ── Logo ── */}
                <a href="#inicio" onClick={(e) => handleLinkClick(e, "inicio")} aria-label="Ravenmind — ir al inicio">
                    <img src={logo} alt="" width={80} height={80} className="h-16 w-auto sm:h-18 lg:h-22" />
                </a>

                {/* ── Links desktop ── */}
                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => {
                        const active = activeSection === link.id;
                        return (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                aria-current={active ? "page" : undefined}
                                className={`relative pb-1.5 text-note font-medium transition-colors duration-[var(--motion-quick)] ${
                                    active ? "text-ink" : "text-ink-mute hover:text-ink"
                                }`}
                            >
                                {link.text}
                                {/* Indicador activo — único azul permitido en reposo (regla 2) */}
                                <span
                                    aria-hidden="true"
                                    className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-iris transition-[transform,opacity] duration-[var(--motion-base)] ease-[var(--ease-hold)] ${
                                        active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                                    }`}
                                />
                            </a>
                        );
                    })}
                </div>

                {/* ── Botón hamburguesa mobile ── */}
                <button
                    className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1 md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                >
                    <span className={`block h-[2px] w-5 rounded-full bg-ink transition-transform duration-[var(--motion-base)] ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
                    <span className={`block h-[2px] w-5 rounded-full bg-ink transition-opacity duration-[var(--motion-base)] ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-[2px] w-5 rounded-full bg-ink transition-transform duration-[var(--motion-base)] ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
                </button>

            </div>

            {/* ── Menú mobile desplegable (en flujo: empuja el contenido) ── */}
            <div
                ref={menuRef}
                id="mobile-menu"
                role="navigation"
                aria-label="Menú principal"
                className={`overflow-hidden bg-plume-2 transition-all duration-[var(--motion-base)] ease-[var(--ease-hold)] md:hidden ${
                    menuOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col gap-1 px-gutter py-5">
                    {links.map((link) => {
                        const active = activeSection === link.id;
                        return (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => handleLinkClick(e, link.id)}
                                aria-current={active ? "page" : undefined}
                                className={`border-b border-white/5 py-3 text-lead font-medium transition-colors duration-[var(--motion-quick)] last:border-0 ${
                                    active ? "text-ink" : "text-ink-mute hover:text-ink"
                                }`}
                            >
                                {link.text}
                            </a>
                        );
                    })}
                    <a
                        href="#contacto"
                        onClick={(e) => handleLinkClick(e, "contacto")}
                        className="mt-4 rounded-pill bg-ink px-6 py-3 text-center text-copy font-semibold text-plume-0 transition-colors duration-[var(--motion-quick)] hover:bg-iris hover:text-plume-0"
                    >
                        Contáctanos
                    </a>
                </div>
            </div>
        </nav>
    );
}
