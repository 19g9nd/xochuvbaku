import Link from "next/link";
import Image from "next/image";
import { toursList } from "./data/tours/tours-index";

export default function Home() {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <header className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl md:text-6xl font-serif font-semibold">
          Baku Walks
        </h1>
        <p className="text-[#4A5568] mt-2">
          Пешеходные экскурсии по Баку
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toursList.map((tour) => (
          <Link
            key={tour.slug}
            href={`/tour/${tour.slug}`}
            className="group block rounded-2xl overflow-hidden bg-white border border-black/[0.06] shadow-sm hover:shadow-lg transition-all"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={tour.hero.image}
                alt={tour.hero.title.ru}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h2 className="font-serif text-xl font-bold mb-1 group-hover:text-brand-blue transition-colors">
                {tour.hero.title.ru}
              </h2>
              <p className="text-sm text-[#4A5568] line-clamp-2 mb-3">
                {tour.hero.description.ru}
              </p>
              <div className="flex items-center justify-between text-xs text-[#4A5568] pt-3 border-t border-black/[0.04]">
                <span>{tour.duration}</span>
                <span className="text-[#A68F58] font-semibold">{tour.price} AZN</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}