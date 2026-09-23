"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useScrollMeltColor } from "../hooks/useScrollMeltColor";
import { useSectionOffsets } from "../hooks/useSectionOffsets";
import { ColorStop, TourData, Lang } from "../types";
import { BookingCard } from "./BookingCard";
import { DesktopMenu } from "./DesktopMenu";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileDrawer } from "./MobileDrawer";
import { StickyCTA } from "./StickyCTA";
import { StoryCard } from "./StoryCard";
import { ThemeCard } from "./ThemeCard";
import { RelatedTours } from "./RelatedTours";

// Дефолтная палитра для тура без своей
const defaultColors: ColorStop[] = [
    [237, 244, 254],
    [244, 245, 246],
    [250, 246, 238],
    [247, 246, 243],
    [244, 245, 248],
    [247, 245, 241],
    [250, 246, 238],
    [250, 245, 235],
    [250, 245, 233],
    [251, 248, 242],
];

interface TourPageProps {
    tour: TourData;
}

export function TourPage({ tour }: TourPageProps) {
    const [lang, setLang] = useState<Lang>("ru");
    const [menuOpen, setMenuOpen] = useState(false);

    const totalSections = tour.sections.length + 2;
    const { refs, offsets } = useSectionOffsets(totalSections);
    const colors = tour.themeColors ?? defaultColors;
    const bg = useScrollMeltColor(colors, offsets);

    // Блокировка скролла
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    // Escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && menuOpen) setMenuOpen(false);
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [menuOpen]);

    return (
        <div
            style={{ backgroundColor: bg }}
            className="min-h-screen text-[#1c2a38] font-serif selection:bg-brand-chartreuse transition-colors duration-300"
            suppressHydrationWarning
        >
            <Header
                lang={lang}
                onLangChange={setLang}
                onMenuOpen={() => setMenuOpen((v) => !v)}
                isMenuOpen={menuOpen}
            />

            <MobileDrawer
                lang={lang}
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
                onLangChange={setLang}
            />

            <DesktopMenu
                lang={lang}
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />

            <main className="flex-1 pt-16 md:pt-20 lg:pt-16 pb-0">
                {/* Hero */}
                <section
                    ref={(el) => { refs.current[0] = el; }}
                    className="min-h-screen flex items-center justify-center px-4 md:px-6 relative overflow-hidden"
                >
                    <div className="max-w-4xl w-full mx-auto text-center relative z-10">
                        <div className="w-full max-w-xs md:max-w-md mx-auto mb-6 md:mb-8">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#c6a052]/5 via-transparent to-transparent rounded-full blur-3xl" />
                                <Image
                                    src={tour.hero.image}
                                    alt={tour.hero.title[lang]}
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-contain relative"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0d1a26] tracking-tight leading-[1.05]">
                                {tour.hero.title[lang]}
                            </h1>
                            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#A68F58] font-medium">
                                {tour.hero.subtitle[lang]}
                            </p>
                            <p className="text-base md:text-lg text-[#1c2a38]/55 font-light max-w-lg mx-auto px-2">
                                {tour.hero.description[lang]}
                            </p>
                        </div>

                        <div className="mt-6 md:mt-8 flex justify-center">
                            <div className="flex flex-col items-center gap-2 text-[#1c2a38]/25">
                                <span className="text-xs tracking-widest uppercase font-sans">Scroll</span>
                                <span className="w-px h-10 md:h-12 bg-gradient-to-b from-[#1c2a38]/15 to-transparent" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Story Sections */}
                <div className="max-w-xl mx-auto px-4 md:px-6">
                    {tour.sections.map((section, i) => (
                        <section
                            key={section.id}
                            ref={(el) => { refs.current[i + 1] = el; }}
                            className="py-4 md:py-6"
                        >
                            <StoryCard lang={lang} data={section} index={i} pageBg={bg} />
                            {i < tour.sections.length - 1 && (
                                <div className="flex items-center justify-center py-2 md:py-4 opacity-30">
                                    <div className="h-px bg-gradient-to-r from-transparent via-[#c6a052]/30 to-transparent flex-1" />
                                    <span className="px-3 text-[#c6a052] text-xs">✦</span>
                                    <div className="h-px bg-gradient-to-r from-transparent via-[#c6a052]/30 to-transparent flex-1" />
                                </div>
                            )}
                        </section>
                    ))}
                </div>

                {/* Themes + Practical */}
                <section
                    ref={(el) => { refs.current[tour.sections.length + 1] = el; }}
                    className="py-12 md:py-20"
                >
                    <div className="max-w-xl mx-auto px-4 md:px-6">
                        <div className="mb-8 md:mb-12">
                            <span className="text-xs tracking-[0.3em] uppercase text-[#8c1c2b]/40 font-sans font-medium">
                                {tour.themes.eyebrow[lang]}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0d1a26] mt-2">
                                {tour.themes.title[lang]}
                            </h2>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            {tour.themes.items.map((theme, i) => (
                                <ThemeCard key={i} lang={lang} {...theme} index={i} />
                            ))}
                        </div>

                        {tour.themes.image && (
                            <figure className="mt-8 md:mt-10 rounded-2xl overflow-hidden bg-white shadow-md border border-black/[0.06]">
                                <div className="relative w-full aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={tour.themes.image}
                                        alt={tour.themes.imageAlt?.[lang] ?? "Theme"}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 600px"
                                        className="object-cover"
                                    />
                                </div>
                                <figcaption className="px-3.5 py-2 bg-black/[0.02] flex items-center justify-between text-[11px] font-medium tracking-wide">
                                    <span className="text-[#4A5568]/70">{tour.themes.imageAlt?.[lang]}</span>
                                    <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#A68F58]">
                                        {tour.themes.imageLabel?.[lang]}
                                    </span>
                                </figcaption>
                            </figure>
                        )}

                        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-[#c6a052]/10">
                            <h3 className="text-lg md:text-xl font-bold text-[#0d1a26] mb-4 md:mb-6">
                                {tour.practical.eyebrow[lang]}
                            </h3>
                            <ul className="space-y-2 md:space-y-3">
                                {tour.practical.points[lang].map((point, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-[#1c2a38]/65 leading-relaxed">
                                        <span className="text-[#c6a052] mt-0.5 text-xs">✦</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Booking Card */}
                <BookingCard lang={lang} data={tour.booking} />

                {/* Related Tours */}
                <RelatedTours currentSlug={tour.slug} lang={lang} />
            </main>

            <StickyCTA lang={lang} priceFrom={tour.price} hidden={menuOpen} />
            <Footer lang={lang} />
        </div>
    );
}