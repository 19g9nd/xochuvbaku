import { ColorStop, CopyData } from "../types";

export const colors: ColorStop[] = [
    [210, 228, 247], // #d2e4f7
    [225, 235, 245], // #e1ebf5
    [240, 235, 225], // #f0ebe1
    [245, 225, 215], // #f5e1d7
    [250, 240, 225], // #faf0e1
    [240, 230, 220], // #f0e6dc
    [235, 240, 245], // #ebf0f5
    [245, 240, 230], // #f5f0e6
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