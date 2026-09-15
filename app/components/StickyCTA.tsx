"use client";

import { Lang } from "../types";

interface StickyCTAProps {
  lang: Lang;
  priceFrom?: number;       // например 60
  onBook?: () => void;      // колбэк, если хотите открыть модалку
  hidden?: boolean;         // скрыть (например, пока меню открыто)
}

export function StickyCTA({
  lang,
  priceFrom = 60,
  onBook,
  hidden = false,
}: StickyCTAProps) {
  const copy = {
    label: { ru: "Частный тур", en: "Private Tour" },
    priceFrom: { ru: "От", en: "From" },
    currency: { ru: "AZN", en: "AZN" },
    cta: { ru: "Забронировать", en: "Book This Walk" },
  };

  // Ссылка на WhatsApp с текстом
  const waHref = `https://wa.me/?text=${encodeURIComponent(
    lang === "ru"
      ? "Здравствуйте! Хочу забронировать экскурсию по Ичери Шехер."
      : "Hello! I'd like to book the Icheri Sheher walking tour."
  )}`;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 transition-transform duration-300 ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      data-purpose="sticky-bottom-action"
    >
      {/* Полупрозрачный фон с блюром */}
      <div className="bg-white/90 backdrop-blur-md border-t border-black/5 shadow-[0_-8px_24px_-8px_rgba(23,28,36,0.08)]">
        {/* Safe-area padding для iPhone (notch/home indicator) */}
        <div className="max-w-md md:max-w-6xl mx-auto px-4 md:px-6 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center justify-between gap-3 md:gap-6">

          {/* === ЛЕВАЯ ЧАСТЬ: ЦЕНА === */}
          <div className="flex flex-col">
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-sans">
              {copy.label[lang]}
            </p>
            <p className="text-base md:text-lg font-serif font-bold text-[#171C24] leading-tight">
              {copy.priceFrom[lang]}{" "}
              <span className="tabular-nums">{priceFrom}</span>{" "}
              <span className="text-sm font-sans font-medium text-[#4A5568]">
                {copy.currency[lang]}
              </span>
            </p>
          </div>

          {/* === ПРАВАЯ ЧАСТЬ: КНОПКА === */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onBook}
            className="flex-1 max-w-[240px] md:max-w-xs py-3 px-4 bg-brand-blue hover:bg-blue-600 active:scale-[0.98] text-white font-semibold text-xs md:text-sm tracking-wide rounded-xl shadow-md text-center transition-all flex items-center justify-center gap-1.5 font-sans"
          >
            <span>{copy.cta[lang]}</span>
            {/* Стрелка → */}
            <svg
              className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}