import { useState, useEffect } from "react";
import logo from "../../assets/logo/white-crow-wb.png";
import useScrollReveal from "../../hooks/useScrollReveal";
import Spline from "@splinetool/react-spline";
import GlowTriangles from "./GlowTriangles";

const tagline = "Somos Ravenmind. Creamos software a medida, interfaces limpias y soluciones inteligentes que impulsan el crecimiento de tu negocio.";

export default function Hero(){
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
        <section id="inicio" className="relative w-full scroll-mt-20 pt-72">

            <div className="hidden w-full h-full absolute inset-0 md:flex items-center justify-end z-1 translate-x-20 -translate-y-30 sm:translate-x-24 lg:translate-x-80 animate-floating-2 top-16">
                <Spline scene="/model_keyboard.splinecode" />
            </div>

            <GlowTriangles />


            <div ref={ref} className={`w-full max-w-5xl lg:max-w-200 min-h-[35vh] sm:min-h-[90vh] flex flex-col items-start justify-start gap-0 relative z-10 mx-auto lg:mx-0 px-6 sm:px-10 lg:px-17 pointer-events-none transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                
                <div className="self-center sm:self-start sm:ml-32 -mb-3 md:-mb-6 pointer-events-none select-none">
                    <img src={logo} alt="Ravenmind - Logo principal" width={128} height={128} className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32"/>
                </div>

                <p className="w-full text-center sm:text-left text-title-mobile sm:text-5xl lg:text-big-title-v tracking-wider text-white font-bold leading-none font-title" aria-hidden="true">BIENVENIDO A:</p>
                <h1 className="w-full text-center sm:text-left text-6xl sm:text-7xl md:text-8xl lg:text-[7.7rem] font-black text-transparent bg-linear-to-r from-white from-30 to-blue-electric bg-clip-text animate-neon leading-none mb-5 font-title tracking-wide wrap-break-word">RAVEN MIND</h1>
                
                <p className="w-full text-center sm:text-left text-body2 sm:text-body font-medium text-white/80 leading-6 lg:max-w-prose" aria-live="polite" aria-atomic="true">
                    {typedText}
                    <span className="animate-pulse" aria-hidden="true">|</span>
                </p>
            </div>

        </section>
    )
}