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

    const handleSubmit = (e) => {
        e.preventDefault();
        const { empresa, correo, idea, requerimientos } = form;
        const subject = encodeURIComponent(`Consulta de ${empresa || "cliente"}`);
        const body = encodeURIComponent(
            `Empresa/Proyecto: ${empresa}\nCorreo: ${correo}\n\nIdea de proyecto:\n${idea}\n\nRequerimientos adicionales:\n${requerimientos}`
        );
        window.open(`mailto:ravenmind.dev@gmail.com?subject=${subject}&body=${body}`, "_blank");
        // No limpiamos el formulario automáticamente: mailto: no confirma que el usuario
        // realmente haya enviado el correo (puede cancelar la ventana del cliente de mail).
    };

    return (
        <section id="contacto" className="relative w-full py-section overflow-hidden scroll-mt-20 bg-plume-0">
            <div ref={ref} className="mx-auto max-w-[110rem] px-gutter">

                {/* ── Cabecera de sección ── */}
                <div
                    className={`mb-12 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 transition-[opacity,transform] duration-[var(--motion-enter)] ease-[var(--ease-settle)] sm:mb-16 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                    <h2 className="type-headline text-headline text-ink">
                        ¿Tienes una idea en mente?
                    </h2>
                    <span className="text-caption uppercase tracking-[0.18em] text-ink-mute">
                        Contacto
                    </span>
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
                        <div className="rounded-soft bg-plume-2 p-6 sm:p-10">
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

                                <div className="flex flex-wrap items-center justify-between gap-4 md:col-span-2">
                                    {/* Honestidad sobre el submit: es un mailto, nada se
                                        envía desde la página */}
                                    <p className="max-w-sm text-caption leading-relaxed text-ink-mute">
                                        El botón abre tu aplicación de correo con el mensaje
                                        ya redactado; nada se envía desde esta página.
                                    </p>
                                    <button
                                        type="submit"
                                        className="group inline-flex cursor-pointer items-center gap-2 rounded-pill bg-ink px-8 py-3 text-copy font-semibold text-plume-0 transition-colors duration-[var(--motion-quick)] hover:bg-iris"
                                    >
                                        Redactar correo
                                        <span aria-hidden="true" className="transition-transform duration-[var(--motion-quick)] group-hover:translate-x-1">
                                            →
                                        </span>
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
