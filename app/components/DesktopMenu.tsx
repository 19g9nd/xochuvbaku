"use client";

import { Lang } from "../types";
import { BrandIcon, type BrandIconName } from "./BrandIcon";

type MenuItem = {
  href: string;
  icon: BrandIconName;
  label: Record<Lang, string>;
  meta?: Record<Lang, string>;
  active?: boolean;
};

interface DesktopMenuProps {
  lang: Lang;
  isOpen: boolean;
  onClose: () => void;
}

export function DesktopMenu({ lang, isOpen, onClose }: DesktopMenuProps) {
  const routes: MenuItem[] = [
    {
      href: "#hero",
      icon: "castle",
      label: { ru: "Ичери Шехер", en: "Icheri Sheher" },
      meta: { ru: "2.5ч · Пешком", en: "2.5h · Walking" },
      active: true,
    },
    {
      href: "#recommended",
      icon: "waves",
      label: { ru: "Современный Баку и закат", en: "Modern Baku & Sunset" },
      meta: { ru: "2.5ч · 50₼", en: "2.5h · 50 AZN" },
    },
    {
      href: "#recommended",
      icon: "volcano",
      label: { ru: "Гобустан и грязевые вулканы", en: "Gobustan & Mud Volcanoes" },
      meta: { ru: "5ч · 110₼", en: "5h · 110 AZN" },
    },
    {
      href: "#recommended",
      icon: "moon",
      label: { ru: "Ночная иллюминация Баку", en: "Baku Night Illumination" },
      meta: { ru: "2ч · 45₼", en: "2h · 45 AZN" },
    },
  ];

  const explore: MenuItem[] = [
    {
      href: "#booking",
      icon: "raccoon",
      label: { ru: "О гиде Raccoon", en: "About Raccoon Guide" },
    },
    {
      href: "#practical",
      icon: "clipboard",
      label: { ru: "Практика и точки встречи", en: "Practical Info & Meeting Points" },
    },
    {
      href: "#themes",
      icon: "coffee",
      label: { ru: "Культура и чайхана", en: "Chaykhana Culture" },
    },
    {
      href: "#recommended",
      icon: "sparkles",
      label: { ru: "Другие прогулки", en: "More Walks" },
    },
  ];

  const contacts = [
    { label: "WhatsApp", href: "https://wa.me/?text=Hi!", dot: "bg-[#25D366]" },
    { label: "Telegram", href: "https://t.me/", dot: "bg-brand-blue" },
    { label: "Email", href: "mailto:guide@bakuwalks.az", dot: "bg-amber-500" },
    { label: "@bakuwalks", href: "https://instagram.com/", dot: "bg-[#E1306C]" },
  ];

  return (
    <>
      {/* === ЗАТЕМНЕНИЕ (клик закрывает меню) === */}
      <div
        onClick={onClose}
        className={`hidden md:block fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* === ПАНЕЛЬ МЕНЮ (выезжает сверху под header) === */}
      <div
        className={`hidden md:block fixed top-[64px] left-0 right-0 z-30 bg-white border-b border-black/[0.06] shadow-xl transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        role="dialog"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 py-10">
          {/* === 3 КОЛОНКИ === */}
          <div className="grid grid-cols-12 gap-10">

            {/* === КОЛОНКА 1: WALKING ROUTES (6 колонок) === */}
            <div className="col-span-6">
              <p className="font-mono font-bold tracking-[0.2em] text-slate-400 uppercase text-[10px] mb-5">
                {lang === "ru" ? "Пешеходные маршруты" : "Walking Routes"}
              </p>
              <div className="grid grid-cols-1 gap-2">
                {routes.map((route, i) => (
                  <a
                    key={i}
                    href={route.href}
                    onClick={onClose}
                    className={`group flex items-start gap-4 p-4 rounded-2xl transition-all ${
                      route.active
                        ? "bg-brand-blue/5 border border-brand-blue/20"
                        : "hover:bg-black/[0.02] border border-transparent hover:border-black/[0.06]"
                    }`}
                  >
                    {/* Иконка */}
                    <span
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        route.active
                          ? "bg-brand-blue/10"
                          : "bg-[#F8F9FF] group-hover:bg-white"
                      }`}
                    >
                      <BrandIcon name={route.icon} className="w-6 h-6 text-brand-blue" />
                    </span>

                    {/* Контент */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className={`font-semibold text-base leading-tight ${
                            route.active ? "text-brand-blue" : "text-[#171C24]"
                          }`}
                        >
                          {route.label[lang]}
                        </h3>
                        {route.active && (
                          <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-brand-blue text-white">
                            {lang === "ru" ? "Сейчас" : "Now"}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#4A5568]/70 font-mono">
                        {route.meta[lang]}
                      </p>
                    </div>

                    {/* Стрелка */}
                    <span className="text-[#4A5568]/30 group-hover:text-brand-blue group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* === КОЛОНКА 2: EXPLORE (3 колонки) === */}
            <div className="col-span-3">
              <p className="font-mono font-bold tracking-[0.2em] text-slate-400 uppercase text-[10px] mb-5">
                {lang === "ru" ? "Гид и информация" : "Explore & Guide"}
              </p>
              <ul className="space-y-1">
                {explore.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#171C24] hover:bg-black/[0.03] font-medium text-sm transition-all group"
                    >
                      <BrandIcon name={item.icon} className="w-[18px] h-[18px] text-brand-blue/80 group-hover:text-brand-blue transition-colors" />
                      <span>{item.label[lang]}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* === КОЛОНКА 3: CONTACT (3 колонки) === */}
            <div className="col-span-3">
              <p className="font-mono font-bold tracking-[0.2em] text-slate-400 uppercase text-[10px] mb-5">
                {lang === "ru" ? "Связаться" : "Contact"}
              </p>
              <div className="space-y-2">
                {contacts.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white border border-black/5 hover:border-brand-blue/40 hover:bg-brand-blue/[0.02] text-[#171C24] font-medium text-sm shadow-sm transition-all"
                  >
                    <span className={`${c.dot} w-2 h-2 rounded-full flex-shrink-0`} />
                    <span className="truncate">{c.label}</span>
                  </a>
                ))}
              </div>

              {/* CTA в меню */}
              <a
                href="https://wa.me/?text=Hi!%20I%20would%20like%20to%20book%20a%20tour."
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="mt-5 w-full py-3 px-4 bg-brand-blue hover:bg-blue-600 text-white rounded-xl font-semibold text-sm text-center shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>{lang === "ru" ? "Забронировать" : "Book a Tour"}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}