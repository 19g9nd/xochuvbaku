"use client";

import { useState } from "react";
import Image from "next/image";
import { LangToggle } from "./components/LangToggle";
import { StoryCard } from "./components/StoryCard";
import { ThemeCard } from "./components/ThemeCard";
import { content, colors } from "./data/content";
import { useScrollMeltColor } from "./hooks/useScrollMeltColor";
import { useSectionOffsets } from "./hooks/useSectionOffsets";
import { Lang } from "./types";

export default function OldCityLanding() {
  const [lang, setLang] = useState<Lang>("ru");

  const totalSections = content.sections.length + 2;
  const { refs, offsets } = useSectionOffsets(totalSections);
  const bg = useScrollMeltColor(colors, offsets);

  return (
    <div
      style={{ backgroundColor: bg }}
      className="min-h-screen text-[#1c2a38] font-serif selection:bg-[#c6a052]/15 transition-colors duration-300"
      suppressHydrationWarning
    >
      <LangToggle lang={lang} onToggle={() => setLang(lang === "ru" ? "en" : "ru")} />

      {/* Hero Section */}
      <section
        ref={(el) => {
          refs.current[0] = el;
        }}
        className="min-h-screen flex items-center justify-center px-4 md:px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#d2e4f7]/30 via-transparent to-transparent" />
        <div className="max-w-4xl w-full mx-auto text-center relative z-10">
          <div className="w-full max-w-xs md:max-w-md mx-auto mb-6 md:mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#c6a052]/5 via-transparent to-transparent rounded-full blur-3xl" />
              <Image
                src="/images/old-city.png"
                alt="Icheri Sheher - Old City Baku"
                width={800}
                height={800}
                className="w-full h-auto object-contain relative"
                priority
              />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-7xl font-semi-bold text-[#0d1a26] tracking-tight leading-[1.05]">
              {content.hero.title[lang]}
            </h1>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#aaaa04dc] font-sans font-medium">
              {content.hero.subtitle[lang]}
            </p>

            <p className="text-base md:text-xl text-[#1c2a38]/55 font-light max-w-lg mx-auto px-2">
              {content.hero.description[lang]}
            </p>
          </div>

          <div className="mt-8 md:mt-12 flex justify-center">
            <div className="flex flex-col items-center gap-2 text-[#1c2a38]/25">
              <span className="text-xs tracking-widest uppercase font-sans">Scroll</span>
              <span className="w-px h-10 md:h-12 bg-gradient-to-b from-[#1c2a38]/15 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <div className="max-w-xl mx-auto px-4 md:px-6">
        {content.sections.map((section, i) => (
          <section
            key={i}
            ref={(el) => {
              refs.current[i + 1] = el;
            }}
            className="py-4 md:py-6"
          >
            <StoryCard lang={lang} data={section} index={i} />

            {i < content.sections.length - 1 && (
              <div className="flex items-center justify-center py-2 md:py-4 opacity-30">
                <div className="h-px bg-gradient-to-r from-transparent via-[#c6a052]/30 to-transparent flex-1" />
                <span className="px-3 text-[#c6a052] text-xs">✦</span>
                <div className="h-px bg-gradient-to-r from-transparent via-[#c6a052]/30 to-transparent flex-1" />
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Themes & Practical Info Section */}
      <section
        ref={(el) => {
          refs.current[content.sections.length + 1] = el;
        }}
        className="py-12 md:py-20"
      >
        <div className="max-w-xl mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-[#8c1c2b]/40 font-sans font-medium">
              {lang === 'ru' ? 'О чем будем говорить' : 'What We\'ll Discuss'}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d1a26] mt-2">
              {lang === 'ru' ? 'Темы экскурсии' : 'Tour Themes'}
            </h2>
          </div>

          <div className="space-y-4 md:space-y-6">
            {content.themes.map((theme, i) => (
              <ThemeCard key={i} lang={lang} {...theme} index={i} />
            ))}
          </div>

          <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-[#c6a052]/10">
            <h3 className="text-lg md:text-xl font-bold text-[#0d1a26] mb-4 md:mb-6">
              {content.practical.eyebrow[lang]}
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {content.practical.points[lang].map((point, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#1c2a38]/65 leading-relaxed">
                  <span className="text-[#c6a052] mt-0.5 text-xs">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-sm text-[#1c2a38]/25 font-light tracking-wider">
              {lang === 'ru' ? 'Ичери Шехер ждет вас' : 'Icheri Sheher awaits you'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}