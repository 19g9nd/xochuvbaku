"use client";

import Image from "next/image";
import { Lang, BookingData } from "../types";

interface BookingCardProps {
  lang: Lang;
  data: BookingData;
}

export function BookingCard({ lang, data }: BookingCardProps) {
  const waHref = `https://wa.me/?text=${encodeURIComponent(
    lang === "ru"
      ? "Здравствуйте! Хочу узнать свободные даты."
      : "Hello! I'd like to check available dates."
  )}`;

  return (
    <section className="my-10 md:my-14 px-5">
      <div className="max-w-md mx-auto p-7 md:p-8 rounded-3xl bg-white/90 border border-brand-blue/20 shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-brand-blue/30 shadow-md flex-shrink-0">
            <Image
              src="/images/raccoon-guide.png"
              alt={lang === "ru" ? "Гид" : "Guide"}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-brand-chartreuse text-[#171C24] mb-1">
              {data.certified[lang]}
            </div>
            <h4 className="font-serif text-lg font-bold text-[#171C24] leading-tight">
              {data.guideName[lang]}
            </h4>
            <p className="text-xs text-[#4A5568]">{data.guideSub[lang]}</p>
          </div>
        </div>

        {/* Метрики */}
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-black/[0.06] text-center mb-6">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[#4A5568] font-medium">
              {data.durationLabel[lang]}
            </p>
            <p className="text-sm font-bold text-[#171C24] mt-0.5">
              {data.durationValue[lang]}
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[#4A5568] font-medium">
              {data.formatLabel[lang]}
            </p>
            <p className="text-sm font-bold text-[#171C24] mt-0.5">
              {data.formatValue[lang]}
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[#4A5568] font-medium">
              {data.languagesLabel[lang]}
            </p>
            <p className="text-sm font-bold text-[#171C24] mt-0.5">
              {data.languagesValue[lang]}
            </p>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex flex-col gap-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 bg-brand-blue text-white rounded-2xl font-semibold text-center text-sm shadow-md hover:shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <span>{data.ctaPrimary[lang]}</span>
            <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
            </svg>
          </a>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-white border border-black/10 text-[#171C24] rounded-2xl font-medium text-center text-xs hover:bg-slate-50 transition-all"
          >
            {data.ctaSecondary[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}