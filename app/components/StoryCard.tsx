import Image from "next/image";
import { useReveal } from "../hooks/useReveal";
import { Lang, SectionData } from "../types";

interface StoryCardProps {
  lang: Lang;
  data: SectionData;
  index: number;
}

export function StoryCard({ lang, data, index }: StoryCardProps) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="py-6 md:py-8">
        {/* Шапка карточки */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl md:text-3xl">{data.icon}</span>
          <span className="text-xs tracking-[0.3em] uppercase text-[#8c1c2b]/50 font-sans font-medium">
            {data.eyebrow[lang]}
          </span>
          <span className="text-xs text-[#1c2a38]/15">
            {(index + 1).toString().padStart(2, "0")}
          </span>
        </div>

        {/* Заголовок */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0d1a26] mb-3 tracking-tight leading-[1.2]">
          {data.title[lang]}
        </h2>

        {/* ИЗОБРАЖЕНИЕ (если передано в данных) */}
        {data.image && (
          <div className="my-5 relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md border border-[#c6a052]/20">
            <Image
              src={data.image}
              alt={data.title[lang]}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}

        {/* Основной текст */}
        <p className="text-base md:text-lg text-[#1c2a38]/75 leading-relaxed mb-4 font-light">
          {data.body[lang]}
        </p>

        {/* Цитата / Деталь */}
        <div className="relative pl-4 border-l-2 border-[#c6a052]/30">
          <p className="text-sm text-[#1c2a38]/55 italic leading-relaxed">
            {data.detail[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}