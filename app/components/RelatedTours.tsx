"use client";

import Link from "next/link";
import Image from "next/image";
import { Lang } from "../types";
import { getTour, tours } from "../data/tours/tours-index";

interface RelatedToursProps {
    currentSlug: string;
    lang: Lang;
}

export function RelatedTours({ currentSlug, lang }: RelatedToursProps) {
    const current = getTour(currentSlug);
    if (!current) return null;

    const relatedSlugs = current.relatedTours
        ?? Object.keys(tours).filter((s) => s !== currentSlug);

    const related = relatedSlugs
        .map((slug) => getTour(slug))
        .filter((t): t is NonNullable<typeof t> => Boolean(t))
        .slice(0, 3);

    if (related.length === 0) return null;

    return (
        <section className="py-12 md:py-16 px-4 md:px-6 border-t border-black/[0.06]">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 md:mb-10 text-center">
                    <span className="text-xs tracking-[0.3em] uppercase text-[#8c1c2b]/40 font-sans font-medium">
                        {lang === "ru" ? "Смотрите также" : "See also"}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0d1a26] mt-2 font-serif">
                        {lang === "ru" ? "Другие прогулки" : "More Walks"}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {related.map((tour) => (
                        <Link
                            key={tour.slug}
                            href={`/tour/${tour.slug}`}
                            className="group block rounded-2xl overflow-hidden bg-white border border-black/[0.06] shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="relative w-full aspect-[16/10] overflow-hidden">
                                <Image
                                    src={tour.hero.image}
                                    alt={tour.hero.title[lang]}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="font-serif text-lg font-bold text-[#171C24] mb-1 group-hover:text-brand-blue transition-colors leading-tight">
                                    {tour.hero.title[lang]}
                                </h3>
                                <p className="text-xs text-[#4A5568]/70 mb-3 line-clamp-2">
                                    {tour.hero.description[lang]}
                                </p>
                                <div className="flex items-center justify-between text-[11px] font-mono text-[#4A5568]/70 pt-3 border-t border-black/[0.04]">
                                    <span>{tour.duration}</span>
                                    <span className="text-[#A68F58] font-semibold">{tour.price} AZN</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}