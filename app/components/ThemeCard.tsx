import { useReveal } from "../hooks/useReveal";
import { Lang } from "../types";
import Image from "next/image";

interface ThemeCardProps {
  lang: Lang;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  index: number;
  image?: string; // URL изображения
}

export function ThemeCard({ lang, title, desc, index, image }: ThemeCardProps) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out delay-${index * 100} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="flex items-start gap-4 py-2">
        {/* Декоративная звездочка */}
        <span className="text-xl opacity-30 font-serif mt-0.5">✦</span>
        
        <div className="flex-1">
          {/* Контент с изображением */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <h4 className="font-bold text-[#1c2a38] mb-1">{title[lang]}</h4>
              <p className="text-sm text-[#1c2a38]/65 leading-relaxed">{desc[lang]}</p>
            </div>
            
            {/* Изображение - элегантный акцент */}
            {image && (
              <div className="relative flex-shrink-0 w-full sm:w-24 h-20 rounded-lg overflow-hidden bg-[#f5f0e6] group">
                <Image
                  src={image}
                  alt={title[lang]}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                {/* Легкая затемненная градиентная рамка */}
                <div className="absolute inset-0 border border-[#c6a052]/10 rounded-lg pointer-events-none" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}