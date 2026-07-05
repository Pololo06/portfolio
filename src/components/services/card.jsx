import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useId, useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Card({ title, description, bigDescription, icon, index = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isVisible } = useScrollReveal({ delay: index * 150 });
  const panelId = useId();

  return (
    <div
      ref={ref}
      className={`
        w-full rounded-card bg-black-soft/75 backdrop-blur-md
        border-2 border-transparent
        transition-[opacity,transform,border-color,box-shadow] duration-500 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${isOpen ? "border-blue-electric shadow-[0_0_30px_rgba(0,163,255,0.12)]" : "hover:border-blue-raven hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(0,52,158,0.2)]"}
      `}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-3 sm:gap-6 px-4 py-5 sm:px-8 sm:py-7 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-electric rounded-card"
      >

        <div className={`shrink-0 flex items-center justify-center size-11 sm:size-14 rounded-2xl transition-colors duration-300 ${isOpen ? "bg-blue-electric/15" : "bg-blue-raven/20"}`}>
          <FontAwesomeIcon
            icon={icon}
            className={`transition-colors duration-300 ${isOpen ? "text-blue-electric" : "text-white"}`}
            style={{ fontSize: "1.3rem" }}
          />
        </div>

        {/* Texto */}
        <div className="flex-1 min-w-0 border-l-4 border-blue-raven pl-3 sm:pl-6">
          <span className="text-white text-body sm:text-page-title font-bold mb-1" role="heading" aria-level="2">{title}</span>
          <p className="text-text-muted text-small sm:text-body leading-snug">{description}</p>
        </div>

        {/* Chevron */}
        <div className={`shrink-0 transition-transform duration-300 text-text-muted ${isOpen ? "rotate-180 text-blue-electric" : ""}`}>
          <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: "1rem" }} />
        </div>

      </button>

      {/* Descripción expandible */}
      <div
        id={panelId}
        role="region"
        aria-hidden={!isOpen}
        className={`overflow-hidden transition-all duration-[400ms] ease-in-out ${isOpen ? "max-h-96 sm:max-h-72" : "max-h-0"}`}
      >
        <div className="px-4 pb-5 sm:px-8 sm:pb-7 sm:pl-[calc(2rem+3.5rem+1.5rem+1px)]">
          <div className="h-px bg-muted/40 mb-5" />
          <p className="text-white-soft text-small sm:text-body leading-relaxed">
            {bigDescription}
          </p>
        </div>
      </div>

    </div>
  );
}