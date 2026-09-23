"use client";

import Image from "next/image";
import { Lang } from "../types";

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  const copy = {
    brandTag: { ru: "Прогулки по Баку", en: "Baku Walks" },
    brandSub: { ru: "с Raccoon", en: "with Raccoon" },
    description: {
      ru: "Неторопливые исторические прогулки и тёплые истории Шёлкового пути среди песчаниковых переулков Баку.",
      en: "Slow-paced historical walks and warm Silk Road storytelling across the sandstone alleys of Baku.",
    },
    badge: {
      ru: "Лицензированный рассказчик Старого города",
      en: "Licensed Old City Storyteller",
    },
    toursTitle: { ru: "Прогулки и туры", en: "Tours & Walks" },
    heritageTitle: { ru: "Гид и наследие", en: "Guide & Heritage" },
    contactTitle: { ru: "Контакты и бронирование", en: "Contact & Booking" },
    copyright: {
      ru: "© 2026 Baku Walks with Raccoon. Все права защищены.",
      en: "© 2026 Baku Walks with Raccoon. All rights reserved.",
    },
    tagline: {
      ru: "Ручные прогулки по Ичери Шехер, Баку, Азербайджан.",
      en: "Handcrafted walking experiences in Icheri Sheher, Baku, Azerbaijan.",
    },
  };

  const tours = [
    { label: { ru: "Ичери Шехер", en: "Icheri Sheher Heritage" }, href: "#hero" },
    { label: { ru: "Современный бульвар", en: "Modern Boulevard" }, href: "#recommended" },
    { label: { ru: "Гобустан", en: "Gobustan Reserve" }, href: "#recommended" },
    { label: { ru: "Ночные тайны", en: "Night Secrets" }, href: "#recommended" },
  ];

  const heritage = [
    { label: { ru: "Специалист ЮНЕСКО", en: "UNESCO Specialist" }, href: "#booking" },
    { label: { ru: "Встреча: Гоша Гала", en: "Meeting: Gosha Gala" }, href: "#practical" },
    { label: { ru: "Ритуалы чайханы", en: "Chaykhana Rituals" }, href: "#themes" },
    { label: { ru: "Одежда и обувь", en: "Dress & Shoes Guide" }, href: "#practical" },
  ];

  const contacts = [
    {
      label: "WhatsApp Chat",
      href: "https://wa.me/994515025160/?text=Hi!",
      dotColor: "bg-[#25D366]",
      external: true,
    },
    {
      label: "Telegram Group",
      href: "https://t.me/+994515025160",
      dotColor: "bg-brand-blue",
      external: true,
    },
    {
      label: { ru: "Email Inquiry", en: "Email Inquiry" },
      href: "mailto:guide@bakuwalks.az",
      dotColor: "bg-amber-500",
      external: false,
    },
    {
      label: { ru: "@bakuwalks", en: "@bakuwalks" },
      href: "https://instagram.com/",
      dotColor: "bg-[#E1306C]",
      external: true,
    },
  ];

  return (
    <footer className="mt-8 bg-white/70 border-t border-black/[0.06] rounded-t-3xl backdrop-blur-sm font-sans">
      {/*
        pb-32 md:pb-40 — компенсация StickyCTA снизу.
        Отступ идёт в футере, а не в main — чтобы не давить на Hero.
      */}
      <div className="max-w-md md:max-w-5xl mx-auto px-6 md:px-8 pt-10 md:pt-14 pb-32 md:pb-40">
        {/* === ОСНОВНАЯ СЕТКА === */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
          {/* === БРЕНД === */}
          <div className="md:col-span-5 md:border-r md:border-black/[0.04] md:pr-8 flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden shadow-sm ring-2 ring-brand-blue/30 flex-shrink-0">
                <Image
                  src="/images/raccoon-guide.png"
                  alt="Baku Mascot Raccoon Guide"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block text-xs tracking-widest font-semibold uppercase text-brand-blue leading-none">
                  {copy.brandTag[lang]}
                </span>
                <span className="font-serif italic text-sm text-[#4A5568] leading-none">
                  {copy.brandSub[lang]}
                </span>
              </div>
            </div>

            <p className="font-serif text-sm md:text-base text-[#4A5568]/85 leading-relaxed md:max-w-sm">
              {copy.description[lang]}
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D4E965]/25 border border-[#D4E965]/50 text-[11px] font-semibold text-[#171C24] max-w-full">
              <span className="text-xs flex-shrink-0">📜</span>
              <span className="truncate">{copy.badge[lang]}</span>
            </div>
          </div>

          {/* === ССЫЛКИ: 2 КОЛОНКИ === */}
          <div className="grid grid-cols-2 gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-black/[0.04] text-xs md:col-span-4">
            <div className="space-y-2.5">
              <p className="font-mono font-bold tracking-[0.15em] text-[#171C24] uppercase text-[10px]">
                {copy.toursTitle[lang]}
              </p>
              <ul className="space-y-2 text-[#4A5568]">
                {tours.map((t, i) => (
                  <li key={i}>
                    <a
                      href={t.href}
                      className="hover:text-brand-blue transition-colors block"
                    >
                      {t.label[lang]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5">
              <p className="font-mono font-bold tracking-[0.15em] text-[#171C24] uppercase text-[10px]">
                {copy.heritageTitle[lang]}
              </p>
              <ul className="space-y-2 text-[#4A5568]">
                {heritage.map((h, i) => (
                  <li key={i}>
                    <a
                      href={h.href}
                      className="hover:text-brand-blue transition-colors block"
                    >
                      {h.label[lang]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* === КОНТАКТЫ === */}
          <div className="pt-3 md:pt-0 border-t md:border-t-0 border-black/[0.04] md:col-span-3">
            <p className="font-mono font-bold tracking-[0.15em] text-[#171C24] uppercase text-[10px] mb-3">
              {copy.contactTitle[lang]}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2 text-xs">
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white border border-black/5 hover:border-brand-blue/40 hover:bg-brand-blue/[0.02] text-[#171C24] font-medium shadow-sm transition-all"
                >
                  <span
                    className={`${c.dotColor} w-2 h-2 rounded-full flex-shrink-0`}
                  />
                  <span className="truncate">
                    {typeof c.label === "string" ? c.label : c.label[lang]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* === КОПИРАЙТ === */}
        <div className="mt-8 md:mt-12 pt-5 md:pt-6 border-t border-black/[0.05] text-[11px] text-[#4A5568]/60 leading-relaxed flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 text-center md:text-left">
          <p>{copy.copyright[lang]}</p>
          <p className="font-serif italic">{copy.tagline[lang]}</p>
        </div>
      </div>
    </footer>
  );
}