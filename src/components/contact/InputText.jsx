import { useId } from "react";

export default function InputText({label,type = "text",placeholder,value,onChange,required = false,}) {
    const id = useId();
    return (
        <div>
            <label htmlFor={id} className="block text-small mb-2">
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
                className="w-full bg-transparent border border-muted rounded-full px-4 py-3 text-small outline-none focus:border-blue-mid"
            />
        </div>
    );
}