import { useState, useEffect } from "react";
import logo from "../../assets/logo/white-crow-wb.png";
import useScrollReveal from "../../hooks/useScrollReveal";

const tagline = "Somos Ravenmind. Creamos software a medida, interfaces limpias y soluciones inteligentes que impulsan el crecimiento de tu negocio.";

export default function Hero(){

    const [isLogoHovered, setIsLogoHovered] = useState(false);
    const [typedText, setTypedText] = useState("");
    const {ref, isVisible} = useScrollReveal({threshold: 0.2});

    useEffect(() => {
        if (!isVisible) return;
        const timer = setInterval(() => {
            setTypedText(prev => {
                if (prev.length >= tagline.length) { clearInterval(timer); return prev; }
                return tagline.slice(0, prev.length + 1);
            });
        }, 35);
        return () => {
            clearInterval(timer);
            setTypedText("");
        };
    }, [isVisible]);

    return(
        <section id="inicio" className="relative w-full overflow-hidden scroll-mt-20 py-section bg-plume-0">

            <div ref={ref} className={`w-full max-w-5xl lg:max-w-none min-h-[35vh] sm:min-h-[90vh] flex flex-col items-start justify-start gap-0 relative mx-auto lg:mx-0 px-6 sm:px-10 lg:px-17 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                
                <div
                   onMouseEnter={()=>setIsLogoHovered(true)}
                    onMouseLeave={()=>setIsLogoHovered(false)}
                    className="self-center sm:self-start sm:ml-32 -mb-3 md:-mb-6 "
                >
                    <img src={logo} alt="Ravenmind - Logo principal" width={128} height={128} className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32"/>
                </div>
                <p className="w-full text-center sm:text-left text-title-mobile sm:text-5xl lg:text-big-title-v tracking-wider text-white font-bold leading-none font-title" aria-hidden="true">BIENVENIDO A:</p>
                <h1 className="w-full text-center sm:text-left text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-transparent bg-linear-to-r from-white from-30 to-blue-electric bg-clip-text animate-neon leading-none mb-5 font-title tracking-wide break-words">RAVEN MIND</h1>
                
                <p
                    className="w-full text-center sm:text-left text-body2 sm:text-subtitle font-medium text-white/80 leading-6 lg:max-w-prose"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {typedText}
                    <span className="animate-pulse" aria-hidden="true">|</span>
                </p>
            </div>

            <div className="hidden lg:block absolute -top-20 right-0 w-auto h-auto pointer-events-none">
                <img src={logo} alt="" width={896} height={896} className={`w-[56rem] h-auto ${isLogoHovered?'opacity-10 translate-x-1/3':'opacity-0 translate-x-1/3'} transition-all duration-700`} />
            </div>
        </section>
    )
}