import { ColorStop, TourData } from "@/app/types";

export const colors: ColorStop[] = [
    [228, 242, 255], // #E4F2FF - Hero: чистый, свежий небесно-голубой
    [238, 242, 248], // #EEF2F8 - переход: нейтрально-прохладный
    [255, 244, 230], // #FFF4E6 - Heritage: чистый тёплый песочный/персиковый
    [248, 242, 236], // #F8F2EC - переход: нейтрально-тёплый
    [226, 236, 248], // #E2E8F8 - Cinema: ясный прохладный серо-голубой
    [244, 240, 236], // #F4F0EC - переход: мягкий баланс
    [255, 240, 232], // #FFF0E8 - чистый тёплый персиковый
    [252, 243, 235], // #FCF3EB - переход: лёгкий кремовый
    [255, 246, 224], // #FFF6E0 - Themes: светлый, солнечный кремово-желтый
    [248, 243, 236], // #F8F3EC - Practical: свежий тёплый нейтральный
];

export const icheriSheher: TourData = {
    slug: "icheri-sheher",
    hero: {
        title: { ru: "Старый город", en: "Icheri Sheher" },
        subtitle: { ru: "Пешеходная экскурсия", en: "Walking tour" },
        description: {
            ru: "Огромный музей под открытым небом и в то же время живой город",
            en: "A vast open-air museum and a living city",
        },
        image: "/images/tours/icheri-sheher/hero.png",
    },
    sections: [
        {
            id: "history",
            icon: "heritage",
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
            icon: "cinema",
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
            icon: "healer",
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
            icon: "artist",
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
    booking: {
        certified: { ru: "Сертифицированный гид", en: "Certified Guide" },
        guideName: { ru: "Туры Raccoon по Баку", en: "Raccoon's Baku Tours" },
        guideSub: { ru: "...", en: "..." },
        durationLabel: { ru: "Длительность", en: "Duration" },
        durationValue: { ru: "~3 часа", en: "~3 Hours" },
        formatLabel: { ru: "Формат", en: "Format" },
        formatValue: { ru: "Пешком", en: "Walking" },
        languagesLabel: { ru: "Языки", en: "Languages" },
        languagesValue: { ru: "RU / EN", en: "RU / EN" },
        ctaPrimary: { ru: "Проверить даты в WhatsApp", en: "Check Available Dates on WhatsApp" },
        ctaSecondary: { ru: "Задать вопросы в Telegram", en: "Ask questions on Telegram" },
    },
    price: 60,
    duration: "~3 часа",
    relatedTours: ["modern-baku", "night-baku"],
};