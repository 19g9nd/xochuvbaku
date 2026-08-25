"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Lang = "ru" | "en";
type ColorStop = [number, number, number];

// --- HOOK 1: Section Offsets for Color ---
function useSectionOffsets(count: number) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [offsets, setOffsets] = useState<number[]>([]);

  useEffect(() => {
    const measure = () => {
      const tops = refs.current.map((el) => (el ? el.offsetTop : 0));
      setOffsets(tops);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [count]);

  return { refs, offsets };
}

// --- HOOK 2: Client-Only Color Interpolation ---
function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

function useScrollMeltColor(colors: ColorStop[], offsets: number[]) {
  const [rgb, setRgb] = useState<ColorStop>(colors[0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || offsets.length < 2) return;
    let ticking = false;

    const update = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let i = 0;
      
      // Find the right segment
      while (i < offsets.length - 2 && y > offsets[i + 1]) i++;
      
      // Ensure i doesn't go out of bounds
      const safeI = Math.min(i, colors.length - 2);
      
      const segStart = offsets[safeI];
      const segEnd = offsets[safeI + 1] ?? segStart + 1;
      const t = Math.min(1, Math.max(0, (y - segStart) / (segEnd - segStart)));

      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const from = colors[safeI];
      const to = colors[Math.min(safeI + 1, colors.length - 1)] ?? colors[safeI];
      
      setRgb([
        lerp(from[0], to[0], eased),
        lerp(from[1], to[1], eased),
        lerp(from[2], to[2], eased),
      ]);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [colors, offsets, isClient]);

  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

// --- HOOK 3: Reveal on Scroll ---
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

// --- CLEAN, MATCHING COLORS ---
const colors: ColorStop[] = [
  [210, 228, 247], // #d2e4f7 - Match image background
  [225, 235, 245], // #e1ebf5
  [240, 235, 225], // #f0ebe1
  [245, 225, 215], // #f5e1d7
  [250, 240, 225], // #faf0e1
  [240, 230, 220], // #f0e6dc
  [235, 240, 245], // #ebf0f5
  [245, 240, 230], // #f5f0e6
];

// --- DATA ---
const copy = {
  hero: {
    title: { ru: "Ичери Шехер", en: "Icheri Sheher" },
    subtitle: {
      ru: "Древняя крепость на берегу Каспия",
      en: "Ancient fortress on the Caspian Sea",
    },
    description: {
      ru: "Огромный музей под открытым небом и в то же время живой город",
      en: "A vast open-air museum and a living city",
    },
  },
  sections: [
    {
      id: "history",
      icon: "🏛️",
      eyebrow: { ru: "Наследие", en: "Heritage" },
      title: { ru: "Могучие стражи Баку", en: "Mighty Guardians of Baku" },
      body: {
        ru: "Крепостные стены XII века защищали город от нашествий и сохранили его для будущих поколений. Мы начнем с того, как строилась эта неприступная система обороны, и найдем древние символы, запечатленные в камне.",
        en: "The 12th-century fortress walls protected the city from invasions and preserved it for future generations. We'll begin by exploring how this impregnable defense system was built and discover ancient symbols carved in stone.",
      },
      detail: {
        ru: "Каждый камень здесь хранит тайну. Символы на крепостных стенах — это не просто украшение, а древний язык, которым говорили наши предки.",
        en: "Every stone here holds a secret. The symbols on the fortress walls are not mere decoration — they are an ancient language spoken by our ancestors.",
      },
    },
    {
      id: "cinema",
      icon: "🎬",
      eyebrow: { ru: "Легендарная комедия", en: "Legendary Comedy" },
      title: { ru: "Улочка «Черт побери!»", en: 'The "Damn!" Street' },
      body: {
        ru: "Самое кинематографичное место Старого города. Именно здесь снимали знаменитую сцену из «Бриллиантовой руки» Гайдая. Узнаем подробности съемок и сделаем культовое фото на брусчатке.",
        en: "The most cinematic spot in the Old City. This is where Gaidai's famous scene from 'The Diamond Arm' was filmed. We'll learn the behind-the-scenes stories and take that iconic photo on the cobblestones.",
      },
      detail: {
        ru: "Местные жители до сих пор помнят, как снимался фильм. Говорят, что сам Гайдай влюбился в эту улочку с первого взгляда.",
        en: "Locals still remember the filming. They say Gaidai himself fell in love with this street at first sight.",
      },
    },
    {
      id: "healer",
      icon: "🪷",
      eyebrow: { ru: "Легендарный целитель", en: "Legendary Healer" },
      title: { ru: "Дом Мир Мовсума Аги", en: "House of Mir Movsum Aga" },
      body: {
        ru: "Здесь жил человек, к которому за исцелением и советом приходили тысячи людей. И сегодня местные жители и гости города приходят к этому месту с особым трепетом и надеждой.",
        en: "This is where a man lived whom thousands came to for healing and guidance. Even today, locals and visitors approach this place with special reverence and hope.",
      },
      detail: {
        ru: "Говорят, что стены этого дома помнят больше молитв и надежд, чем любая мечеть в городе.",
        en: "They say the walls of this house have heard more prayers and hopes than any mosque in the city.",
      },
    },
    {
      id: "artist",
      icon: "🎨",
      eyebrow: { ru: "Современное искусство", en: "Contemporary Art" },
      title: { ru: "Мастерская Али Шамси", en: "Ali Shamsi's Workshop" },
      body: {
        ru: "Один из самых известных современных художников Азербайджана. Живое дерево с глазами, яркие полотна, лев на фасаде — здесь вас ждет встреча с атмосферой чистого творчества.",
        en: "One of Azerbaijan's most renowned contemporary artists. A living tree with eyes, vibrant canvases, a lion on the facade — here awaits an encounter with pure creativity.",
      },
      detail: {
        ru: "Али Шамси превращает старый город в галерею под открытым небом. Каждое его произведение — это диалог с историей.",
        en: "Ali Shamsi turns the old city into an open-air gallery. Each of his works is a dialogue with history.",
      },
    },
    {
      id: "caravanserai",
      icon: "🐫",
      eyebrow: { ru: "Великий шелковый путь", en: "Great Silk Road" },
      title: { ru: "Караван-сараи Мултани и Бухара", en: "Multani & Bukhara Caravanserais" },
      body: {
        ru: "Перекресток Великого шелкового пути. Почувствуем себя купцами из далекой Индии и Средней Азии, отдыхавшими здесь после долгих месяцев дороги.",
        en: "The crossroads of the Great Silk Road. We'll feel like merchants from distant India and Central Asia, resting here after long months of travel.",
      },
      detail: {
        ru: "Здесь заключались самые крупные сделки. Говорят, что в подвалах до сих пор хранятся купеческие сокровища.",
        en: "The largest deals were made here. They say merchant treasures are still stored in the basements.",
      },
    },
    {
      id: "palace",
      icon: "👑",
      eyebrow: { ru: "Обитель правителей", en: "Rulers' Abode" },
      title: { ru: "Дворец Ширваншахов", en: "Shirvanshahs' Palace" },
      body: {
        ru: "Жемчужина азербайджанской архитектуры XV века. Поговорим о быте, роскоши и правителях государства Ширваншахов.",
        en: "The pearl of 15th-century Azerbaijani architecture. We'll discuss the daily life, luxury, and rulers of the Shirvanshahs' state.",
      },
      detail: {
        ru: "Каждый камень этого дворца помнит величие и интриги. Здесь вершились судьбы целых народов.",
        en: "Every stone of this palace remembers greatness and intrigue. The fates of entire nations were decided here.",
      },
    },
    {
      id: "market",
      icon: "🛍️",
      eyebrow: { ru: "Рыночная площадь", en: "Market Square" },
      title: { ru: "Подземные тайны", en: "Underground Secrets" },
      body: {
        ru: "Сердце торговой жизни. Обсудим древние языческие святилища под землей и увидим загадочные артефакты, найденные прямо у нас под ногами.",
        en: "The heart of commercial life. We'll discuss ancient pagan sanctuaries underground and see mysterious artifacts found right beneath our feet.",
      },
      detail: {
        ru: "Под этой площадью скрыт целый город. Тоннели, святилища и тайные ходы — все это ждет своего исследователя.",
        en: "An entire city is hidden beneath this square. Tunnels, sanctuaries, and secret passages await their explorer.",
      },
    },
    {
      id: "garden",
      icon: "🌿",
      eyebrow: { ru: "Зеленый оазис", en: "Green Oasis" },
      title: { ru: "Дворец Бакинских ханов", en: "Palace of Baku Khans" },
      body: {
        ru: "Бывшая резиденция правителей Бакинского ханства. Тихий, благоухающий сад, где легко укрыться от суеты и прочувствовать восточную неспешность.",
        en: "The former residence of Baku Khanate rulers. A quiet, fragrant garden where you can easily escape the hustle and feel the unhurried rhythm of the East.",
      },
      detail: {
        ru: "Здесь время течет иначе. Говорят, что в этом саду можно услышать голоса прошлого.",
        en: "Time flows differently here. They say you can hear the voices of the past in this garden.",
      },
    },
  ],
  themes: [
    {
      title: { ru: "Восток vs Запад", en: "East vs West" },
      desc: {
        ru: "Узнаем о разнице в устройстве средневековых городов Востока и Запада и о том, как исторические события и влияния разных культур сформировали облик Ичери Шехер.",
        en: "Learn about the differences in medieval Eastern and Western city structures and how historical events and cultural influences shaped Icheri Sheher's appearance.",
      },
    },
    {
      title: { ru: "Город, оберегаемый львами", en: "City Guarded by Lions" },
      desc: {
        ru: "Почему изображение льва и быка стало главным защитным символом Баку и где в лабиринте улиц отыскать всех каменных хранителей.",
        en: "Why the lion and bull became Baku's main protective symbols and where to find all the stone guardians in the street labyrinth.",
      },
    },
    {
      title: { ru: "Философия «Чайханы»", en: 'Philosophy of "Chaykhana"' },
      desc: {
        ru: "Искусство торга на базаре, ритуалы посещения хамамов, секреты красоты восточных женщин и традиция вести долгие беседы за армуды с чаем.",
        en: "The art of bargaining at the bazaar, hammam rituals, Eastern women's beauty secrets, and the tradition of long conversations over armudu tea.",
      },
    },
  ],
  practical: {
    eyebrow: { ru: "Организационные детали", en: "Practical Details" },
    points: {
      ru: [
        "Экскурсия обзорная, не включает вход во дворец Ширваншахов и Девичью башню — но я подробно расскажу и покажу, что находится внутри",
        "Дополнительных расходов нет — цена, которую вы обговариваете, является полной",
        "Дети допускаются с 7 лет",
        "Начало экскурсии у музея литературы — точное место вы узнаете после внесения предоплаты",
      ],
      en: [
        "This is a guided walking tour — it doesn't include entry to the Shirvanshah Palace or the Maiden Tower, but I'll thoroughly explain and show what's inside",
        "No additional costs — the price you agree on is the full price",
        "Children aged 7 and up are welcome",
        "The tour starts at the Literature Museum — you'll get the exact meeting spot after your deposit is confirmed",
      ],
    },
  },
};

// --- COMPONENTS ---
function LangToggle({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 rounded-full border border-white/40 bg-white/30 backdrop-blur-xl px-4 py-1.5 text-sm font-medium tracking-wide text-[#1c2a38] hover:bg-white/50 transition-all shadow-lg"
    >
      {lang === "ru" ? "EN" : "RU"}
    </button>
  );
}

function StoryCard({
  lang,
  data,
  index,
}: {
  lang: Lang;
  data: typeof copy.sections[0];
  index: number;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="py-6 md:py-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl md:text-3xl">{data.icon}</span>
          <span className="text-xs tracking-[0.3em] uppercase text-[#8c1c2b]/50 font-sans font-medium">
            {data.eyebrow[lang]}
          </span>
          <span className="text-xs text-[#1c2a38]/15">{(index + 1).toString().padStart(2, '0')}</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#0d1a26] mb-3 tracking-tight leading-[1.2]">
          {data.title[lang]}
        </h2>

        <p className="text-base md:text-lg text-[#1c2a38]/75 leading-relaxed mb-4 font-light">
          {data.body[lang]}
        </p>

        <div className="relative pl-4 border-l-2 border-[#c6a052]/15">
          <p className="text-sm text-[#1c2a38]/45 italic leading-relaxed">
            {data.detail[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}

function ThemeCard({
  lang,
  title,
  desc,
  index,
}: {
  lang: Lang;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  index: number;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out delay-${index * 100} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="flex items-start gap-4 py-2">
        <span className="text-xl opacity-30 font-serif mt-0.5">✦</span>
        <div>
          <h4 className="font-bold text-[#1c2a38] mb-1">{title[lang]}</h4>
          <p className="text-sm text-[#1c2a38]/65 leading-relaxed">{desc[lang]}</p>
        </div>
      </div>
    </div>
  );
}

// --- MAIN PAGE ---
export default function OldCityLanding() {
  const [lang, setLang] = useState<Lang>("ru");
  
  const totalSections = copy.sections.length + 2;
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
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#8c1c2b]/40 font-sans font-medium">
              {copy.hero.subtitle[lang]}
            </p>
            <h1 className="text-4xl md:text-7xl font-bold text-[#0d1a26] tracking-tight leading-[1.05]">
              {copy.hero.title[lang]}
            </h1>
            <p className="text-base md:text-xl text-[#1c2a38]/55 font-light max-w-lg mx-auto px-2">
              {copy.hero.description[lang]}
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
        {copy.sections.map((section, i) => (
          <section
            key={i}
            ref={(el) => {
              refs.current[i + 1] = el;
            }}
            className="py-4 md:py-6"
          >
            <StoryCard lang={lang} data={section} index={i} />
            
            {i < copy.sections.length - 1 && (
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
          refs.current[copy.sections.length + 1] = el;
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
            {copy.themes.map((theme, i) => (
              <ThemeCard key={i} lang={lang} {...theme} index={i} />
            ))}
          </div>

          <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-[#c6a052]/10">
            <h3 className="text-lg md:text-xl font-bold text-[#0d1a26] mb-4 md:mb-6">
              {copy.practical.eyebrow[lang]}
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {copy.practical.points[lang].map((point, i) => (
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