import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo/alternative-2-wb.png";

export default function NavBar() {
    const [activeSection, setActiveSection] = useState("inicio");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const menuRef = useRef(null);
    const closeBtnRef = useRef(null);

    const links = [
        { id: "inicio", text: "Inicio" },
        { id: "servicios", text: "Servicios" },
        { id: "experiencia", text: "Proceso" },
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

    /* ── Menú mobile: bloqueo de scroll, Escape y foco al abrir ── */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        if (menuOpen) {
            closeBtnRef.current?.focus();
            const onKeyDown = (e) => { if (e.key === "Escape") setMenuOpen(false); };
            document.addEventListener("keydown", onKeyDown);
            return () => {
                document.removeEventListener("keydown", onKeyDown);
                document.body.style.overflow = "";
            };
        }
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
        <>
        <nav
            ref={navRef}
            className={`enter-nav sticky top-0 z-50 w-full text-ink transition-colors duration-[var(--motion-base)] ${
                scrolled ? "bg-plume-0" : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex h-20 max-w-[110rem] items-center justify-between px-gutter lg:h-24">

                {/* ── Logo (entra por su cuenta, independiente de la barra) ── */}
                <a href="#inicio" onClick={(e) => handleLinkClick(e, "inicio")} aria-label="Ravenmind — ir al inicio">
                    <img src={logo} alt="" width={80} height={80} className="enter-logo h-16 w-auto sm:h-18 lg:h-22" />
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

                {/* ── Disparador del menú mobile: texto editorial, no hamburguesa ── */}
                <button
                    className="group relative pb-1 md:hidden"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Abrir menú"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                >
                    <span className="text-note font-medium uppercase tracking-[0.22em] text-ink">
                        Menú
                    </span>
                    <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-iris transition-transform duration-[var(--motion-quick)] ease-[var(--ease-hold)] group-hover:scale-x-100"
                    />
                </button>

            </div>
        </nav>

        {/* ── Menú mobile: overlay editorial a pantalla completa.
             Vive FUERA del <nav> a propósito: el nav tiene un transform
             residual (.enter-nav) que, de estar dentro, haría que este
             position:fixed se ancle al nav en vez de al viewport. ── */}
            <div
                ref={menuRef}
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Menú principal"
                className={`fixed inset-0 z-[60] flex flex-col bg-plume-0 transition-[opacity,transform] duration-[var(--motion-base)] ease-[var(--ease-hold)] md:hidden ${
                    menuOpen ? "opacity-100 translate-y-0" : "pointer-events-none -translate-y-3 opacity-0"
                }`}
            >
                {/* Cabecera del overlay — refleja la barra */}
                <div className="flex h-20 shrink-0 items-center justify-between px-gutter">
                    <img src={logo} alt="" width={80} height={80} className="h-16 w-auto" />
                    <button
                        ref={closeBtnRef}
                        onClick={() => setMenuOpen(false)}
                        className="group relative pb-1"
                        aria-label="Cerrar menú"
                    >
                        <span className="text-note font-medium uppercase tracking-[0.22em] text-ink">
                            Cerrar
                        </span>
                        <span
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-iris transition-transform duration-[var(--motion-quick)] ease-[var(--ease-hold)] group-hover:scale-x-100"
                        />
                    </button>
                </div>

                {/* Índice de navegación — mismo lenguaje que Servicios:
                    número tabular con revelado a iris (hover/focus), título
                    en display expandida, y un acento iris que se revela al
                    interactuar (no solo cambio de color de texto). */}
                <nav aria-label="Secciones" className="flex flex-1 flex-col justify-center px-gutter">
                    <div className="w-full border-b border-white/10">
                        {links.map((link, i) => {
                            const active = activeSection === link.id;
                            return (
                                <div
                                    key={link.id}
                                    style={{ transitionDelay: menuOpen ? `${120 + i * 60}ms` : "0ms" }}
                                    className={`transition-[opacity,transform] duration-[var(--motion-base)] ease-[var(--ease-settle)] ${
                                        menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                    }`}
                                >
                                    <a
                                        href={`#${link.id}`}
                                        onClick={(e) => handleLinkClick(e, link.id)}
                                        aria-current={active ? "page" : undefined}
                                        className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-t border-white/10 px-2 py-5 transition-colors duration-[var(--motion-quick)] hover:bg-plume-2 focus-visible:bg-plume-2 focus-visible:outline-none"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={`text-caption font-medium tabular-nums transition-colors duration-[var(--motion-quick)] ${
                                                active ? "text-iris" : "text-ink-mute group-hover:text-iris group-focus-visible:text-iris"
                                            }`}
                                        >
                                            0{i + 1}
                                        </span>

                                        <span
                                            className={`type-headline text-title-lg transition-colors duration-[var(--motion-quick)] ${
                                                active ? "text-ink" : "text-ink-mute group-hover:text-ink group-focus-visible:text-ink"
                                            }`}
                                        >
                                            {link.text}
                                        </span>

                                        {/* Acento iris revelado: entra desde la izquierda al
                                            hover/focus; fijo si es la sección activa. */}
                                        <span
                                            aria-hidden="true"
                                            className={`justify-self-end text-title-lg leading-none text-iris transition-[opacity,transform] duration-[var(--motion-base)] ease-[var(--ease-hold)] ${
                                                active
                                                    ? "translate-x-0 opacity-100"
                                                    : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                                            }`}
                                        >
                                            →
                                        </span>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </nav>

            </div>

            {/* ── CTA flotante: vive en el scroll normal, abajo a la derecha.
                 Se oculta mientras el menú está abierto para no solaparse. ── */}
            <a
                href="#contacto"
                aria-hidden={menuOpen}
                tabIndex={menuOpen ? -1 : undefined}
                className={`fixed bottom-6 right-gutter z-40 rounded-pill bg-ink px-6 py-3 text-copy font-semibold text-plume-0 transition-[opacity,transform] duration-[var(--motion-base)] ease-[var(--ease-settle)] hover:bg-iris hover:text-plume-0 md:hidden ${
                    menuOpen ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"
                }`}
            >
                Contáctanos
            </a>
        </>
    );
}
