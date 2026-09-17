"use client";

import Image from "next/image";
import { Lang } from "../types";
import { BrandIcon, type BrandIconName } from "./BrandIcon";

type DrawerItem = {
  href: string;
  icon: BrandIconName;
  label: Record<Lang, string>;
  badge?: Record<Lang, string>;
  meta?: string;
  active?: boolean;
};

interface MobileDrawerProps {
  lang: Lang;
  isOpen: boolean;
  onClose: () => void;
  onLangChange: (lang: Lang) => void;
}

export function MobileDrawer({
  lang,
  isOpen,
  onClose,
  onLangChange,
}: MobileDrawerProps) {
  // Ссылки навигации
  const routes: DrawerItem[] = [
    {
      href: "#hero",
      icon: "castle",
      label: { ru: "Ичери Шехер", en: "Icheri Sheher" },
      badge: { ru: "Текущий", en: "Current" },
      active: true,
    },
    {
      href: "#recommended",
      icon: "waves",
      label: { ru: "Современный Баку и закат", en: "Modern Baku & Sunset" },
      meta: "2.5h",
    },
    {
      href: "#recommended",
      icon: "volcano",
      label: { ru: "Гобустан и грязевые вулканы", en: "Gobustan & Mud Volcanoes" },
      meta: "5h",
    },
    {
      href: "#recommended",
      icon: "moon",
      label: { ru: "Ночная иллюминация Баку", en: "Baku Night Illumination" },
      meta: "2h",
    },
  ];

  const explore: DrawerItem[] = [
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
      label: { ru: "Культура и чайхана", en: "Culture & Chaykhana Secrets" },
    },
  ];

  return (
    <>
      {/* === ЗАТЕМНЕНИЕ ФОНА === */}
      <div
        onClick={onClose}
        className={`md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* === ПАНЕЛЬ МЕНЮ === */}
      <aside
        className={`md:hidden fixed top-0 right-0  bottom-0 z-50 w-[86%] scrollbar-none max-w-sm bg-white shadow-2xl flex flex-col overflow-y-auto transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Navigation Menu"
      >
        {/* === ШАПКА ПАНЕЛИ === */}
        <div className="p-5 border-b border-black/[0.06] flex items-center justify-between bg-[#F8F9FF]">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm ring-2 ring-brand-blue/30 shrink-0">
              <Image
                src="/images/raccoon-guide.png"
                alt="Baku Mascot Raccoon Guide"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="block text-xs tracking-widest font-semibold uppercase text-brand-blue leading-none">
                Baku Walks
              </span>
              <span className="font-display italic text-xs text-[#4A5568] leading-none">
                with Raccoon
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-9 h-9 rounded-full bg-black/[0.04] active:bg-black/10 flex items-center justify-center text-[#4A5568] hover:text-[#171C24] transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* === ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА === */}
        <div className="px-5 py-3.5 bg-brand-blue/[0.03] border-b border-black/[0.04] flex items-center justify-between">
          <span className="text-xs font-semibold text-[#4A5568]/80 uppercase tracking-wider font-mono">
            Language / Язык
          </span>
          <div className="flex items-center p-0.5 bg-black/[0.06] rounded-full border border-black/[0.04]">
            <button
              onClick={() => onLangChange("ru")}
              className={`px-3 py-1 rounded-full text-xs font-sans transition-all ${
                lang === "ru"
                  ? "font-bold text-white bg-brand-blue shadow-sm"
                  : "font-semibold text-slate-500 hover:text-[#171C24]"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => onLangChange("en")}
              className={`px-3 py-1 rounded-full text-xs font-sans transition-all ${
                lang === "en"
                  ? "font-bold text-white bg-brand-blue shadow-sm"
                  : "font-semibold text-slate-500 hover:text-[#171C24]"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* === НАВИГАЦИЯ === */}
        <nav className="flex-1 px-4 py-4 space-y-1">
          {/* Заголовок группы */}
          <div className="px-3 py-1 text-[11px] font-mono font-bold tracking-[0.2em] text-slate-400 uppercase">
            Walking Routes
          </div>

          {/* Туры */}
          {routes.map((route, i) => (
            <a
              key={i}
              href={route.href}
              onClick={onClose}
              className={`flex items-center font-sans justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                route.active
                  ? "bg-brand-blue/10 text-brand-blue font-semibold"
                  : "text-[#171C24] hover:bg-black/[0.03]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <BrandIcon name={route.icon} className="w-[18px] h-[18px] text-brand-blue" />
                <span>{route.label[lang]}</span>
              </div>
              {route.badge ? (
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-brand-blue text-white">
                  {route.badge[lang]}
                </span>
              ) : route.meta ? (
                <span className="text-[11px] text-[#4A5568]/70 font-mono">
                  {route.meta}
                </span>
              ) : null}
            </a>
          ))}

          {/* Заголовок группы 2 */}
          <div className="pt-3 pb-1 px-3 text-[11px] font-mono font-bold tracking-[0.2em] text-slate-400 uppercase">
            Explore & Guide
          </div>

          {/* Explore */}
          {explore.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={onClose}
              className="flex items-center font-sans gap-2.5 px-3.5 py-2.5 rounded-xl text-[#171C24] hover:bg-black/[0.03] font-medium text-sm transition-all"
            >
              <BrandIcon name={item.icon} className="w-[18px] h-[18px] text-brand-blue" />
              <span>{item.label[lang]}</span>
            </a>
          ))}
        </nav>

        {/* === ФУТЕР ПАНЕЛИ: КОНТАКТЫ === */}
        <div className="p-5 border-t border-black/[0.06] bg-[#F8F9FF] space-y-2.5">
          <p className="text-[11px] font-semibold font-mono uppercase tracking-wider text-[#4A5568]/80 mb-2">
            Direct Contact
          </p>

          <a
            href="https://wa.me/?text=Hi!%20I%20would%20like%20to%20book%20a%20walking%20tour."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-semibold text-xs text-center shadow-sm flex items-center justify-center gap-2 transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
            </svg>
            <span className="font-sans">Message on WhatsApp</span>
          </a>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 bg-white border border-black/10 text-[#171C24] hover:bg-slate-50 rounded-xl font-medium text-xs text-center flex items-center justify-center gap-2 transition-all"
          >
            <svg className="w-4 h-4 fill-brand-blue" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            <span className="font-sans">Ask questions on Telegram</span>
          </a>
        </div>
      </aside>
    </>
  );
}