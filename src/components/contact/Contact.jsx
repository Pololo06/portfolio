import InputText from "./InputText";
import TextArea from "./TextArea";
import { useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const contactInfo = [
    { label: "Email", value: "ravenmind.dev@gmail.com", href: "mailto:ravenmind.dev@gmail.com" },
    { label: "WhatsApp", value: "+57 317 514 0183", href: "https://wa.me/573175140183?text=Hola, estoy interesado en sus servicios." },
    { label: "Ubicación", value: "Colombia / Remoto worldwide" },
];

export default function Contact() {
    const { ref, isVisible } = useScrollReveal();

    const [form, setForm] = useState({ empresa: "", correo: "", idea: "", requerimientos: "" });
    const onChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

    /* Dos canales de salida con el mismo mensaje: WhatsApp como principal
       (funciona en cualquier dispositivo, sin cliente de correo configurado)
       y mailto como alternativa. El botón pulsado decide el canal. */
    const handleSubmit = (e) => {
        e.preventDefault();
        const channel = e.nativeEvent.submitter?.value || "whatsapp";
        const { empresa, correo, idea, requerimientos } = form;
        const message =
            `Empresa/Proyecto: ${empresa}\nCorreo: ${correo}\n\nIdea de proyecto:\n${idea}` +
            (requerimientos ? `\n\nRequerimientos adicionales:\n${requerimientos}` : "");

        if (channel === "email") {
            const subject = encodeURIComponent(`Consulta de ${empresa || "cliente"}`);
            window.open(`mailto:ravenmind.dev@gmail.com?subject=${subject}&body=${encodeURIComponent(message)}`, "_blank");
        } else {
            const text = encodeURIComponent(`Hola, les escribo desde su web.\n\n${message}`);
            window.open(`https://wa.me/573175140183?text=${text}`, "_blank", "noopener");
        }
        // No limpiamos el formulario automáticamente: ni wa.me ni mailto:
        // confirman que el mensaje realmente se haya enviado.
    };

    return (
        <section id="contacto" className="relative w-full py-section overflow-hidden scroll-mt-20 bg-plume-0">
            <div ref={ref} className="mx-auto max-w-[110rem] px-gutter">

                {/* ── Cabecera de sección: alineada al margen ── */}
                <div
                    className={`mb-12 transition-[opacity,transform] duration-[var(--motion-enter)] ease-[var(--ease-settle)] sm:mb-16 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                    <h2 className="type-headline text-headline text-ink">
                        ¿Tienes una idea en mente?
                    </h2>
                </div>

                <div
                    className={`grid gap-12 transition-[opacity,transform] delay-100 duration-[var(--motion-enter)] ease-[var(--ease-settle)] lg:grid-cols-12 lg:gap-16 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >

                    {/* ── Contacto directo ── */}
                    <div className="flex flex-col gap-10 lg:col-span-5">
                        <p className="max-w-md text-lead leading-snug text-ink-dim">
                            Cuéntanos sobre tu proyecto. Respondemos en minutos,
                            por correo o WhatsApp.
                        </p>

                        <dl className="divide-y divide-white/10">
                            {contactInfo.map(({ label, value, href }) => (
                                <div key={label} className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0">
                                    <dt className="text-caption uppercase tracking-[0.18em] text-ink-mute">
                                        {label}
                                    </dt>
                                    <dd>
                                        {href ? (
                                            <a
                                                href={href}
                                                target={href.startsWith("http") ? "_blank" : undefined}
                                                rel={href.startsWith("http") ? "noreferrer" : undefined}
                                                className="text-copy text-ink transition-colors duration-[var(--motion-quick)] hover:text-iris focus-visible:text-iris"
                                            >
                                                {value}
                                            </a>
                                        ) : (
                                            <span className="text-copy text-ink">{value}</span>
                                        )}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* ── Formulario ── */}
                    <div className="lg:col-span-7">
                        <div className="max-w-2xl rounded-soft bg-plume-2 p-6 sm:p-8">
                            <h3 className="type-headline text-title-lg text-ink">Contacto empresarial</h3>
                            <p className="mb-10 mt-2 text-note text-ink-mute">
                                Cuéntanos los detalles y te responderemos lo antes posible.
                            </p>

                            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <InputText
                                    label="Nombre de empresa o proyecto"
                                    type="text"
                                    placeholder="Ej. RavenMind Solutions"
                                    value={form.empresa}
                                    onChange={onChange("empresa")}
                                    required
                                />

                                <InputText
                                    label="Correo de contacto"
                                    type="email"
                                    placeholder="correo@empresa.com"
                                    value={form.correo}
                                    onChange={onChange("correo")}
                                    required
                                />

                                <TextArea
                                    label="Idea de proyecto"
                                    placeholder="Cuéntanos brevemente qué quieres construir..."
                                    value={form.idea}
                                    onChange={onChange("idea")}
                                    required
                                />

                                <TextArea
                                    label="Requerimientos adicionales"
                                    placeholder="Integraciones, tecnologías preferidas, deadline..."
                                    value={form.requerimientos}
                                    onChange={onChange("requerimientos")}
                                />

                                {/* Mobile: botones a ancho completo apilados.
                                    Desktop: fila con WhatsApp como acción principal. */}
                                <div className="mt-2 flex flex-col gap-3 md:col-span-2 md:mt-0 md:flex-row md:items-center md:gap-4">
                                    <button
                                        type="submit"
                                        name="channel"
                                        value="whatsapp"
                                        className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-pill bg-ink px-8 py-3.5 text-copy font-semibold text-plume-0 transition-colors duration-[var(--motion-quick)] hover:bg-iris md:w-auto md:py-3"
                                    >
                                        Enviar por WhatsApp
                                        <span aria-hidden="true" className="transition-transform duration-[var(--motion-quick)] group-hover:translate-x-1">
                                            →
                                        </span>
                                    </button>
                                    <button
                                        type="submit"
                                        name="channel"
                                        value="email"
                                        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-pill border border-white/20 px-8 py-3.5 text-copy font-semibold text-ink transition-colors duration-[var(--motion-quick)] hover:border-iris hover:text-iris md:w-auto md:py-3"
                                    >
                                        Enviar por correo
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
