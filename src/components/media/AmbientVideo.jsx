import { useEffect, useRef, useState } from "react";

/* Video ambiente del sistema Pluma Negra (PLUMA-NEGRA.md, regla 4):
   mudo, en loop, sin controles, sin audio. Se reproduce únicamente
   mientras está en viewport; bajo prefers-reduced-motion nunca arranca
   (queda el poster). Si el archivo aún no existe (los assets se graban
   aparte), el componente se desmonta y el layout usa su fallback. */
export default function AmbientVideo({ src, poster, className = "", onMissing }) {
    const videoRef = useRef(null);
    const [missing, setMissing] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || missing) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        video.muted = true;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, [missing]);

    if (missing) return null;

    return (
        <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => {
                setMissing(true);
                onMissing?.();
            }}
            className={className}
        />
    );
}
