"use client";

import Image from "next/image";
import { Lang } from "../types";

interface BookingCardProps {
  lang: Lang;
}

export function BookingCard({ lang }: BookingCardProps) {
  const copy = {
    certified: { ru: "Сертифицированный гид", en: "Certified Guide" },
    guideName: { ru: "Туры Raccoon по Баку", en: "Raccoon's Baku Tours" },
    guideSub: {
      ru: "Персональные и малогрупповые прогулки по городу",
      en: "Personal & small group city journeys",
    },
    durationLabel: { ru: "Длительность", en: "Duration" },
    durationValue: { ru: "~3 часа", en: "~3 Hours" },
    formatLabel: { ru: "Формат", en: "Format" },
    formatValue: { ru: "Пешком", en: "Walking" },
    languagesLabel: { ru: "Языки", en: "Languages" },
    languagesValue: { ru: "RU / EN", en: "RU / EN" },
    ctaPrimary: {
      ru: "Проверить даты в WhatsApp",
      en: "Check Available Dates on WhatsApp",
    },
    ctaSecondary: {
      ru: "Задать вопросы в Telegram",
      en: "Ask questions on Telegram",
    },
  };

  const waHref = `https://wa.me/?text=${encodeURIComponent(
    lang === "ru"
      ? "Здравствуйте! Хочу узнать свободные даты для экскурсии по Ичери Шехер."
      : "Hello! I'd like to check available dates for the Icheri Sheher walking tour."
  )}`;

  return (
    // Обёртка на всю ширину — только для отступов
    <section className="my-10 md:my-14 px-5">
      {/* Сама карточка — ограничена по ширине и центрирована */}
      <div
        className="max-w-xl mx-auto p-6 md:p-7 rounded-3xl bg-white/90 border border-brand-blue/20 shadow-sm"
        aria-labelledby="booking-card-title"
      >
        {/* === HEADER: АВАТАР + ИМЯ + БЕЙДЖ === */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-brand-blue/30 shadow-md flex-shrink-0">
            <Image
              src="/images/raccoon-guide.png"
              alt={lang === "ru" ? "Лицензированный гид Баку" : "Licensed Baku City Guide"}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-brand-chartreuse text-[#171C24] mb-1">
              {copy.certified[lang]}
            </div>
            <h4
              id="booking-card-title"
              className="font-sans text-lg font-bold text-[#171C24] leading-tight"
            >
              {copy.guideName[lang]}
            </h4>
            <p className="text-xs text-[#4A5568]">
              {copy.guideSub[lang]}
            </p>
          </div>
        </div>

        {/* === МЕТРИКИ === */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-black/[0.06] text-center mb-5">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[#4A5568] font-medium">
              {copy.durationLabel[lang]}
            </p>
            <p className="text-sm font-bold text-[#171C24] mt-0.5">
              {copy.durationValue[lang]}
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[#4A5568] font-medium">
              {copy.formatLabel[lang]}
            </p>
            <p className="text-sm font-bold text-[#171C24] mt-0.5">
              {copy.formatValue[lang]}
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[#4A5568] font-medium">
              {copy.languagesLabel[lang]}
            </p>
            <p className="text-sm font-bold text-[#171C24] mt-0.5">
              {copy.languagesValue[lang]}
            </p>
          </div>
        </div>

        {/* === КНОПКИ === */}
        <div className="flex flex-col gap-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 bg-brand-blue text-white rounded-2xl font-semibold text-center text-sm shadow-md hover:shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <span>{copy.ctaPrimary[lang]}</span>
            <svg
              className="w-4 h-4 fill-current flex-shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
            </svg>
          </a>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-white border border-black/10 text-[#171C24] rounded-2xl font-medium text-center text-xs hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
          >
            <span>{copy.ctaSecondary[lang]}</span>
          </a>
        </div>
      </div>
    </section>
  );
}