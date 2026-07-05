import { useEffect, useRef, useState } from "react";

/**
 * Reveal de entrada del sistema Pluma Negra.
 *
 * Contrato (ver src/shared/PLUMA-NEGRA.md, regla 4):
 * - Se dispara UNA sola vez: al entrar al viewport el elemento queda
 *   visible para siempre; volver a scrollear no re-dispara nada.
 * - Bajo prefers-reduced-motion el contenido nace visible: ni observer
 *   ni delay ni transición.
 */
export default function useScrollReveal({ threshold = 0.15, delay = 0 } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (isVisible) return;

    const element = ref.current;
    if (!element) return;

    let timeoutId = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (delay > 0) {
          timeoutId = setTimeout(() => setIsVisible(true), delay);
        } else {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay, threshold, isVisible]);

  return { ref, isVisible };
}
