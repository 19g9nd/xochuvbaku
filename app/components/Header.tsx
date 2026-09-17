"use client";

import Image from "next/image";
import { Lang } from "../types";

interface HeaderProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  onMenuOpen: () => void;
  isMenuOpen?: boolean; // ← чтобы менять иконку/подсветку
}

export function Header({
  lang,
  onLangChange,
  onMenuOpen,
  isMenuOpen = false,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/85 border-b border-black/[0.04] px-4 md:px-6 py-2.5 md:py-3">
      <div className="max-w-md md:max-w-6xl mx-auto flex items-center justify-between gap-4">

        {/* === ЛОГОТИП === */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group text-left"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm ring-2 ring-brand-blue/30 group-hover:ring-[#D4E965] transition-all flex-shrink-0">
            <Image
              src="/images/raccoon-guide.png"
              alt="Baku Mascot Raccoon Guide"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs tracking-widest font-sans font-semibold uppercase text-brand-blue">
              Baku Walks
            </span>
            <span className="font-sans italic text-xs text-[#4A5568] leading-none">
              with Raccoon
            </span>
          </div>
        </a>

        {/* === ПРАВАЯ ЧАСТЬ === */}
        <div className="flex items-center gap-2 md:gap-3">

          {/* Язык */}
          <div className="flex items-center p-1 bg-black/[0.05] rounded-full border border-black/[0.04]">
            <button
              onClick={() => onLangChange("ru")}
              className={`px-2.5 py-0.5 rounded-full text-xs transition-all cursor-pointer font-sans ${
                lang === "ru"
                  ? "font-bold text-white bg-brand-blue shadow-sm"
                  : "font-semibold text-slate-500 hover:text-[#171C24]"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => onLangChange("en")}
              className={`px-2.5 py-0.5 rounded-full cursor-pointer text-xs transition-all font-sans ${
                lang === "en"
                  ? "font-bold text-white bg-brand-blue shadow-sm"
                  : "font-semibold text-slate-500 hover:text-[#171C24]"
              }`}
            >
              EN
            </button>
          </div>

          {/* Кнопка Меню — теперь видна и на десктопе */}
          <button
            onClick={onMenuOpen}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className={`h-9 px-3 md:px-4 rounded-full flex items-center gap-2 transition-all font-sans font-semibold text-xs md:text-sm ${
              isMenuOpen
                ? "bg-brand-blue text-white shadow-md"
                : "bg-black/[0.04] text-[#171C24] hover:bg-black/[0.08]"
            }`}
          >
            {/* Иконка: hamburger ⇄ X */}
            {isMenuOpen ? (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            <span className="hidden md:inline">
              {isMenuOpen
                ? lang === "ru"
                  ? "Закрыть"
                  : "Close"
                : lang === "ru"
                ? "Меню"
                : "Menu"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}