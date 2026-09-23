export { IconHeritage } from "./IconHeritage";
export { IconCinema } from "./IconCinema";
export { IconHealer } from "./IconHealer";
export { IconArtist } from "./IconArtist";
export { IconCaravan } from "./IconCaravan";
export { IconPalace } from "./IconPalace";
export { IconMarket } from "./IconMarket";
export { IconGarden } from "./IconGarden";

// Карта для маппинга по имени
import { IconHeritage } from "./IconHeritage";
import { IconCinema } from "./IconCinema";
import { IconHealer } from "./IconHealer";
import { IconArtist } from "./IconArtist";
import { IconCaravan } from "./IconCaravan";
import { IconPalace } from "./IconPalace";
import { IconMarket } from "./IconMarket";
import { IconGarden } from "./IconGarden";

export const IconMap = {
    heritage: IconHeritage,
    cinema: IconCinema,
    healer: IconHealer,
    artist: IconArtist,
    caravan: IconCaravan,
    palace: IconPalace,
    market: IconMarket,
    garden: IconGarden,
} as const;

export type IconName = keyof typeof IconMap;