import logo from "../../assets/logo/alternative-2-wb.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 w-full bg-plume-2">
            <div className="max-w-6xl mx-auto px-6 py-14 sm:py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <a href="#inicio" className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <img src={logo} alt="Ravenmind - Footer" className="h-12 w-auto" />
                    </a>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-small text-muted">
                        <a href="#inicio" className="hover:text-white transition-colors duration-200">Inicio</a>
                        <a href="#servicios" className="hover:text-white transition-colors duration-200">Servicios</a>
                        <a href="#nosotros" className="hover:text-white transition-colors duration-200">Nosotros</a>
                        <a href="#contacto" className="hover:text-white transition-colors duration-200">Contacto</a>
                    </div>

                    {/* Copyright */}
                    <p className="text-tiny text-muted/60">
                        &copy; {currentYear} Ravenmind. Todos los derechos reservados.
                    </p>
                </div>

                <div className="mt-6 pt-6 border-t border-muted/10 flex flex-col md:flex-row items-center justify-center gap-6 text-tiny text-muted/50">
                    <a href="#" className="hover:text-muted transition-colors duration-200">Política de privacidad</a>
                    <a href="#" className="hover:text-muted transition-colors duration-200">Términos de uso</a>
                </div>
            </div>
        </footer>
    );
}
