import { useId } from "react";

export default function InputText({ label, type = "text", placeholder, value, onChange, required = false }) {
    const id = useId();
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-caption uppercase tracking-[0.18em] text-ink-mute">
                {label}{required && <span aria-hidden="true"> *</span>}
            </label>

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                aria-required={required}
                className="w-full rounded-none border-0 border-b border-white/15 bg-transparent px-0 py-3 text-copy text-ink outline-none transition-colors duration-[var(--motion-quick)] placeholder:text-ink-mute/60 focus:border-iris user-invalid:border-alert"
            />
        </div>
    );
}
