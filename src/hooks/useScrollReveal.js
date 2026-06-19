import { useEffect, useRef, useState } from "react";

export default function useScrollReveal({ threshold = 0.15, delay = 0 } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [delay]);

  return { ref, isVisible };
}
