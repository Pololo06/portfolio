import ContactMethod from "./ContactMethod";
import InputText from "./InputText";
import TextArea from "./TextArea";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

function InfoRow({ icon, label, children }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-raven/20 flex items-center justify-center text-blue-electric shrink-0">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div>
                <span className="block text-small text-text-muted mb-0.5">{label}</span>
                {children}
            </div>
        </div>
    );
}

export default function Contact() {
    const [isVisibleW, setIsVisibleW] = useState(false);
    const [isVisibleM, setIsVisibleM] = useState(false);
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
        // No limpiamos el form: mailto no confirma envío (el usuario puede cancelar).
    };

    return (
        <section id="contacto" className="section-fullscreen relative bg-black text-white">

            {/* ── Fondos decorativos ── */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -top-40 -left-40 w-150 h-150 rounded-full opacity-10 blur-3xl bg-blue-raven" />
                <div className="absolute -bottom-40 -right-40 w-125 h-125 rounded-full opacity-10 blur-3xl bg-blue-electric" />

                <div className={`absolute top-22 left-4 transition-opacity duration-700 ${isVisibleW ? "opacity-[0.06]" : "opacity-0"}`}>
                    <FontAwesomeIcon icon={faWhatsapp} className="text-[14rem] sm:text-[20rem] lg:text-[28rem]" />
                </div>
                <div className={`absolute top-22 right-4 transition-opacity duration-700 ${isVisibleM ? "opacity-[0.06]" : "opacity-0"}`}>
                    <FontAwesomeIcon icon={faEnvelope} className="text-[14rem] sm:text-[20rem] lg:text-[28rem]" />
                </div>
            </div>

            {/* ── Contenido ── */}
            <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-px w-12 bg-blue-electric opacity-50" />
                    <span className="text-small font-semibold tracking-widest uppercase text-blue-electric">
                        Hablemos
                    </span>
                    <div className="h-px w-12 bg-blue-electric opacity-50" />
                </div>

                <h2 className="text-title-mobile lg:text-big-title-v font-title tracking-wide font-bold text-center font-display leading-none mb-4">
                    ¿Tienes{" "}
                    <span className="text-blue-electric">una idea</span>
                    <br />
                    en mente?
                </h2>

                <p className="text-body text-center text-text-muted leading-relaxed max-w-2xl mx-auto mb-vfit-md">
                    Cuéntanos sobre tu proyecto. Estamos listos para diseñar y desarrollar
                    la plataforma web que tu empresa necesita para crecer.
                </p>

                <div className={`grid grid-cols-1 lg:grid-cols-5 gap-vfit-md lg:gap-14 mt-vfit-xs transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

                    {/* ── Info de contacto ── */}
                    <div className="lg:col-span-2 flex flex-col gap-vfit-md">
                        <div>
                            <h3 className="text-page-title font-semibold text-white-soft mb-6 sm:mb-4 text-center sm:text-left">Contacto directo</h3>
                            <p className="text-body2 text-white/60 leading-relaxed text-center sm:text-justify">
                                Prefieres hablar directamente? Escríbenos por WhatsApp o envíanos un correo. Respondemos en minutos.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-16">
                                <ContactMethod
                                title="WhatsApp"
                                icon={faWhatsapp}
                                href="https://wa.me/573175140183?text=Hola, estoy interesado en sus servicios."
                                setState={setIsVisibleW}
                            />
                            <ContactMethod
                                title="Mail"
                                icon={faEnvelope}
                                href="mailto:ravenmind.dev@gmail.com?subject=Consulta desde el Portafolio.&body=Hola, estoy interesado en sus servicios."
                                setState={setIsVisibleM}
                            />
                            </div>
                        </div>

                        <div className="rounded-2xl bg-black-soft/75 backdrop-blur-md border border-muted/20 p-6 space-y-4">
                            <InfoRow icon={faEnvelope} label="Email">
                                <a href="mailto:ravenmind.dev@gmail.com" className="text-white hover:text-blue-electric transition-colors">ravenmind.dev@gmail.com</a>
                            </InfoRow>
                            <InfoRow icon={faWhatsapp} label="Teléfono">
                                <a href="https://wa.me/573175140183" className="text-white hover:text-blue-electric transition-colors">+57 317 514 0183</a>
                            </InfoRow>
                            <InfoRow icon={faLocationDot} label="Ubicación">
                                <span className="text-white">Colombia / Remoto worldwide</span>
                            </InfoRow>
                        </div>
                    </div>

                    {/* ── Formulario ── */}
                    <div className="lg:col-span-3">
                        <div className="relative rounded-2xl bg-black-soft/75 backdrop-blur-md border border-muted/20 p-6 sm:p-8 md:p-10 overflow-hidden"
                            style={{ boxShadow: "0 0 60px rgba(0,52,158,0.12), inset 0 1px 0 rgba(255,255,255,0.04)" }}
                        >
                            <div className="absolute top-0 left-10 right-10 h-px bg-blue-electric" />

                            <h3 className="text-page-title font-semibold text-white-soft mb-4">Contacto empresarial</h3>
                            <p className="text-body2 text-text-muted mb-vfit-sm">Cuéntanos los detalles y te responderemos lo antes posible.</p>

                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-vfit-sm">
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

                                <div className="md:col-span-2 flex justify-center">
                                    <button
                                        type="submit"
                                        className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-blue-raven hover:bg-blue-electric px-5 sm:px-10 py-vfit-xs rounded-full text-body2 sm:text-body font-semibold transition-all duration-300 hover:-translate-y-0.5 mx-auto"
                                        style={{ boxShadow: "0 4px 24px rgba(0,163,255,0.2)" }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faPaperPlane}
                                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                        Enviar solicitud
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