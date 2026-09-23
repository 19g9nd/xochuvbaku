import Image from "next/image";
import { useReveal } from "../hooks/useReveal";
import { Lang, SectionData } from "../types";
import { IconMap } from "./icons";

interface StoryCardProps {
  lang: Lang;
  data: SectionData;
  index: number;
  pageBg?: string;
}
function darkenRgb(rgb: string, amount = 0.05): string {
  const match = rgb.match(/\d+/g);
  if (!match) return rgb;
  const [r, g, b] = match.map(Number);
  const factor = 1 - amount;
  return `rgb(${Math.round(r * factor)}, ${Math.round(g * factor)}, ${Math.round(b * factor)})`;
}

export function StoryCard({ lang, data, index, pageBg }: StoryCardProps) {
  const { ref, visible } = useReveal();
  const Icon = IconMap[data.icon];  // ← достаём компонент по имени
  const quoteBg = pageBg ? darkenRgb(pageBg, 0.03) : "rgba(0,0,0,0.03)";
  // Русские подписи по умолчанию (если не переданы в данных)
  const defaultCaption = {
    ru: "Ичери Шехер · Старый город",
    en: "Icheri Sheher · Old City",
  };

  const defaultLabel = {
    ru: "ИЧЕРИ ШЕХЕР",
    en: "ICHERI SHEHER",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      <div className="py-6 md:py-8">
        {/* Шапка карточки */}
        <div className="flex items-center gap-3 mb-3">
          <Icon
            className="w-6 h-6 md:w-7 md:h-7 text-primary-container flex-shrink-0"
            aria-hidden="true"
          />
          <span className="text-xs tracking-[0.3em] uppercase text-[#8c1c2b]/50 font-sans font-medium">
            {data.eyebrow[lang]}
          </span>
          <span className="text-xs text-[#1c2a38]/15 font-mono">
            {(index + 1).toString().padStart(2, "0")}
          </span>
        </div>

        {/* Заголовок */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0d1a26] mb-3 tracking-tight leading-[1.2]">
          {data.title[lang]}
        </h2>

        {/* ОСНОВНОЙ ТЕКСТ (перенесён ВЫШЕ картинки — как на 1-м скрине) */}
        <p className="text-base md:text-lg text-[#1c2a38]/75 leading-relaxed mb-5 font-light">
          {data.body[lang]}
        </p>

        {/* БЛОК С КАРТИНКОЙ — как на первом экране */}
        {data.image && (
          <figure className="my-6 rounded-2xl overflow-hidden bg-white shadow-md border border-black/[0.06]">
            {/* Само изображение */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={data.image}
                alt={data.imageAlt?.[lang] ?? data.title[lang]}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Подпись-полоска под картинкой */}
            <figcaption className="px-3.5 py-2 bg-black/[0.02] flex items-center justify-between text-[11px] font-medium tracking-wide">
              <span className="text-[#4A5568]/70">
                {data.imageAlt?.[lang] ?? defaultCaption[lang]}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#A68F58]">
                {data.imageLabel?.[lang] ?? defaultLabel[lang]}
              </span>
            </figcaption>
          </figure>
        )}

        <div
          className="relative pl-4 border-l-2 border-[#d4e965]/80 mt-6 rounded-r-md py-3 pr-3"
          style={{ backgroundColor: quoteBg }}
        >
          <p className="text-sm text-[#1c2a38]/55 italic leading-relaxed">
            {data.detail[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}