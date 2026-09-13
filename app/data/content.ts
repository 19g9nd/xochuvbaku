import { ColorStop, CopyData } from "../types";

export const colors: ColorStop[] = [
  [237, 244, 254], // #EDF4FE - Hero (голубой)
  [244, 245, 246], // переход
  [250, 246, 238], // #FAF6EE - Heritage (песочный)
  [247, 246, 243], // переход
  [244, 245, 248], // #F4F5F8 - Cinema (серо-голубой)
  [247, 245, 241], // переход
  [250, 246, 238], // #FAF6EE - тёплый
  [250, 245, 235], // переход
  [250, 245, 233], // #FAF5E9 - Themes (кремовый)
  [251, 248, 242], // #FBF8F2 - Practical
];

export const content: CopyData = {
  hero: {
    title: { ru: "Старый город", en: "Icheri Sheher" },
    subtitle: {
      ru: "Пешеходная экскурсия",
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
      image: "/images/ali-shamsi.jpg",
      imageAlt: {
        ru: "Baxış: Крепостной лабиринт и Девичья башня",
        en: "View: Fortress labyrinth & Maiden Tower",
      },
      imageLabel: {
        ru: "ИЧЕРИ ШЕХЕР",
        en: "ICHERI SHEHER",
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
  ],

  themes: {
    eyebrow: {
      ru: "О чем будем говорить",
      en: "What We'll Discuss",
    },
    title: {
      ru: "Темы экскурсии",
      en: "Tour Themes",
    },
    items: [
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
    image: "/images/ali-shamsi.jpg",
    imageAlt: {
      ru: "Настоящая чайхана · Янтарный чай с пахлавой",
      en: "Authentic Chaykhana · Amber tea with baklava",
    },
    imageLabel: {
      ru: "ТРАДИЦИИ",
      en: "TRADITION",
    },
  },

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