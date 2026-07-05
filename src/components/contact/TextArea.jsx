import { useId } from "react";

export default function TextArea({label,placeholder,value,onChange,required = false,}) {
    const id = useId();
    return (
        <div>
            <label htmlFor={id} className="block text-small mb-2">
                {label}{required && <span aria-hidden="true"> *</span>}
            </label>

            <textarea
                id={id}
                rows={5}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                aria-required={required}
                className="w-full bg-transparent border border-muted rounded-2xl px-4 py-3 resize-none text-small outline-none focus:border-blue-mid"
            />
        </div>
    );
}