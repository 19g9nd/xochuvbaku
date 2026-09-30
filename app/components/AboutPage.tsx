"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Header } from "./Header";
import { MobileDrawer } from "./MobileDrawer";
import { DesktopMenu } from "./DesktopMenu";
import { StickyCTA } from "./StickyCTA";
import { Footer } from "./Footer";
import { Lang } from "../types";

export function AboutPage() {
    const [lang, setLang] = useState<Lang>("ru");
    const [menuOpen, setMenuOpen] = useState(false);
    // Состояние открытого ответа (null / 0 / 1 / 2)
    const [openPrompt, setOpenPrompt] = useState<number | null>(null);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && menuOpen) setMenuOpen(false);
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [menuOpen]);

    // ═══════ КОНТЕНТ ═══════
    const copy = {
        // Hero
        badge: {
            ru: "Лицензированный рассказчик",
            en: "Licensed Storyteller",
        },
        heroTitle: {
            ru: "Баку глазами местного историка",
            en: "Baku Through the Eyes of a Local Historian",
        },
        heroDesc: {
            ru: "Архитектурные секреты, тихие чайные подвалы и неспешные хроники Шёлкового пути вместе с Эльвирой и любопытным Raccoon.",
            en: "Architectural secrets, quiet tea cellars, and unhurried Silk Road chronicles with Elvira & the curious Raccoon.",
        },

        // Profile
        guideName: { ru: "Эльвира Ахадова", en: "Elvira Ahadova" },
        guideRole: {
            ru: "Коренная жительница Старого города и исследователь архитектуры",
            en: "Old City Native & Archival Researcher",
        },
        languages: "RU / EN Fluent",
        rating: "5.0 (340+ reviews)",

        // Stats 2×2
        stats: [
            {
                icon: "📘",
                value: "7+ Years",
                label: { ru: "Нарративный гид", en: "Narrative Guiding" },
                color: "text-brand-blue",
            },
            {
                icon: "👥",
                value: "1,200+",
                label: { ru: "Довольных путешественников", en: "Happy Slow Travelers" },
                color: "text-[#7A8B3F]",
            },
            {
                icon: "🏛️",
                value: { ru: "Гос. лиц.", en: "State Lic." },
                label: { ru: "Бакинский туристический совет", en: "Baku Tourism Board" },
                color: "text-brand-blue",
            },
            {
                icon: "🚫",
                value: "100%",
                label: { ru: "Без магазинных ловушек", en: "Zero Shopping Traps" },
                color: "text-[#7A8B3F]",
            },
        ],

        // Origin Story
        originEyebrow: { ru: "История", en: "The Origin Story" },
        originTitle: {
            ru: 'Почему "Baku Walks with Raccoon"?',
            en: 'Why "Baku Walks with Raccoon"?',
        },
        originCard1Title: {
            ru: "Символ беспокойного любопытства",
            en: "The Emblem of Restless Curiosity",
        },
        originCard1Text: {
            ru: "Raccoon — символ любопытства. Они никогда не принимают очевидную дверь; они находят фрамугу, разросшуюся плющом беседку, скрытую кладовую. Крепость Баку создана именно для такого мышления.",
            en: "Raccoons never accept the obvious door; they find the transom window, the overgrown ivy trellis, the hidden pantry. Baku's Fortress is made for precisely that mindset.",
        },
        originCard2Text: {
            ru: "За годы документирования многовековых дворов местные шутили, что я вынюхиваю исторические микродетали, как енот в маске, рыскающий по известняковым парапетам. Имя прижилось, напоминая нам, что путешествие должно быть лёгким, игривым и бесконечно проницательным.",
            en: "During my years documenting centuries-old courtyards, locals joked that I sniffed out historical micro-details like a masked raccoon prowling limestone parapets. The name stuck, reminding us that travel should feel nimble, playful, and endlessly perceptive.",
        },

        // Slow Philosophy
        slowPhilosophy: { ru: "МЕДЛЕННАЯ ФИЛОСОФИЯ", en: "SLOW PHILOSOPHY" },
        slowQuote: {
            ru: '"Чашка армуды — это не пауза в экскурсии. Это самое сердце разговора."',
            en: '"A cup of armudu tea is not a pause from the tour. It is the very heart of the conversation."',
        },

        // Chapter 01
        chapter1: { ru: "ГЛАВА 01", en: "CHAPTER 01" },
        chapter1Title: {
            ru: "Рождённая между стенами XII века",
            en: "Born Between 12th-Century Walls",
        },
        chapter1Text: {
            ru: "Пока другие дети играли в широких советских пригородных парках, моей игровой площадкой были прогретые солнцем известняковые переулки под Девичьей башней. Я засыпала под каспийский бриз, свистящий сквозь бойницы Ширваншахов, слушая, как пожилые соседи рассказывают о золотой эпохе бакинских нефтяных баронов, кочевых торговцев коврами и легендарных съёмочных групп «Бриллиантовой руки».",
            en: "While other children played in wide Soviet suburban parks, my playground was the sun-warmed limestone alleys beneath Maiden Tower. I fell asleep to the Caspian breeze whistling through Shirvanshah loophole arches, listening to elderly neighbors recount the golden era of Baku oil barons, nomadic carpet traders, and legendary film crews of The Diamond Arm.",
        },
        chapter1Caption: {
            ru: "Улица Кичик Гала в золотой час",
            en: "Kichik Qala Street at golden hour",
        },
        chapter1Link: { ru: "Точка обзора", en: "View Point" },
        chapter1Text2: {
            ru: "Изучение археологии и городской географии позже дало академическую строгость, но моим настоящим учебником всегда были живые воспоминания жителей Ичери Шехер. Когда вы гуляете со мной, вы не слышите отрепетированный сценарий; вы входите в район, который меня вырастил.",
            en: "Studying archeology and urban geography later provided academic rigor, but my true syllabus was always the lived memories of Icheri Sheher's residents. When you walk with me, you are not hearing a rehearsed script; you are stepping into a neighborhood that raised me.",
        },

        // How We Walk
        howEyebrow: {
            ru: "ЭТИЧНОЕ МЕДЛЕННОЕ ОТКРЫТИЕ",
            en: "ETHICAL SLOW DISCOVERY",
        },
        howTitle: {
            ru: "Как мы гуляем иначе",
            en: "How We Walk Differently",
        },

        // 3 cards
        cards: [
            {
                icon: "🛑",
                iconBg: "bg-red-100",
                title: {
                    ru: "Ноль комиссионных ловушек",
                    en: "Zero Commission Shopping Traps",
                },
                text: {
                    ru: "Никаких навязанных сувенирных базаров или назойливых торговцев коврами. Только честные знакомства с местными мастерскими — если вы сами попросите.",
                    en: "Never dragged to marked-up souvenir bazaars or high-pressure carpet sellers. Honest local workshop introductions only if you ask.",
                },
            },
            {
                icon: "⏱️",
                iconBg: "bg-lime-100",
                title: {
                    ru: "Неторопливое погружение",
                    en: "Unhurried Immersion",
                },
                text: {
                    ru: "Время остановиться для идеального кадра, задать сложные исторические вопросы и пить чай, не глядя на часы.",
                    en: "Time to pause for the perfect photograph, ask complicated historical questions, and sip tea without checking watches.",
                },
            },
            {
                icon: "📖",
                iconBg: "bg-indigo-100",
                title: {
                    ru: "Живая история и кино",
                    en: "Living History & Cinema",
                },
                text: {
                    ru: "Мы погружаемся в зороастрийские огненные обряды, советские киноанекдоты («Чёрт побери!») и подземные воды под вашими ногами.",
                    en: "We delve into Zoroastrian fire rites, Soviet film anecdotes (Chort poberi!), and the subterranean waterways beneath your feet.",
                },
            },
        ],

        // Tea Companion (интерактивная секция)
        teaEyebrow: {
            ru: "ЧАЙНЫЙ КОМПАНЬОН ГИДА",
            en: "GUIDE'S TEA COMPANION",
        },
        teaText: {
            ru: "Интересуетесь, что надеть в древних мечетях, или ищете редкие рекомендации по чаю с шафрановым вареньем? Нажмите на подсказку:",
            en: "Curious about what to wear in ancient mosques or looking for rare saffron-jam tea recommendations? Tap an inquiry prompt:",
        },
        teaPrompts: [
            {
                icon: "📸",
                label: {
                    ru: "Фотография в золотой час",
                    en: "Golden hour photography",
                },
                answer: {
                    ru: "Лучшее время для съёмки — за 40 минут до заката. Я проведу вас к трём точкам, где свет ложится на песчаник особенно тепло. Возьмите с собой широкоугольный объектив — стены такие высокие, что обычный кадр не передаст масштаб.",
                    en: "The best time to shoot is 40 minutes before sunset. I'll take you to three spots where light falls on sandstone especially warmly. Bring a wide-angle lens — the walls are so tall that a regular shot won't capture the scale.",
                },
            },
            {
                icon: "🧣",
                label: {
                    ru: "Дресс-код для уважительного визита",
                    en: "Respectful attire guide",
                },
                answer: {
                    ru: "Для мечетей: закрытые плечи и колени, женщинам — платок (я дам свой, если забудете). Обувь — удобную, потому что брусчатка и лестницы. Летом — светлая одежда, зимой — ветровка: у моря ветрено.",
                    en: "For mosques: covered shoulders and knees, women — a headscarf (I'll share mine if you forget). Comfortable shoes — cobblestones and stairs. Summer — light clothing, winter — a windbreaker: it's windy by the sea.",
                },
            },
            {
                icon: "👶",
                label: {
                    ru: "Прогулка с коляской",
                    en: "Walking with strollers",
                },
                answer: {
                    ru: "В Ичери Шехер брусчатые лестницы, но я подобрала альтернативный маршрут с минимальным уклоном, полностью удобный для коляски — без потери средневековой магии.",
                    en: "Icheri Sheher has cobbled stairs, but I curated an alternate low-incline route that is fully stroller-friendly without losing any medieval magic.",
                },
            },
        ],
        quickNoteLabel: {
            ru: "Заметка Эльвиры:",
            en: "Elvira's quick note:",
        },

        // Traveler Voices
        voicesEyebrow: { ru: "ГОЛОСА ПУТЕШЕСТВЕННИКОВ", en: "TRAVELER VOICES" },
        voicesTitle: {
            ru: "Слова с брусчатки",
            en: "Words from the Cobblestones",
        },
        voicesRating: "5.0 ★★★★★",
        reviews: [
            {
                initials: "EM",
                name: "Elena & Mark",
                meta: {
                    ru: "Лондон, Великобритания · Частная 3-часовая прогулка",
                    en: "London, UK · Private 3-Hour Walk",
                },
                date: { ru: "Окт 2024", en: "Oct 2024" },
                text: {
                    ru: '"Эльвира привела нас в неприметный подвал XIV века, где хозяин подавал горный чай с чабрецом, декламируя стихи Низами Гянджеви. Никакой толпы, никакой спешки. Искренне незабываемо."',
                    en: '"Elvira took us to an unmarked 14th-century cellar where the owner served mountain thyme tea while reciting verses of Nizami Ganjavi. No crowds, zero rushed feeling. Truly unforgettable."',
                },
            },
            {
                initials: "AH",
                name: { ru: "Анна и Даниил", en: "Anna & Daniel" },
                meta: {
                    ru: "Москва · Семейная прогулка",
                    en: "Moscow · Family Walk",
                },
                date: { ru: "Сентябрь 2024", en: "September 2024" },
                text: {
                    ru: '"Наслаждались лучшей пахлавой без единой капли академической скуки! Ребёнок 9 лет в азарте искал символы и шифрованные послания нашего Енота. Эльвира — золото Баку."',
                    en: '"Enjoyed the best baklava without a single drop of academic boredom! Our 9-year-old eagerly searched for symbols and coded messages from our Raccoon. Elvira is Baku\'s gold."',
                },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-[#F8F9FF] text-[#1c2a38] font-serif selection:bg-brand-chartreuse">
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

            <main className="max-w-xl mx-auto px-4 md:px-6 pt-20 md:pt-24">

                {/* ═══ HERO ═══ */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-chartreuse/60 border border-brand-chartreuse/70 text-[11px] font-bold uppercase tracking-wider mb-5 font-sans text-[#171C24]">
                    <span>✦</span>
                    <span>{copy.badge[lang]}</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-semibold text-[#0d1a26] leading-[1.1] mb-4 tracking-tight">
                    {copy.heroTitle[lang]}
                </h1>

                <p className="text-base md:text-lg text-[#4a5568] mb-8 leading-relaxed font-sans">
                    {copy.heroDesc[lang]}
                </p>

                {/* ═══ PROFILE CARD (округлый, с енотом-бейджем) ═══ */}
                <div className="rounded-3xl bg-white shadow-sm border border-black/[0.04] p-5 mb-6">
                    <div className="flex items-center gap-4">
                        {/* Аватар с енотом-бейджем */}
                        <div className="relative flex-shrink-0">
                            <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-brand-blue/20">
                                <Image
                                    src="/images/guide/elvira.jpg"
                                    alt={copy.guideName[lang]}
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Енот-бейдж */}
                            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#D4E965] border-2 border-white overflow-hidden shadow-md flex items-center justify-center">
                                <Image
                                    src="/images/raccoon-guide.png"
                                    alt="Raccoon"
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Инфо */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                                <h3 className="font-bold text-lg text-[#0d1a26] leading-tight font-sans">
                                    {copy.guideName[lang]}
                                </h3>
                                {/* Галочка верификации */}
                                <svg
                                    className="w-4 h-4 fill-brand-blue flex-shrink-0"
                                    viewBox="0 0 24 24"
                                    aria-label="Verified"
                                >
                                    <path d="M12 2l2.4 2.4h3.4l.8 3.3 3.3.8v3.4L22 12l-2.1 2.1v3.4l-3.3.8-.8 3.3h-3.4L12 22l-2.4-2.4H6.2l-.8-3.3-3.3-.8v-3.4L4 12 2.1 9.9V6.5l3.3-.8L6.2 2.4h3.4L12 2zm-1.2 13.4l5.2-5.2-1.4-1.4-3.8 3.8-1.8-1.8-1.4 1.4 3.2 3.2z" />
                                </svg>
                            </div>
                            <p className="text-xs text-[#4a5568] leading-relaxed mb-2">
                                {copy.guideRole[lang]}
                            </p>
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="px-2.5 py-0.5 rounded-full bg-brand-chartreuse/50 text-[10px] font-bold text-[#171C24] font-sans">
                                    {copy.languages}
                                </span>
                                <span className="flex items-center gap-1 text-[11px] text-[#171C24] font-semibold font-sans">
                                    <span className="text-[#A68F58]">★</span>
                                    {copy.rating}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ═══ STATS ═══ */}
                <div className="grid grid-cols-2 gap-3 mb-14">
                    {copy.stats.map((stat, i) => (
                        <div
                            key={i}
                            className="rounded-xl bg-[#EBEFF7] p-5"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`text-2xl leading-none ${stat.color}`}>
                                    {stat.icon}
                                </span>
                                <span className={`text-2xl font-bold font-sans leading-none ${stat.color}`}>
                                    {typeof stat.value === "string" ? stat.value : stat.value[lang]}
                                </span>
                            </div>
                            <p className="text-sm text-[#4a5568] leading-snug font-sans">
                                {stat.label[lang]}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ═══ ORIGIN STORY ═══ */}
                <div className="mb-14">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs tracking-[0.3em] uppercase text-[#7A8B3F] font-sans font-bold">
                            {copy.originEyebrow[lang]}
                        </span>
                        <span className="text-[#7A8B3F] text-xs">✦</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-[#0d1a26] mb-6 leading-[1.2]">
                        {copy.originTitle[lang]}
                    </h2>

                    {/* Card 1: Emblem */}
                    <div className="rounded-2xl bg-white border border-black/[0.04] p-5 mb-4 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-chartreuse/50 flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">✦</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-base text-[#0d1a26] mb-2 font-sans leading-snug">
                                    {copy.originCard1Title[lang]}
                                </h3>
                                <p className="text-sm text-[#4a5568] leading-relaxed">
                                    {copy.originCard1Text[lang]}
                                    {copy.originCard2Text[lang]}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Slow Philosophy image */}
                    <figure className="relative rounded-2xl overflow-hidden shadow-md mb-4">
                        <div className="relative w-full aspect-[16/10]">
                            <Image
                                src="/images/about/slow-philosophy.jpg"
                                alt={copy.slowPhilosophy[lang]}
                                fill
                                sizes="(max-width: 768px) 100vw, 600px"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        </div>
                        <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                            <p className="text-xs tracking-[0.3em] uppercase text-brand-chartreuse font-bold mb-2 font-sans">
                                {copy.slowPhilosophy[lang]}
                            </p>
                            <p className="font-serif italic text-white text-base md:text-lg leading-relaxed">
                                {copy.slowQuote[lang]}
                            </p>
                        </figcaption>
                    </figure>
                </div>

                {/* ═══ CHAPTER 01 ═══ */}
                <div className="mb-14">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs tracking-[0.3em] uppercase text-[#7A8B3F] font-sans font-bold">
                            {copy.chapter1[lang]}
                        </span>
                        <span className="text-[#7A8B3F] text-xs">✦</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-[#0d1a26] mb-6 leading-[1.2]">
                        {copy.chapter1Title[lang]}
                    </h2>

                    <p className="text-base text-[#4a5568] leading-relaxed mb-6">
                        {copy.chapter1Text[lang]}
                    </p>

                    <figure className="rounded-2xl overflow-hidden bg-white shadow-md border border-black/[0.04] mb-6">
                        <div className="relative w-full aspect-[16/10] overflow-hidden">
                            <Image
                                src="/images/about/kichik-qala.jpg"
                                alt={copy.chapter1Caption[lang]}
                                fill
                                sizes="(max-width: 768px) 100vw, 600px"
                                className="object-cover"
                            />
                        </div>
                        <figcaption className="px-4 py-3 flex items-center justify-between text-[11px] font-medium">
                            <span className="text-[#4a5568]">
                                {copy.chapter1Caption[lang]}
                            </span>
                            <a
                                href="#"
                                className="inline-flex items-center gap-1.5 text-brand-blue font-semibold"
                            >
                                <svg
                                    className="w-3.5 h-3.5 fill-current"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                {copy.chapter1Link[lang]}
                            </a>
                        </figcaption>
                    </figure>

                    <p className="text-base text-[#4a5568] leading-relaxed">
                        {copy.chapter1Text2[lang]}
                    </p>
                </div>

                {/* ═══ HOW WE WALK ═══ */}
                <div className="mb-14">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs tracking-[0.3em] uppercase text-[#7A8B3F] font-sans font-bold">
                            {copy.howEyebrow[lang]}
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-[#0d1a26] mb-6 leading-[1.2]">
                        {copy.howTitle[lang]}
                    </h2>

                    <div className="space-y-4">
                        {copy.cards.map((card, i) => (
                            <div
                                key={i}
                                className="rounded-2xl bg-white border border-black/[0.04] p-5 shadow-sm"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center flex-shrink-0`}
                                    >
                                        <span className="text-xl">{card.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base text-[#0d1a26] mb-1.5 font-sans leading-snug">
                                            {card.title[lang]}
                                        </h3>
                                        <p className="text-sm text-[#4a5568] leading-relaxed">
                                            {card.text[lang]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ═══ TEA COMPANION (ИНТЕРАКТИВНАЯ) ═══ */}
                <div className="rounded-3xl bg-[#EBEFF7] p-6 mb-14">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl">☕</span>
                        <span className="text-sm tracking-[0.15em] uppercase text-[#3D5A2B] font-sans font-bold">
                            {copy.teaEyebrow[lang]}
                        </span>
                    </div>

                    <p className="text-sm text-[#2d3748] leading-relaxed mb-5">
                        {copy.teaText[lang]}
                    </p>

                    {/* Chips — в строку */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {copy.teaPrompts.map((prompt, i) => {
                            const isOpen = openPrompt === i;
                            return (
                                <button
                                    key={i}
                                    onClick={() => setOpenPrompt(isOpen ? null : i)}
                                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-200 font-sans cursor-pointer ${isOpen
                                            ? "bg-brand-blue text-white shadow-md scale-[1.02]"
                                            : "bg-white text-[#171C24] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                                        }`}
                                >
                                    <span>{prompt.icon}</span>
                                    <span>{prompt.label[lang]}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Ответ — под всеми чипами */}
                    {openPrompt !== null && (
                        <div className="rounded-2xl bg-white p-4 shadow-sm transition-all">
                            <p className="text-xs font-semibold text-brand-blue mb-2 flex items-center gap-1.5 font-sans">
                                <span>↩</span>
                                {copy.quickNoteLabel[lang]}
                            </p>
                            <p className="text-sm text-[#4a5568] leading-relaxed">
                                {copy.teaPrompts[openPrompt].answer[lang]}
                            </p>
                        </div>
                    )}
                </div>
                
                {/* ═══ TRAVELER VOICES ═══ */}
                <div className="mb-14">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs tracking-[0.3em] uppercase text-[#7A8B3F] font-sans font-bold">
                            {copy.voicesEyebrow[lang]}
                        </span>
                    </div>

                    <div className="flex items-start justify-between mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d1a26] leading-[1.2]">
                            {copy.voicesTitle[lang]}
                        </h2>
                        <span className="text-sm font-bold text-[#7A8B3F] whitespace-nowrap ml-4 font-sans">
                            {copy.voicesRating}
                        </span>
                    </div>

                    <div className="space-y-4">
                        {copy.reviews.map((review, i) => (
                            <div
                                key={i}
                                className="rounded-2xl bg-white border border-black/[0.04] p-5 shadow-sm"
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 text-xs font-bold text-indigo-700 font-sans">
                                        {review.initials}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <p className="font-semibold text-sm text-[#0d1a26] font-sans leading-tight">
                                                    {typeof review.name === "string"
                                                        ? review.name
                                                        : review.name[lang]}
                                                </p>
                                                <p className="text-[11px] text-[#4a5568] font-sans">
                                                    {review.meta[lang]}
                                                </p>
                                            </div>
                                            <span className="text-[11px] text-[#4a5568] font-sans whitespace-nowrap">
                                                {review.date[lang]}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="font-serif italic text-sm text-[#4a5568] leading-relaxed">
                                    {review.text[lang]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer lang={lang} />
        </div>
    );
}