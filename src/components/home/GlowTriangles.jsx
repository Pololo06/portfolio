// Capa 1: Luz ambiental (tus blobs actuales, un poco más sutiles)
const circles = [
    { top: "0%",   right: "15%", size: 380, delay: "0s",   duration: "6s",   color: "0, 163, 255" },
    { top: "12%",  right: "-2%", size: 420, delay: "1.8s", duration: "7.5s", color: "0, 52, 158" },
    { top: "-8%",  right: "34%", size: 300, delay: "3.2s", duration: "6.8s", color: "0, 122, 215" },
];

export default function GlowTriangles() {
    return (
        <div className="absolute inset-0 pointer-events-none select-none z-0">

            <div
                className="absolute rounded-full animate-spotlight-pulse"
                style={{
                    top: "8%",
                    right: "18%",
                    width: 650,
                    height: 650,
                    background:
                        "radial-gradient(circle, rgba(0,163,255,0.55) 0%, rgba(0,110,255,0.28) 35%, rgba(0,80,200,0) 65%)",
                    filter: "blur(70px)",
                }}
            />
            <div
                className="absolute rounded-full animate-platform-glow"
                style={{
                    bottom: "15%",
                    right: "20%",
                    width: 480,
                    height: 140,
                    background:
                        "radial-gradient(ellipse, rgba(20,140,255,0.65) 0%, rgba(20,140,255,0.3) 40%, rgba(20,140,255,0) 70%)",
                    filter: "blur(35px)",
                    transform: "scaleY(0.6)",
                }}
            />

            {circles.map((c, i) => (
                <div
                    key={i}
                    className="absolute rounded-full animate-blob-glow opacity-60"
                    style={{
                        top: c.top,
                        right: c.right,
                        width: c.size,
                        height: c.size,
                        background: `radial-gradient(circle, rgba(${c.color}, 0.5) 0%, rgba(${c.color}, 0.3) 25%, rgba(${c.color}, 0) 55%)`,
                        filter: "blur(50px)",
                        animationDelay: c.delay,
                        animationDuration: c.duration,
                    }}
                />
            ))}
        </div>
    );
}