import { useEffect, useRef, useState } from "react";

export default function useScrollReveal({
  threshold = 0.15,
  delay = 0,
  // Viewport del observer. Un margen negativo lo achica, así el estado
  // "fuera" se dispara mientras el elemento aún está visible (útil para que
  // las animaciones de salida se vean en pantalla y no una vez ya fuera).
  rootMargin = "0px 0px -40px 0px",
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  // Latch: true tras la primera entrada; permite animar la salida.
  const [hasRevealed, setHasRevealed] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          if (delay > 0) {
            timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
        } else {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [delay, threshold, rootMargin]);

  return { ref, isVisible, hasRevealed };
}
