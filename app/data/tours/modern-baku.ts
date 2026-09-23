import { TourData } from "@/app/types";

export const modernBaku: TourData = {
  slug: "modern-baku",

  hero: {
    title: { ru: "Современный Баку", en: "Modern Baku" },
    subtitle: {
      ru: "Столица огней и стекла",
      en: "City of Lights & Glass",
    },
    description: {
      ru: "Контраст древнего и футуристичного: пламенные башни, приморский бульвар и нефтяные особняки",
      en: "The contrast of ancient and futuristic: flame towers, seaside boulevard and oil-boom mansions",
    },
    image: "/images/tours/modern-baku/hero.png",
  },

  sections: [
    {
      id: "skyline",
      icon: "palace",
      eyebrow: { ru: "Небесный горизонт", en: "Skyline" },
      title: { ru: "Пламенные башни", en: "Flame Towers" },
      body: {
        ru: "Три небоскрёба, символизирующие огонь, воду и землю. Одно из самых узнаваемых зданий мира, ставшее новым символом Баку. Вечером — миллион LED-огней, создающих эффект настоящего пламени.",
        en: "Three skyscrapers symbolizing fire, water and earth. One of the world's most recognizable buildings, the new symbol of Baku. At night — a million LED lights creating the effect of real flames.",
      },
      detail: {
        ru: "Каждый вечер на башнях зажигаются огни — и весь город замирает, чтобы посмотреть на это зрелище.",
        en: "Every evening the towers light up — and the whole city pauses to watch the spectacle.",
      },
      image: "/images/tours/modern-baku/flame-towers.jpg",
      imageAlt: {
        ru: "Пламенные башни в вечернем свете",
        en: "Flame Towers in the evening light",
      },
      imageLabel: { ru: "СОВРЕМЕННЫЙ БАКУ", en: "MODERN BAKU" },
    },
    {
      id: "boulevard",
      icon: "garden",
      eyebrow: { ru: "Приморский бульвар", en: "Seaside Boulevard" },
      title: { ru: "Бульвар на Каспии", en: "Boulevard on the Caspian" },
      body: {
        ru: "Один из самых длинных приморских бульваров мира. Пальмы, кафе, велосипедисты и солёный воздух Каспия. Идеальное место для неторопливой прогулки на закате.",
        en: "One of the longest seaside boulevards in the world. Palm trees, cafés, cyclists and the salty air of the Caspian. The perfect place for a leisurely sunset stroll.",
      },
      detail: {
        ru: "Местные жители приходят сюда в шесть вечера — смотреть закат над Каспийским морем.",
        en: "Locals come here at six in the evening — to watch the sunset over the Caspian Sea.",
      },
      image: "/images/tours/modern-baku/boulevard.jpg",
      imageAlt: {
        ru: "Приморский бульвар на закате",
        en: "Seaside boulevard at sunset",
      },
      imageLabel: { ru: "БУЛЬВАР", en: "BOULEVARD" },
    },
    {
      id: "mansions",
      icon: "palace",
      eyebrow: { ru: "Нефтяные особняки", en: "Oil-boom Mansions" },
      title: { ru: "Дома нефтяных баронов", en: "Houses of Oil Barons" },
      body: {
        ru: "В начале XX века Баку был нефтяной столицей мира. Братья Нобель, Ротшильды, Мусакхановы строили здесь дворцы в стиле неоренессанса, готики и барокко. Многие сохранились до наших дней.",
        en: "In the early 20th century, Baku was the oil capital of the world. The Nobel brothers, Rothschilds, and Musa Naghiyev built palaces here in Neo-Renaissance, Gothic, and Baroque styles. Many have survived to this day.",
      },
      detail: {
        ru: "Один из особняков — «Дом Ага Балы Гулиева» — называют «Бакинским Версалем».",
        en: "One of the mansions — the House of Aga Bala Guliyev — is called the 'Baku Versailles'.",
      },
    },
    {
      id: "night-lights",
      icon: "artist",
      eyebrow: { ru: "Ночной Баку", en: "Baku at Night" },
      title: { ru: "Город огней", en: "City of Lights" },
      body: {
        ru: "После заката Баку превращается в световую симфонию. Подсвеченные фасады, светящиеся фонтаны, огни на набережной — город становится кинематографичным.",
        en: "After sunset, Baku transforms into a symphony of light. Illuminated facades, glowing fountains, lights along the promenade — the city becomes cinematic.",
      },
      detail: {
        ru: "Ночной Баку не похож на дневной — и именно поэтому стоит вернуться.",
        en: "Baku at night doesn't look like Baku at day — that's exactly why it's worth coming back.",
      },
    },
  ],

  themes: {
    eyebrow: { ru: "О чём поговорим", en: "What We'll Discuss" },
    title: { ru: "Темы экскурсии", en: "Tour Themes" },
    items: [
      {
        title: { ru: "Нефть и архитектура", en: "Oil & Architecture" },
        desc: {
          ru: "Как бакинская нефть изменила облик города и почему в начале XX века Баку был одним из самых богатых городов мира.",
          en: "How Baku oil changed the city's appearance and why in the early 20th century Baku was one of the richest cities in the world.",
        },
      },
      {
        title: { ru: "От древности к футуризму", en: "From Ancient to Futuristic" },
        desc: {
          ru: "Как за 100 лет Баку прошёл путь от крепостных стен до стеклянных небоскрёбов и стал одним из самых современных городов Кавказа.",
          en: "How in 100 years Baku went from fortress walls to glass skyscrapers and became one of the most modern cities in the Caucasus.",
        },
      },
      {
        title: { ru: "Вечерний Баку", en: "Evening Baku" },
        desc: {
          ru: "Где смотреть лучший закат, какие огни включаются в 8 вечера и как почувствовать «душу» современного города.",
          en: "Where to see the best sunset, which lights turn on at 8 pm, and how to feel the 'soul' of the modern city.",
        },
      },
    ],
    image: "/images/tours/modern-baku/caspian.jpg",
    imageAlt: {
      ru: "Ночной вид на Баку с Каспия",
      en: "Night view of Baku from the Caspian",
    },
    imageLabel: { ru: "ОГНИ", en: "LIGHTS" },
  },

  practical: {
    eyebrow: { ru: "Организационные детали", en: "Practical Details" },
    points: {
      ru: [
        "Прогулка по бульвару, подъём к Пламенным башням и остановки у главных панорамных точек",
        "Экскурсия пешеходная, но в комфортном темпе — с остановками у кафе",
        "Дополнительных расходов нет — цена фиксированная",
        "Рекомендуем взять с собой воду и удобную обувь для прогулки по бульвару",
      ],
      en: [
        "Walk along the boulevard, ascend to the Flame Towers, and stops at the main panoramic viewpoints",
        "The tour is on foot, but at a comfortable pace — with stops at cafés",
        "No additional costs — the price is fixed",
        "We recommend bringing water and comfortable shoes for walking along the boulevard",
      ],
    },
  },

  booking: {
    certified: { ru: "Сертифицированный гид", en: "Certified Guide" },
    guideName: { ru: "Туры Raccoon по Баку", en: "Raccoon's Baku Tours" },
    guideSub: {
      ru: "Персональные и малогрупповые прогулки по городу",
      en: "Personal & small group city journeys",
    },
    durationLabel: { ru: "Длительность", en: "Duration" },
    durationValue: { ru: "~2.5 часа", en: "~2.5 Hours" },
    formatLabel: { ru: "Формат", en: "Format" },
    formatValue: { ru: "Пешком", en: "Walking" },
    languagesLabel: { ru: "Языки", en: "Languages" },
    languagesValue: { ru: "RU / EN", en: "RU / EN" },
    ctaPrimary: {
      ru: "Проверить даты в WhatsApp",
      en: "Check Available Dates on WhatsApp",
    },
    ctaSecondary: {
      ru: "Задать вопросы в Telegram",
      en: "Ask questions on Telegram",
    },
  },

  price: 50,
  duration: "~2.5 часа",
  relatedTours: ["icheri-sheher", "night-baku"],

themeColors: [
  [222, 245, 235],   // #DEF5EB - Hero: Свежая мята (утро)
  [230, 242, 235],   // #E6F2EB - Мятный перелив
  [238, 240, 232],   // #EEF0E8 - Skyline: Нейтральный шалфей
  [244, 238, 228],   // #F4EEE4 - Теплый льняной
  [248, 234, 222],   // #F8EADE - Boulevard: Мягкий песочный
  [252, 228, 218],   // #FCE4DA - Персиковый рассвет
  [252, 220, 218],   // #FCDCDA - Mansions: Нежная роза
  [248, 210, 218],   // #F8D2DA - Румяный розовый
  [242, 205, 222],   // #F2CDDE - Night: Пыльно-розовый закат
  [235, 212, 228],   // #EBD4E4 - Practical: Сумеречная орхидея
],
};